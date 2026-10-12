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
  if (locale === "zh") return "XingAI 如何运转";
  if (locale === "ko") return "XingAI의 작동 방식";
  return "How XingAI works";
}

function storyDescription(locale: ReturnType<typeof parseRoutingLocale>) {
  // Keep under ~155–160 chars for SERP; title stays short via storyTitle + formatPageTitle.
  if (locale === "zh") {
    return "XingAI 如何把想法变成持续运转的 AI 产品：点子库、应用与证据工具，以及投资研究地图。";
  }
  if (locale === "ko") {
    return "XingAI가 아이디어를 계속 운영되는 AI 제품으로 바꾸는 방식 — 아이디어 볼트, 앱, 근거 도구, 투자 리서치 맵.";
  }
  return "How XingAI turns ideas into running AI products — memory, apps, evidence tools, and the Invest research map.";
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
