import type { Metadata } from "next";
import { apps } from "../../data/apps";
import { buildAppsCatalogGraph } from "../../lib/seo-json-ld";
import { parseRoutingLocale } from "../../lib/locale-routing";
import {
  appsCatalogDescription,
  appsOg,
  localizedOpenGraph,
  pageAlternates,
} from "../../lib/localized-seo";
import { formatPageTitle } from "../../lib/site-seo";

const APPS_PAGE_TITLE = "AI Products";
const path = "/apps";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const description = appsCatalogDescription(locale);
  const title = formatPageTitle(APPS_PAGE_TITLE);
  const og = appsOg(locale);

  return {
    title: formatPageTitle(APPS_PAGE_TITLE),
    description,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, APPS_PAGE_TITLE, description, og),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}

export default async function AppsLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const jsonLd = buildAppsCatalogGraph(apps, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
