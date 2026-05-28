/**
 * Marketing OG images: home + apps catalog (1200×630).
 * Run: node scripts/generate-seo-og.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const W = 1200;
const H = 630;

async function thumb(file, size, left, top) {
  const buf = await sharp(path.join(publicDir, file))
    .resize(size, size, { fit: "cover" })
    .png()
    .toBuffer();
  return { input: buf, left, top };
}

async function writeJpeg(outPath, svg, composites = []) {
  let img = sharp(Buffer.from(svg));
  if (composites.length) img = img.composite(composites);
  await img.jpeg({ quality: 92, mozjpeg: true }).toFile(outPath);
  console.log("wrote", outPath);
}

async function main() {
  const homeSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eef4ff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <text x="72" y="120" font-family="system-ui,sans-serif" font-size="54" font-weight="700" fill="#0a0c14">XingAI</text>
  <text x="72" y="175" font-family="system-ui,sans-serif" font-size="26" fill="#374151">10 focused AI decision systems</text>
  <text x="72" y="220" font-family="system-ui,sans-serif" font-size="20" fill="#4b5563">Meal · Cook · Outfit · Routine · SAT · Parent · Travel</text>
  <text x="72" y="255" font-family="system-ui,sans-serif" font-size="20" fill="#4b5563">Invest AI · Performance Sim · T Today</text>
  <text x="72" y="320" font-family="system-ui,sans-serif" font-size="18" fill="#2675ff">xingai.app · mobile-first · EN / 中文 / 한국어</text>
</svg>`;

  await writeJpeg(path.join(publicDir, "home-og.jpg"), homeSvg, [
    await thumb("food-demo-light.jpg", 200, 720, 280),
    await thumb("invest-demo-light.jpg", 200, 940, 280),
  ]);

  const appsSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#f8fafc"/>
  <text x="72" y="110" font-family="system-ui,sans-serif" font-size="48" font-weight="700" fill="#0a0c14">All XingAI products</text>
  <text x="72" y="160" font-family="system-ui,sans-serif" font-size="22" fill="#4b5563">Browse demos · light/dark · 10 decision systems</text>
</svg>`;

  const iconFiles = [
    "meal-coach-icon.png",
    "cook-ai-icon.png",
    "outfit-ai-icon.png",
    "routine-ai-icon.png",
    "sat-ai-icon.svg",
    "parent-ai-icon.png",
    "travel-ai-icon.png",
    "investment-ai-icon.png",
    "performance-sim-icon.png",
    "t-today-icon.png",
  ];

  const iconComposites = [];
  const cols = 5;
  const size = 96;
  const x0 = 72;
  const y0 = 220;
  for (let i = 0; i < iconFiles.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const buf = await sharp(path.join(publicDir, iconFiles[i]))
      .resize(size, size, { fit: "cover" })
      .png()
      .toBuffer();
    iconComposites.push({
      input: buf,
      left: x0 + col * (size + 16),
      top: y0 + row * (size + 16),
    });
  }

  await writeJpeg(path.join(publicDir, "apps-og.jpg"), appsSvg, iconComposites);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
