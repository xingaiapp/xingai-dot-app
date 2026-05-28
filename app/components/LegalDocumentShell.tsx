import Link from "next/link";
import {
  getLegalDoc,
  legalDocIds,
  type LegalDocId,
} from "../i18n/legal-content";
import { localizePath } from "../lib/locale-routing";
import { getServerLocale } from "../lib/locale";
import translations, { type TranslationKey } from "../i18n/translations";

type Props = {
  docId: LegalDocId;
};

export default async function LegalDocumentShell({ docId }: Props) {
  const locale = await getServerLocale();
  const labels = translations[locale];
  const doc = getLegalDoc(locale, docId);
  const path = (p: string) => localizePath(locale, p);
  const otherDocs = legalDocIds.filter((id) => id !== docId);

  const relatedLabelKeys: Record<LegalDocId, TranslationKey> = {
    privacy: "footerPrivacy",
    terms: "footerTerms",
    disclaimer: "footerDisclaimer",
  };

  return (
    <main className="wrap legal-wrap">
      <section className="page-header">
        <Link href={path("/")} className="breadcrumb">
          &larr; {labels.navHome}
        </Link>
        <h1 className="page-heading">{doc.title}</h1>
        <p className="legal-updated">
          {labels.legalUpdated}: {doc.updated}
        </p>
      </section>

      <article className="legal-doc">
        {doc.intro ? <p className="legal-intro">{doc.intro}</p> : null}
        {doc.sections.map((section) => (
          <section key={section.heading} className="legal-section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.heading}-${index}`}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <nav className="legal-related" aria-label={labels.footerLegal}>
        <span className="legal-related__label">{labels.legalRelated}</span>
        <ul>
          {otherDocs.map((id) => (
            <li key={id}>
              <Link href={path(`/legal/${id}`)}>{labels[relatedLabelKeys[id]]}</Link>
            </li>
          ))}
          <li>
            <Link href={path("/contact")}>{labels.navContact}</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
