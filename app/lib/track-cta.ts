import { track } from "@vercel/analytics";

export type CtaName = "map" | "try" | "build" | "contact";
export type CtaPlacement = "hero" | "header" | "tabbar" | "drawer" | "home-build";

/** One event name for every acquisition CTA so placements can be compared side by side. */
export function trackCta(cta: CtaName, placement: CtaPlacement) {
  track("cta_click", { cta, placement });
}

const navKeyToCta: Partial<Record<string, CtaName>> = {
  navTry: "try",
  navBuild: "build",
  navContact: "contact",
};

export function ctaForNavKey(key: string): CtaName | undefined {
  return navKeyToCta[key];
}
