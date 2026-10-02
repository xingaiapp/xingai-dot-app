import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "../globals.css";
import { buildSiteIdentityGraph } from "../lib/seo-json-ld";
import { htmlLangTag, parseRoutingLocale, routingLocales } from "../lib/locale-routing";
import {
  homeDescription,
  homeOg,
  homeTitle,
  localizedOpenGraph,
  pageAlternates,
} from "../lib/localized-seo";
import { defaultKeywords, siteUrl } from "../lib/site-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";
import { MobileNavDrawerProvider } from "../components/MobileNavDrawer";
import LocaleProviders from "../components/LocaleProviders";

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

/** Applies the saved theme before paint and keeps the locale cookie in step with the URL. */
const initScript = `(function(){try{var t=localStorage.getItem("xingai.theme");if(t!=="light"&&t!=="dark"){var d=localStorage.getItem("theme")==="dark"||localStorage.getItem("xingai-theme")==="dark";localStorage.removeItem("theme");localStorage.removeItem("xingai-theme");if(d){t="dark";localStorage.setItem("xingai.theme","dark")}else{t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}}var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",t==="dark"?"#0c0e14":"#ffffff")});var p=location.pathname,l="en";if(p.indexOf("/zh")===0)l="zh";else if(p.indexOf("/ko")===0)l="ko";r.lang=l==="zh"?"zh-CN":l;localStorage.setItem("xingai.locale",l);document.cookie="xingai.locale="+l+";path=/;max-age=31536000;SameSite=Lax"}catch(e){document.documentElement.setAttribute("data-theme","light");document.documentElement.style.colorScheme="light";document.documentElement.lang="en"}})()`;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const title = homeTitle(locale);
  const description = homeDescription(locale);
  const path = "/";
  const og = homeOg(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: title },
    authors: [{ name: "Xing", url: siteUrl }, { name: "Allen" }],
    creator: "XingAI",
    publisher: "XingAI",
    icons: {
      icon: "/xingai-logo.png",
      apple: "/xingai-logo.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    description,
    keywords: [...defaultKeywords],
    alternates: pageAlternates(locale, path),
    openGraph: localizedOpenGraph(locale, path, title, description, og),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  const locale = parseRoutingLocale(raw);
  const jsonLd = buildSiteIdentityGraph();

  // This is the root layout: every page lives under /[locale] (middleware
  // rewrites unprefixed English URLs to /en), so <html lang> is set per locale
  // on the server instead of being patched by script after load.
  return (
    <html lang={htmlLangTag(locale)} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className={`${inter.className} site-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProviders locale={locale}>
          <MobileNavDrawerProvider>
            <Header />
            <div className="page-wrap">{children}</div>
            <Footer />
            <MobileBottomNav />
          </MobileNavDrawerProvider>
        </LocaleProviders>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
