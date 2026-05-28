import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import { apps } from "./data/apps";
import { buildHomeFaqJsonLd } from "./lib/home-faq-schema";
import {
  defaultDescription,
  defaultKeywords,
  productCount,
  siteUrl,
} from "./lib/site-seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0e14" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XingAI — AI Decision Systems for Everyday Life",
    template: "%s | XingAI",
  },
  description: defaultDescription,
  keywords: [...defaultKeywords],
  authors: [{ name: "Xing", url: siteUrl }, { name: "Allen" }],
  creator: "XingAI",
  publisher: "XingAI",
  icons: {
    icon: "/xingai-logo.png",
    apple: "/xingai-logo.png",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      zh: siteUrl,
      ko: siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "XingAI — AI Decision Systems for Everyday Life",
    description: defaultDescription,
    type: "website",
    url: siteUrl,
    siteName: "XingAI",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/xingai-logo.png`,
        width: 1373,
        height: 368,
        alt: "XingAI — AI Decision Systems for Everyday Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@XingAIApp",
    creator: "@XingAIApp",
    images: [`${siteUrl}/xingai-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initScript = `(function(){try{var t=localStorage.getItem("theme")||localStorage.getItem("xingai-theme");if(t!=="light"&&t!=="dark")t="light";var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;localStorage.setItem("theme",t);localStorage.removeItem("xingai-theme");document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",t==="dark"?"#0c0e14":"#ffffff")});localStorage.removeItem("locale");var l=localStorage.getItem("xingai.locale");if(l==="en"||l==="zh"||l==="ko"){r.lang=l;document.cookie="xingai.locale="+l+";path=/;max-age=31536000;SameSite=Lax"}else{r.lang="en"}}catch(e){document.documentElement.setAttribute("data-theme","light");document.documentElement.style.colorScheme="light";document.documentElement.lang="en"}})()`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "XingAI",
        url: siteUrl,
        logo: `${siteUrl}/xingai-logo.png`,
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
        description: defaultDescription,
        publisher: { "@id": `${siteUrl}/#org` },
        inLanguage: ["en", "zh", "ko"],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "XingAI — AI Decision Systems for Everyday Life",
        description: defaultDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#org` },
        primaryImageOfPage: `${siteUrl}/xingai-logo.png`,
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#products`,
        name: "XingAI AI decision systems",
        description:
          "A product collection of focused AI tools for everyday decisions.",
        numberOfItems: productCount,
        itemListElement: apps.map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/apps/${app.slug}`,
          name: app.name,
          description: app.description,
        })),
      },
    ],
  };

  const faqJsonLd = buildHomeFaqJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${inter.className} site-body`}>
        <Providers>
          <Header />
          <div className="page-wrap">{children}</div>
          <Footer />
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
