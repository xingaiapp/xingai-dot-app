import type { Metadata } from "next";
import { apps } from "../../../data/apps";
import { buildAppsCatalogGraph } from "../../../lib/seo-json-ld";
import { parseRoutingLocale } from "../../../lib/locale-routing";
import {
  appsCatalogDescription,
  appsOg,
  localizedOpenGraph,
  pageAlternates,
} from "../../../lib/localized-seo";
import { formatPageTitle } from "../../../lib/site-seo";

function appsPageTitle(locale: ReturnType<typeof parseRoutingLocale>) {
  if (locale === "zh") return "AI 产品";
  if (locale === "ko") return "AI 제품";
  return "AI Products";
}
const path = "/apps";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const description = appsCatalogDescription(locale);
  const pageTitle = appsPageTitle(locale);
  const title = formatPageTitle(pageTitle);
  const og = appsOg(locale);

  return {
    title,
    description,
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, pageTitle, description, og),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}

// Lives in the (catalog) route group so the catalog JSON-LD stays on /apps only.
// Product pages under /apps/[slug] publish their own SoftwareApplication graph.
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
