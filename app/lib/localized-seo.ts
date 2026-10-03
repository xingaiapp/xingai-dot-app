import type { Locale } from "../i18n/translations";
import type { Metadata } from "next";
import { buildHreflangAlternates, openGraphLocale, publicUrl } from "./locale-routing";
import { formatPageTitle, ogImageMeta, defaultOgImage, appsOgImage, storyOgImage, siteName } from "./site-seo";

export function homeDescription(locale: Locale): string {
  if (locale === "zh") {
    return "XingAI 打造 AI 决策系统：先研究、再质疑、摆出依据，最后由你决定。免费试用 AI 产业地图，以及旅行、做饭、穿搭 AI。";
  }
  if (locale === "ko") {
    return "XingAI는 리서치하고, 반론하고, 근거를 보여 준 뒤 결정은 당신에게 맡기는 AI 의사결정 시스템입니다. AI 산업 지도와 여행·요리·옷차림 AI를 무료로 써 보세요.";
  }
  return "XingAI builds AI decision systems that research, challenge and show the evidence — then you decide. Try the AI Industry Map, Travel, Cook and Wear AI free.";
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
      ? "XingAI 如何运转 — 把想法变成持续运转的 AI 产品"
      : locale === "ko"
        ? "XingAI의 작동 방식 — 아이디어를 계속 운영되는 AI 제품으로"
        : "How XingAI works — turning ideas into continuously operating AI products";
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

export type LocalizedPageCopy = Record<Locale, { title: string; description: string }>;

/**
 * Metadata for a page under /[locale]: localized title and description, a
 * self-referencing canonical, and hreflang alternates for every locale.
 */
export function localizedPageMetadata(
  locale: Locale,
  path: string,
  copy: LocalizedPageCopy,
): Metadata {
  const { title, description } = copy[locale];
  const og = ogImageMeta(defaultOgImage, title);
  return {
    title: formatPageTitle(title),
    description,
    alternates: pageAlternates(locale, path),
    openGraph: { ...localizedOpenGraph(locale, path, title, description, og), type: "website" },
    twitter: {
      card: "summary_large_image",
      title: formatPageTitle(title),
      description,
      images: [og.url],
    },
  };
}
