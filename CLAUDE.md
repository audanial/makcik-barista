# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server (Turbopack, outputs to .next/dev)
npm run build     # Production build (Turbopack by default)
npm run start     # Start production server
npm run lint      # Run ESLint directly (next lint is removed in v16)
```

There is no test runner configured yet.

## Architecture

This is a **Next.js 16** App Router project with TypeScript and Tailwind CSS v4.

- `app/` — App Router root. `layout.tsx` is the required root layout; `page.tsx` is the home route.
- `public/` — Static assets served from `/`.
- Import alias `@/*` resolves to the project root (e.g. `@/app/ui/button`).
- Tailwind CSS v4 is configured via PostCSS (`postcss.config.mjs`). There is no `tailwind.config.*` file — v4 uses CSS-first configuration.
- ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

## Next.js 16 Breaking Changes to Know

**Before writing any code, read the relevant guide in `node_modules/next/dist/docs/`.** The full v15→v16 upgrade notes are at `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`.

Key changes most likely to cause mistakes:

- **Async Request APIs** — `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are all async and must be awaited. Synchronous access is fully removed.
  ```tsx
  // Correct in v16
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
  }
  ```
- **`middleware` → `proxy`** — The `middleware.ts` file and its named export are renamed to `proxy.ts` / `export function proxy(request)`. The `edge` runtime is not supported in `proxy`.
- **`next lint` removed** — Use `eslint` directly. `next build` no longer runs the linter.
- **`revalidateTag` requires a second arg** — `revalidateTag('tag', 'max')`. Single-arg form is deprecated.
- **Parallel routes require `default.js`** — Every `@slot` must have an explicit `default.js`; builds fail without it.
- **PPR** — Use `cacheComponents: true` in `next.config.ts` (not `experimental.ppr`).
- **`serverRuntimeConfig` / `publicRuntimeConfig` removed** — Use `process.env` and `NEXT_PUBLIC_` prefix instead.
- **`next/legacy/image` deprecated** — Use `next/image`.
- **`images.domains` deprecated** — Use `images.remotePatterns`.
- **`dev` outputs to `.next/dev`**, not `.next`.
- **Turbopack is the default** for both `next dev` and `next build`. Use `--webpack` to opt out.

## Project

Makcik Barista — F&B marketing website for a family business.

## Brand
- Name: MakCik Barista
- Tagline: Harom & Hirup
- WhatsApp: +60123260160
- Socials: @makcik.barista (IG/TikTok), makcik.barista@gmail.com
- Location: Kepong, Kuala Lumpur
- Colors: green #2D5A27, cream #F9F4EC, brown #3B1F0E, brown-light #C07840
- Fonts: Cormorant Garamond (headings), Inter (body)

## Stack
- Next.js 16 App Router, TypeScript, Tailwind CSS v4, Vercel

## Conventions
- Mobile-first
- All WhatsApp links use /lib/whatsapp.ts waLink() helper
- No cart, no payment, no admin in v1
- Order flow: WhatsApp only

## Sprints
- Sprint 1: Layout, Home, Menu (current)
- Sprint 2: Events page, About page
- Sprint 3: AI Chatbot (Claude API)
``

## Sprint 2 — Events & About Pages

### Events page requirements
- What we offer section: food truck, event stalls, catering, delivery
- Suitable for: Wedding, Corporate, Birthday, School/Campus, Community, Private
- Past event gallery: static image grid (use photos from /public/images/)
- Booking inquiry form fields: Name, Contact, Date, Location, Pax, Event Type, Notes
- Form submit: build WhatsApp message from fields, call waLink(message), open in new tab
- Fallback: show direct WhatsApp button if redirect fails
- Form validation: Name, Contact, Date, Location, Pax, Event Type are required

### About page requirements
- Brand story: family business, mom is main barista, started from Coffee Classic
- Name origin: Makcik = her, Barista = person who makes drinks
- Tagline: Harom & Hirup
- Meet the team: Maziah (main barista), family support
- Values: warmth, craft, community, family
- CTA: WhatsApp + social links

### Constraints
- waLink() accepts message string only — phone already hardcoded
- Use bg-[#F9F4EC], text-[#2D5A27], text-[#3B1F0E] for brand colors
- Static metadata export on both pages
- Mobile-first layout
