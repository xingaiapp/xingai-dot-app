"use client";

import { useCallback } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { localizePath } from "./locale-routing";

export function useLocalePath() {
  const { locale } = useTranslation();
  return useCallback((path: string) => localizePath(locale, path), [locale]);
}
