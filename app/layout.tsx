import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  title: {
    default: "xingai.app",
    template: "%s | xingai.app",
  },
  description:
    "xingai.app — AI lifestyle decision systems. Co-founded by Xing and Allen, AI architects.",
  icons: {
    icon: "/xingai-logo.png",
    apple: "/xingai-logo.png",
  },
  openGraph: {
    title: "xingai.app",
    description:
      "Building AI lifestyle decision systems — co-founded by Xing and Allen, AI architects.",
    type: "website",
    url: siteUrl,
    siteName: "xingai.app",
    images: [{ url: `${siteUrl}/xing1.png`, alt: "Xing" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/xing1.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t);var l=localStorage.getItem("locale");if(l)document.documentElement.lang=l}catch(e){}})()`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="page-wrap">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
