# SEO & AEO maintenance checklist (xingai.app)

Use this before **every deploy**, when **adding/changing a product**, and in a **monthly** pass. Goal: keep JSON-LD, OG images, and locale URLs from regressing.

Related: [`seo-aeo-status.md`](./seo-aeo-status.md) · [`marketing-site-standards.md`](./marketing-site-standards.md)

---

## A. Before you ship (required)

### Build & routes

- [ ] `npm run build` passes (no type/lint errors).
- [ ] `http://localhost:3000/` loads (English, no `/en` in address bar).
- [ ] `http://localhost:3000/zh` and `/ko` load; language switcher changes **URL**, not only cookie.
- [ ] `/en` or `/en/apps` **redirects** to `/` or `/apps` (308).

### Top 3 concerns (do not skip)

#### 1. JSON-LD in `<head>`

- [ ] View source on `/` — one `application/ld+json` `@graph` with `Organization`, `WebSite`, `WebPage`, **`FAQPage`**, `ItemList`, **`SoftwareApplication`** (count = product count).
- [ ] View source on `/zh` — **Chinese** FAQ questions in `FAQPage` (not English-only).
- [ ] `/apps` — `CollectionPage` + product `SoftwareApplication` nodes.
- [ ] `/apps/<slug>` — `SoftwareApplication` + `BreadcrumbList`; `image` points at screenshot URL when `screenshots[0]` exists.
- [ ] FAQ **visible** on homepage still matches schema intent (5 Q&A in UI).

Quick check:

```bash
curl -s http://localhost:3000/ | grep -oE 'FAQPage|SoftwareApplication|Organization' | sort -u
curl -s http://localhost:3000/zh | grep -o 'FAQPage'
```

#### 2. `og:image` (social preview)

- [ ] `/` → `home-og.jpg` (not `xingai-logo.png` alone).
- [ ] `/apps` → `apps-og.jpg`.
- [ ] `/story` → `story-og.jpg`.
- [ ] `/apps/performance-sim` (and 1–2 other products) → **demo screenshot** in `og:image`.
- [ ] After changing icons/demos: `npm run generate:assets` committed if OG assets changed.

Quick check:

```bash
curl -s http://localhost:3000/ | grep -o 'home-og'
curl -s http://localhost:3000/apps | grep -o 'apps-og'
```

#### 3. Locale URLs & hreflang

- [ ] Canonical on `/` is `https://xingai.app/` (not `/en`).
- [ ] Canonical on `/zh/apps` is `https://xingai.app/zh/apps`.
- [ ] `alternates.languages` on home includes `en`, `zh-CN`, `ko`, `x-default` with **different** URLs.
- [ ] Internal links from header/footer respect locale (`/zh/apps`, not `/apps` when browsing Chinese).
- [ ] `sitemap.xml` lists EN + `/zh/…` + `/ko/…` for main routes and all product slugs.

Quick check:

```bash
curl -s http://localhost:3000/zh | grep -o 'zh-CN'
curl -s http://localhost:3000/sitemap.xml | grep -c '<loc>'
```

### Metadata consistency

- [ ] `apps.ts` product count matches copy (“10 systems”, FAQ answers, meta descriptions).
- [ ] `appsPageDescription` / `homeDescription` in `app/lib/localized-seo.ts` pull from **`getLocalizedApps`** (no hard-coded “7 products”).
- [ ] `/apps` **`<title>`** and **`og:title`** both resolve to `AI Products | XingAI` (template + page title).
- [ ] New products appear in: homepage grid, `/apps`, sitemap, root `ItemList`, invest trio copy if applicable.

### Crawlers

- [ ] `robots.txt` allows `/` and points to `sitemap.xml`.
- [ ] No `noindex` on marketing pages by mistake.

---

## B. When adding or renaming a product

Edit **`app/data/apps.ts`** first, then:

- [ ] Localized copy in `localizedAppCopy` (en / zh / ko).
- [ ] `screenshots[0]` for `og:image` + `SoftwareApplication.image`.
- [ ] Demo JPGs in `public/` (light + dark) if marketed on homepage.
- [ ] Distinct `icon` / `iconDark` / `favicon` (invest trio: run `npm run generate:icons` if needed).
- [ ] Regenerate **`apps-og.jpg`** if catalog icons changed: `npm run generate:seo-og`.
- [ ] FAQ / hero / story strings mention product only if still accurate.
- [ ] `generateStaticParams` picks up slug (build should show +3 paths per locale).
- [ ] Spot-check `/apps/<new-slug>`, `/zh/apps/<new-slug>`.

