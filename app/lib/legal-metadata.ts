import type { Metadata } from "next";
import { getLegalDoc, type LegalDocId } from "../i18n/legal-content";
import type { Locale } from "../i18n/translations";
import { pageAlternates, localizedOpenGraph } from "./localized-seo";
import { publicUrl } from "./locale-routing";
import { formatPageTitle } from "./site-seo";
import { ogImageMeta, defaultOgImage } from "./site-seo";

const legalOg = ogImageMeta(defaultOgImage, "XingAI legal information");

export function legalPageMetadata(locale: Locale, docId: LegalDocId): Metadata {
  const doc = getLegalDoc(locale, docId);
  const path = `/legal/${docId}`;
  const url = publicUrl(locale, path);

  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: pageAlternates(locale, path),
    openGraph: {
      ...localizedOpenGraph(locale, path, doc.title, doc.metaDescription, legalOg),
      url,
    },
    twitter: {
      card: "summary",
      title: formatPageTitle(doc.title),
      description: doc.metaDescription,
    },
  };
}
