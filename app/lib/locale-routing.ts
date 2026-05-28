import type { Locale } from "../i18n/translations";
import { isLocale } from "./locale-constants";
import { siteUrl } from "./site-seo";

export const routingLocales = ["en", "zh", "ko"] as const;
export type RoutingLocale = (typeof routingLocales)[number];

export function parseRoutingLocale(value: string | undefined): RoutingLocale {
  return isLocale(value) ? value : "en";
}

/** Path without /zh or /ko prefix (e.g. `/apps/meal-coach`). */
export function stripLocaleFromPathname(pathname: string): string {
  const match = pathname.match(/^\/(zh|ko)(\/.*)?$/);
  if (!match) return pathname || "/";
  return match[2] || "/";
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function publicUrl(locale: Locale, path: string): string {
  return `${siteUrl}${localizePath(locale, path)}`;
}

export function buildHreflangAlternates(path: string): Record<string, string> {
  return {
    en: publicUrl("en", path),
    "zh-CN": publicUrl("zh", path),
    ko: publicUrl("ko", path),
    "x-default": publicUrl("en", path),
  };
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const base = stripLocaleFromPathname(pathname);
  return localizePath(nextLocale, base);
}

export function openGraphLocale(locale: Locale): string {
  if (locale === "zh") return "zh_CN";
  if (locale === "ko") return "ko_KR";
  return "en_US";
}
