import { apps } from "../data/apps";
import { buildSiteGraph } from "../lib/seo-json-ld";
import { parseRoutingLocale, publicUrl } from "../lib/locale-routing";
import HomePage from "./home-page";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
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
      <HomePage />
    </>
  );
}
