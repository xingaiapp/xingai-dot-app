import type { Metadata } from "next";
import { getAppBySlug, apps, getLocalizedAppBySlug } from "../../../data/apps";
import { buildSoftwareApplicationNode } from "../../../lib/seo-json-ld";
import { parseRoutingLocale, publicUrl } from "../../../lib/locale-routing";
import { pageAlternates } from "../../../lib/localized-seo";
import { absoluteAsset } from "../../../lib/seo-json-ld";
import { siteUrl } from "../../../lib/site-seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = parseRoutingLocale(raw);
  const app = getLocalizedAppBySlug(slug, locale);
  if (!app) return { title: "App not found" };

  const appPath = `/apps/${app.slug}`;
  const appUrl = publicUrl(locale, appPath);
  const shot = app.screenshots[0];
  const imageUrl = shot?.src ? absoluteAsset(shot.src) : absoluteAsset("/xingai-logo.png");

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    keywords: [
      app.name,
      app.tagline,
      app.category,
      "XingAI",
      "AI decision system",
      ...app.features.slice(0, 4).map((feature) => feature.name),
    ],
    alternates: pageAlternates(locale, appPath),
    openGraph: {
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      url: appUrl,
      type: "website",
      siteName: "XingAI",
      images: [{ url: imageUrl, alt: shot?.alt ?? app.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "zh", "ko"] as const;
  return locales.flatMap((locale) => apps.map((app) => ({ locale, slug: app.slug })));
}

export default async function AppSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = parseRoutingLocale(raw);
  const app = getLocalizedAppBySlug(slug, locale);

  if (!app) return children;

  const appUrl = publicUrl(locale, `/apps/${app.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": `${siteUrl}/#org` },
      buildSoftwareApplicationNode(app, locale),
      {
        "@type": "BreadcrumbList",
        "@id": `${appUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "XingAI", item: publicUrl(locale, "/") },
          { "@type": "ListItem", position: 2, name: "Apps", item: publicUrl(locale, "/apps") },
          { "@type": "ListItem", position: 3, name: app.name, item: appUrl },
        ],
      },
    ],
  };

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
