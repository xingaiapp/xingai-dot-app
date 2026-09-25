import { apps } from "../data/apps";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

/** Brand vs domain: UI/copy use XingAI; URLs use xingai.app */
export const siteName = "XingAI";
export const siteDomain = "xingai.app";

export const defaultOgImage = "/home-og.jpg";
export const appsOgImage = "/apps-og.jpg";
export const storyOgImage = "/story-og.jpg";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageMeta(
  path: string,
  alt: string,
  width = 1200,
  height = 630,
) {
  const url = absoluteUrl(path);
  return {
    url,
    width,
    height,
    alt,
  };
}

export const supportedLocales = ["en", "zh", "ko"] as const;

export const productCount = apps.length;

/** Short product names for meta copy (synced with `apps.ts`). */
export function getProductShortNames(): string[] {
  return apps.map((app) => app.name.replace(/^XingAI\s+/i, ""));
}

/** "A, B, C, and D" — used in meta descriptions. */
export function formatProductCatalogOxford(): string {
  const names = getProductShortNames();
  if (names.length === 0) return "";
  if (names.length === 1) return names[0]!;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export const defaultDescription =
  "XingAI builds AI decision systems for everyday life. Flagship: the Invest AI Industry Map — public research, not a trading desk.";

export const appsPageDescription =
  "Browse XingAI live and demo tools. Flagship: Invest AI Industry Map. Catalog also covers meals, travel, SAT, and more.";

export function formatPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteName}`;
}

export const defaultKeywords = [
  "AI decision systems",
  "XingAI",
  "mobile-first AI",
  "AI meal coach",
  "AI cooking assistant",
  "AI outfit advisor",
  "AI routine planner",
  "AI SAT prep",
  "AI parent assistant",
  "AI travel planner",
  "travel.xingai.app",
  "AI Industry Map",
  "invest.xingai.app",
  "AI investment assistant",
  "Performance Sim",
  "lab.xingai.app",
  "T Today",
  "t.xingai.app",
  "paper trading simulation",
  "everyday AI",
] as const;

export const investDemoUrls = {
  performanceSim: "https://lab.xingai.app/",
  tToday: "https://t.xingai.app/",
} as const;
