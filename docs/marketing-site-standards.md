# xingai.app marketing site standards

Applies to `xingai-dot-app` (xingai.app).

## Mobile-first

- Base layout and CSS use mobile breakpoints first (`globals.css`: base = phone, `@media (min-width: 36rem)` = desktop).
- Product demo screenshots: **390px-wide viewport**, 3:2 export at **1536×1024** (`npm run capture:demos`).
- Touch targets ≥44px; bottom nav on small screens; no overlapping header controls.

## Language (EN / 中文 / 한국어)

- UI: `LanguageProvider` + `translations.ts`; persist `xingai.locale` cookie + `localStorage`.
- SEO URLs: English at `/…`; 中文 at `/zh/…`; 한국어 at `/ko/…` (`middleware.ts` + `app/lib/locale-routing.ts`). Language switcher navigates paths, not cookie-only.
- `hreflang` + canonical per locale (`app/lib/localized-seo.ts`).
- JSON-LD FAQ uses **locale-matched** copy (`app/lib/home-faq-schema.ts`).
- **Checklist before deploy:** [`docs/seo-aeo-checklist.md`](./seo-aeo-checklist.md).

## Theme (light / dark)

- `data-theme` on `<html>`; init script avoids flash; `theme-color` meta updates with theme.
- Demo images: `*-demo-light.jpg` + `*-demo-dark.jpg`; `ThemedImage` / `AppDemoScreenshot` swap by site theme.
- Invest demos (`performance-sim`, `t-today`): regenerate with `npm run capture:demos` — same as meal/cook: **390×585** capture, **cover crop** to 1536×1024 (full-bleed UI, not a centered phone mockup). Requires `lab.xingai.app` and local `invest-t-advisor` on `:3001` (`T_AUTH_MODE=off`).
- **Research AI**: `npm run capture:research` — exports hero artwork from `xingai-research-ai/public/brand/hero-bg-*-visual.png`.

## SEO

- `metadataBase`, canonical URLs, Open Graph + Twitter per route (under `app/[locale]/…`).
- Marketing OG: `home-og.jpg`, `apps-og.jpg`, `story-og.jpg` — regenerate `npm run generate:assets`.
- `sitemap.xml` (EN + zh + ko + alternates), `robots.txt`.
- Per-app `SoftwareApplication` + `BreadcrumbList` JSON-LD; catalog pages use `CollectionPage` + `ItemList`.
- App detail `og:image` = first screenshot when available.

## AEO (AI search / answer engines)

- Homepage **FAQ** block + **`FAQPage`** in JSON-LD `@graph` (5 Q&A; en/zh/ko per URL).
- **`Organization`**, **`WebSite`**, **`WebPage`**, **`ItemList`**, **10× `SoftwareApplication`** on home (`app/lib/seo-json-ld.ts`).
- Short, factual answers; name real domains (`lab.xingai.app`, `t.xingai.app`, `invest.xingai.app`).

## Invest product icons & Story OG

- **Performance Sim** / **T Today**: distinct icons in `public/*-icon.png` (source SVG in `scripts/brand/`). Regenerate: `npm run generate:icons`
- **Story page** share image: `public/story-og.jpg` (1200×630), wired in `app/[locale]/story/layout.tsx`

## Regenerating invest demo shots

```bash
# lab.xingai.app online; invest-t-advisor on :3001 with T_AUTH_MODE=off
npm run capture:demos
```
