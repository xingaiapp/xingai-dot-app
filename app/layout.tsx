import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import { apps } from "./data/apps";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

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
  description:
    "XingAI builds focused AI decision systems for everyday life — meal coaching, cooking, style, routines, parenting, travel, and investing. Not generic chat. Co-founded by Xing and Allen, AI architects.",
  keywords: [
    "AI decision systems",
    "XingAI",
    "AI meal coach",
    "AI cooking assistant",
    "AI outfit advisor",
    "AI routine planner",
    "AI parenting support",
    "AI travel planner",
    "AI investment assistant",
    "everyday AI",
    "personal AI",
  ],
  authors: [{ name: "Xing", url: siteUrl }, { name: "Allen" }],
  creator: "XingAI",
  publisher: "XingAI",
  icons: {
    icon: "/xingai-logo.png",
    apple: "/xingai-logo.png",
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "XingAI — AI Decision Systems for Everyday Life",
    description:
      "7 focused AI products for everyday decisions: eating, cooking, style, habits, parenting, travel, and investing. Not generic chat.",
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
  const initScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t);localStorage.removeItem("locale");var l=localStorage.getItem("xingai.locale");document.documentElement.lang=l||"en"}catch(e){document.documentElement.lang="en"}})()`;

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
        description:
          "AI decision systems for everyday life — food, cooking, style, routines, parenting, travel, and investing.",
        publisher: { "@id": `${siteUrl}/#org` },
        inLanguage: ["en", "zh", "ko"],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "XingAI — AI Decision Systems for Everyday Life",
        description:
          "XingAI is a platform of focused AI decision systems for everyday life, including meal coaching, cooking, style, routines, parenting, travel, and investing.",
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
        numberOfItems: apps.length,
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
