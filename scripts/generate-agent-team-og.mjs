#!/usr/bin/env node
/**
 * Generates the 1200x627 social/OG card for /agent-team.
 * Same geometry and roster as app/components/AgentTeamDiagram.tsx —
 * if the roster changes, update both (and app/data/agent-team.ts).
 * Output: public/agent-team-og.png
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const C = {
  bg: "#ffffff",
  panel: "#fafbfd",
  line: "#dfe3ec",
  ink: "#0a0c1b",
  muted: "#4a5568",
  wire: "#9aa3b5",
  blue: "#2675ff",
};

const GROUPS = [
  { name: "Research", note: "3 AGENTS · READ ONLY", accent: "#2675ff", members: [["xing-researcher", "Facts vs inference."], ["xing-invest-compliance", "Research, not advice."], ["xing-security-privacy", "Secrets and policy."]], key: "look, check, report" },
  { name: "Product", note: "3 AGENTS · READ ONLY", accent: "#8a2be2", members: [["xing-ux-expert", "Mobile, states, flow."], ["xing-i18n-a11y", "EN / ZH / KO, keyboard."], ["xing-search-visibility", "Sitemap, links."]], key: "look, check, report" },
  { name: "Growth", note: "2 AGENTS · READ ONLY", accent: "#0e9f6e", members: [["xing-growth-analytics", "Funnels, experiments."], ["xing-youtube-growth", "Topics back to sites."]], key: "look, check, report" },
  { name: "Build", note: "3 AGENTS · MAY EDIT CODE", accent: "#e2711d", members: [["xing-feature-dev", "Confirmed spec only."], ["xing-bug-lead", "Reproduce, then fix."], ["xing-perf-lead", "Measure one bottleneck."]], key: "narrow write access" },
  { name: "Release", note: "3 AGENTS · GATED", accent: "#d64570", members: [["xing-qa-lead", "Tests, no code edits."], ["xing-devops", "Git only, after OK."], ["xing-ops-monitor", "Live site vs HEAD."]], key: "human OK before production" },
];

const COL_X = [24, 258, 492, 726, 960];
const COL_W = 216;
const GROUP_Y = 164;
const GROUP_H = 330;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function diagram() {
  const parts = [];
  const drops = COL_X.map((x) => `M ${x + COL_W / 2} 140 V ${GROUP_Y}`).join(" ");
  parts.push(
    `<path d="M 600 112 V 140 M 132 140 H 1068 ${drops}" fill="none" stroke="${C.wire}" stroke-width="1.5"/>`,
  );
  parts.push(`
    <rect x="330" y="16" width="540" height="96" rx="14" fill="${C.panel}" stroke="${C.blue}" stroke-width="2"/>
    <text x="600" y="46" text-anchor="middle" font-size="11" font-weight="600" letter-spacing="2" fill="${C.muted}">DISPATCHER</text>
    <text x="600" y="78" text-anchor="middle" font-family="ui-monospace, Menlo, Consolas, monospace" font-size="26" font-weight="700" fill="${C.ink}">xing-chief</text>
    <text x="600" y="99" text-anchor="middle" font-size="12.5" fill="${C.muted}">Splits the stage. Merges P0 / P1 / P2. Does not edit code.</text>`);
  GROUPS.forEach((g, gi) => {
    const x = COL_X[gi];
    let s = `
    <rect x="${x}" y="${GROUP_Y}" width="${COL_W}" height="${GROUP_H}" rx="14" fill="${C.panel}" stroke="${C.line}" stroke-width="1.5"/>
    <rect x="${x}" y="${GROUP_Y}" width="${COL_W}" height="7" fill="${g.accent}"/>
    <text x="${x + 16}" y="${GROUP_Y + 38}" font-size="17" font-weight="700" fill="${C.ink}">${g.name}</text>
    <text x="${x + 16}" y="${GROUP_Y + 58}" font-size="10.5" font-weight="600" letter-spacing="1.2" fill="${C.muted}">${g.note}</text>
    <line x1="${x + 16}" y1="${GROUP_Y + 72}" x2="${x + COL_W - 16}" y2="${GROUP_Y + 72}" stroke="${C.line}" stroke-width="1.5"/>`;
    g.members.forEach(([name, duty], mi) => {
      const my = GROUP_Y + 104 + mi * 76;
      s += `
    <text x="${x + 16}" y="${my}" font-family="ui-monospace, Menlo, Consolas, monospace" font-size="14.5" font-weight="600" fill="${C.ink}">${esc(name)}</text>
    <text x="${x + 16}" y="${my + 21}" font-size="12.5" fill="${C.muted}">${esc(duty)}</text>`;
      if (mi < g.members.length - 1) {
        s += `<line x1="${x + 16}" y1="${my + 40}" x2="${x + COL_W - 16}" y2="${my + 40}" stroke="${C.line}" stroke-width="1"/>`;
      }
    });
    s += `
    <text x="${x + COL_W / 2}" y="${GROUP_Y + GROUP_H - 16}" text-anchor="middle" font-size="11.5" font-style="italic" fill="${C.muted}">${g.key}</text>`;
    parts.push(s);
  });
  return parts.join("\n");
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="627" viewBox="0 0 1200 627">
  <rect width="1200" height="627" fill="${C.bg}"/>
  <text x="48" y="72" font-family="Helvetica, Arial, sans-serif" font-size="42" font-weight="700" fill="${C.ink}">15 Agents</text>
  <text x="48" y="104" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="${C.muted}">One dispatcher assigns work. Fourteen specialists report back.</text>
  <text x="1152" y="72" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="600" fill="${C.blue}">xingai.app</text>
  <g transform="translate(48 122) scale(0.92)">${diagram()}</g>
</svg>`;

const out = join(root, "public", "agent-team-og.png");
await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
writeFileSync(join(root, "public", "agent-team-og.svg"), svg);
