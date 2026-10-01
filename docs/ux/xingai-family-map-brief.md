# XingAI Family Map — design brief (for xingai.app)

**Status:** Proposal · not shipped  
**Date:** 2026-10-01  
**Audience:** Marketing site `/story` or `/ecosystem` · investors · users  
**Stimulus:** A2A “Agent Registry” poster (critique only — do not copy)

---

## Verdict

**Yes — a clean family diagram belongs on xingai.app.** Users and partners need one picture of “what XingAI is building” without opening 20 product pages.

**No — do not use the Agent Registry / A2A layout as the template.** That poster is about *agents discovering agents by capability cards*. XingAI’s public story is about *decision products sharing a spine* (Vault → … → Apps → Trust), not LangGraph vs Google ADK vs custom frameworks.

Copying that layout would teach the wrong mental model: “XingAI = agent marketplace.” We are building **decision systems for everyday life and research**.

---

## What to keep from the example

| Keep | Why |
|------|-----|
| One glance hierarchy | Top = pieces, middle = how they relate, bottom = one loop |
| Color by role, not by hype | Everyday / Learning / Investing / Research / Ops |
| Short labels per node | Name + job, not feature lists |
| Discovery → act flow | Adapted: User → App → Evidence/Decision → Outcome |

## What to reject from the example

| Reject | Why |
|--------|-----|
| “Agent A/B/C + frameworks” | Internal stack ≠ user-facing family |
| Central “Agent Registry” as the hero | We have Idea Vault + product catalog, not A2A yellow pages |
| Endpoint / JSON-RPC / gRPC on a marketing poster | Engineering noise for visitors |
| Robot icons as the brand | Feels generic AI SaaS |

---

## Correct XingAI family model (already in `/story`)

Reuse `app/data/ecosystem.ts` — do not invent a second taxonomy.

```text
#001 Idea Vault (memory)     available
#002 Orchestrator            planned
Specialist agents            planned
Apps (products)              available
Trust / feedback             available (Growth Monitor, Ops, Eval, Evidence…)
```

Product domains (apps layer):

1. **Everyday** — Cook, Travel, Wear, Eating Decision, Routine, Daily, Parent  
2. **Learning** — Research AI, Learn, SAT, Eng Coach  
3. **Investing** — Investment Assistant, Decision Agent, Lab, T Today  
4. **Research / ventures** — ShopRadar, Passive Income, Founder  
5. **Operations / trust** — Growth Monitor, Ops Status, Eval Registry, Evidence Engine  

Internal-only (optional footnote, not hero cards): Growth Engine approve loop, n8n — **not** a public product.

---

## 5Ws per product (simple, site-ready)

One card / one row. Keep each answer ≤12 words.

| W | Prompt |
|---|--------|
| **Who** | Who is this for? |
| **What** | What decision does it help with? |
| **Where** | URL or “coming soon” |
| **When** | Live / demo / planned (honest) |
| **Why** | Why XingAI built it (one line) |

### Example rows (invest cluster)

| Product | Who | What | Where | When | Why |
|---------|-----|------|-------|------|-----|
| Investment Assistant | People researching AI supply chains | Where a company sits + evidence | invest.xingai.app | Live | System-level research, not a buy list |
| Decision Agent | People who want a brief before acting | Outcome → cached research brief → human confirm | decision.xingai.app | Demo | Decision-first UI over Invest cache |
| Performance Sim | Operators testing strategies offline | Lab for execution evidence | lab.xingai.app | Demo | Prove ideas before live risk |
| T Today | Traders wanting a daily plan | Checklist + early-access AI | t.xingai.app | Early access | Plan the day, not auto-trade |

*(Full catalog filled when we ship the page — pull from `apps.ts` + launchStatus.)*

---

## Recommended visual for the website (two pieces)

### Piece A — Family map poster (one image / SVG)

**Layout (top → bottom):**

1. Title: **XingAI Family — Decision systems, not chatbots**  
2. System spine (5 layers from `systemLayers`) with stage pills: Available / Building / Planned  
3. Apps band: 4–5 domain columns, product names only  
4. Footer loop: **Capture → Research → Decide → Build → Learn** (or SEE → UNDERSTAND → VERIFY → YOU DECIDE)  
5. Disclaimer one-liner: suggestions / research, not professional advice  

**Style:** XingAI oklch green, light + dark pair, language-neutral art + HTML labels (en/zh/ko).

### Piece B — Interactive 5W strip (HTML on `/story` or `/apps`)

Click a product → expand Who/What/Where/When/Why. Do **not** cram full 5Ws for 20 apps into the poster — it becomes unreadable on mobile.

---

## Placement on xingai.app

| Option | Use |
|--------|-----|
| Enhance `/story` | Best — already has system loop + domains |
| New `/family` or `/ecosystem` | Only if `/story` stays narrative and map needs room |
| Homepage hero | **No** — too dense; link “See the XingAI family” → story |

---

## Build order

1. ~~Agree this brief~~ → agreed: polish existing `/story` + `HomeSystemLoop`, do not add a parallel family page  
2. ~~Interactive 5W on `/story`~~ → shipped in branch `chore/story-homesystemloop-5w-polish` (`2026.10.01e`): expand product rows for Who/What/Where/When/Why from catalog fields  
3. Optional later: light/dark poster asset for social share only (not a second IA)  
4. Merge when reviewed  

---

## Open questions for Xing

1. ~~Poster only, or poster + interactive 5W on `/story`?~~ → Interactive 5W on `/story` + clearer home loop  
2. Show Idea Vault / Orchestrator on the public map (yes — already on story + home loop)  
3. Ops tools stay in Trust section (unchanged)  
