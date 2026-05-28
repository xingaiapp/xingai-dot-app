import { getLocalizedApps, type AppData } from "../data/apps";
import type { Locale } from "../i18n/translations";
import type { Metadata } from "next";
import { buildHreflangAlternates, openGraphLocale, publicUrl } from "./locale-routing";
import { formatPageTitle, ogImageMeta, defaultOgImage, appsOgImage, storyOgImage } from "./site-seo";

function shortNames(apps: AppData[]): string[] {
  return apps.map((app) => app.name.replace(/^XingAI\s+/i, ""));
}

function oxford(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0]!;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export function homeDescription(locale: Locale): string {
  const apps = getLocalizedApps(locale);
  const count = apps.length;
  const catalog = oxford(shortNames(apps));
  if (locale === "zh") {
    return `XingAI 提供 ${count} 套专注日常的 AI 决策系统：${catalog}。移动优先，浅色/深色主题，EN/中文/한국어。`;
  }
  if (locale === "ko") {
    return `XingAI는 일상을 위한 ${count}개의 AI 의사결정 시스템을 제공합니다: ${catalog}. 모바일 우선 · EN/中文/한국어 · 라이트/다크.`;
  }
  return `XingAI builds ${count} focused AI decision systems for everyday life: ${catalog}. Mobile-first, light/dark themes, EN/中文/한국어.`;
}

export function appsCatalogDescription(locale: Locale): string {
  const apps = getLocalizedApps(locale);
  const catalog = oxford(shortNames(apps));
  if (locale === "zh") {
    return `浏览全部 ${apps.length} 款 XingAI 决策系统：${catalog}。移动优先 · EN/中文/한국어 · 浅色/深色。`;
  }
  if (locale === "ko") {
    return `XingAI 의사결정 시스템 ${apps.length}종: ${catalog}. 모바일 우선 · EN/中文/한국어 · 라이트/다크.`;
  }
  return `Browse all ${apps.length} XingAI decision systems: ${catalog}. Mobile-first · EN/中文/한국어 · light/dark.`;
}

export function homeTitle(locale: Locale): string {
  if (locale === "zh") return "XingAI — 面向日常生活的 AI 决策系统";
  if (locale === "ko") return "XingAI — 일상을 위한 AI 의사결정 시스템";
  return "XingAI — AI Decision Systems for Everyday Life";
}

export function pageAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: publicUrl(locale, path),
    languages: buildHreflangAlternates(path),
  };
}

export function homeOg(locale: Locale) {
  const alt =
    locale === "zh"
      ? "XingAI — 10 款 AI 决策系统"
      : locale === "ko"
        ? "XingAI — 10가지 AI 의사결정 시스템"
        : "XingAI — 10 AI decision systems for everyday life";
  return ogImageMeta(defaultOgImage, alt);
}

export function appsOg(locale: Locale) {
  const alt =
    locale === "zh"
      ? "XingAI 全部产品 — 饮食、投资、Performance Sim、T Today 等"
      : locale === "ko"
        ? "XingAI 전체 제품 — 식단, 투자, Performance Sim, T Today 등"
        : "All XingAI AI products — meal, cook, invest, Performance Sim, T Today, and more";
  return ogImageMeta(appsOgImage, alt);
}

export function storyOg(locale: Locale) {
  const alt =
    locale === "zh"
      ? "XingAI 产品生态 — 日常与投资决策系统"
      : locale === "ko"
        ? "XingAI 제품 생태계 — 일상 및 투자 의사결정"
        : "XingAI product ecosystem — everyday and invest decision systems";
  return ogImageMeta(storyOgImage, alt);
}

export function localizedOpenGraph(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  image: ReturnType<typeof ogImageMeta>,
): Metadata["openGraph"] {
  return {
    title: formatPageTitle(title),
    description,
    url: publicUrl(locale, path),
    siteName: "XingAI",
    locale: openGraphLocale(locale),
    images: [image],
  };
}
