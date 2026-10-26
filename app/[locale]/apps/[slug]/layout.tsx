import type { Metadata } from "next";
import { apps, getLocalizedAppBySlug, isIndexableApp, type AppData } from "../../../data/apps";
import { buildSoftwareApplicationNode, absoluteAsset } from "../../../lib/seo-json-ld";
import { openGraphLocale, parseRoutingLocale, publicUrl } from "../../../lib/locale-routing";
import { pageAlternates } from "../../../lib/localized-seo";
import { siteUrl } from "../../../lib/site-seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

function ogImageForApp(app: AppData): { url: string; alt: string } {
  const shot = app.screenshots[0];
  const path = shot?.srcDark ?? shot?.src;
  return {
    url: path ? absoluteAsset(path) : absoluteAsset("/xingai-logo.png"),
    alt: shot?.alt ?? app.name,
  };
}

function buildAppFaq(app: AppData, appUrl: string, locale: "en" | "zh" | "ko") {
  if (app.comingSoon) {
    return {
      "@type": "FAQPage",
      "@id": `${appUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `What is ${app.name}?`,
          acceptedAnswer: { "@type": "Answer", text: app.description },
        },
        {
          "@type": "Question",
          name: `Is ${app.name} available now?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not yet. It is on the public roadmap as Coming soon. Request early access via the contact form on xingai.app.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get early access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use https://xingai.app/contact with the Early access request topic. We share direction early for collaboration.",
          },
        },
      ],
    };
  }

  if (app.slug === "travel-ai") {
    return {
      "@type": "FAQPage",
      "@id": `${appUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How is XingAI Travel AI different from booking sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking sites help you buy travel inventory. XingAI Travel AI helps you decide where to go first by comparing destinations against your constraints, then opens partner search links.",
          },
        },
        {
          "@type": "Question",
          name: "Do affiliate links affect recommendations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Destination winners, rankings, confidence, and trade-off explanations are based on trip fit. Affiliate links may appear after the decision.",
          },
        },
        {
          "@type": "Question",
          name: "Should I verify the plan before booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Always verify live prices, entry rules, safety conditions, cancellation policies, and availability before booking.",
          },
        },
      ],
    };
  }

  // Generic branch only: questions localized, because the answers
  // (description / bestFor / canDo) are localized app data. The comingSoon
  // and travel-ai branches keep English Q&A: their answers are hardcoded
  // English strings, and a localized question over an English answer would
  // be a mixed-language pair.
  const genericQuestions: Record<"en" | "zh" | "ko", [string, string, string]> = {
    en: [`What is ${app.name}?`, `Who is ${app.name} best for?`, `What can ${app.name} do?`],
    zh: [`${app.name}是什么？`, `${app.name}最适合谁？`, `${app.name}能做什么？`],
    ko: [`${app.name}은(는) 무엇인가요?`, `${app.name}은(는) 누구에게 가장 적합한가요?`, `${app.name}은(는) 무엇을 할 수 있나요?`],
  };
  const [qWhat, qWho, qDo] = genericQuestions[locale];
  return {
    "@type": "FAQPage",
    "@id": `${appUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: qWhat,
        acceptedAnswer: { "@type": "Answer", text: app.description },
      },
      {
        "@type": "Question",
        name: qWho,
        acceptedAnswer: { "@type": "Answer", text: app.bestFor },
      },
      {
        "@type": "Question",
        name: qDo,
        acceptedAnswer: { "@type": "Answer", text: app.canDo },
      },
    ],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = parseRoutingLocale(raw);
  const app = getLocalizedAppBySlug(slug, locale);
  if (!app) return { title: "App not found" };

  const appPath = `/apps/${app.slug}`;
  const appUrl = publicUrl(locale, appPath);
  const image = ogImageForApp(app);

  // Keep the rendered <title> within the ~60-char SERP budget: drop the brand
  // suffix when name + tagline already fill it (tagline stays on the page).
  const fullTitle = `${app.name} — ${app.tagline} | XingAI`;
  const title = fullTitle.length > 60 ? `${app.name} — ${app.tagline}` : fullTitle;
  return {
    title,
    description: app.description,
    keywords: [app.name, app.category, app.tagline, "XingAI", "AI decision systems"],
    robots: isIndexableApp(app) ? undefined : { index: false, follow: false },
    alternates: pageAlternates(locale, appPath),
    openGraph: {
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      url: appUrl,
      type: "website",
      siteName: "XingAI",
      locale: openGraphLocale(locale),
      images: [{ url: image.url, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline} | XingAI`,
      description: app.description,
      images: [{ url: image.url, alt: image.alt }],
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
  const image = ogImageForApp(app);
  const graph: Record<string, unknown>[] = [
    { "@id": `${siteUrl}/#org` },
    { "@id": `${siteUrl}/#website` },
    {
      "@type": "WebPage",
      "@id": `${appUrl}#webpage`,
      url: appUrl,
      name: `${app.name} — ${app.tagline}`,
      description: app.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${appUrl}#software` },
      primaryImageOfPage: image.url,
      inLanguage: locale === "zh" ? "zh-CN" : locale === "ko" ? "ko" : "en",
    },
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
    buildAppFaq(app, appUrl, locale),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
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
