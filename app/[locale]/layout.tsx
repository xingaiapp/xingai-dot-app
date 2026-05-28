import type { Metadata } from "next";
import { apps } from "../data/apps";
import { buildSiteGraph } from "../lib/seo-json-ld";
import { parseRoutingLocale, publicUrl, routingLocales } from "../lib/locale-routing";
import {
  homeDescription,
  homeOg,
  homeTitle,
  localizedOpenGraph,
  pageAlternates,
} from "../lib/localized-seo";
import { defaultKeywords } from "../lib/site-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";
import LocaleProviders from "../components/LocaleProviders";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const title = homeTitle(locale);
  const description = homeDescription(locale);
  const path = "/";
  const og = homeOg(locale);

  return {
    title: { absolute: title },
    description,
    keywords: [...defaultKeywords],
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, "XingAI", description, og),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const pageUrl = publicUrl(locale, "/");
  const jsonLd = buildSiteGraph(apps, locale, pageUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocaleProviders locale={locale}>
        <Header />
        <div className="page-wrap">{children}</div>
        <Footer />
        <MobileBottomNav />
      </LocaleProviders>
    </>
  );
}
