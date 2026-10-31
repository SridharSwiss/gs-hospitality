import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Getting to Davos — Switzerland Travel Guide 2027 | GS Hospitality',
  description:
    'Complete Switzerland travel guide for the Davos Annual Meeting Jan 19–23 2027. Helicopter, private transfer, and train options from Zurich. Visa requirements, packing tips, and practical essentials.',
  keywords:
    'Davos travel guide, Zurich to Davos, Davos 2027 transport, Switzerland visa, Schengen visa, Davos packing guide, helicopter to Davos, Rhaetian Bahn, Davos January weather',
  openGraph: {
    title: 'Getting to Davos — Switzerland Travel Guide | GS Hospitality',
    description:
      'Everything delegates need for the Davos Annual Meeting: transport, visas, packing and on-the-ground essentials.',
    images: [{ url: '/assets/img/og-travel.jpg' }],
  },
};

const routes = [
  {
    mode: 'Private Transfer',
    duration: '~2.5 hrs',
    tag: 'Most Popular',
    description:
      'Door-to-door chauffeur service from Zurich Airport in executive-class vehicles. GS Hospitality coordinates meet-and-greet, luggage handling, and direct delivery to your Davos property.',
    highlights: [
      'Mercedes S-Class, BMW 7-Series, or armoured SUV',
      'Available 24/7 throughout the week',
      'Security-cleared chauffeurs',
      'Fleet of 20+ vehicles on standby',
    ],
    image: '/assets/img/site/transport-car.jpg',
  },
  {
    mode: 'Scenic Train',
    duration: '~2.5 hrs',
    tag: 'Scenic Route',
    description:
      "Switzerland's iconic Rhaetian Railway through the Alps. GS Hospitality can book private compartments or full first-class carriages for delegations. Arrives at Davos Platz, 5 min from the conference centre.",
    highlights: [
      'Zurich HB → Landquart (EuroCity or IC, ~1h 15m)',
      'Landquart → Davos Platz (Rhaetian Bahn, ~1h 10m)',
      'Private compartment or full carriage available',
      'Swiss Travel Pass accepted',
    ],
    image: '/assets/img/site/transport-train.jpg',
  },
  {
    mode: 'Helicopter Charter',
    duration: '~35 min',
    tag: 'Fastest',
    description:
      'The most dramatic and time-efficient arrival. Fly over the Alps and land directly in Davos. GS coordinates permits, landing slots, and ground security. Preferred by ministers and senior executives.',
    highlights: [
      'Direct from Zurich Airport or city helipad',
      'Up to 5 passengers per aircraft',
      'GS handles all permits and slots',
      'Subject to weather — book 6+ weeks ahead',
    ],
    image: '/assets/img/site/service-helicopter.jpg',
  },
];

const airports = [
  {
    code: 'ZRH',
    name: 'Zurich Airport',
    subtitle: 'Primary · ~2.5 hrs to Davos',
    desc: "Switzerland's main international hub with direct connections from all major cities worldwide. Transfer to Davos by private car (2.5h), train from Zurich HB (2.5h), or helicopter (35 min).",
    connections: ['London Heathrow — 2h (multiple daily)', 'Dubai — 7h (Emirates, Etihad)', 'New York JFK — 9h (SWISS direct)', 'Mumbai/Delhi — 9–10h (SWISS, Lufthansa)'],
    recommended: true,
  },
  {
    code: 'GVA',
    name: 'Geneva Airport',
    subtitle: 'Alternative · ~4.5 hrs to Davos',
    desc: 'Good alternative from Western Europe, West Africa, and North America. Transfer via Geneva HB then direct train to Davos, or a private road transfer (approx. 4 hours through the Alps).',
    connections: ['Paris CDG — 1h 15m', 'London Heathrow — 1h 45m', 'New York — 9h (SWISS direct)', 'Casablanca — 3h (Royal Air Maroc)'],
    recommended: false,
  },
];

