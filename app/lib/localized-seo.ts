import type { Locale } from "../i18n/translations";
import type { Metadata } from "next";
import { buildHreflangAlternates, openGraphLocale, publicUrl } from "./locale-routing";
import { formatPageTitle, ogImageMeta, defaultOgImage, appsOgImage, storyOgImage, siteName } from "./site-seo";

export function homeDescription(locale: Locale): string {
  if (locale === "zh") {
    return "XingAI 做面向日常的 AI 决策系统。旗舰是 Invest AI 产业地图：公开研究，不是交易台。";
  }
  if (locale === "ko") {
    return "XingAI는 일상을 위한 AI 의사결정 시스템입니다. 플래그십은 Invest AI 산업 지도 — 공개 리서치이며 매매 창구가 아닙니다.";
  }
  return "XingAI builds AI decision systems for everyday life. Flagship: the Invest AI Industry Map — public research, not a trading desk.";
}

export function appsCatalogDescription(locale: Locale): string {
  if (locale === "zh") {
    return "浏览 XingAI 已上线与 Demo 工具。旗舰是 Invest AI 产业地图。完整目录含饮食、旅行、SAT 等。";
  }
  if (locale === "ko") {
    return "XingAI 라이브·데모 도구를 둘러보세요. 플래그십은 Invest AI 산업 지도입니다. 식단, 여행, SAT 등이 카탈로그에 있습니다.";
  }
  return "Browse XingAI live and demo tools. Flagship: Invest AI Industry Map. Catalog also covers meals, travel, SAT, and more.";
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
      ? "XingAI — AI 决策系统，旗舰为 Invest AI 产业地图"
      : locale === "ko"
        ? "XingAI — AI 의사결정 시스템, 플래그십은 Invest AI 산업 지도"
        : "XingAI — AI decision systems; flagship Invest AI Industry Map";
  return ogImageMeta(defaultOgImage, alt);
}

export function appsOg(locale: Locale) {
  const alt =
    locale === "zh"
      ? "XingAI 产品目录 — 饮食、旅行、Invest AI 地图等"
      : locale === "ko"
        ? "XingAI 제품 목록 — 식단, 여행, Invest AI 지도 등"
        : "XingAI catalog — meal, travel, Invest AI map, and more";
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
  const ogTitle =
    title === siteName || title.startsWith(`${siteName} `) || title.includes(`| ${siteName}`)
      ? title
      : formatPageTitle(title);
  return {
    title: ogTitle,
    description,
    url: publicUrl(locale, path),
    siteName: "XingAI",
    locale: openGraphLocale(locale),
    images: [image],
  };
}
