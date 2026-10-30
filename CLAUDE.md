# GS Hospitality Website — gs-hospitality.ch

Static HTML website for GS Hospitality, Davos Summit hospitality specialists.

## ⚠️ ALWAYS USE THIS REPO FOR ALL CHANGES

- **Production repo**: `SridharSwiss/gs-hospitality` → `/home/user/gs-hospitality`
- **DO NOT commit to `SridharSwiss/Elaichi`** — that is a stale dev repo, no longer used
- Every push to `main` here auto-deploys to gs-hospitality.ch via Vercel

## Site Structure

9 main pages + support files:
- `index.html` — Homepage
- `wef-2027.html` — Davos Summit 2027 guide (linked as "Davos 2027" in nav)
- `accommodations.html` — Luxury chalets, HQ venues, apartments
- `services.html` — Lounge/AV/events/catering corporate services
- `swiss-travel.html` — Travel guide (Zurich→Davos, visas, tips)
- `tours.html` — Swiss tours (Glacier Express, Zermatt, Jungfraujoch)
- `contact.html` — WhatsApp contact + enquiry form
- `privacy.html` / `terms.html` — Legal pages
- `davos-summit-2027.html` — Redirect to wef-2027.html
- `sitemap.xml` / `robots.txt` — SEO infrastructure

## Key Details

- **Domain**: gs-hospitality.ch
- **WhatsApp**: +41 79 548 90 25 (wa.me/41795489025)
- **Email**: hello@gs-hospitality.ch
- **Design**: Dark glass morphism — `--gold: #C5A059`, `--bg: #050505`
- **Fonts**: Cormorant Garamond (headings) + DM Sans (body) via Google Fonts
- **CSS/JS**: Fully inlined in each HTML file — no external asset dependencies
- **Schema.org**: TravelAgency, LodgingBusiness, Event, FAQPage, BreadcrumbList

## Available Review Agents

Run these any time pages are updated:

- **`/seo-review`** — Full SEO audit: titles, meta descriptions, schema, canonical URLs, H1s, robots.txt, sitemap. Auto-fixes Critical and High issues.
- **`/quality-review`** — Data quality audit: factual accuracy, broken links, text artifacts, consistency. Auto-fixes Critical and High issues.

## Featured Properties (accommodations.html)

5 property cards in featured listings section:
1. **Grünistrasse 2a** — 2BR, 2 guests, 1.9km to Congress, 2 indoor parking
2. **Talstrasse 19** — 2BR, 4 guests, 1km to Congress (closest), garage
3. **Lehenweg 26 Klosters** — 3BR chalet, 3 guests, sauna, 22min drive
4. **Davos Summit Apartment** — 3.5-room, 3 guests, near Promenade, parking
5. **Alpine Chalet Klosters Haus** — 4.5-room, 6 guests, garden, 3 parking

PDF brochures in `assets/docs/` — NOT publicly downloadable; clients request via WhatsApp.

## Deployment

Push to `main` branch → Vercel auto-deploys to gs-hospitality.ch

## Do Not Change

- WhatsApp number: 41795489025
- Domain: gs-hospitality.ch
- Email: hello@gs-hospitality.ch
- Nav order: Home → Davos 2027 → Accommodations → Services → Swiss Travel → Tours → Contact
- Davos Annual Meeting dates: Jan 19–23, 2027
- All pricing: "On Request" only — no specific CHF amounts
