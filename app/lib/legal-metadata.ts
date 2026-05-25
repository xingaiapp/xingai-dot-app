import type { Metadata } from "next";
import { legalDocsByLocale, type LegalDocId } from "../i18n/legal-content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://xingai.app";

export function legalPageMetadata(docId: LegalDocId): Metadata {
  const doc = legalDocsByLocale.en[docId];
  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: `${siteUrl}/legal/${docId}` },
    openGraph: {
      title: `${doc.title} | XingAI`,
      description: doc.metaDescription,
      url: `${siteUrl}/legal/${docId}`,
    },
  };
}
