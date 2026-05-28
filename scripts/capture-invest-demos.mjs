/**
 * Capture mobile light/dark marketing shots (3:2 @ 1536×1024).
 * Portrait screenshot is fit inside the frame — never stretched.
 *
 * Usage: npm run capture:demos
 * Needs: lab.xingai.app; invest-t-advisor on :3001 with T_AUTH_MODE=off
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

/** iPhone-class viewport; full mobile chrome visible. */
const VIEWPORT = { width: 390, height: 844 };
const CANVAS = { width: 1536, height: 1024 };
/** Max phone size on 3:2 canvas (padding for ecosystem gradient). */
const PHONE_FIT = { maxWidth: 520, maxHeight: 900 };

const CANVAS_BG = {
  light: { r: 248, g: 250, b: 252 },
  dark: { r: 12, g: 14, b: 20 },
};

const targets = [
  {
    name: "performance-sim",
    url: "https://lab.xingai.app/",
    locale: "en",
    waitMs: 6500,
  },
  {
    name: "t-today",
    url: "http://localhost:3001/",
    locale: "zh",
    waitMs: 5000,
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

/**
 * Center-fit portrait capture on 3:2 canvas with soft radial tint (matches site cards).
 */
async function composeMarketingJpeg(rawPng, outJpg, theme) {
  const bg = CANVAS_BG[theme];
  const resized = await sharp(rawPng)
    .resize(PHONE_FIT.maxWidth, PHONE_FIT.maxHeight, {
      fit: "inside",
      withoutEnlargement: false,
    })
    .toBuffer();

  const phone = await sharp(resized).metadata();
  const left = Math.round((CANVAS.width - phone.width) / 2);
  const top = Math.round((CANVAS.height - phone.height) / 2);

  const tint =
    theme === "dark"
      ? await sharp({
          create: {
            width: CANVAS.width,
            height: CANVAS.height,
            channels: 4,
            background: { ...bg, alpha: 1 },
          },
        })
          .composite([
            {
              input: Buffer.from(
                `<svg width="${CANVAS.width}" height="${CANVAS.height}" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="g" cx="22%" cy="18%" r="75%">
                      <stop offset="0%" stop-color="rgba(77,148,255,0.14)"/>
                      <stop offset="58%" stop-color="rgba(77,148,255,0)"/>
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#g)"/>
                </svg>`,
              ),
              top: 0,
              left: 0,
            },
          ])
          .png()
          .toBuffer()
      : await sharp({
          create: {
            width: CANVAS.width,
            height: CANVAS.height,
            channels: 4,
            background: { ...bg, alpha: 1 },
          },
        })
          .composite([
            {
              input: Buffer.from(
                `<svg width="${CANVAS.width}" height="${CANVAS.height}" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="g" cx="22%" cy="18%" r="75%">
                      <stop offset="0%" stop-color="rgba(38,117,255,0.08)"/>
                      <stop offset="58%" stop-color="rgba(38,117,255,0)"/>
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#g)"/>
                </svg>`,
              ),
              top: 0,
              left: 0,
            },
          ])
          .png()
          .toBuffer();

  const shadow = await sharp({
    create: {
      width: phone.width + 48,
      height: phone.height + 48,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${phone.width + 48}" height="${phone.height + 48}" xmlns="http://www.w3.org/2000/svg">
            <rect x="18" y="18" width="${phone.width}" height="${phone.height}" rx="28"
              fill="rgba(0,0,0,${theme === "dark" ? "0.45" : "0.12"})" filter="blur(16px)"/>
          </svg>`,
        ),
        left: 0,
        top: 0,
      },
    ])
    .png()
    .toBuffer();

  await sharp(tint)
    .composite([
      { input: shadow, left: left - 24, top: top - 12 },
      { input: resized, left, top },
    ])
    .jpeg({ quality: 91, mozjpeg: true })
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
      await dismissOverlays(page);
      await page.evaluate(() => window.scrollTo(0, 0));

      const raw = path.join(publicDir, ".capture-tmp", `${target.name}-${theme}.png`);
      const out = path.join(publicDir, `${target.name}-demo-${theme}.jpg`);
      await page.screenshot({ path: raw, type: "png", fullPage: false });
      await composeMarketingJpeg(raw, out, theme);
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
