"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { localeLabels, type Locale } from "../i18n/translations";
import { switchLocalePath } from "../lib/locale-routing";

const locales: Locale[] = ["en", "zh", "ko"];

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleSelect = (l: Locale) => {
    setLocale(l);
    setOpen(false);
    router.push(switchLocalePath(pathname, l));
  };

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language"
      >
        {localeLabels[locale]}
        <span className="lang-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" aria-label="Select language">
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={locale === l}>
              <button
                type="button"
                className={`lang-option${locale === l ? " lang-option--active" : ""}`}
                onClick={() => handleSelect(l)}
              >
                {localeLabels[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
