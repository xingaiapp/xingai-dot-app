import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdrBySlug, listAdrs } from "../../../lib/adr";

/**
 * Single ADR page (/adr/<slug>) — internal file cabinet, published per
 * ADR-0017. English only, no nav/footer/sitemap links, noindex.
 */

export function generateStaticParams() {
  // Do not gate on the parent locale param here (it is not reliably passed to
  // nested generateStaticParams); the page component guards non-en locales to
  // a 404, so only the en variants ever render content.
  return listAdrs().map((entry) => ({ slug: entry.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en") notFound();
  const adr = getAdrBySlug(slug);
  if (!adr) notFound();
  return {
    title: `${adr.title} · XingAI ADR`,
    description: `Architecture decision record ADR-${adr.entry.number} for the XingAI websites. Internal reference.`,
    alternates: { canonical: `/adr/${slug}` },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

export default async function AdrDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "en") notFound();
  const adr = getAdrBySlug(slug);
  if (!adr) notFound();
  return (
    <main className="wrap">
      <p className="adr-back">
        <Link href="/adr">← ADR 總索引</Link>
      </p>
      <div className="adr-doc" dangerouslySetInnerHTML={{ __html: adr.html }} />
    </main>
  );
}
