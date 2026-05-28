# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

@AGENTS.md

---

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test runner configured yet.

---

## Architecture

**Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Vercel

**Structure:**
- `app/` — App Router root
- `components/` — Shared UI components
- `lib/` — Utilities and helpers
- `public/` — Static assets
- `@/*` — Alias resolves to project root

**Tailwind v4:** CSS-first config via PostCSS. No `tailwind.config.*` file.

---

## Next.js 16 Notes

- Async APIs must be awaited: `cookies()`, `headers()`, `draftMode()`, `params`, `searchParams`
- `middleware.ts` → `proxy.ts`
- `next lint` removed — use `eslint` directly
- Use `next/image`, not legacy image
- `images.domains` deprecated → use `remotePatterns`
- Turbopack is default for dev and build
- Dev outputs to `.next/dev`

---

## Project — MakCik Barista

Real Malaysian family-run F&B brand. Kepong, Kuala Lumpur.

**What we do:** Premium handcrafted drinks · Slow bar coffee · Event catering · Home delivery

**The website should feel:** Warm · Cinematic · Handcrafted · Calm · Premium-local · Emotionally authentic

**The website should NOT feel:** Corporate · Generic café template · Startup/SaaS · Overly futuristic

---

## Brand

| | |
|---|---|
| Name | MakCik Barista |
| Tagline | HAROM & HIRUP |
| Location | Kepong, Kuala Lumpur |
| WhatsApp | +60123260160 |
| Instagram/TikTok | @makcik.barista |
| Email | makcik.barista@gmail.com |

**Colors:**
- Green: `#1E3D1A`
- Green light: `#2D5A27`
- Cream: `#FAF7F2`
- Cream dark: `#F0EBE1`
- Brown: `#1C1008`
- Gold: `#B8692E`

**Fonts:** Cormorant Garamond (headings) · Inter (body)

---

## Product Direction

Priority order:
1. Emotional storytelling
2. Event bookings
3. Brand trust
4. Handcrafted authenticity
5. Mobile-first experience

Strongest differentiator:
> Real human warmth + artisan slow bar experience

---

## UX & Design Guardrails

**Prefer:**
- Cinematic imagery and authentic photography
- Premium editorial typography
- Warm Malaysian identity
- Restrained layouts
- Emotional storytelling
- One dominant CTA per section

**Avoid:**
- Glassmorphism, excessive gradients
- Flashy startup aesthetics
- Cluttered sections
- Unnecessary animations
- Generic stock imagery
- Competing CTAs

---

## Conventions

- Mobile-first always
- All WhatsApp links use `waLink()` from `/lib/whatsapp.ts`
- WhatsApp number: `60128690160` (testing) → switch to `60123260160` before launch
- Order flow: WhatsApp-first
- Cart system: WhatsApp-based, no payment gateway in v1

---

## AI Workflow Rules

Before making changes:
- Inspect existing implementation first
- Understand current hierarchy and branding
- Do NOT touch files not mentioned in the task
- Preserve existing atmosphere unless instructed
- Implement sprint-by-sprint, prefer refinement over rewrites
- Maintain mobile responsiveness at all times

---

## Sprint Status

| Sprint | Status | Focus |
|---|---|---|
| Sprint 1 | ✅ Done | Scaffold, Home, Menu |
| Sprint 2 | ✅ Done | Events, About |
| Sprint 2.5 | ✅ Done | Design overhaul, animations |
| Sprint 2.6 | ✅ Done | Schools focus, cart, delivery, logo |
| Sprint 2.7 | 🔲 Next | Hero refinement, typography |
| Sprint 2.8 | 🔲 Pending | Events booking optimization |
| Sprint 2.9 | 🔲 Pending | Menu improvements |
| Sprint 3.0 | 🔲 Pending | Slow bar storytelling |
| Sprint 3 | 🔲 Pending | AI Chatbot (Claude API) |
| Sprint 4 | 🔲 Pending | QA & Testing |
| Sprint 5 | 🔲 Pending | Deployment & custom domain |

---

## Logo

- File: `/public/images/logo3.png` — transparent background, circular icon only
- Used in: Navbar (left, 52×52) + Footer (80×80)
- Clicking logo on home page → lightbox. Other pages → navigate to `/`

---

## Delivery System

- Areas: Kepong (RM3) · Sri Damansara/Taman Kepong (RM5) · Segambut/Mont Kiara/Sentul (RM7) · Jalan Ipoh/Batu Caves (RM9)
- Hours: Tue–Fri 10am–6pm · Sat 9am–7pm · Sun 10am–4pm · Mon closed
- Minimum: RM15 drinks only · RM25 food + drinks
- Method: Self-delivery by family

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Live |
| Menu | `/menu` | ✅ Live |
| Events & Catering | `/events` | ✅ Live |
| About | `/about` | ✅ Live |
| Delivery Info | `/delivery` | ✅ Live |
| AI Chatbot | `/api/chat` | 🔲 Sprint 3 |

Key changes I made:

Removed redundant repetition
Added updated color tokens (we refined them in Sprint 2.5)
Added sprint status table
Added logo and delivery system sections
Added the temp testing number note
Cleaner table formatting throughout