/**
 * Capture Learn AI marketing demos from local (or LEARN_DEMO_URL).
 *
 * Learn AI ships a fixed sidebar layout (not mobile-first yet), so we capture
 * a desktop 3:2 frame and export at 1536×1024 to match other ecosystem demos.
 *
 * Usage: npm run capture:learn
 * Needs: Learn AI API :8002 + web :3002 (see xingai-learn README)
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const VIEWPORT = { width: 1280, height: 853 };
const OUT_W = 1536;
const OUT_H = 1024;
const URL = process.env.LEARN_DEMO_URL || "http://127.0.0.1:3002/";

async function exportEcosystemJpeg(rawPng, outJpg) {
  await sharp(rawPng)
    .resize(OUT_W, OUT_H, { fit: "cover", position: "northwest" })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(outJpg);
}

async function main() {
  mkdirSync(path.join(publicDir, ".capture-tmp"), { recursive: true });
  const browser = await chromium.launch();

  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 2,
      colorScheme: theme,
    });
    const page = await context.newPage();

    try {
      await page.goto(URL, { waitUntil: "networkidle", timeout: 90000 });
    } catch {
      await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 90000 });
    }

    await page.evaluate((t) => {
      const root = document.documentElement;
      if (t === "light") {
        root.classList.remove("dark");
        root.style.setProperty("--bg", "#f4f4f8");
        root.style.setProperty("--surface", "#ffffff");
        root.style.setProperty("--border", "#e4e4e7");
        root.style.setProperty("--text", "#18181b");
        root.style.setProperty("--muted", "#71717a");
        root.style.colorScheme = "light";
        root.style.background = "#f4f4f8";
        if (document.body) {
          document.body.style.background = "#f4f4f8";
          document.body.style.color = "#18181b";
        }
      } else {
        root.classList.add("dark");
        root.style.colorScheme = "dark";
      }
    }, theme);

    // Wait until dashboard stats render (not the API-error banner).
    await page.waitForSelector("text=Patterns Mastered", { timeout: 20000 });
    await page.waitForTimeout(800);

    const raw = path.join(publicDir, ".capture-tmp", `learn-ai-${theme}.png`);
    const out = path.join(publicDir, `learn-ai-demo-${theme}.jpg`);
    await page.screenshot({ path: raw, type: "png", fullPage: false });
    await exportEcosystemJpeg(raw, out);
    console.log("wrote", out);
    await context.close();
  }

  await browser.close();
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
