/**
 * Rasterize Performance Sim + T Today marketing icons (1536×1024, light/dark).
 * Run: node scripts/generate-invest-product-icons.mjs
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const brandDir = path.join(__dirname, "brand");

const CANVAS = { width: 1536, height: 1024 };
const ICON_SIZE = 720;

const BG = { light: "#f8fafc", dark: "#0c0e14" };
const STROKE = { light: "#2675ff", dark: "#e8eef8" };

async function iconOnCanvas(svgBuffer, bg, strokeColor) {
  const colored = svgBuffer.toString().replaceAll("currentColor", strokeColor);
  const icon = await sharp(Buffer.from(colored)).resize(ICON_SIZE, ICON_SIZE).png().toBuffer();
  const left = Math.round((CANVAS.width - ICON_SIZE) / 2);
  const top = Math.round((CANVAS.height - ICON_SIZE) / 2);
  return sharp({
    create: {
      width: CANVAS.width,
      height: CANVAS.height,
      channels: 3,
      background: bg,
    },
  })
    .composite([{ input: icon, left, top }])
    .png()
    .toBuffer();
}

async function writePair(name, svgPath, strokeOverride) {
  const svg = readFileSync(svgPath);
  const light = await iconOnCanvas(svg, BG.light, strokeOverride?.light ?? STROKE.light);
  const dark = await iconOnCanvas(svg, BG.dark, strokeOverride?.dark ?? STROKE.dark);

  const lightPath = path.join(publicDir, `${name}-icon.png`);
  const darkPath = path.join(publicDir, `${name}-icon-dark.png`);
  const favPath = path.join(publicDir, `favicon-${name}.png`);

  await sharp(light).jpeg({ quality: 92, mozjpeg: true }).toFile(lightPath);
  await sharp(dark).jpeg({ quality: 92, mozjpeg: true }).toFile(darkPath);
  await sharp(light).resize(256, 256).png().toFile(favPath);

  console.log("wrote", lightPath, darkPath, favPath);
}

async function main() {
  await writePair("performance-sim", path.join(brandDir, "performance-sim-icon.svg"));
  await writePair("t-today", path.join(brandDir, "t-today-icon.svg"), {
    light: "#16a34a",
    dark: "#4ade80",
  });
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
