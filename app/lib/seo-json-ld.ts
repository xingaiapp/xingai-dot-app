import { getLocalizedApps, type AppData } from "../data/apps";
import type { Locale } from "../i18n/translations";
import { buildHomeFaqJsonLd } from "./home-faq-schema";
import { homeDescription, homeTitle } from "./localized-seo";
import { publicUrl } from "./locale-routing";
import { siteUrl } from "./site-seo";

export function absoluteAsset(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildSoftwareApplicationNode(app: AppData, locale: Locale) {
  const appPath = `/apps/${app.slug}`;
  const appUrl = publicUrl(locale, appPath);
  const shot = app.screenshots[0];
  const imageUrl = shot?.src ? absoluteAsset(shot.src) : absoluteAsset("/xingai-logo.png");

  return {
    "@type": "SoftwareApplication",
    "@id": `${appUrl}#software`,
    name: app.name,
    applicationCategory: app.category,
    operatingSystem: "Web",
    url: appUrl,
    description: app.description,
    image: imageUrl,
    inLanguage: locale === "zh" ? "zh-CN" : locale === "ko" ? "ko" : "en",
    publisher: { "@id": `${siteUrl}/#org` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: app.comingSoon
        ? "https://schema.org/PreOrder"
        : app.earlyAccess
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/InStock",
      url: app.earlyAccess
        ? publicUrl(locale, "/contact")
        : (app.demoUrl ?? appUrl),
    },
    ...(app.demoUrl
      ? {
          downloadUrl: app.demoUrl,
          installUrl: app.demoUrl,
        }
      : {}),
    ...(app.features.length > 0
      ? { featureList: app.features.map((feature) => feature.name) }
      : {}),
  };
}

export function buildSiteGraph(apps: AppData[], locale: Locale, pageUrl: string) {
  const faq = buildHomeFaqJsonLd(locale, pageUrl);
  const localizedApps = getLocalizedApps(locale);
  const description = homeDescription(locale);
  const title = homeTitle(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "XingAI",
        url: siteUrl,
        logo: absoluteAsset("/xingai-logo.png"),
        sameAs: [
          "https://github.com/xingaiapp",
          "https://www.linkedin.com/in/xingaiapp/",
          "https://x.com/XingAIApp",
        ],
        founder: [
          { "@type": "Person", name: "Xing", jobTitle: "Co-founder & AI Architect" },
          { "@type": "Person", name: "Allen", jobTitle: "Co-founder & AI Architect" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@xingai.app",
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "XingAI",
        alternateName: "xingai.app",
        publisher: { "@id": `${siteUrl}/#org` },
        inLanguage: ["en", "zh-CN", "ko"],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#org` },
        primaryImageOfPage: absoluteAsset("/home-og.jpg"),
        inLanguage: faq.inLanguage,
      },
      faq,
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#products`,
        name: "XingAI AI decision systems",
        numberOfItems: localizedApps.length,
        itemListElement: localizedApps.map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: publicUrl(locale, `/apps/${app.slug}`),
          name: app.name,
        })),
      },
      ...localizedApps.map((app) => buildSoftwareApplicationNode(app, locale)),
    ],
  };
}

export function buildAppsCatalogGraph(apps: AppData[], locale: Locale) {
  const appsUrl = publicUrl(locale, "/apps");
  const localizedApps = getLocalizedApps(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": `${siteUrl}/#org` },
      { "@id": `${siteUrl}/#website` },
      {
        "@type": "CollectionPage",
        "@id": `${appsUrl}#webpage`,
        url: appsUrl,
        name: locale === "zh" ? "XingAI 全部产品" : locale === "ko" ? "XingAI 전체 제품" : "XingAI AI Products",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: absoluteAsset("/apps-og.jpg"),
        inLanguage: locale === "zh" ? "zh-CN" : locale === "ko" ? "ko" : "en",
      },
      {
        "@type": "ItemList",
        "@id": `${appsUrl}#product-list`,
        numberOfItems: localizedApps.length,
        itemListElement: localizedApps.map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${publicUrl(locale, `/apps/${app.slug}`)}#software` },
        })),
      },
      ...localizedApps.map((app) => buildSoftwareApplicationNode(app, locale)),
    ],
  };
}
