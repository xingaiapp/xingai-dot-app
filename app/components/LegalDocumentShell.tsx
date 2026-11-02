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

  const faqQuestion =
    locale === "zh"
      ? "這一頁說明了什麼？"
      : locale === "ko"
        ? "이 페이지는 무엇을 설명하나요?"
        : "What does this page explain?";
  const faqItems = [
    { q: faqQuestion, a: doc.sections[0].paragraphs[0] },
    { q: doc.sections[1].heading, a: doc.sections[1].paragraphs[0] },
  ];

  return (
    <main className="wrap legal-wrap">
      {/* FAQPage from the same two questions rendered below. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: locale === "zh" ? "zh-TW" : locale,
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <section className="page-header">
        <Link href={path("/")} className="breadcrumb">
          &larr; {labels.navHome}
        </Link>
        <h1 className="page-heading">{doc.title}</h1>
        <p className="legal-updated">
          {labels.legalUpdated}: {doc.updated}
        </p>
      </section>

      <section className="apps-faq" aria-labelledby="legal-faq-heading">
        <h2 id="legal-faq-heading" className="section-title">
          {locale === "zh" ? "常見問題" : locale === "ko" ? "자주 묻는 질문" : "FAQ"}
        </h2>
        <dl className="apps-faq__list">
          {faqItems.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
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
