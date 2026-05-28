import type { Locale } from "../i18n/translations";
import { localizePath, stripLocaleFromPathname } from "./locale-routing";

export type NavKey =
  | "navHome"
  | "navApps"
  | "navStory"
  | "navAbout"
  | "navContact";

const navPaths: { path: string; key: NavKey }[] = [
  { path: "/", key: "navHome" },
  { path: "/apps", key: "navApps" },
  { path: "/story", key: "navStory" },
  { path: "/about", key: "navAbout" },
  { path: "/contact", key: "navContact" },
];

export function primaryNavLinks(locale: Locale): { href: string; key: NavKey }[] {
  return navPaths.map(({ path, key }) => ({
    href: localizePath(locale, path),
    key,
  }));
}

export function isNavActive(pathname: string, href: string): boolean {
  const base = stripLocaleFromPathname(pathname);
  const linkBase = stripLocaleFromPathname(href);
  if (linkBase === "/") return base === "/";
  return base === linkBase || base.startsWith(`${linkBase}/`);
}
