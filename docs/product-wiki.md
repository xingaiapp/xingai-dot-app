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
| Meal AI | `meal.xingai.app` | `xingai-meal-coach-ai` | Eating Decision | Quick Decide + optional Health Mode |
| Cook AI | `cook.xingai.app` | `xingai-cook-ai` | Cooking decision flow | Pantry memory + saved recipes |
| Invest AI | `invest.xingai.app` | `xingai-invest-ai` | Risk-first decision board | More engines + MCP integrations |
| Outfit AI | `wear.xingai.app` | `xingai-outfit-ai` | Outfit decision flow | Wardrobe-aware recommendations |
| Routine AI | `routine.xingai.app` | `xingai-routine-ai` | Weekly rhythm decision flow | Saved routines + accountability |
| Travel AI | `travel.xingai.app` | `xingai-travel-ai` | Trip decision support | Itinerary trade-offs + local context |
