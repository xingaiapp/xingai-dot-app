# XingAI Internal Product / Project Wiki

This is an internal repo document for product/project rules. Do not publish this content as a public website page unless an auth-gated internal area exists.

Audience:

- XingAI team
- Cursor / Codex / agent workflows
- Product planning and implementation review

Not public-facing:

- Repo map
- Version upgrade rules
- Internal roadmap labels
- Agent execution rules

## Core Rule

> 不是重做新产品，而是在前一版上升级。

Every next version must:

1. **视觉对齐 product base**: preserve the established visual language, product identity, navigation model, and primary user flow.
2. **功能继承 previous version**: inherit the previous version's core user-facing functions before adding new capabilities.

## Version Formula

```txt
V2 = visual alignment with V1 + functional inheritance from V1 + V2 additions
V3 = visual alignment with V1 + functional inheritance from V2 + V3 additions
V4 = visual alignment with V1 + functional inheritance from V3 + V4 additions
```

## Where Wiki Content Lives

- Portfolio-level rules: `xingai-dot-app/docs/product-wiki.md`
- Global agent rule: workspace root `AGENTS.md`
- Product-specific rules: each product repo, usually `.cursor/rules/*.mdc` and `plan/`
- Public product catalog: `xingai-dot-app/app/apps`

## Current Product Map

| Product | App | Repo | Product base | Next additions |
|---|---|---|---|---|
| Eating Decision | `meal.xingai.app` | `xingai-meal-coach-ai` | Eating Decision | Quick Decide + optional Health Mode |
| Cook AI | `cook.xingai.app` | `xingai-cook-ai` | Decide-first: scan/confirm inventory → one meal → cook | Local Pantry / My Meals after Decision Completion + 7-day return |
| Invest AI | `invest.xingai.app` | `xingai-invest-ai` | AI Industry Map + cached research | Alerts you define; Pro sells capability |
| Wear AI | `wear.xingai.app` | `xingai-outfit-ai` | Outfit decision flow | Wardrobe-aware recommendations |
| Routine AI | `routine.xingai.app` | `xingai-routine-ai` | Weekly rhythm decision flow | Saved routines + accountability |
| SAT AI | `sat.xingai.app` | `xingai-sat-ai` | SAT mistake review flow | OCR confirmation + study plan |
| Research AI | `research.xingai.app` | `xingai-research-ai` | Learning go/no-go decision | Worker cache + hot discussions |
| Learn AI | `learn.xingai.app` | `xingai-learn-ai` | Guided learning session | Saved progress + spaced review |
| Travel AI | `travel.xingai.app` | `xingai-travel-ai` | Trip decision system | Region/city comparison + book-first itinerary |
| Decision Agent | `decision.xingai.app` | `xingai-decision-ai` | Outcome → cached public brief | Holdings-aware personal brief |
| Evidence Engine | demo card only (no subdomain yet) | `xingai-evidence-engine` (private) | Claim → evidence → citation verification | Atomic claim splitting + counter-evidence; public UI ships as Research AI Evidence Workspace |
| Eval Registry | demo card only (open source) | `xingai-eval-registry` (public) | EEE-shaped eval records + regression-gate diff | CI gates in consumer repos + evaluation card export |

## Marketing site — Team page

Public Team at `xingai.app` (`/[locale]/team`) follows the platform cast in [engineering-system ADR-004](https://github.com/xingaiapp/xingai-engineering-system/blob/main/docs/adr/004-team-visual-character-system.md):

- Character Bible + banter room ship; full org-chart posters stay in `public/team/` for later.
- Cast: 星哥 (Vision) + 牛夫人 / 至尊宝 / 小甜甜 / 二当家 / 华安 (Tech).
- Product agent roles on the homepage stay research / challenge / verify / UX / tech — brand nicknames and org-role nameplates are separate sets (do not mix in one image).
- Team must appear in desktop top nav and mobile bottom tabs (not drawer/footer only).

This repo has **no** `docs/adr/` yet. Product-local Team UX notes stay here / in README version notes until an ADR convention is explicitly opted in.
