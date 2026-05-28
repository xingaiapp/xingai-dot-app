# xingai.app marketing site standards

Applies to `xingai-dot-app` (xingai.app).

## Mobile-first

- Base layout and CSS use mobile breakpoints first (`globals.css`: base = phone, `@media (min-width: 36rem)` = desktop).
- Product demo screenshots: **390px-wide viewport**, 3:2 export at **1536×1024** (`npm run capture:demos`).
- Touch targets ≥44px; bottom nav on small screens; no overlapping header controls.

## Language (EN / 中文 / 한국어)

- UI: `LanguageProvider` + `translations.ts`; persist `xingai.locale` cookie + `localStorage`.
- SEO: page `<html lang>` set from cookie in root init script; JSON-LD FAQ uses **English** for stable crawler/AEO text (`app/lib/home-faq-schema.ts`).
- Visible FAQ and copy follow the user’s selected locale.

## Theme (light / dark)

- `data-theme` on `<html>`; init script avoids flash; `theme-color` meta updates with theme.
- Demo images: `*-demo-light.jpg` + `*-demo-dark.jpg`; `ThemedImage` / `AppDemoScreenshot` swap by site theme.

## SEO

- `metadataBase`, canonical URLs, Open Graph + Twitter per route.
- `sitemap.xml`, `robots.txt`, per-app `SoftwareApplication` + `BreadcrumbList` JSON-LD.
- App pages use product screenshot for `og:image` when available.

## AEO (AI search / answer engines)

- Homepage **FAQ** block + `FAQPage` schema (5+ concrete Q&A).
- Root `Organization`, `WebSite`, `ItemList` of products in `layout.tsx`.
- Short, factual answers; name real domains (`lab.xingai.app`, `t.xingai.app`, `invest.xingai.app`).

## Regenerating invest demo shots

```bash
# lab.xingai.app online; invest-t-advisor on :3001 with T_AUTH_MODE=off
npm run capture:demos
```
