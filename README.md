# xingai-dot-app

Next.js landing page for **[xingai.app](https://xingai.app)** — AI lifestyle decision systems (this repo is the marketing site; product work may use Next.js, FastAPI, and local AI elsewhere).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- [Inter](https://fonts.google.com/specimen/Inter) via `next/font`

## Project layout

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Home page |
| `app/layout.tsx` | Root layout, metadata (Open Graph, Twitter) |
| `app/globals.css` | Styles |
| `public/xingai-logo.png` | Logo and favicon |
| `public/xing1.png` | Profile image |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

**[Vercel](https://vercel.com)** (recommended): import the GitHub repo; Vercel detects Next.js and runs `next build`. Set **Environment variable** `NEXT_PUBLIC_SITE_URL` to `https://xingai.app` (no trailing slash) so Open Graph image URLs stay correct in previews.

Custom domain + Cloudflare: point DNS per Vercel’s domain panel (A/CNAME), same as before.

## Links

- Website: [https://xingai.app](https://xingai.app)
- GitHub org: [https://github.com/xingaiapp](https://github.com/xingaiapp)
- LinkedIn: [https://www.linkedin.com/in/xingaiapp/](https://www.linkedin.com/in/xingaiapp/)
- X: [https://x.com/XingAIApp](https://x.com/XingAIApp)
- Contact: [xing@xingai.app](mailto:xing@xingai.app)

## License

All rights reserved unless otherwise noted.
