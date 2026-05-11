import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "xingai.app",
  description:
    "xingai.app — AI lifestyle decision systems. Next.js, FastAPI, local AI, and decision intelligence.",
  icons: {
    icon: "/xingai-logo.png",
    apple: "/xingai-logo.png",
  },
  openGraph: {
    title: "xingai.app",
    description:
      "Building AI lifestyle decision systems — thoughtful tools on the web.",
    type: "website",
    url: siteUrl,
    siteName: "xingai.app",
    images: [
      {
        url: `${siteUrl}/xing1.png`,
        alt: "Xing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/xing1.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
