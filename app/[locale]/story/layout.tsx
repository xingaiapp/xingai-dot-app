import type { Metadata } from "next";
import { getIndexableApps } from "../../data/apps";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import {
  localizedOpenGraph,
  pageAlternates,
  storyOg,
} from "../../lib/localized-seo";
import { formatPageTitle, siteUrl } from "../../lib/site-seo";

const path = "/story";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

function storyTitle(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") return "XingAI 如何运转：一个系统，长出所有 XingAI 应用";
  if (locale === "ko") return "XingAI의 작동 방식: 하나의 시스템, 모든 XingAI 앱의 뒤에서";
  return "How XingAI Works: One System Behind Every AI App";
}

function storyDescription(locale: ReturnType<typeof parseRoutingLocale>) {
  // Keep under ~155–160 chars for SERP; title stays short via storyTitle + formatPageTitle.
  if (locale === "zh") {
    return "看 XingAI 如何把一个想法变成持续运转的 AI 决策产品：Invest、Travel、Cook 等应用怎样长出来，又如何被证据与搜索数据持续改进。";
  }
  if (locale === "ko") {
    return "XingAI가 포착한 아이디어 하나를 Invest, Travel, Cook 같은 실제 AI 의사결정 제품으로 바꾸고, 근거와 검색 데이터로 계속 개선하는 방식을 보세요.";
  }
  return "See how XingAI turns one captured idea into live AI decision products — Invest, Travel, Cook and more — and how evidence and search data keep improving them.";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const title = storyTitle(locale);
  const description = storyDescription(locale);
  const og = storyOg(locale);

  return {
    title: formatPageTitle(title),
    description,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, title, description, og),
    twitter: {
      card: "summary_large_image",
      title: formatPageTitle(title),
      description,
      images: [og.url],
    },
  };
}

export default async function StoryLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, path);
  const localizedApps = getIndexableApps(locale);
  const description = storyDescription(locale);
  const og = storyOg(locale);

  const storyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: storyTitle(locale),
    description,
    primaryImageOfPage: og.url,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: {
      "@type": "ItemList",
      numberOfItems: localizedApps.length,
      itemListElement: localizedApps.map((app, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: app.name,
        url: publicUrl(locale, `/apps/${app.slug}`),
      })),
    },
    inLanguage: locale === "zh" ? "zh-CN" : locale === "ko" ? "ko" : "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storyJsonLd) }}
      />
      {children}
    </>
  );
}
