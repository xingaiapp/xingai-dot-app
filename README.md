# XingAI — AI Decision Systems for Everyday Life

> Not a chatbot. Not a wrapper. Focused AI products that help you decide.

**Version:** 2026.10.01k

**Live at [xingai.app](https://xingai.app/)** — flagship: [AI Industry Map](https://invest.xingai.app/ai-map)

### Current version notes

`2026.10.01k` Typewriter on hero card heading “Capture once. Evolve forever.” (letter-by-letter, loops with a short pause); long `heroSub` lead is static again.

`2026.10.01j` Hero typewriter slowed (~28ms/char, up to ~14s for long EN lead).

`2026.10.01i` Homepage hero lead (`heroSub`) types in on load (en / 中文 / 한국어); respects `prefers-reduced-motion`; caret fades after finish.

`2026.10.01h` Homepage System Spine: center the desktop circle board when `max-height` shrinks its width (was hugging the left edge of a wider card).

`2026.10.01g` Catalog honesty: Passive Income Idea → **live**; register **Tech Blog** as live at [blog.xingai.app](https://blog.xingai.app/) with demo shots + `/engineering` link. Replaces stale PR #7 / `feat/register-tech-blog` (coming-soon) work.

`2026.10.01f` Homepage hero hierarchy: page `h1` “AI Decision Systems” + story-aligned subtitle and card `h2` (“Capture once. Evolve forever.”); longer hero lead; more left-column spacing; mobile shows the product carousel above the copy. `HomeSystemLoop` is a desktop circle with per-node accents, heavier arrowed arcs, and a center ring (stack on phone). `/story` keeps the detailed spine + 5W product expanders. Design refs under `docs/ux/`.

`2026.10.01e` Story + homepage system loop polish: clearer spine roles on `HomeSystemLoop`; `/story` product rows expand to Who / What / Where / When / Why (from catalog fields). Desktop loop connectors use a flowing light along SVG paths (`prefers-reduced-motion` stays static). No new family page — upgrades the existing story map.

`2026.10.01d` Status badges: no emoji; every status (Live / Demo / Coming soon, en / 中文 / 한국어) uses the same CSS dot, only Live pulses (off under reduced motion). Homepage Demos cards read status from the catalog (T Today = Demo, matching /apps); “What can I use XingAI for today?” separates Live from public demos.

`2026.10.01c` Theme follows the OS by default: no stored choice means “System” (tracks live OS changes); the theme menu adds System / 跟随系统 / 시스템 설정. Only explicit choices are stored, under `xingai.theme`; a legacy auto-written `theme=light` is treated as unset, a legacy `dark` is kept.

`2026.10.01b` Investment product renamed to **XingAI Invest AI** in the catalog, JSON-LD and legal headings (en / 中文 / 한국어), matching invest.xingai.app. AI Industry Map stays the feature name; `/apps/investment-assistant` URL unchanged.

`2026.10.01a` Homepage hero de-duplication: hero leads with Invest (then Travel, Cook, Eating Decision, SAT) and drops the “Jump into a free demo” list and the “Explore core systems” grid, which repeated the carousel. The carousel keeps its dots plus a “See all systems” link; the curated Start here shelf (Invest / Travel / Cook / ShopRadar) is unchanged. Invest preview image is now a current `/ai-map` capture.

`2026.09.30c` Home Demos: T Today lead says early access via Contact (matches `/contact` card link; no longer implies a direct open of t.xingai.app).

`2026.09.30b` Travel AI catalog honesty: trip history is Free (this browser only), not a Pro upsell; local history roadmap → shipped; synced/account history → planned.

`2026.09.30a` Team page: EN + KO relationship cartoons — section no longer zh-only; localized heading/alt + `/team/team-cartoon-{en,zh,ko}.webp`.

`2026.09.28l` Eating Decision honesty (Eat This Much R2): Scan Plate feature = photo attach (vision not live); roadmap splits attach shipped vs plate OCR planned; product name stays XingAI Eating Decision.

`2026.09.28k` Daily Assistant: roadmap marks device-local persisted todos as shipped (Gmail OAuth still Planned).

`2026.09.28j` Travel AI deep-audit SEO: app detail pages get their own WebPage + product FAQ (no more homepage FAQ bleed); OG prefers dark screenshot when available; Travel GitHub source CTA restored (repo public).

`2026.09.28i` Homepage hero core systems: add Travel AI as the 5th card (carousel + Jump into a free demo).

`2026.09.28h` Routine AI honesty: roadmap demotes OpenAI recommendations to **Planned**; ships Demo rhythm engine + live `routine.xingai.app`; features say demo + optional OpenAI and device-local light check-in.

`2026.09.28g` ShopRadar catalog alias: `/apps/shopradar` → `/apps/shop-radar` (en / zh / ko) so detail pages stop 404ing on the hyphen-less URL.

`2026.09.28f` Engineering Communication Coach honesty: public GitHub source (was 404 private); deploy roadmap **Planned** (DNS still NXDOMAIN, not In progress); `llms.txt` coming-soon line. Catalog stays noindex until engineering-coach.xingai.app is live. Coming-soon footer CTA / ItemList fixes from 28e still apply.

`2026.09.28e` Parent AI honesty: PreOrder offer → `/contact`; coming-soon footer CTA is early access (not “Try free demo”); drop meta keywords on app pages; public catalog ItemList includes Coming soon (still noindex until live domain); Parent features + `llms.txt` line.

`2026.09.28d` Founder AI honesty: roadmap uses **Built (internal)** instead of Shipped while Coming soon; product OG image; coming-soon FAQ JSON-LD; PreOrder offer points to `/contact`; `llms.txt` lists Founder AI. Catalog stays noindex until founder.xingai.app is live.

`2026.09.28c` Passive Income Idea: catalog **Demo** (not Coming soon) with live [passive.xingai.app](https://passive.xingai.app/), deploy roadmap shipped, public GitHub, sitemap/indexable, and mother-site `llms.txt` product line.

`2026.09.28b` Trust fixes: hero preview no longer clamps value props; `/legal` index lists Privacy / Terms / Disclaimer (was 404); early-access apps (T Today) use “Request early access” instead of a fake Live demo on Free.

`2026.09.28` Investment Assistant catalog: research console feature says free with sign-in (en / 中文 / 한국어); app detail `<title>` / Open Graph / Twitter titles share the same `| XingAI` suffix.

`2026.09.27` adds the “How XingAI works” illustration to /story as a
desktop-only hero (light/dark pair: `how-xingai-works-light.webp` /
`-dark.webp`, hidden under 48rem where the HTML loop carries the content) and
replaces `story-og.jpg` with a 1200×630 version of the dark illustration.
Localized alt text and OG alt copy updated.

`2026.09.26d` marks Idea Vault (#001) as **Available today** on `/story` once
`vault.xingai.app` is live. `llms.txt` points at the private login URL.

`2026.09.26c` adds a compact “How XingAI works” loop block on the homepage,
between the Start here shelf and Quick answers. It reads the same
`systemLayers` data as /story, so stage tags (Available today / Being built /
Planned) stay in sync, and the whole card links to /story. Hero and CTAs are
unchanged.

`2026.09.26b` renames the homepage and About links to /story to “How XingAI
turns ideas into products” in en / zh / ko. Nothing else on the homepage changes.

`2026.09.26` rewrites **/story** as “How XingAI works”: a loop diagram
(Idea → Idea Vault #001 → Orchestrator #002 → agents → apps → Evidence /
Growth / Ops → back to the Vault) with each layer tagged Available today /
Being built / Planned. All 22 catalog apps are now grouped by domain
(Everyday, Learning, Investing, Research & ventures), and a separate trust and
feedback section covers Evidence Engine, Growth Monitor, Ops Status and Eval
Registry. The Invest flow, Try it and About sections stay as before. `llms.txt`
gains a matching “How XingAI works” block.

`2026.09.25e` puts **ShopRadar** on the homepage “Start here” shelf with
Invest / Travel / Cook, and moves the catalog card next to Travel (Commerce AI).
Waitlist: [shopradar.xingai.app](https://shopradar.xingai.app/).

`2026.09.25d` restyles homepage “See all apps” as a green Live-badge CTA
(`cta--browse`) — same status-live tokens as the Live pill, larger touch target.

`2026.09.25c` turns the homepage “See all apps” control into an outline CTA
button (same pattern as hero secondary), instead of a small `section-lead` link.

`2026.09.25b` wires Bing IndexNow (public key file + `scripts/submit-indexnow.py`)
and points README contact / deployment notes at **xingai.app** (Vercel alias is
preview-only, not the product URL).

`2026.09.25` first registered **ShopRadar** (`shop-radar`) on the catalog only.
It is now also on the homepage shelf (see `2026.09.25e`).

`2026.09.25` also tightens SEO / AEO / GEO: short home meta, fixed `og:title`,
FAQ + `llms.txt` aligned on the Industry Map, homepage shelf is Invest / Travel /
Cook, and coming-soon plus internal ops pages are `noindex` and off the sitemap.

`2026.09.25` points the homepage primary CTA at the Invest AI Industry Map
(`invest.xingai.app/ai-map`) and hides Growth Monitor from the homepage shelf
(it stays on `/apps`). The Decision Agent catalog preview is also replaced:
the old 760×620 SVG went through `next/image` and showed as a black card. The
new light/dark pair is 1536×1024 (same 3:2 crop as other app cards) and SVG
thumbs skip the optimizer.

`2026.09.24` lists **XingAI Decision Agent** as a public demo at
[decision.xingai.app](https://decision.xingai.app/). The catalog card now has a
live CTA, EN / 中文 / 한국어 copy, and notes that `/demo` only renders Invest AI
worker cache (ADR-053). Custom-domain DNS is in place.

`2026.09.20` also points **Investment Assistant** live demo at [invest.xingai.app/ai-map](https://invest.xingai.app/ai-map) (the public research map). Copy no longer sends visitors to the signed-in dashboard or describes the product as an allocation board.

`2026.09.06` adds **Passive Income Idea** (`passive-income`) — one-Idea research shell at [passive.xingai.app](https://passive.xingai.app/); see `2026.09.28c` for demo status alignment.

`2026.07.26` adds two new demo products to the catalog: **Evidence Engine** (`evidence-engine`) — claim → evidence → citation verification with a light/dark dashboard — and **Eval Registry** (`eval-registry`) — an Every-Eval-Ever-compatible evaluation registry with a fail-on-regression CI gate ([GitHub](https://github.com/xingaiapp/xingai-eval-registry)).

`2026.07.16` adds **Ops Status** to the product catalog as a demo (`ops-status`) — lightweight HTTP uptime board at [xingai-ops-status.vercel.app](https://xingai-ops-status.vercel.app/), with light/dark screenshots.

`2026.07.16` also adds **Engineering Communication Coach** as coming soon (`engineering-coach`), with light/dark demo screenshots and a 14-day communication curriculum.

`2026.07.14` adds **Learn AI** to the product catalog as a separate demo product from Research AI.

---

## What is XingAI?

XingAI builds focused AI decision systems for everyday life. Each product solves one real decision — with structure, clarity, and privacy in mind.

| Product | Domain | Tagline |
|---------|--------|---------|
| **Eating Decision** | Health AI | Eat Better |
| **Cook AI** | Cooking AI | Cook Smarter |
| **Wear AI** | Style AI | Dress Smarter |
| **Routine AI** | Habits AI | Live Better |
| **SAT AI** | Education AI | Prep Smarter |
| **Research AI** | Learning AI | Decide What to Learn |
| **Learn AI** | Learning AI | Learn With Structure |
| **Engineering Communication Coach** | Learning AI | Speak Like a Senior |
| **Tech Blog** | Engineering | How We Ship |
| **Parent AI** | Parenting AI | Family Support |
| **Travel AI** | Travel AI | Explore Better |
| **Decision Agent** | Finance AI | Outcome In. Decision Out. |
| **ShopRadar** | Commerce AI | Stop Guessing What To Sell |
| **Invest AI** | Finance AI | Invest Smarter |
| **Performance Sim** | Finance AI | Simulate Rules |
| **T Today** | Finance AI | Plan Today |
| **Growth Monitor** | Operations AI | Fix Pages First |
| **Ops Status** | Operations AI | Uptime at a Glance |
| **Evidence Engine** | Research AI | Verify Every Claim |
| **Eval Registry** | Operations AI | Diff Your Evals |

**Eating Decision** ([meal.xingai.app](https://meal.xingai.app/)), **Cook AI** ([cook.xingai.app](https://cook.xingai.app/)), **Wear AI**, **Travel AI** ([travel.xingai.app](https://travel.xingai.app/)), and **Invest AI** ([invest.xingai.app](https://invest.xingai.app/ai-map)) are live. **Tech Blog** is live at [blog.xingai.app](https://blog.xingai.app/). **Passive Income Idea** is live at [passive.xingai.app](https://passive.xingai.app/). **Decision Agent** is a public demo at [decision.xingai.app](https://decision.xingai.app/). **ShopRadar** is a waitlist demo at [shopradar.xingai.app](https://shopradar.xingai.app/). **SAT AI** is available as a demo at [sat.xingai.app](https://sat.xingai.app/). **Research AI** is available as a demo at [research.xingai.app](https://research.xingai.app/). **Learn AI** is available as a demo at [learn.xingai.app](https://learn.xingai.app/). **Engineering Communication Coach** is coming soon ([GitHub](https://github.com/xingaiapp/xingai-engineering-coach-ai)). **Growth Monitor** is early access at [growth.xingai.app](https://growth.xingai.app/). **Ops Status** is a demo at [xingai-ops-status.vercel.app](https://xingai-ops-status.vercel.app/). **Evidence Engine** and **Eval Registry** are engineering demos on the site; Eval Registry is open source ([GitHub](https://github.com/xingaiapp/xingai-eval-registry)). **Performance Sim** is available at [lab.xingai.app](https://lab.xingai.app/). **T Today** at [t.xingai.app](https://t.xingai.app/) is early access—free to request via [contact@xingai.app](mailto:contact@xingai.app). Parent AI is in development with a UX demo on the site.

## Features

- **19 AI products** — life domains plus Decision Agent, ShopRadar, Growth Monitor, Ops Status, Evidence Engine, and Eval Registry for research & ops
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

Regenerate Learn AI marketing screenshots (desktop 3:2, light + dark):

```bash
# Learn AI API :8002 + web :3002 (see xingai-learn README)
npm run capture:learn
```

## Deployment Notes

**Public URL:** [https://xingai.app/](https://xingai.app/). Use that in docs, product cards, and cross-links.

`https://xingai-dot-app.vercel.app/` is the Vercel project alias (preview / fallback only). Do not use one-off deployment URLs.

After a production deploy that includes the IndexNow key file, run `python3 scripts/submit-indexnow.py` to notify Bing.

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
- **Web:** [xingai.app](https://xingai.app/)
- **LinkedIn:** [xingaiapp](https://www.linkedin.com/in/xingaiapp/)
- **X/Twitter:** [@XingAIApp](https://x.com/XingAIApp)

## Have an idea?

We also build custom AI products for teams and founders. Share your idea — we'll design, build, and ship it with you.

[Tell us your idea →](https://xingai.app/contact)

---

© xingai.app
