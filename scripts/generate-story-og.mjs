/**
 * Story page Open Graph image (1200×630).
 * Run: node scripts/generate-story-og.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0f6ff"/>
      <stop offset="55%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#eef4ff"/>
    </linearGradient>
    <radialGradient id="glow" cx="18%" cy="12%" r="70%">
      <stop offset="0%" stop-color="rgba(38,117,255,0.16)"/>
      <stop offset="60%" stop-color="rgba(38,117,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="72" y="118" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="52" font-weight="700" fill="#0a0c14">XingAI product map</text>
  <text x="72" y="168" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="24" font-weight="500" fill="#4b5563">10 decision systems · everyday + invest cluster</text>
  <rect x="72" y="220" width="1056" height="2" fill="#d7e3f7"/>
  <text x="72" y="280" font-family="ui-monospace, Menlo, monospace" font-size="17" font-weight="600" fill="#2675ff">EVERYDAY</text>
  <text x="72" y="318" font-family="system-ui, sans-serif" font-size="20" fill="#374151">Meal · Cook · Outfit · Routine · SAT · Parent · Travel</text>
  <text x="72" y="400" font-family="ui-monospace, Menlo, monospace" font-size="17" font-weight="600" fill="#16a34a">INVEST</text>
  <text x="72" y="438" font-family="system-ui, sans-serif" font-size="20" fill="#374151">Invest AI → Performance Sim → T Today</text>
  <rect x="72" y="500" width="320" height="44" rx="22" fill="#2675ff"/>
  <text x="104" y="530" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#ffffff">xingai.app/story</text>
</svg>
`;

async function main() {
  const out = path.join(publicDir, "story-og.jpg");
  const iconSize = 112;
  const icons = [
    { file: "investment-ai-icon.png", left: 820, top: 248 },
    { file: "performance-sim-icon.png", left: 944, top: 248 },
    { file: "t-today-icon.png", left: 1068, top: 248 },
  ];

  let base = sharp(Buffer.from(svg)).jpeg({ quality: 92, mozjpeg: true });
  const composites = [];

  for (const { file, left, top } of icons) {
    const buf = await sharp(path.join(publicDir, file))
      .resize(iconSize, iconSize, { fit: "cover" })
      .png()
      .toBuffer();
    composites.push({ input: buf, left, top });
  }

  await base.composite(composites).toFile(out);
  console.log("wrote", out);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
