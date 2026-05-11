"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "../i18n/LanguageContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
