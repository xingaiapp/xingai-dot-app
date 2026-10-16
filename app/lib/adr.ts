import { readFileSync, readdirSync } from "fs";
import path from "path";

/**
 * ADR (Architecture Decision Records) publishing.
 *
 * Source of truth lives in ~/workspace/architecture/adr/ (workspace); a copy is
 * synced into this repo at content/adr/ and rendered verbatim at /adr and
 * /adr/<slug>. The pages are an internal file cabinet: no nav/footer/sitemap
 * links and robots noindex (see ADR-0017). Keep the markdown renderer small —
 * it only supports the subset the ADR files actually use (headings,
 * paragraphs, bold, links, flat/nested lists, tables).
 */

const ADR_DIR = path.join(process.cwd(), "content", "adr");
const ADR_FILE_RE = /^ADR-(\d{4})-.+\.md$/;

export type AdrEntry = {
  number: string; // "0017"
  file: string; // "ADR-0017-main-adr-records-published.md"
  slug: string; // "adr-0017-main-adr-records-published"
};

export function listAdrs(): AdrEntry[] {
  return readdirSync(ADR_DIR)
    .filter((file) => ADR_FILE_RE.test(file))
    .sort()
    .map((file) => ({
      number: ADR_FILE_RE.exec(file)![1],
      file,
      slug: file.replace(/\.md$/, "").toLowerCase(),
    }));
}

function slugForNumber(number: string): string | undefined {
  return listAdrs().find((entry) => entry.number === number)?.slug;
}

export function getAdrBySlug(
  slug: string,
): { entry: AdrEntry; title: string; html: string } | null {
  const entry = listAdrs().find((item) => item.slug === slug);
  if (!entry) return null;
  const md = readFileSync(path.join(ADR_DIR, entry.file), "utf8");
  const title = /^#\s+(.+)$/m.exec(md)?.[1]?.trim() ?? `ADR-${entry.number}`;
  return { entry, title, html: renderMarkdown(md, entry.number) };
}

export function getAdrIndexHtml(): string {
  const md = readFileSync(path.join(ADR_DIR, "INDEX.md"), "utf8");
  return renderMarkdown(md, null);
}

/* ---------------- markdown: inline ---------------- */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Inline rendering. ADR cross-references (bare "ADR-0012" mentions) are
 * linkified to the corresponding /adr page; links to ADR .md files resolve to
 * their /adr page; links to unpublished .md files (README/template) degrade
 * to plain text so no dead links ship. `selfNumber` is skipped when linkifying
 * so a page does not link to itself.
 */
function renderInline(raw: string, selfNumber: string | null): string {
  let text = escapeHtml(raw);

  // Stash links first so later passes never touch their hrefs.
  const stashed: string[] = [];
  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, href: string) => {
    const inner = renderEmphasis(label);
    let html: string;
    if (/\.md($|#)/.test(href)) {
      const base = href.split("/").pop()!.replace(/\.md($|#.*)/, "");
      const adrMatch = /^ADR-(\d{4})-/i.exec(base);
      const target = adrMatch ? slugForNumber(adrMatch[1]) : undefined;
      html = target ? `<a href="/adr/${target}">${inner}</a>` : inner;
    } else {
      html = `<a href="${href}">${inner}</a>`;
    }
    stashed.push(html);
    return `\u0001${stashed.length - 1}\u0002`;
  });

  text = renderEmphasis(text);

  // Linkify bare ADR-XXXX mentions.
  text = text.replace(/ADR-(\d{4})/g, (match, num: string) => {
    if (num === selfNumber) return match;
    const target = slugForNumber(num);
    return target ? `<a href="/adr/${target}">${match}</a>` : match;
  });

  return text.replace(/\u0001(\d+)\u0002/g, (_m, i: string) => stashed[Number(i)]);
}

function renderEmphasis(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
}

/* ---------------- markdown: blocks ---------------- */

type ListItem = { indent: number; ordered: boolean; text: string };

function renderList(items: ListItem[], selfNumber: string | null): string {
  // Build nested lists from indentation levels.
  const root: { ordered: boolean; children: (string | object)[] }[] = [];
  type Node = { ordered: boolean; items: { text: string; children: Node | null }[] };
  const makeNode = (ordered: boolean): Node => ({ ordered, items: [] });
  const levels: { indent: number; node: Node }[] = [];
  let rootNode: Node | null = null;

  for (const item of items) {
    while (levels.length && item.indent < levels[levels.length - 1].indent) levels.pop();
    if (!levels.length || item.indent > levels[levels.length - 1].indent) {
      const node = makeNode(item.ordered);
      if (!levels.length) {
        rootNode = node;
        root.push(node as never);
      } else {
        const parent = levels[levels.length - 1].node;
        parent.items[parent.items.length - 1].children = node;
      }
      levels.push({ indent: item.indent, node });
    }
    levels[levels.length - 1].node.items.push({ text: item.text, children: null });
  }

  const renderNode = (node: Node): string => {
    const tag = node.ordered ? "ol" : "ul";
    const inner = node.items
      .map(
        (item) =>
          `<li>${renderInline(item.text, selfNumber)}${
            item.children ? renderNode(item.children) : ""
          }</li>`,
      )
      .join("");
    return `<${tag}>${inner}</${tag}>`;
  };

  return rootNode ? renderNode(rootNode) : "";
}

export function renderMarkdown(md: string, selfNumber: string | null): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;

  const isTableRow = (line: string) => /^\s*\|.*\|\s*$/.test(line);
  const isTableSep = (line: string) => /^\s*\|[\s:|-]+\|\s*$/.test(line);
  const splitRow = (line: string) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      out.push(`<h${level}>${renderInline(heading[2].trim(), selfNumber)}</h${level}>`);
      i++;
      continue;
    }

    if (isTableRow(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      const thead = `<thead><tr>${header
        .map((cell) => `<th>${renderInline(cell, selfNumber)}</th>`)
        .join("")}</tr></thead>`;
      const tbody = `<tbody>${rows
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${renderInline(cell, selfNumber)}</td>`).join("")}</tr>`,
        )
        .join("")}</tbody>`;
      out.push(`<div class="adr-table-wrap"><table>${thead}${tbody}</table></div>`);
      continue;
    }

    if (/^\s*(-|\d+\.)\s+/.test(line)) {
      const items: ListItem[] = [];
      while (i < lines.length && /^\s*(-|\d+\.)\s+/.test(lines[i])) {
        const m = /^(\s*)(-|\d+\.)\s+(.*)$/.exec(lines[i])!;
        items.push({
          indent: m[1].replace(/\t/g, "  ").length,
          ordered: m[2] !== "-",
          text: m[3],
        });
        i++;
      }
      out.push(renderList(items, selfNumber));
      continue;
    }

    // Paragraph: consecutive plain lines.
    const para: string[] = [line.trim()];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !isTableRow(lines[i]) &&
      !/^\s*(-|\d+\.)\s+/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    out.push(`<p>${renderInline(para.join(" "), selfNumber)}</p>`);
  }

  return out.join("\n");
}
