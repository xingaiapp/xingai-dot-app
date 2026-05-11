"use client";

import { useTranslation } from "../i18n/LanguageContext";
import { localeLabels, type Locale } from "../i18n/translations";

const locales: Locale[] = ["en", "zh", "ko"];

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="lang-selector" role="radiogroup" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          role="radio"
          aria-checked={locale === l}
          className={`lang-btn${locale === l ? " lang-btn--active" : ""}`}
          onClick={() => setLocale(l)}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
