"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import translations, { type Locale, type TranslationKey } from "./translations";

const DEFAULT_LOCALE: Locale = "en";
const LOCALE_STORAGE_KEY = "xingai.locale";
const LEGACY_LOCALE_STORAGE_KEY = "locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    localStorage.removeItem(LEGACY_LOCALE_STORAGE_KEY);
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && stored in translations) {
      setLocaleState(stored);
      document.documentElement.setAttribute("lang", stored);
      return;
    }
    document.documentElement.setAttribute("lang", DEFAULT_LOCALE);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(LOCALE_STORAGE_KEY, l);
    document.documentElement.setAttribute("lang", l);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key] ?? translations.en[key],
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
