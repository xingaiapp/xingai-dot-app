import type { Locale } from "../i18n/translations";
import { localizePath, stripLocaleFromPathname } from "./locale-routing";

export type NavKey =
  | "navHome"
  | "navApps"
  | "navStory"
  | "navTeam"
  | "navAbout"
  | "navContact";

const navPaths: { path: string; key: NavKey }[] = [
  { path: "/", key: "navHome" },
  { path: "/apps", key: "navApps" },
  { path: "/story", key: "navStory" },
  { path: "/team", key: "navTeam" },
  { path: "/about", key: "navAbout" },
  { path: "/contact", key: "navContact" },
];

/** Bottom tab bar holds five tabs; Contact stays reachable from the drawer and footer. */
const mobileNavPaths = navPaths.filter(({ key }) => key !== "navContact");

export function primaryNavLinks(locale: Locale): { href: string; key: NavKey }[] {
  return navPaths.map(({ path, key }) => ({
    href: localizePath(locale, path),
    key,
  }));
}

export function mobileNavLinks(locale: Locale): { href: string; key: NavKey }[] {
  return mobileNavPaths.map(({ path, key }) => ({
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
