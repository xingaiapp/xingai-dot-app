import type { MetadataRoute } from "next";
import { apps, isIndexableApp } from "./data/apps";
import { APP_CATALOG_CONTENT_DATE, STATIC_CONTENT_DATES } from "./lib/content-dates";
import { buildHreflangAlternates, publicUrl } from "./lib/locale-routing";
import type { Locale } from "./i18n/translations";

const locales: Locale[] = ["en", "zh", "ko"];

const staticPaths = [
  "/",
  "/apps",
  "/story",
  "/team",
  "/about",
  "/contact",
  "/engineering",
  "/services",
  "/services/agent-security-assessment",
  "/pricing",
  "/legal",
  "/legal/privacy",
  "/legal/terms",
  "/legal/disclaimer",
] as const;

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"],
): MetadataRoute.Sitemap[0] {
  const languages = buildHreflangAlternates(path);
  // lastmod = the route's real editorial date from lib/content-dates.ts
  // (travel's discipline). Never stamp `new Date()` here: it made every
  // URL look freshly changed on every fetch (removed in PR #39).
  return {
    url: publicUrl("en", path),
    ...(STATIC_CONTENT_DATES[path] ? { lastModified: STATIC_CONTENT_DATES[path] } : {}),
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticPaths.map((path) => {
    const priority =
      path === "/" ? 1 : path === "/apps" ? 0.9 : path.startsWith("/legal") ? 0.4 : 0.7;
    const freq = path.startsWith("/legal") ? ("yearly" as const) : ("weekly" as const);
    return entry(path, priority, freq);
  });

  const localizedStatic: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths
      .filter(() => locale !== "en")
      .map((path) => ({
        url: publicUrl(locale, path),
        ...(STATIC_CONTENT_DATES[path] ? { lastModified: STATIC_CONTENT_DATES[path] } : {}),
        changeFrequency: path.startsWith("/legal") ? ("yearly" as const) : ("weekly" as const),
        priority: path === "/" ? 0.95 : 0.75,
        alternates: { languages: buildHreflangAlternates(path) },
      })),
  );

  const appPages: MetadataRoute.Sitemap = apps.filter(isIndexableApp).flatMap((app) => {
    const path = `/apps/${app.slug}`;
    return locales.map((locale) => ({
      url: publicUrl(locale, path),
      lastModified: APP_CATALOG_CONTENT_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: { languages: buildHreflangAlternates(path) },
    }));
  });

  return [...staticPages, ...localizedStatic, ...appPages];
}
