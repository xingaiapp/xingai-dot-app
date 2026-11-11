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
  "/": new Date("2026-11-01T13:05:59Z"), // 57fc7bd (2026-11-01): homepage publicBetaNote copy — Invest is a research tool
  "/apps": new Date("2026-11-05T17:58:22Z"), // 8d79975 (2026-11-05): Watch It Decide embed added to /apps (ADR-0216)
  "/story": new Date("2026-11-04T18:49:55Z"), // 000981b (2026-11-04): story copy 'claim' -> 'statement' (ADR-0204)
  "/team": new Date("2026-11-04T18:49:55Z"), // 000981b (2026-11-04): team.ts copy 'claim' -> 'statement' (ADR-0204)
  "/agent-team": new Date("2026-11-09T22:58:37Z"), // PR #53 (2026-11-09): EN title/desc trimmed
  "/about": new Date("2026-10-05T14:14:43Z"),
  "/contact": new Date("2026-10-08T01:25:47Z"),
  "/engineering": new Date("2026-11-04T18:49:55Z"), // 000981b (2026-11-04): engOpenPocs copy 'claims' -> 'statement' (ADR-0204)
  "/services": new Date("2026-10-02T01:30:53Z"),
  "/services/agent-security-assessment": new Date("2026-11-11T22:05:00Z"), // FAQ #7 (2026-11-11): schema-only FAQ rendered visibly, localized en/zh/ko
  "/pricing": new Date("2026-10-08T01:25:47Z"),
  "/legal": new Date("2026-09-28T19:21:19Z"),
  "/legal/privacy": new Date("2026-11-02T00:14:32Z"), // e822af9 (2026-11-01): visible FAQ section added
  "/legal/terms": new Date("2026-11-02T00:14:32Z"), // e822af9 (2026-11-01): visible FAQ section added
  "/legal/disclaimer": new Date("2026-11-02T00:14:32Z"), // e822af9 (2026-11-01): visible FAQ section added
};

/** /apps/[slug] pages render from app/data/apps.ts — date of its last edit. */
export const APP_CATALOG_CONTENT_DATE = new Date("2026-11-09T22:58:37Z"); // PR #53 (2026-11-09): evidence-engine desc trimmed, app FAQ rendered visibly
