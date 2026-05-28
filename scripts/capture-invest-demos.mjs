/**
 * Capture mobile light/dark screenshots for marketing cards (3:2 @ 1536×1024).
 * Usage: node scripts/capture-invest-demos.mjs
 * Requires: lab.xingai.app reachable; invest-t-advisor on :3001 (T_AUTH_MODE=off).
 */
import { chromium } from "playwright";
import { execSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const THEME_KEY = "investsim-theme";

/** Mobile width; height = width * 2/3 for 3:2 viewport capture. */
const VIEWPORT = { width: 390, height: 585 };
const OUT_W = 1536;
const OUT_H = 1024;

const targets = [
  {
    name: "performance-sim",
    url: "https://lab.xingai.app/",
    waitMs: 6000,
  },
  {
    name: "t-today",
    url: "http://localhost:3001/",
    waitMs: 5000,
  },
];

async function captureTheme(page, theme) {
  await page.addInitScript(
    ([key, t]) => {
      localStorage.setItem(key, t);
      document.documentElement.setAttribute("data-theme", t);
    },
    [THEME_KEY, theme],
  );
}

function exportJpeg(rawPng, outJpg) {
  execSync(
    `sips -s format jpeg -s formatOptions 92 -z ${OUT_H} ${OUT_W} "${rawPng}" --out "${outJpg}"`,
    { stdio: "inherit" },
  );
}

async function dismissOverlays(page) {
  const close = page.getByRole("button", { name: /^close$/i });
  if (await close.isVisible().catch(() => false)) {
    await close.click();
    await page.waitForTimeout(400);
  }
}

async function main() {
  mkdirSync(path.join(publicDir, ".capture-tmp"), { recursive: true });
  const browser = await chromium.launch();

  for (const target of targets) {
    for (const theme of ["light", "dark"]) {
      const context = await browser.newContext({
        viewport: VIEWPORT,
        deviceScaleFactor: 2,
        colorScheme: theme,
      });
      const page = await context.newPage();
      await captureTheme(page, theme);

      try {
        await page.goto(target.url, { waitUntil: "networkidle", timeout: 60000 });
      } catch {
        await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      }
      await page.waitForTimeout(target.waitMs);
      await dismissOverlays(page);
      await page.evaluate(() => window.scrollTo(0, 0));

      const raw = path.join(publicDir, ".capture-tmp", `${target.name}-${theme}.png`);
      const out = path.join(publicDir, `${target.name}-demo-${theme}.jpg`);
      await page.screenshot({ path: raw, type: "png" });
      exportJpeg(raw, out);
      console.log("wrote", out);
      await context.close();
    }
  }

  await browser.close();
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
