export type NavKey = "navHome" | "navApps" | "navAbout" | "navContact";

export const primaryNavLinks: { href: string; key: NavKey }[] = [
  { href: "/", key: "navHome" },
  { href: "/apps", key: "navApps" },
  { href: "/about", key: "navAbout" },
  { href: "/contact", key: "navContact" },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
