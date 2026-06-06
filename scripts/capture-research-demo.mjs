/**
 * Generate Research AI marketing demos from the app hero artwork.
 *
 * Source: ../xingai-research-ai/public/brand/hero-bg-*-visual.png
 * (same assets used in components/research-hero.tsx)
 */
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const brandDir =
  process.env.RESEARCH_BRAND_DIR ||
  path.join(__dirname, "..", "..", "xingai-research-ai", "public", "brand");

const lightSource = path.join(brandDir, "hero-bg-light-visual.png");
const darkSource = path.join(brandDir, "hero-bg-visual.png");

const OUT_W = 1536;
const OUT_H = 1024;

async function exportDemo(source, outFile) {
  await sharp(source)
    .resize(OUT_W, OUT_H, { fit: "cover", position: "centre" })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, outFile));
}

async function main() {
  if (!existsSync(lightSource)) {
    throw new Error(`Missing Research hero light visual: ${lightSource}`);
  }
  if (!existsSync(darkSource)) {
    throw new Error(`Missing Research hero dark visual: ${darkSource}`);
  }

  await exportDemo(lightSource, "research-demo-light.jpg");
  await exportDemo(darkSource, "research-demo-dark.jpg");
  console.log("wrote", path.join(publicDir, "research-demo-light.jpg"));
  console.log("wrote", path.join(publicDir, "research-demo-dark.jpg"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
