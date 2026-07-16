# XingAI — AI Decision Systems for Everyday Life

> Not a chatbot. Not a wrapper. Focused AI products that help you decide.

**Version:** 2026.07.16

**Live at [xingai.app](https://xingai.app/)**

### Current version notes

`2026.07.16` adds **Ops Status** to the product catalog as a demo (`ops-status`) — lightweight HTTP uptime board at [xingai-ops-status.vercel.app](https://xingai-ops-status.vercel.app/), with light/dark screenshots.

`2026.07.16` also adds **Engineering Communication Coach** as coming soon (`engineering-coach`), with light/dark demo screenshots and a 14-day communication curriculum.

`2026.07.14` adds **Learn AI** to the product catalog as a separate demo product from Research AI.

---

## What is XingAI?

XingAI builds focused AI decision systems for everyday life. Each product solves one real decision — with structure, clarity, and privacy in mind.

| Product | Domain | Tagline |
|---------|--------|---------|
| **Meal Coach** | Health AI | Eat Better |
| **Cook AI** | Cooking AI | Cook Smarter |
| **Outfit AI** | Style AI | Dress Smarter |
| **Routine AI** | Habits AI | Live Better |
| **SAT AI** | Education AI | Prep Smarter |
| **Research AI** | Learning AI | Decide What to Learn |
| **Learn AI** | Learning AI | Learn With Structure |
| **Engineering Communication Coach** | Learning AI | Speak Like a Senior |
| **Parent AI** | Parenting AI | Family Support |
| **Travel AI** | Travel AI | Explore Better |
| **Investment Assistant** | Finance AI | Invest Smarter |
| **Performance Sim** | Finance AI | Simulate Rules |
| **T Today** | Finance AI | Plan Today |
| **Growth Monitor** | Operations AI | Fix Pages First |
| **Ops Status** | Operations AI | Uptime at a Glance |

**Meal Coach**, **Cook AI** ([cook.xingai.app](https://cook.xingai.app/)), **Outfit AI**, **Travel AI** ([travel.xingai.app](https://travel.xingai.app/)), and **Investment Assistant** are live. **SAT AI** is available as a demo at [sat.xingai.app](https://sat.xingai.app/). **Research AI** is available as a demo at [research.xingai.app](https://research.xingai.app/). **Learn AI** is available as a demo at [learn.xingai.app](https://learn.xingai.app/). **Engineering Communication Coach** is coming soon ([GitHub](https://github.com/xingaiapp/xingai-engineering-coach-ai)). **Growth Monitor** is early access at [growth.xingai.app](https://growth.xingai.app/). **Ops Status** is a demo at [xingai-ops-status.vercel.app](https://xingai-ops-status.vercel.app/). **Performance Sim** is available at [lab.xingai.app](https://lab.xingai.app/). **T Today** at [t.xingai.app](https://t.xingai.app/) is early access—free to request via [contact@xingai.app](mailto:contact@xingai.app). Parent AI is in development with a UX demo on the site.

## Features

- **15 AI products** — life domains plus Growth Monitor and Ops Status for ops
- **Mobile-first design** — optimized for phones, works great on desktop
- **Light + dark themes** — icons, screenshots, and UI all adapt
- **3 languages** — English, Chinese (中文), Korean (한국어)
- **SEO optimized** — sitemap, JSON-LD structured data, per-page metadata
- **Custom AI builds** — we also build AI products for teams and founders

## Marketing site standards (mobile, i18n, theme, SEO/AEO)

See [docs/marketing-site-standards.md](./docs/marketing-site-standards.md).

## Internal Product Wiki

- Repo document: [docs/product-wiki.md](./docs/product-wiki.md)
- Global upgrade rule: `不是重做新产品，而是在前一版上升级。`

Use the internal wiki as the central product/project map for all XingAI apps. It is repo documentation for team and agent use, not a public website route. Individual product repos keep implementation details, while this repo owns portfolio-level rules.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Hosting:** Vercel
- **DNS:** Cloudflare
- **Styling:** Mobile-first CSS with CSS variables for theming
- **Fonts:** Inter (Google Fonts)
- **Images:** next/image with responsive sizing
- **i18n:** Custom React Context with localStorage persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Regenerate Performance Sim / T Today marketing screenshots (mobile 3:2, light + dark):

```bash
# lab.xingai.app + invest-t-advisor on :3001 (T_AUTH_MODE=off)
npm run capture:demos
```

Regenerate Travel AI marketing images from the Travel app hero artwork:

```bash
npm run capture:travel
```

## Deployment Notes

Use `https://xingai-dot-app.vercel.app/` as the stable public URL for this website. Do not use one-off Vercel deployment URLs in docs or product links.

See [docs/domain-and-deployment-notes.md](./docs/domain-and-deployment-notes.md) for alias history and deployment commands.

## Project Structure

```
app/
├── components/     # AppIcon, ThemedImage, ThemeContext, Header, Footer
├── data/           # Product catalog (apps.ts)
├── i18n/           # Translations & language context
├── apps/           # Product listing & detail pages
├── about/          # About page
├── contact/        # Contact page
├── robots.ts       # Search engine crawling rules
├── sitemap.ts      # Auto-generated sitemap
├── layout.tsx      # Root layout with JSON-LD & SEO metadata
└── page.tsx        # Homepage
public/             # Logos, icons, favicons, demo screenshots
```

## Co-founders

- **Xing** — Co-founder & AI Architect
- **Allen** — Co-founder & AI Architect

## Contact

- **Email:** contact@xingai.app
- **Web:** [xingai-dot-app.vercel.app](https://xingai-dot-app.vercel.app/)
- **LinkedIn:** [xingaiapp](https://www.linkedin.com/in/xingaiapp/)
- **X/Twitter:** [@XingAIApp](https://x.com/XingAIApp)

## Have an idea?

We also build custom AI products for teams and founders. Share your idea — we'll design, build, and ship it with you.

[Tell us your idea →](https://xingai-dot-app.vercel.app/contact)

---

© xingai.app
