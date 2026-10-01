import type { Locale } from "../i18n/translations";
import { localizePath, stripLocaleFromPathname } from "./locale-routing";

export type NavKey =
  | "navHome"
  | "navApps"
  | "navStory"
  | "navTeam"
  | "navAbout"
  | "navContact"
  | "navBuild";

const navPaths: { path: string; key: NavKey; hash?: string }[] = [
  { path: "/", key: "navHome" },
  { path: "/apps", key: "navApps" },
  { path: "/story", key: "navStory" },
  { path: "/team", key: "navTeam" },
  { path: "/about", key: "navAbout" },
  { path: "/contact", key: "navContact" },
  { path: "/", key: "navBuild", hash: "build" },
];

/** Bottom tab bar holds five tabs; Team and Build stay reachable from the drawer and footer. */
const mobileNavPaths = navPaths.filter(({ key }) => key !== "navTeam" && key !== "navBuild");

export function primaryNavLinks(locale: Locale): { href: string; key: NavKey }[] {
  return navPaths.map(({ path, key, hash }) => ({
    href: `${localizePath(locale, path)}${hash ? `#${hash}` : ""}`,
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
  if (href.includes("#")) return false;
  const base = stripLocaleFromPathname(pathname);
  const linkBase = stripLocaleFromPathname(href);
  if (linkBase === "/") return base === "/";
  return base === linkBase || base.startsWith(`${linkBase}/`);
}
