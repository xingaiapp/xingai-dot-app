import type { Metadata } from "next";
import { apps } from "../data/apps";
import { defaultDescription, siteUrl } from "../lib/site-seo";

const storyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/story#webpage`,
  url: `${siteUrl}/story`,
  name: "XingAI Product Ecosystem",
  description:
    "How XingAI decision systems cluster: everyday apps and invest.xingai.app, lab.xingai.app, t.xingai.app.",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: {
    "@type": "ItemList",
    name: "XingAI product clusters",
    numberOfItems: apps.length,
    itemListElement: apps.map((app, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: app.name,
      url: `${siteUrl}/apps/${app.slug}`,
    })),
  },
  inLanguage: ["en", "zh", "ko"],
};

export const metadata: Metadata = {
  title: "Product ecosystem",
  description:
    "How XingAI products fit together: everyday decision systems (meal, cook, outfit, routine, SAT) and the invest cluster (invest.xingai.app, lab.xingai.app, t.xingai.app). Mobile-first, EN/中文/한국어, light/dark.",
  alternates: { canonical: `${siteUrl}/story` },
  openGraph: {
    title: "XingAI Product Ecosystem",
    description: defaultDescription,
    url: `${siteUrl}/story`,
  },
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
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
