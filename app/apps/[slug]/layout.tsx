import type { Metadata } from "next";
import { getAppBySlug, apps } from "../../data/apps";

type Props = { params: Promise<{ slug: string }> };

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "App not found" };

  const appUrl = `${siteUrl}/apps/${app.slug}`;
  const imageUrl = app.screenshots[0]?.src
    ? new URL(app.screenshots[0].src, siteUrl).toString()
    : `${siteUrl}/xingai-logo.png`;

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    keywords: [
      app.name,
      app.tagline,
      app.category,
      "XingAI",
      "AI decision system",
      "AI product",
      ...app.features.slice(0, 4).map((feature) => feature.name),
    ],
    alternates: { canonical: appUrl },
    openGraph: {
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      url: appUrl,
      type: "website",
      siteName: "XingAI",
      images: [{ url: imageUrl, alt: app.screenshots[0]?.alt ?? app.name }],
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
  return apps.map((app) => ({ slug: app.slug }));
}

export default async function AppSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) return children;

  const appUrl = `${siteUrl}/apps/${app.slug}`;
  const imageUrl = app.screenshots[0]?.src
    ? new URL(app.screenshots[0].src, siteUrl).toString()
    : `${siteUrl}/xingai-logo.png`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${appUrl}#software`,
        name: app.name,
        applicationCategory: app.category,
        operatingSystem: "Web",
        url: appUrl,
        description: app.description,
        image: imageUrl,
        publisher: { "@id": `${siteUrl}/#org` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: app.comingSoon
            ? "https://schema.org/PreOrder"
            : "https://schema.org/InStock",
          url: app.demoUrl ?? appUrl,
        },
        featureList: app.features.map((feature) => feature.name),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${appUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "XingAI",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Apps",
            item: `${siteUrl}/apps`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: app.name,
            item: appUrl,
          },
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