const gettingAround = [
  {
    icon: '🚗',
    title: 'Chauffeur Service',
    desc: 'GS Hospitality provides on-call chauffeurs throughout Davos week. Available from 05:00–02:00 daily for point-to-point transfers between venues, hotels, and private events.',
  },
  {
    icon: '🚕',
    title: 'Local Taxis',
    desc: 'Davos taxis are efficient but in high demand during the Annual Meeting. Pre-book through your accommodation concierge or use the Taxi Davos app. Fares run on meter.',
  },
  {
    icon: '🚌',
    title: 'Public Bus',
    desc: "Davos has an excellent local bus network (lines 1–9) connecting the Platz, Dorf, and congress areas. Free with the guest card from your hotel. Runs every 10–15 minutes.",
  },
  {
    icon: '🚶',
    title: 'On Foot',
    desc: 'The main Promenade is walkable (1.5 km). Use proper winter footwear — pavements can be icy. Allow extra time between early-morning meetings when temperatures are lowest.',
  },
];

const visaData = [
  {
    region: '🇪🇺 EU / EEA',
    status: 'No visa required',
    statusOk: true,
    body: 'EU/EEA citizens enter Switzerland with a national ID card or passport. Free movement applies.',
    note: 'Recommended: travel with both passport and national ID. Health insurance card advised.',
  },
  {
    region: '🇬🇧 United Kingdom',
    status: 'No visa required',
    statusOk: true,
    body: 'Up to 90 days within any 180-day period. Valid passport required (not expired within 6 months of entry).',
    note: 'Post-Brexit: passport must be valid on entry date. No Schengen stamp issues for business visits.',
  },
  {
    region: '🇺🇸 United States',
    status: 'No visa required',
    statusOk: true,
    body: 'Up to 90 days. US passport valid for duration of stay required. ESTA does not apply to Switzerland.',
    note: 'Ensure onward travel documents are in order for multi-country trips through Schengen.',
  },
  {
    region: '🇮🇳 India',
    status: 'Schengen visa required',
    statusOk: false,
    body: 'Apply at Swiss Embassy / VFS Global. Business visa category. Processing: 15–30 working days. Apply well in advance.',
    note: 'GS Hospitality provides invitation letters, accommodation proof, and itinerary documentation.',
  },
  {
    region: '🇦🇪 🇸🇦 Gulf States (GCC)',
    status: 'Schengen visa required',
    statusOk: false,
    body: 'Required for most GCC nationals. UAE and Bahrain citizens may qualify for visa-free — verify current rules.',
    note: 'Diplomatic passport holders typically have different rules. GS provides country-specific guidance.',
  },
  {
    region: '🌍 Sub-Saharan Africa',
    status: 'Schengen visa required',
    statusOk: false,
    body: 'Apply via Swiss Embassy in your country. Strong invitation documentation is essential for approval.',
    note: 'GS provides a comprehensive documentation package: invitation letters, accommodation proof, and summit attendance evidence.',
  },
];

const packingCategories = [
  {
    title: 'Clothing Essentials',
    image: '/assets/img/site/pack-clothing.jpg',
    items: [
      'Heavy down parka — waterproof, knee-length',
      'Thermal base layers (top and bottom)',
      'Merino wool mid-layer sweaters',
      'Formal business suits (2–3 sets)',
      'Waterproof ankle boots with grip soles',
      'Insulated gloves, scarf, and beanie',
      'Business casual for Promenade evenings',
    ],
  },
  {
    title: 'Business Essentials',
    image: '/assets/img/site/pack-business.jpg',
    items: [
      'Laptop + charger and Type J universal adapter',
      'Power bank (phones drain fast in the cold)',
      'Business cards in English + local language',
      'Event pass holder and conference lanyard',
      'Portable hotspot or Swiss SIM card',
      'Noise-cancelling headphones',
      'Small daypack for the conference centre',
    ],
  },
  {
    title: 'Health & Wellness',
    image: '/assets/img/site/pack-health.jpg',
    items: [
      'Prescription medications — 2-week supply',
      'Lip balm and heavy moisturiser (very dry air)',
      'Eye drops (heated rooms dry eyes)',
      'Vitamin C supplements (January illness risk)',
      'Hand warmers for outdoor walks',
      'Blister plasters for ice/snow walking',
      'Throat lozenges (speaking in dry air all week)',
    ],
  },
];

