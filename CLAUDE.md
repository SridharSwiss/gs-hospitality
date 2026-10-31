# GS Hospitality Website — gs-hospitality.ch

## ⚠️ CRITICAL: ALWAYS USE THIS REPO

- **Production repo**: `SridharSwiss/gs-hospitality` → `/home/user/gs-hospitality`
- **DO NOT commit to `SridharSwiss/Elaichi`** — stale mirror, no longer used
- Every push to `main` auto-deploys to gs-hospitality.ch via Vercel

---

## Stack

Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion.

- Source: `src/app/` (pages) + `src/components/` (shared)
- Assets: `public/assets/img/` (images), `public/assets/docs/` (PDFs)
- Build: `npm run build` | Dev: `npm run dev`

---

## Never Change

| Constant | Value |
|---|---|
| WhatsApp | `41795489025` (wa.me/41795489025) |
| Email | `hello@gs-hospitality.ch` |
| Domain | `gs-hospitality.ch` |
| Davos dates | Jan 19–23, 2027 |
| All pricing | "On Request" only — no CHF amounts |
| Nav order | Home → Davos 2027 → Accommodations → Services → Swiss Travel → Tours → Contact |

No WEF / World Economic Forum / Congress Centre brand names in any public-facing copy.
No other brand logos or names visible anywhere.
Disclaimers: only where factually required; no hallucinated regulations.

---

## Design System

Colours: `--gold: #C5A059` | `--gold-light: #D4B870` | `--bg: #050508`
Fonts: Playfair Display (headings) + Inter (body)
Glass: `backdrop-filter: blur(20px)` + `rgba(255,255,255,0.04)` surface

Hero overlay pattern: `linear-gradient(rgba(5,5,5,0.65), rgba(5,5,5,0.65))` layered over image.
Section overlay: `rgba(5,5,5,0.92)` minimum for readability.

---

## SEO / Schema

Every page exports `metadata` (Next.js API) + JSON-LD structured data.
Types: TravelAgency, LodgingBusiness, Event, FAQPage, BreadcrumbList.

---

## Review Agents

- `/seo-review` — full SEO audit, auto-fixes Critical/High
- `/quality-review` — data quality audit, auto-fixes Critical/High
