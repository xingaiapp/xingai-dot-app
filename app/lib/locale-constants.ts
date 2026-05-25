import type { Locale } from "../i18n/translations";

export const LOCALE_COOKIE = "xingai.locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "zh" || value === "ko";
}
