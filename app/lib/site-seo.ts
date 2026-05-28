import { apps } from "../data/apps";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const siteName = "XingAI";

export const supportedLocales = ["en", "zh", "ko"] as const;

export const defaultDescription =
  "XingAI builds focused AI decision systems for everyday life — meal coaching, cooking, style, routines, SAT prep, travel, investing, Performance Sim (lab.xingai.app), and T Today (t.xingai.app). Mobile-first, light/dark themes, EN/中文/한국어.";

export const defaultKeywords = [
  "AI decision systems",
  "XingAI",
  "mobile-first AI",
  "AI meal coach",
  "AI cooking assistant",
  "AI outfit advisor",
  "AI routine planner",
  "AI SAT prep",
  "AI investment assistant",
  "Performance Sim",
  "lab.xingai.app",
  "T Today",
  "t.xingai.app",
  "paper trading simulation",
  "everyday AI",
] as const;

export const productCount = apps.length;

export const investDemoUrls = {
  performanceSim: "https://lab.xingai.app/",
  tToday: "https://t.xingai.app/",
} as const;
