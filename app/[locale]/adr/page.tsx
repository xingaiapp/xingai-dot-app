import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdrIndexHtml } from "../../lib/adr";

/**
 * ADR index (/adr) — internal file cabinet, published per ADR-0017.
 * English only, no nav/footer/sitemap links, noindex. Do not add to sitemap.
 */

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const dynamicParams = false;

const TITLE = "Architecture Decision Records · XingAI";
const DESCRIPTION =
  "Architecture decision records for the XingAI websites — what changed, why, and who decided. Internal reference.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") notFound();
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/adr" },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

export default async function AdrIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  const html = getAdrIndexHtml();
  return (
    <main className="wrap">
      <div className="adr-doc" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
