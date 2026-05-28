import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./lib/site-seo";

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
    default: "XingAI",
    template: "%s | XingAI",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initScript = `(function(){try{var t=localStorage.getItem("theme")||localStorage.getItem("xingai-theme");if(t!=="light"&&t!=="dark")t="light";var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;localStorage.setItem("theme",t);localStorage.removeItem("xingai-theme");document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",t==="dark"?"#0c0e14":"#ffffff")});var p=location.pathname,l="en";if(p.indexOf("/zh")===0)l="zh";else if(p.indexOf("/ko")===0)l="ko";r.lang=l;localStorage.setItem("xingai.locale",l);document.cookie="xingai.locale="+l+";path=/;max-age=31536000;SameSite=Lax"}catch(e){document.documentElement.setAttribute("data-theme","light");document.documentElement.style.colorScheme="light";document.documentElement.lang="en"}})()`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className={`${inter.className} site-body`}>{children}</body>
    </html>
  );
}
