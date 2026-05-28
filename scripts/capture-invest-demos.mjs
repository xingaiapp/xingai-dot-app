/**
 * Capture invest marketing demos to match food/cook/invest-demo style:
 * mobile 390×585 viewport → 3:2 cover crop at 1536×1024 (full-bleed UI, no phone frame).
 *
 * Usage: npm run capture:demos
 * Needs: lab.xingai.app; invest-t-advisor on :3001 (T_AUTH_MODE=off)
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const THEME_KEY = "investsim-theme";
const LOCALE_KEY = "investsim-locale";

/** Same aspect as other XingAI dot-app demos (see docs/marketing-site-standards.md). */
const VIEWPORT = { width: 390, height: 585 };
const OUT_W = 1536;
const OUT_H = 1024;

const targets = [
  {
    name: "performance-sim",
    url: "https://lab.xingai.app/",
    locale: "en",
    waitMs: 6500,
    /** Show nav tabs + main sim copy (not only header buttons). */
    scrollY: 200,
  },
  {
    name: "t-today",
    url: "http://localhost:3001/",
    locale: "zh",
    waitMs: 5000,
    /** Show 今日流程 steps + upload actions. */
    scrollY: 220,
  },
];

async function applyAppPrefs(page, theme, locale) {
  await page.addInitScript(
    ([themeKey, t, localeKey, loc]) => {
      localStorage.setItem(themeKey, t);
      document.documentElement.setAttribute("data-theme", t);
      if (localeKey && loc) {
        localStorage.setItem(localeKey, loc);
        document.documentElement.lang = loc === "zh" ? "zh-Hans" : "en";
      }
    },
    [THEME_KEY, theme, LOCALE_KEY, locale],
  );
}

async function dismissOverlays(page) {
  const close = page.getByRole("button", { name: /^close$/i });
  if (await close.isVisible().catch(() => false)) {
    await close.click();
    await page.waitForTimeout(400);
  }
}

async function prepareFrame(page, target) {
  await dismissOverlays(page);

  if (target.name === "performance-sim") {
    const strategies = page.getByRole("button", { name: /strategies/i });
    if (await strategies.isVisible().catch(() => false)) {
      await strategies.click();
      await page.waitForTimeout(500);
    } else {
      await page.mouse.wheel(0, 420);
      await page.waitForTimeout(300);
    }
  }

  await page.evaluate((y) => window.scrollTo(0, y), target.scrollY ?? 0);
  const main = page.locator("main").first();
  if (await main.count()) {
    await main.evaluate((el, y) => {
      el.scrollTop = y;
    }, target.scrollY ?? 0);
  }
  await page.waitForTimeout(350);
}

/** Full-bleed 3:2 export — matches meal/cook/invest demo JPGs. */
async function exportEcosystemJpeg(rawPng, outJpg) {
  await sharp(rawPng)
    .resize(OUT_W, OUT_H, { fit: "cover", position: "north" })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(outJpg);
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
        isMobile: true,
        hasTouch: true,
      });
      const page = await context.newPage();
      await applyAppPrefs(page, theme, target.locale);

      try {
        await page.goto(target.url, { waitUntil: "networkidle", timeout: 90000 });
      } catch {
        await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 90000 });
      }
      await page.waitForTimeout(target.waitMs);
      await prepareFrame(page, target);

      const raw = path.join(publicDir, ".capture-tmp", `${target.name}-${theme}.png`);
      const out = path.join(publicDir, `${target.name}-demo-${theme}.jpg`);
      await page.screenshot({ path: raw, type: "png", fullPage: false });
      await exportEcosystemJpeg(raw, out);
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
