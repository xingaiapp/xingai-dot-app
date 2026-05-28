"use client";

import { type ReactNode } from "react";
import type { Locale } from "../i18n/translations";
import { LanguageProvider } from "../i18n/LanguageContext";
import { ThemeProvider } from "./ThemeContext";

export default function Providers({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
