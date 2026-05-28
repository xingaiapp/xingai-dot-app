import translations from "../i18n/translations";
import { siteUrl } from "./site-seo";

/** English FAQ for crawlers / AEO (visible UI still follows user locale). */
const FAQ_KEYS: { q: keyof (typeof translations)["en"]; a: keyof (typeof translations)["en"] }[] =
  [
    { q: "answerQ1", a: "answerA1" },
    { q: "answerQ2", a: "answerA2" },
    { q: "answerQ3", a: "answerA3" },
    { q: "answerQ4", a: "answerA4" },
    { q: "answerQ5", a: "answerA5" },
  ];

export function buildHomeFaqJsonLd() {
  const en = translations.en;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    url: siteUrl,
    inLanguage: "en",
    mainEntity: FAQ_KEYS.map(({ q, a }) => ({
      "@type": "Question",
      name: en[q],
      acceptedAnswer: {
        "@type": "Answer",
        text: en[a],
      },
    })),
  };
}
