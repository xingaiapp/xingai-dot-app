# XingAI Dot App Domain And Deployment Notes

Last updated: 2026-09-25

## Canonical public URL

**Product URL:** `https://xingai.app/`

Use that in docs, product cards, README contact links, and cross-links.

## Vercel project alias (not the product URL)

```text
https://xingai-dot-app.vercel.app/
```

This is the Vercel project alias (preview / fallback). Do **not** use it as the
public product URL. Do **not** use one-off deployment URLs either:

```text
https://xingai-dot-kkh7xinhk-xingaiapps-projects.vercel.app
```

## Alias Policy

- **Public:** `https://xingai.app/`
- **Vercel alias:** `https://xingai-dot-app.vercel.app/` (ops / preview only)
- Product demos stay on their own `*.xingai.app` hosts (e.g. `wear.xingai.app`)

## IndexNow (Bing)

After a production deploy that includes `public/{64-hex}.txt`:

```bash
python3 scripts/submit-indexnow.py
```

Helper: `app/lib/indexnow.ts` (`notifyIndexNow`). Key is public by protocol.
