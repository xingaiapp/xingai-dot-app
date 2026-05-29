import type { Metadata } from "next";
import { getLocalizedApps } from "../../data/apps";
import { parseRoutingLocale, publicUrl } from "../../lib/locale-routing";
import {
  appsCatalogDescription,
  localizedOpenGraph,
  pageAlternates,
  storyOg,
} from "../../lib/localized-seo";
import { formatPageTitle, siteUrl } from "../../lib/site-seo";

const path = "/story";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

function storyTitle(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") return "产品生态";
  if (locale === "ko") return "제품 생태계";
  return "Product ecosystem";
}

function storyDescription(locale: ReturnType<typeof parseRoutingLocale>) {
  const base = appsCatalogDescription(locale);
  if (locale === "zh") {
    return `${base} 了解日常工具与 Invest AI、Performance Sim、T Today 如何协同。`;
  }
  if (locale === "ko") {
    return `${base} 일상 도구와 Invest AI, Performance Sim, T Today가 어떻게 맞물리는지 살펴보세요.`;
  }
  return `How XingAI products fit together: everyday tools plus Invest AI, Performance Sim, and T Today. ${base}`;
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
  const localizedApps = getLocalizedApps(locale);
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
