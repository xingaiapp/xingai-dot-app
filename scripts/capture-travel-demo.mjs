/**
 * Generate XingAI Travel AI demo images from the Travel app hero artwork.
 *
 * Source: ../xingai-travel-ai/public/assets/hero-travel-decision.webp
 */
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const source =
  process.env.TRAVEL_HERO_IMAGE ||
  path.join(__dirname, "..", "..", "xingai-travel-ai", "public", "assets", "hero-travel-decision.webp");

const OUT_W = 1536;
const OUT_H = 1024;

async function makeLight() {
  await sharp(source)
    .resize(OUT_W, OUT_H, { fit: "cover", position: "center" })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, "travel-demo-light.jpg"));
}

async function makeDark() {
  await sharp(source)
    .resize(OUT_W, OUT_H, { fit: "cover", position: "center" })
    .modulate({ brightness: 0.72, saturation: 0.9 })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${OUT_W}" height="${OUT_H}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#06111f" stop-opacity="0.48"/>
                <stop offset="0.52" stop-color="#0f2744" stop-opacity="0.18"/>
                <stop offset="1" stop-color="#020617" stop-opacity="0.56"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
          </svg>`,
        ),
        blend: "multiply",
      },
    ])
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(publicDir, "travel-demo-dark.jpg"));
}

async function main() {
  if (!existsSync(source)) {
    throw new Error(`Missing Travel hero image: ${source}`);
  }

  await makeLight();
  await makeDark();
  console.log("wrote", path.join(publicDir, "travel-demo-light.jpg"));
  console.log("wrote", path.join(publicDir, "travel-demo-dark.jpg"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
