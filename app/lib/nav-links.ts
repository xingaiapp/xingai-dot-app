import type { Locale } from "../i18n/translations";
import { localizePath, stripLocaleFromPathname } from "./locale-routing";

export type NavKey =
  | "navHome"
  | "navApps"
  | "navStory"
  | "navTeam"
  | "navAbout"
  | "navContact"
  | "navBuild"
  | "navTry"
  | "navMore";

/** Desktop header: acquisition paths only. Team and About live in the drawer and footer. */
const navPaths: { path: string; key: NavKey; hash?: string }[] = [
  { path: "/", key: "navHome" },
  { path: "/apps", key: "navApps" },
  { path: "/story", key: "navStory" },
  { path: "/contact", key: "navContact" },
  { path: "/services", key: "navBuild" },
];

/**
 * Bottom tab bar is ordered by acquisition priority: Home, Apps, Try (live
 * products on the home page), Contact, then a More tab that opens the drawer.
 * Story, Team, About and Build stay reachable from the drawer and footer.
 */
const mobileNavPaths: { path: string; key: NavKey; hash?: string }[] = [
  { path: "/", key: "navHome" },
  { path: "/apps", key: "navApps" },
  { path: "/", key: "navTry", hash: "start-here" },
  { path: "/contact", key: "navContact" },
];

export function primaryNavLinks(locale: Locale): { href: string; key: NavKey }[] {
  return navPaths.map(({ path, key, hash }) => ({
    href: `${localizePath(locale, path)}${hash ? `#${hash}` : ""}`,
    key,
  }));
}

export function mobileNavLinks(locale: Locale): { href: string; key: NavKey }[] {
  return mobileNavPaths.map(({ path, key, hash }) => ({
    href: `${localizePath(locale, path)}${hash ? `#${hash}` : ""}`,
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