const practicalTips = [
  {
    heading: 'Currency',
    body: 'Switzerland uses Swiss Francs (CHF). Major credit cards accepted everywhere in Davos. ATMs available at Davos Platz. Tip 5–10% for exceptional service.',
  },
  {
    heading: 'Language',
    body: 'German is the local language. English is widely spoken throughout Davos during the Annual Meeting. French and Italian also understood.',
  },
  {
    heading: 'January Weather',
    body: 'Davos averages -12°C to -2°C in January with snow and ice. Altitude 1,560m. Wind chill is significant. Pack layered, waterproof outerwear.',
  },
  {
    heading: 'Mobile & Data',
    body: 'EU roaming plans work in Switzerland. Purchase a Swisscom or Sunrise SIM at Zurich Airport for best coverage. 5G available across Davos.',
  },
  {
    heading: 'Emergency Numbers',
    body: 'Police: 117 · Fire: 118 · Ambulance: 144 · European Emergency: 112. Davos Hospital is located on Promenadenstasse.',
  },
  {
    heading: 'Altitude',
    body: 'Davos sits at 1,560m above sea level. Mild altitude effects are common in the first 24–48 hours. Stay hydrated, limit alcohol on arrival, and rest early.',
  },
  {
    heading: 'Power & Plugs',
    body: 'Switzerland uses Type J sockets (230V, 50Hz). Swiss plugs are unique — bring a universal adapter. Universal multi-adapters widely available at Zurich Airport.',
  },
  {
    heading: 'Time Zone',
    body: 'CET (UTC+1) during January. No DST change during Davos week. Dubai: UTC+4 (3h ahead). London: UTC+0 (1h behind). New York: UTC-5 (6h behind).',
  },
  {
    heading: 'Healthcare',
    body: 'Switzerland has world-class healthcare. Davos Hospital is on-site during the Annual Meeting. Comprehensive travel insurance is strongly recommended.',
  },
];

