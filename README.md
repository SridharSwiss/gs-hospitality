# GS Hospitality — gs-hospitality.ch

**Davos Summit Hospitality Specialists** — premium accommodation and concierge services for the Davos Annual Meeting 2027.

---

## Live Site

**https://gs-hospitality.ch**

Deployed via Vercel. Every push to `main` auto-deploys to production.

---

## Repository

| | |
|---|---|
| **Repo** | `SridharSwiss/gs-hospitality` |
| **Branch** | `main` → production |
| **Working dir** | `/home/user/gs-hospitality` |

> ⚠️ **Always work in this repo.** The `SridharSwiss/Elaichi` repo is a stale mirror — never commit there.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + custom CSS variables |
| Animations | Framer Motion |
| Fonts | Playfair Display (headings) + Inter (body) via Google Fonts |
| Images | Unsplash (royalty-free, self-hosted in `public/assets/img/`) |
| Deployment | Vercel (auto-deploy on `main` push) |
| SEO | Next.js metadata API, Schema.org JSON-LD |

---

## Site Structure

| Route | File | Page |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — entry gate, hero, featured listings, stats |
| `/davos-2027` | `src/app/davos-2027/page.tsx` | Davos Summit 2027 guide |
| `/accommodations` | `src/app/accommodations/page.tsx` | Luxury chalets, HQ venues, apartments |
| `/services` | `src/app/services/page.tsx` | Lounge, AV, events, catering, corporate |
| `/swiss-travel` | `src/app/swiss-travel/page.tsx` | Travel guide — Zurich → Davos, visas, tips |
| `/tours` | `src/app/tours/page.tsx` | Swiss tours — Glacier Express, Zermatt, Jungfraujoch |
| `/contact` | `src/app/contact/page.tsx` | WhatsApp contact + enquiry form |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy policy |
| `/terms` | `src/app/terms/page.tsx` | Terms & conditions |

Shared components: `src/components/` — Nav, Footer, HeroSection, EntryGate, GlassCard, WhatsAppButton, etc.

---

## Design System

### Colour Tokens

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#C5A059` | Primary accent, CTAs, active states |
| `--gold-light` | `#D4B870` | Hover states, gradient highlights |
| `--gold-dark` | `#A8893D` | Pressed states, borders |
| `--bg` | `#050508` | Page background |
| `--surface` | `rgba(255,255,255,0.04)` | Glass cards |
| `--border` | `rgba(255,255,255,0.08)` | Card borders |
| `--text` | `#F0EDE8` | Body text |
| `--text-muted` | `rgba(240,237,232,0.55)` | Secondary text |

### Glass Morphism Pattern

```css
.glass-card {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
}
```

### Animation System (Framer Motion)

- `fadeInUp` — reveal on scroll (cards, sections)
- `staggerContainer` — cascade children
- `parallaxHero` — hero image parallax on scroll
- `glowPulse` — gold CTA breathing glow

### Hero Pattern

Every page hero uses:
- Full-bleed background image (`/assets/img/heroes/`)
- Dark overlay: `linear-gradient(rgba(5,5,5,0.65), rgba(5,5,5,0.65))`
- Gold radial accent gradients at top and bottom
- `::after` gradient fade to page background

---

## Key Constants — DO NOT CHANGE

| Constant | Value |
|---|---|
| WhatsApp | `41795489025` (wa.me/41795489025) |
| Email | `hello@gs-hospitality.ch` |
| Domain | `gs-hospitality.ch` |
| Davos Meeting dates | Jan 19–23, 2027 |
| Nav order | Home → Davos 2027 → Accommodations → Services → Swiss Travel → Tours → Contact |
| All pricing | "On Request" only — no CHF amounts anywhere |

---

## Featured Properties

5 property cards, all pricing "On Request":

| # | Property | Type | Guests | Distance |
|---|---|---|---|---|
| 1 | Grünistrasse 2a | 2BR Apartment | 2 | 1.9km to Congress |
| 2 | Talstrasse 19 | 2BR Apartment | 4 | 1km (closest) |
| 3 | Lehenweg 26, Klosters | 3BR Chalet + Sauna | 3 | 22min drive |
| 4 | Davos Summit Apartment | 3.5-room near Promenade | 3 | 2min to Promenade |
| 5 | Alpine Chalet Klosters Haus | 4.5-room + Garden | 6 | Klosters village |

PDF brochures in `public/assets/docs/` — not publicly downloadable; clients request via WhatsApp.

---

## Asset Structure

```
public/
  assets/
    img/
      heroes/          — 7 hero images (home, wef, accommodations, services, travel, tours, contact)
      properties/      — property listing photos
      site/            — icon replacements, section imagery
      sections/        — section background images
      tours/           — Swiss tour photography
    docs/              — PDF property brochures
```

---

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run type-check   # TypeScript check
```

Push to `main` → Vercel auto-deploys to gs-hospitality.ch.

---

## Available Review Agents

Run after page updates:

- **`/seo-review`** — SEO audit: titles, meta, schema, canonical URLs, H1s. Auto-fixes Critical/High.
- **`/quality-review`** — Data quality: factual accuracy, broken links, text artifacts. Auto-fixes Critical/High.

---

## Session Change Log

### Redesign to Next.js + TypeScript (2026-10)
- Full rebuild from static HTML to Next.js 14 App Router + TypeScript
- Glassmorphism luxury design system with Framer Motion animations
- All 7 content pages ported with full content parity
- Mobile nav `aria-expanded` accessibility fix applied

### Image Overhaul (2026-10)
- Replaced all emoji icons with royalty-free Unsplash images (self-hosted)
- Hero background images added to all 7 pages
- Section background images added to all content sections
- Dark overlays ensure text readability throughout

### Mobile Nav Fix (2026-10)
- `aria-expanded` now updates correctly on hamburger toggle
- Close button and link clicks properly reset accessibility state
- All 7 pages patched

### Content & Infrastructure (2026-09/10)
- Entry gate (consent gate) with sessionStorage persistence
- Featured listings banner with 5 property CTAs
- Schema.org structured data: TravelAgency, LodgingBusiness, Event, FAQPage
- `sitemap.xml` + `robots.txt` SEO infrastructure
- All pricing set to "On Request" — no CHF amounts
- WhatsApp-first contact flow (wa.me/41795489025)
