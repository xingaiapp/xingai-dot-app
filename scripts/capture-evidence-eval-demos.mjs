/**
 * Capture Evidence Engine + Eval Registry marketing demos.
 *
 * Evidence Engine: live viewer at EVIDENCE_DEMO_URL (default :8017 — run
 * the evidence-back-end with a cached verification first).
 * Eval Registry: CLI product, so we render a terminal frame (real diff
 * output) from an inline HTML template.
 *
 * Usage: npm run capture:evidence
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const VIEWPORT = { width: 1280, height: 853 };
const OUT_W = 1536;
const OUT_H = 1024;
const ENGINE_URL = process.env.EVIDENCE_DEMO_URL || "http://127.0.0.1:8017/";

async function exportEcosystemJpeg(rawPng, outJpg) {
  await sharp(rawPng)
    .resize(OUT_W, OUT_H, { fit: "cover", position: "northwest" })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(outJpg);
}

const terminalHtml = (theme) => {
  const dark = theme === "dark";
  const bg = dark ? "#131316" : "#f4f4f6";
  const frame = dark ? "#1c1c21" : "#ffffff";
  const border = dark ? "#2e2e34" : "#e2e2e6";
  const fg = dark ? "#ececf0" : "#1a1a1e";
  const muted = dark ? "#9a9aa2" : "#66666e";
  const green = dark ? "#57ab5a" : "#1a7f37";
  const red = dark ? "#e5534b" : "#c93c37";
  const accent = dark ? "#818cf8" : "#4f46e5";
  return `<!doctype html><html><body style="margin:0;background:${bg};display:flex;align-items:center;justify-content:center;height:100vh;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">
  <div style="width:1080px;background:${frame};border:1px solid ${border};border-radius:14px;box-shadow:0 20px 50px rgba(0,0,0,.18);overflow:hidden;">
    <div style="display:flex;gap:7px;padding:13px 16px;border-bottom:1px solid ${border};">
      <span style="width:12px;height:12px;border-radius:50%;background:#ff5f57;"></span>
      <span style="width:12px;height:12px;border-radius:50%;background:#febc2e;"></span>
      <span style="width:12px;height:12px;border-radius:50%;background:#28c840;"></span>
      <span style="margin-left:10px;color:${muted};font-size:13px;">xingai-eval-registry</span>
    </div>
    <pre style="margin:0;padding:22px 26px;font-size:14.5px;line-height:1.65;color:${fg};"><span style="color:${muted};">$</span> <span style="color:${accent};">eval-registry</span> diff run-baseline run-llm <span style="color:${muted};">--fail-on-regression</span>
{
  "old": "radar-2026-07-26-baseline",
  "new": "radar-2026-07-26-llm",
  "metrics": {
    "citation_coverage":      { "old": 0.786, "new": 0.800, "delta": <span style="color:${green};">+0.014</span> },
    "supported":              { "old": 0,     "new": 6,     "delta": <span style="color:${green};">+6</span> },
    "partial":                { "old": 0,     "new": 3,     "delta": <span style="color:${green};">+3</span> },
    "not_supported":          { "old": 0,     "new": 1,     "delta": <span style="color:${red};">+1</span> },
    "unsupported_claim_rate": { "old": 0.214, "new": 0.300, "delta": <span style="color:${red};">+0.086</span> },
    "sources_reachable":      { "old": 11,    "new": 11,    "delta": 0 }
  },
  "regressions": [<span style="color:${red};">"not_supported", "unsupported_claim_rate"</span>]
}
<span style="color:${red};">REGRESSION: not_supported, unsupported_claim_rate</span>
<span style="color:${muted};">exit code 1 — CI gate holds. Records are Every-Eval-Ever-shaped JSON.</span>

<span style="color:${muted};">$</span> <span style="color:${accent};">eval-registry</span> list
radar-2026-07-26-baseline
radar-2026-07-26-llm</pre>
  </div></body></html>`;
};

async function capture(page, url, outBase, theme) {
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  }
  await page.waitForTimeout(600);
  const tmp = path.join(publicDir, ".capture-tmp", `${outBase}-${theme}.png`);
  await page.screenshot({ path: tmp });
  await exportEcosystemJpeg(tmp, path.join(publicDir, `${outBase}-${theme}.jpg`));
  console.log(`captured ${outBase}-${theme}.jpg`);
}

async function main() {
  mkdirSync(path.join(publicDir, ".capture-tmp"), { recursive: true });
  // channel: "chrome" drives the installed Google Chrome — the pinned
  // Playwright chromium build no longer supports this macOS version.
  const browser = await chromium.launch({ channel: "chrome" });
  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 2,
      colorScheme: theme,
    });
    const page = await context.newPage();
    await capture(page, ENGINE_URL, "evidence-engine-demo", theme);

    const termPath = path.join(os.tmpdir(), `eval-registry-${theme}.html`);
    writeFileSync(termPath, terminalHtml(theme));
    await capture(page, "file://" + termPath, "eval-registry-demo", theme);
    await context.close();
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
