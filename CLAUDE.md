# GS Hospitality Website — gs-hospitality.ch

Static HTML website for GS Hospitality, Davos Summit hospitality specialists.

## Site Structure

7 main pages + support files:
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

## Deployment

Push to `main` branch → Vercel auto-deploys to gs-hospitality.ch

## Do Not Change

- WhatsApp number: 41795489025
- Domain: gs-hospitality.ch
- Nav order: Home → Davos 2027 → Accommodations → Services → Swiss Travel → Tours → Contact
- Davos Annual Meeting dates: Jan 19–23, 2027