export default function SwissTravelPage() {
  return (
    <>
      <HeroSection
        title="Getting to Davos"
        label="ZURICH TO DAVOS · TRAVEL GUIDE"
        description="Everything international delegates need to know about travelling to Switzerland and Davos — from arrival airports and transport options to visa requirements and Alpine packing essentials."
        imagePath="/assets/img/heroes/travel-hero.jpg"
        imageAlt="Swiss Alps — Getting to Davos"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href={`${WHATSAPP_URL}?text=Hello%20GS%20Hospitality%2C%20I%20need%20transport%20arranged%20for%20Davos%202027.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Arrange Transport
          </a>
          <Link href="/accommodations" className="btn-secondary">
            View Accommodations
          </Link>
        </div>
      </HeroSection>

      {/* ── Route Options ──────────────────────────────────────── */}
      <SectionWrapper id="routes">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="gold-label mb-3">Transport Guide</p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--text)]">
              Zurich to <em className="text-[var(--gold)] not-italic">Davos</em>
            </h2>
            <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto">
              Three ways to reach Davos from Zurich Airport — each balancing speed, comfort, and spectacle differently. GS Hospitality coordinates all options on request.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {routes.map((r, i) => (
            <AnimateOnScroll key={r.mode} delay={i * 0.12}>
              <div className="glass-card overflow-hidden flex flex-col h-full relative">
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[var(--gold)] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {r.tag}
                  </span>
                </div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.mode}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[rgba(5,5,8,0.4)] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xl font-semibold text-[var(--gold)] font-serif">{r.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-semibold text-[var(--text)] mb-3">{r.mode}</h3>
                  <p className="text-sm text-[var(--text-muted)] mb-5 leading-relaxed">{r.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-5 border-t border-[var(--border)]">
                    <span className="text-xs text-[var(--text-subtle)] uppercase tracking-wider">Pricing on request</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* International connections */}
        <AnimateOnScroll>
          <div className="glass-card p-6 md:p-8 rounded-2xl mt-8 border-[var(--border-gold)]">
            <h3 className="font-serif text-xl font-semibold text-[var(--gold)] mb-5">International Connections to Zurich</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { from: 'From London', detail: 'Heathrow / Gatwick to Zurich: ~2h · Multiple daily flights · Then 35 min helicopter or 2.5h train' },
                { from: 'From Dubai / Gulf', detail: 'Direct to Zurich: ~7h · Emirates, Etihad, flydubai · Consider Geneva too (4h to Davos by road)' },
                { from: 'From India', detail: 'Mumbai / Delhi to Zurich: 9–10h · SWISS, Lufthansa · Book 4+ months ahead for January.' },
              ].map((c) => (
                <div key={c.from}>
                  <div className="font-semibold text-[var(--text)] mb-1 text-sm">{c.from}</div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* ── Arrival Airports ───────────────────────────────────── */}
      <SectionWrapper dark id="airports" className="bg-[rgba(255,255,255,0.02)]">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="gold-label mb-3">Entry Points</p>
            <h2 className="text-4xl font-serif font-semibold text-[var(--text)]">
              Arrival <em className="text-[var(--gold)] not-italic">Airports</em>
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {airports.map((ap, i) => (
            <AnimateOnScroll key={ap.code} delay={i * 0.12}>
              <div className={`glass-card p-7 rounded-2xl h-full ${ap.recommended ? 'border-[var(--gold-dark)]' : ''}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--gold-muted)] border border-[var(--border-gold)] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[var(--gold)] text-sm tracking-wider">{ap.code}</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-[var(--text)] text-lg">{ap.name}</h3>
                    <p className="text-xs text-[var(--gold)] uppercase tracking-wider mt-0.5">{ap.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{ap.desc}</p>
                <div>
                  <p className="text-xs text-[var(--gold)] uppercase tracking-widest mb-3 font-medium">Key Connections</p>
                  <ul className="space-y-1.5">
                    {ap.connections.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">·</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                {ap.recommended && (
                  <div className="mt-5 pt-5 border-t border-[var(--border)]">
                    <span className="text-xs bg-[var(--gold-muted)] text-[var(--gold)] border border-[var(--border-gold)] rounded-full px-3 py-1 uppercase tracking-wider font-medium">
                      Recommended Gateway
                    </span>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Getting Around Davos ───────────────────────────────── */}
      <SectionWrapper id="getting-around">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="gold-label mb-3">Local Transport</p>
            <h2 className="text-4xl font-serif font-semibold text-[var(--text)]">
              Getting Around <em className="text-[var(--gold)] not-italic">Davos</em>
            </h2>
            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              Davos is compact but the Annual Meeting venues are spread over 2 km of Promenade. Plan your inter-venue logistics in advance.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gettingAround.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.1}>
              <div className="glass-card p-6 rounded-2xl text-center h-full flex flex-col">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-semibold text-[var(--text)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll>
          <div className="glass-card p-6 rounded-2xl mt-6 border-[var(--border-gold)] text-center max-w-3xl mx-auto">
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              <strong className="text-[var(--gold)]">GS Hospitality On-Call Chauffeurs:</strong> For the smoothest week, our clients have priority access to our fleet of executive vehicles stationed throughout Davos. One message on WhatsApp and your car is on its way — typically within 8 minutes.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* ── Visa & Entry ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/img/sections/visa-travel.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(5,5,8,0.93)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimateOnScroll>
              <p className="gold-label mb-3">Entry Requirements</p>
              <h2 className="text-4xl font-serif font-semibold text-[var(--text)]">
                Visas &amp; <em className="text-[var(--gold)] not-italic">Entry</em>
              </h2>
              <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto text-sm">
                Switzerland is part of the Schengen Area. Entry requirements vary by nationality. Always verify with the Swiss Embassy in your country of residence.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {visaData.map((v, i) => (
              <AnimateOnScroll key={v.region} delay={i * 0.08}>
                <div className="glass-card p-6 rounded-xl h-full flex flex-col">
                  <div className="text-lg mb-2 font-semibold text-[var(--text)]">{v.region}</div>
                  <div className={`text-sm font-semibold mb-3 ${v.statusOk ? 'text-emerald-400' : 'text-[var(--gold)]'}`}>
                    {v.status}
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 flex-1">{v.body}</p>
                  <p className="text-xs text-[var(--text-subtle)] leading-relaxed border-t border-[var(--border)] pt-3">{v.note}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="glass-card p-7 rounded-2xl mt-8 text-center max-w-3xl mx-auto">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                Need visa documentation support? Our travel advisory team has helped 60+ delegations obtain Swiss visas, providing comprehensive invitation letters, accommodation proof, and itinerary documentation.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=Hello%20GS%20Hospitality%2C%20I%20need%20visa%20documentation%20support%20for%20Davos%20Summit%202027.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Visa Support
              </a>
            </div>
          </AnimateOnScroll>

          <p className="text-center text-xs text-[var(--text-subtle)] mt-8 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-[var(--text-muted)]">Disclaimer:</strong> Visa requirements change. Always verify current entry requirements with the official Swiss State Secretariat for Migration (SEM) or your nearest Swiss Embassy before travel. GS Hospitality provides this information for general guidance only and accepts no liability for entry refusals.
          </p>
        </div>
      </section>

      {/* ── Packing Guide ──────────────────────────────────────── */}
      <SectionWrapper id="packing">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <p className="gold-label mb-3">January in the Alps</p>
            <h2 className="text-4xl font-serif font-semibold text-[var(--text)]">
              What to Pack for <em className="text-[var(--gold)] not-italic">Davos</em>
            </h2>
            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              Davos in January is cold, Alpine, and formal. Pack for professional meetings by day and sub-zero temperatures outdoors. The temperature range is -12°C to -2°C.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packingCategories.map((cat, i) => (
            <AnimateOnScroll key={cat.title} delay={i * 0.12}>
              <div className="glass-card overflow-hidden flex flex-col h-full">
                <div className="relative h-44">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[rgba(5,5,8,0.5)] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-serif font-semibold text-white text-lg">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <span className="text-[var(--gold)] mt-0.5 flex-shrink-0 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="glass-card p-6 rounded-2xl mt-6 border-[var(--border-gold)]">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">⛰️</div>
              <div>
                <h4 className="font-semibold text-[var(--gold)] mb-2">Altitude Note — 1,560m Above Sea Level</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Davos is the highest town in the Alps. Visitors from sea-level cities often feel mild altitude effects for 24–48 hours: slight shortness of breath, headaches, and disrupted sleep. Drink more water than usual, avoid alcohol on your first evening, and allow for an early night. Our welcome briefing covers altitude acclimatisation in detail.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* ── Practical Tips ─────────────────────────────────────── */}
      <SectionWrapper dark id="tips" className="bg-[rgba(255,255,255,0.02)]">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <p className="gold-label mb-3">On the Ground</p>
            <h2 className="text-4xl font-serif font-semibold text-[var(--text)]">
              Practical <em className="text-[var(--gold)] not-italic">Tips</em>
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {practicalTips.map((t, i) => (
            <AnimateOnScroll key={t.heading} delay={i * 0.06}>
              <div className="glass-card p-5 rounded-xl border-l-2 border-[var(--gold)]">
                <h4 className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-2">{t.heading}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{t.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(197,160,89,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <AnimateOnScroll>
            <p className="gold-label mb-4">Expert Travel Advisors</p>
            <h2 className="text-4xl font-serif font-semibold text-[var(--text)]">
              Need Transport Arranged?
            </h2>
            <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
              Questions about visas, transfers, packing, or anything else about travelling to Davos? Our travel advisory team has the answer — and we respond on WhatsApp within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={`${WHATSAPP_URL}?text=Hello%20GS%20Hospitality%2C%20I%20have%20a%20travel%20question%20about%20Davos%202027.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ask a Travel Advisor
              </a>
              <Link href="/tours" className="btn-secondary">
                Explore Swiss Tours
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
