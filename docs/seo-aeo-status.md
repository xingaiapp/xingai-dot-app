# xingai.app — SEO & AEO status

**Maintenance checklist (use before every deploy):** [`seo-aeo-checklist.md`](./seo-aeo-checklist.md)

## Your top 3 concerns (current code)

### 1. JSON-LD structured data — addressed

Each locale URL ships server-rendered `application/ld+json` in `<head>`:

| Page | Schemas |
|------|---------|
| `/`, `/zh`, `/ko` | `Organization`, `WebSite`, `WebPage`, **`FAQPage`** (locale copy), `ItemList`, one **`SoftwareApplication`** per catalog product |
| `/apps`, `/zh/apps`, … | `CollectionPage`, `ItemList`, one **`SoftwareApplication`** per catalog product |
| `/apps/[slug]` | **`SoftwareApplication`**, `BreadcrumbList` |
| `/story` | `WebPage` + product `ItemList` |

Source: `app/lib/seo-json-ld.ts`, `app/lib/home-faq-schema.ts`, layouts under `app/[locale]/`.

### 2. og:image — not logo-only

| URL | Image |
|-----|--------|
| Home | `/home-og.jpg` (product demos) |
| Apps index | `/apps-og.jpg` (icon grid) |
| Story | `/story-og.jpg` |
| Product detail | First screenshot per app |

Regenerate: `npm run generate:assets`

### 3. Locale-specific URLs — addressed

| Locale | Public URL pattern |
|--------|-------------------|
| English | `https://xingai.app/` (no `/en` prefix; middleware rewrites internally) |
| 中文 | `https://xingai.app/zh/…` |
| 한국어 | `https://xingai.app/ko/…` |

- `hreflang` on every major page (`en`, `zh-CN`, `ko`, `x-default`)
- `sitemap.xml` lists EN + ZH + KO URLs with alternates
- Language switcher navigates to the matching locale path

## Verify after deploy

```bash
curl -sL https://xingai.app/ | grep 'application/ld+json'
curl -sL https://xingai.app/zh/ | grep 'FAQPage'
curl -sI https://xingai.app/ | grep -i og:image
curl -sL https://xingai.app/sitemap.xml | head -40
```

## Out of scope (separate repos)

`lab.xingai.app`, `t.xingai.app`, `invest.xingai.app` — per-app SEO audits.
