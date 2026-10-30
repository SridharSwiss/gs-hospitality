# GS Hospitality — gs-hospitality.ch

**Davos Summit Hospitality Specialists** — static HTML website for GS Hospitality, providing premium accommodation and services for the Davos Annual Meeting 2027.

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

> ⚠️ **Always work in this repo.** The `SridharSwiss/Elaichi` repo is a stale dev mirror — do not commit there.

---

## Site Structure

| File | Page |
|---|---|
| `index.html` | Homepage with entry gate, featured listings banner |
| `wef-2027.html` | Davos Summit 2027 guide (nav: "Davos 2027") |
| `accommodations.html` | 5 featured property listings + types/compare/FAQ |
| `services.html` | Lounge, AV, events, catering corporate services |
| `swiss-travel.html` | Travel guide — Zurich → Davos, visas, tips |
| `tours.html` | Swiss tours — Glacier Express, Zermatt, Jungfraujoch |
| `contact.html` | WhatsApp contact + enquiry form |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms & conditions |
| `davos-summit-2027.html` | Redirect → wef-2027.html |
| `sitemap.xml` | SEO sitemap |
| `robots.txt` | SEO robots |

---

## Featured Properties (accommodations.html)

5 property cards, all pricing "On Request":

| # | Property | Type | Guests | Distance |
|---|---|---|---|---|
| 1 | Grünistrasse 2a | 2BR Apartment | 2 | 1.9km to Congress |
| 2 | Talstrasse 19 | 2BR Apartment | 4 | 1km (closest) |
| 3 | Lehenweg 26, Klosters | 3BR Chalet + Sauna | 3 | 22min drive |
| 4 | Davos Summit Apartment | 3.5-room near Promenade | 3 | 2min to Promenade |
| 5 | Alpine Chalet Klosters Haus | 4.5-room + Garden | 6 | Klosters village |

### PDF Brochures

Stored in `assets/docs/`. **Not publicly downloadable** — clients request via WhatsApp CTA. Files:
- `GS_Hospitality_Gruenistrasse_2a_Davos_2027.pdf`
- `GS_Hospitality_Talstrasse_19_Davos_2027.pdf`
- `GS_Hospitality_Klosters_Chalet_Davos_2027.pdf`
- `GS_Hospitality_Davos_Summit_Apartment_2027.pdf`
- `GS_Hospitality_Davos_Klosters_Chalet_2027.pdf`

---

## Design System

| Token | Value |
|---|---|
| Primary gold | `--gold: #C5A059` |
| Background | `--bg: #050505` |
| Heading font | Cormorant Garamond (Google Fonts) |
| Body font | DM Sans (Google Fonts) |
| Style | Dark glass morphism |

- CSS and JS are **fully inlined** in each HTML file — no external asset dependencies
- Schema.org markup: TravelAgency, LodgingBusiness, Event, FAQPage, BreadcrumbList
- `.reveal` / `.stagger` CSS animation: `opacity:0 → 1` via IntersectionObserver (rootMargin `120px 0px 0px 0px` to pre-load before viewport)
- `sessionStorage` used for entry gate / banner dismissed state

---

## Key Constants — DO NOT CHANGE

| Constant | Value |
|---|---|
| WhatsApp | `41795489025` (wa.me/41795489025) |
| Email | `hello@gs-hospitality.ch` |
| Domain | `gs-hospitality.ch` |
| Davos Meeting dates | Jan 19–23, 2027 |
| Nav order | Home → Davos 2027 → Accommodations → Services → Swiss Travel → Tours → Contact |
| All pricing | "On Request" only — no CHF amounts |

---

## Development Notes

- **No build step** — edit HTML files directly and push
- **Section padding**: `52px 0` desktop, `36px 0` mobile (reduced from 80px to remove empty space)
- **Contact page**: WhatsApp-first, streamlined — only form + WhatsApp card + footer (extra sections removed)
- **Entry gate**: z-index 10001, featured banner z-index 9999 — gate dismisses before banner shows

---

## Available Review Agents

Run after page updates:

- **`/seo-review`** — SEO audit: titles, meta, schema, canonical URLs, H1s. Auto-fixes Critical/High issues.
- **`/quality-review`** — Data quality: factual accuracy, broken links, text artifacts. Auto-fixes Critical/High issues.
