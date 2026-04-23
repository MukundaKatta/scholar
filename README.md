# Scholar

Your all-nighter research assistant. Pick a topic. Scholar reads fifty sources, synthesizes the arguments, and hands you an outline with citations.

**Status:** v0 skeleton — landing page + citation-preview route. Full AI not yet wired.

**Landing:** https://scholar.vercel.app

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub and import the repo in Vercel. No environment variables required — the waitlist API URL is public and hardcoded.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (ported from `index.html`) with waitlist form |
| `/try` | Enter a research topic → 3 mocked citations (6 pre-loaded topics) |
| `/api/waitlist` | POST `{ email }` → forwards to waitlist-api-sigma with `product: "scholar"` |