---

## C. When changing FAQ, hero, or i18n

- [ ] Update **`app/i18n/translations.ts`** for en / zh / ko together.
- [ ] FAQ keys (`answerQ1`…`answerA5`) stay in sync — schema uses same keys in **`home-faq-schema.ts`**.
- [ ] Avoid “6 products” (or any stale count) in `heroSub` / FAQ answers.
- [ ] Brand: **XingAI** in titles; **xingai.app** for domain/URLs — don’t mix in one phrase.

---

## D. After production deploy

Replace host with production:

```bash
BASE=https://xingai.app
curl -sI "$BASE/" | grep -iE 'x-locale|location'
curl -sL "$BASE/" | grep -oE 'FAQPage|SoftwareApplication' | sort -u
curl -sL "$BASE/zh" | grep -o 'FAQPage'
curl -sI "$BASE/" | grep -i og:image
curl -sL "$BASE/sitemap.xml" | head -20
```

- [ ] Google Search Console: submit sitemap; inspect URL `/` and `/zh`.
- [ ] Optional: [Rich Results Test](https://search.google.com/test/rich-results) on `/` and one product URL.
- [ ] Optional: share debugger (Twitter/X, LinkedIn, WeChat) — preview shows **product/collage**, not logo only.

---

## E. Monthly / quarterly (15 min)

- [ ] Product count in meta descriptions = `apps.length`.
- [ ] All `demoUrl` / `comingSoon` / `earlyAccess` flags match product reality.
- [ ] Broken links to `lab.xingai.app`, `t.xingai.app`, `invest.xingai.app`.
- [ ] Subdomain apps (out of this repo): spot-check their own titles/canonicals if traffic matters.
- [ ] Re-run section **A** on production URLs.
- [ ] Update [`seo-aeo-status.md`](./seo-aeo-status.md) if architecture changed.

---

## F. File map (where logic lives)

| Concern | Primary files |
|--------|----------------|
| Locale URLs | `middleware.ts`, `app/lib/locale-routing.ts`, `app/[locale]/…` |
| hreflang / canonical | `app/lib/localized-seo.ts` → `pageAlternates()` |
| JSON-LD | `app/lib/seo-json-ld.ts`, `app/lib/home-faq-schema.ts`, `app/[locale]/*/layout.tsx` |
| Meta descriptions | `app/lib/localized-seo.ts`, `app/data/apps.ts` |
| OG images | `public/home-og.jpg`, `apps-og.jpg`, `story-og.jpg`; `scripts/generate-seo-og.mjs` |
| Sitemap | `app/sitemap.ts` |
| Language switcher | `app/components/LanguageSelector.tsx` → `switchLocalePath()` |
| Nav links | `app/lib/nav-links.ts`, `LocaleLink` / `useLocalePath()` |

---

## G. Common regressions (watch for these)

| Symptom | Likely cause |
|--------|----------------|
| Audit says “no JSON-LD” | Tool only scans body; verify **view-source** `<head>`. |
| All previews show logo | Route missing `openGraph.images`; or prod cache — bump OG filename. |
| Chinese Google sees English URL | Missing `/zh` routes or hreflang; switcher only sets cookie. |
| `/apps` title ≠ share title | `title` vs `openGraph.title` drift; use `apps/layout.tsx` pattern. |
| Product missing from description | New app not in `apps.ts` or descriptions not using `getLocalizedApps`. |
| `useTranslation` crash on build | Header/Footer outside `LocaleProviders` — chrome must live under `app/[locale]/layout.tsx`. |

---

## H. One-command local smoke test

```bash
npm run build && npm run dev
# in another terminal:
for p in / /zh /ko /apps /zh/apps/performance-sim /story; do
  echo "=== $p"; curl -s "http://localhost:3000$p" | grep -oE 'FAQPage|home-og|apps-og|story-og|SoftwareApplication' | sort -u | tr '\n' ' '; echo
done
```

---

**Rule of thumb:** If it affects **what Google or Perplexity reads**, change **server metadata or JSON-LD** first — not only client-side `translations.ts`.
