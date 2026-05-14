# XingAI — AI Decision Systems for Everyday Life

> Not a chatbot. Not a wrapper. Focused AI products that help you decide.

**Live at [xingai-dot-app.vercel.app](https://xingai-dot-app.vercel.app/)**

---

## What is XingAI?

XingAI builds focused AI decision systems for everyday life. Each product solves one real decision — with structure, clarity, and privacy in mind.

| Product | Domain | Tagline |
|---------|--------|---------|
| **Meal Coach** | Health AI | Eat Better |
| **Cook AI** | Cooking AI | Cook Smarter |
| **Outfit AI** | Style AI | Dress Smarter |
| **Routine AI** | Habits AI | Live Better |
| **Parent AI** | Parenting AI | Family Support |
| **Travel AI** | Travel AI | Explore Better |
| **Investment Assistant** | Finance AI | Invest Smarter |

Meal Coach is live. Other products are in development with UX demos on the site.

## Features

- **7 AI decision systems** — each focused on one life domain
- **Mobile-first design** — optimized for phones, works great on desktop
- **Light + dark themes** — icons, screenshots, and UI all adapt
- **3 languages** — English, Chinese (中文), Korean (한국어)
- **SEO optimized** — sitemap, JSON-LD structured data, per-page metadata
- **Custom AI builds** — we also build AI products for teams and founders

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

- **Email:** xing@xingai.app
- **Web:** [xingai-dot-app.vercel.app](https://xingai-dot-app.vercel.app/)
- **LinkedIn:** [xingaiapp](https://www.linkedin.com/in/xingaiapp/)
- **X/Twitter:** [@XingAIApp](https://x.com/XingAIApp)

## Have an idea?

We also build custom AI products for teams and founders. Share your idea — we'll design, build, and ship it with you.

[Tell us your idea →](https://xingai-dot-app.vercel.app/contact)

---

© xingai.app
