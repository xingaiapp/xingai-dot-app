import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export const metadata: Metadata = {
  title: "Engineering practice | XingAI",
  description:
    "337 bilingual architecture decision records across 25 repositories. Three verbatim excerpts showing how decisions get made — and what they state they do not cover.",
  alternates: { canonical: `${siteUrl}/engineering` },
  openGraph: {
    title: "Engineering practice | XingAI",
    description:
      "Demos show a good day. This shows the decisions behind the systems — including the limits each one puts in writing.",
    url: `${siteUrl}/engineering`,
    siteName: "XingAI",
    type: "website",
  },
};

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
