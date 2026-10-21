/**
 * Last real content change per static route, used for sitemap `lastmod`.
 * Same discipline as travel's lib/content-dates.ts: bump the matching date
 * when you edit that content — never stamp "now" at build/request time.
 * Use real UTC clock times (not a shared midnight) so lastmod is not one
 * batch stamp.
 *
 * Seeded 2026-10-20 from each route's page-file last git commit
 * (GitHub API, commits?path=…&per_page=1).
 */
export const STATIC_CONTENT_DATES: Record<string, Date> = {
  "/": new Date("2026-09-28T22:03:30Z"),
  "/apps": new Date("2026-10-08T01:32:22Z"),
  "/story": new Date("2026-10-01T19:05:13Z"),
  "/team": new Date("2026-10-05T14:45:53Z"),
  "/about": new Date("2026-10-05T14:14:43Z"),
  "/contact": new Date("2026-10-08T01:25:47Z"),
  "/engineering": new Date("2026-10-01T19:20:14Z"),
  "/services": new Date("2026-10-02T01:30:53Z"),
  "/services/agent-security-assessment": new Date("2026-07-26T06:16:30Z"),
  "/pricing": new Date("2026-10-08T01:25:47Z"),
  "/legal": new Date("2026-09-28T19:21:19Z"),
  "/legal/privacy": new Date("2026-05-28T21:46:36Z"),
  "/legal/terms": new Date("2026-05-28T21:46:36Z"),
  "/legal/disclaimer": new Date("2026-05-28T21:46:36Z"),
};

/** /apps/[slug] pages render from app/data/apps.ts — date of its last edit. */
export const APP_CATALOG_CONTENT_DATE = new Date("2026-10-08T01:32:22Z");
