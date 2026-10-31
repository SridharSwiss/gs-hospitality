import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import GlassCard from '@/components/GlassCard';
import FAQAccordion from './FAQAccordion';

/* ── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Davos Annual Meeting 2027 — Complete Guide | GS Hospitality',
  description:
    'Complete Davos Annual Meeting 2027 guide: venue map, event passes, arrival by helicopter or train, key dates, security zones & premium hospitality packages. January 19–23, 2027.',
  keywords:
    'Davos Annual Meeting 2027, Davos 2027 dates, Davos conference venue, Davos hospitality packages, Davos January 2027',
  alternates: { canonical: 'https://gs-hospitality.ch/davos-2027' },
  openGraph: {
    title: 'Davos Annual Meeting 2027 — Complete Guide | GS Hospitality',
    description:
      'Complete Davos Annual Meeting 2027 guide: venue map, arrival options, packages and key dates. Updated for January 2027.',
    url: 'https://gs-hospitality.ch/davos-2027',
    type: 'article',
  },
};

/* ── JSON-LD ─────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      name: 'Davos Annual Meeting 2027',
      startDate: '2027-01-19',
      endDate: '2027-01-23',
      location: {
        '@type': 'Place',
        name: 'Davos Conference Centre',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Davos',
          addressCountry: 'CH',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'GS Hospitality',
        url: 'https://gs-hospitality.ch',
      },
      description:
        'The Davos Annual Meeting 2027 takes place January 19–23 in Davos-Klosters, Switzerland.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is the Davos Annual Meeting 2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Davos Annual Meeting 2027 takes place 19–23 January 2027 in Davos-Klosters, Switzerland.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the Davos Annual Meeting held?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The main sessions are held at the Davos Conference Centre. Corporate pavilions and side events take place along the Promenade.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an event pass to attend?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Summit sessions require accreditation. However, Promenade pavilions and most corporate side events can host guests without passes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book hospitality for Davos 2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact GS Hospitality via WhatsApp (+41795489025) or email hello@gs-hospitality.ch.',
          },
        },
      ],
    },
  ],
};

/* ── Stagger wrapper (client motion handled by AnimateOnScroll) */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══════════════════════════════════════════════════════════ */
export default function Davos2027Page() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden"
        aria-labelledby="davos-hero-title"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/heroes/wef-hero.jpg"
            alt="Davos in winter"
            fill
            priority
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(rgba(5,5,8,0.65),rgba(5,5,8,0.65))',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,160,89,0.12), transparent)',
            }}
          />
          {/* Bottom fade to bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: 'linear-gradient(transparent, var(--bg))',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
          <AnimateOnScroll variant="fadeIn">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-4"
              style={{ color: 'var(--gold)' }}
            >
              January 19–23, 2027 · Davos, Switzerland
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeInUp" delay={0.1}>
            <h1
              id="davos-hero-title"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
              style={{ color: '#fff' }}
            >
              Davos Annual Meeting 2027
              <br />
              <em
                className="italic"
                style={{ color: 'var(--gold)' }}
              >
                Complete Guide
              </em>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeInUp" delay={0.2}>
            <p
              className="text-lg max-w-2xl mx-auto mb-10"
              style={{ color: 'var(--text-muted)' }}
            >
              Everything you need to plan, arrive, and succeed at the Davos
              Annual Meeting — from first-time visitor logistics to
              full-delegation hospitality.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeInUp" delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#packages"
                className="rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg,var(--gold-light),var(--gold))',
                  color: '#050508',
                  boxShadow: '0 4px 24px rgba(197,160,89,0.3)',
                }}
              >
                View 2027 Packages
              </a>
              <a
                href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20need%20help%20planning%20for%20Davos%202027."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--surface)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--gold)',
                }}
              >
                Get Expert Advice
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Quick facts bar */}
        <div
          className="relative z-10 border-t border-b py-6"
          style={{
            borderColor: 'var(--border)',
            background: 'rgba(5,5,8,0.7)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Dates', value: 'Jan 19–23, 2027' },
                { label: 'Venue', value: 'Davos Conference Centre' },
                { label: 'Expected Attendees', value: '~3,000 Leaders' },
                { label: 'Altitude', value: '1,560 m above sea level' },
              ].map((f) => (
                <div key={f.label}>
                  <p
                    className="uppercase tracking-widest text-xs mb-1"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: 'var(--text)' }}
                  >
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. EVENT OVERVIEW ────────────────────────────────── */}
      <section
        id="what-is-davos"
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--bg)' }}
        aria-labelledby="overview-title"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/wef-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <AnimateOnScroll variant="fadeInUp">
              <p
                className="uppercase tracking-widest text-xs font-medium mb-3"
                style={{ color: 'var(--gold)' }}
              >
                For First-Time Attendees
              </p>
              <h2
                id="overview-title"
                className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-6"
                style={{ color: '#fff' }}
              >
                What is the Davos{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Annual Meeting?
                </em>
              </h2>
              <div
                className="w-16 h-0.5 mb-6"
                style={{
                  background: 'linear-gradient(90deg,var(--gold),transparent)',
                }}
              />
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                The Davos Annual Meeting is held every January in
                Davos-Klosters, Switzerland. Held annually since 1971, it
                brings together approximately 3,000 business, political,
                academic, and civil society leaders from around the world.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'var(--text-muted)' }}
              >
                Davos is not just a conference — it is five days of bilateral
                meetings, side events, private dinners, and pavilion
                activations that collectively shape global economic policy and
                create billion-dollar business relationships.
              </p>
              <ul className="space-y-3">
                {[
                  '~3,000 leaders from 130+ countries attend annually',
                  '50+ heads of state and government typically present',
                  '1,000+ private companies represented',
                  '500+ sessions across the conference centre and Promenade',
                  'The Promenade hosts 100+ private corporate pavilions',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span
                      className="font-bold mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--gold)' }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* Right key facts card */}
            <AnimateOnScroll variant="fadeInUp" delay={0.2}>
              <GlassCard className="p-9">
                <h3
                  className="font-serif text-2xl font-semibold mb-6"
                  style={{ color: '#fff' }}
                >
                  2027 Key Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Dates', value: 'Jan 19–23, 2027', gold: true },
                    { label: 'Location', value: 'Davos, Switzerland', gold: false },
                    { label: 'Expected Attendees', value: '~3,000 global leaders', gold: false },
                    { label: 'Altitude', value: '1,560 m above sea level', gold: false },
                    { label: 'January Temperature', value: '-12°C to -2°C', gold: false },
                    { label: 'Booking Deadline', value: 'Dec 2025 (recommended)', gold: true },
                  ].map((row, i, arr) => (
                    <div
                      key={row.label}
                      className={`flex justify-between items-center pb-4 ${i < arr.length - 1 ? 'border-b' : ''}`}
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {row.label}
                      </span>
                      <span
                        className="font-semibold text-sm"
                        style={{ color: row.gold ? 'var(--gold)' : 'var(--text)' }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── 3. PACKAGES ──────────────────────────────────────── */}
      <section
        id="packages"
        className="py-24 relative overflow-hidden"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
        aria-labelledby="packages-title"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/accommodations-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp" className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              2027 Service Packages
            </p>
            <h2
              id="packages-title"
              className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4"
              style={{ color: '#fff' }}
            >
              Davos Hospitality{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                Packages
              </em>
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-5"
              style={{
                background: 'linear-gradient(90deg,transparent,var(--gold),transparent)',
              }}
            />
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Three levels of Davos support — all include our 24/7 concierge
              and Swiss precision commitment. All pricing on request.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Essential */}
            <AnimateOnScroll variant="fadeInUp" delay={0}>
              <GlassCard className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 flex-shrink-0">
                  <Image
                    src="/assets/img/site/card-silver.jpg"
                    alt="Essential Package"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="font-serif text-xl font-semibold mb-3"
                  style={{ color: '#fff' }}
                >
                  Essential Package
                </h3>
                <p className="text-sm mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
                  Perfect for individual attendees or small teams attending
                  the Annual Meeting for the first time.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Executive apartment accommodation (5 nights)',
                    'Zurich–Davos–Zurich ground transfer',
                    'Daily continental breakfast',
                    'Welcome briefing & area guide',
                    'WhatsApp concierge support',
                    'Restaurant reservations assistance',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span style={{ color: 'var(--gold)' }} className="font-bold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-4">
                  <span
                    className="uppercase tracking-widest text-xs font-medium"
                    style={{ color: 'var(--gold)' }}
                  >
                    Pricing: On Request
                  </span>
                </div>
                <a
                  href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Essential%20Davos%202027%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold)',
                    background: 'var(--gold-muted)',
                  }}
                >
                  Enquire Now
                </a>
              </GlassCard>
            </AnimateOnScroll>

            {/* Premium — featured */}
            <AnimateOnScroll variant="fadeInUp" delay={0.12}>
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-medium uppercase tracking-widest"
                    style={{
                      background: 'rgba(197,160,89,0.15)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold)',
                    }}
                  >
                    Most Popular
                  </span>
                </div>
                <div
                  className="p-8 h-full flex flex-col overflow-hidden rounded-2xl"
                  style={{
                    background: 'rgba(197,160,89,0.04)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                    border: '1px solid var(--border-gold)',
                  }}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 flex-shrink-0">
                    <Image
                      src="/assets/img/site/pkg-premium.jpg"
                      alt="Premium Package"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-semibold mb-3"
                    style={{ color: '#fff' }}
                  >
                    Premium Package
                  </h3>
                  <p className="text-sm mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
                    For corporate delegations of 3–15 people seeking a
                    turnkey Davos presence.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      'Luxury chalet (walking distance, 5 nights)',
                      'Helicopter transfer (Zurich ↔ Davos)',
                      'Private chef — all meals included',
                      'Promenade pavilion space (50 sqm)',
                      'Dedicated on-site concierge',
                      'AV setup for one hosted session',
                      'Security coordination',
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <span style={{ color: 'var(--gold)' }} className="font-bold mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mb-4">
                    <span
                      className="uppercase tracking-widest text-xs font-medium"
                      style={{ color: 'var(--gold)' }}
                    >
                      Pricing: On Request
                    </span>
                  </div>
                  <a
                    href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Premium%20Davos%202027%20Package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg,var(--gold-light),var(--gold))',
                      color: '#050508',
                      boxShadow: '0 4px 20px rgba(197,160,89,0.25)',
                    }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Elite */}
            <AnimateOnScroll variant="fadeInUp" delay={0.24}>
              <GlassCard className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 flex-shrink-0">
                  <Image
                    src="/assets/img/site/card-crown.jpg"
                    alt="Elite Package"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="font-serif text-xl font-semibold mb-3"
                  style={{ color: '#fff' }}
                >
                  Elite Package
                </h3>
                <p className="text-sm mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
                  Full-delegation support for government bodies, major
                  corporates, and institutions (15–100+ people).
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    'Multi-property compound booking',
                    'Armored vehicle fleet + private security',
                    'Full private catering — cultural menus',
                    'Branded pavilion (100+ sqm) build & ops',
                    'Full AV production team',
                    'Multiple simultaneous event coordination',
                    'Dedicated 3-person on-site team',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span style={{ color: 'var(--gold)' }} className="font-bold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-4">
                  <span
                    className="uppercase tracking-widest text-xs font-medium"
                    style={{ color: 'var(--gold)' }}
                  >
                    Pricing: On Request
                  </span>
                </div>
                <a
                  href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Elite%20Davos%202027%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold)',
                    background: 'var(--gold-muted)',
                  }}
                >
                  Request Briefing
                </a>
              </GlassCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── 4. GETTING THERE ─────────────────────────────────── */}
      <section
        id="arrival"
        className="py-24 relative overflow-hidden"
        aria-labelledby="arrival-title"
        style={{ background: 'var(--bg)' }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/sections/visa-travel.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp" className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Getting to Davos
            </p>
            <h2
              id="arrival-title"
              className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4"
              style={{ color: '#fff' }}
            >
              How to{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                Arrive in Style
              </em>
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-5"
              style={{
                background: 'linear-gradient(90deg,transparent,var(--gold),transparent)',
              }}
            />
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Four transfer options from Zurich — from fastest to most
              scenic. GS Hospitality coordinates all options.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                img: '/assets/img/site/service-helicopter.jpg',
                name: 'Private Helicopter',
                time: '35 minutes from Zurich Airport',
                desc: 'The preferred choice for ministers, CEOs, and delegations. Direct landing in Davos, avoiding all road traffic and train congestion.',
                cost: 'Pricing on enquiry · Up to 5 passengers · GS arranges permits',
              },
              {
                img: '/assets/img/site/transport-train.jpg',
                name: 'Private Train (Rhaetian Railway)',
                time: '2h 30m from Zurich HB',
                desc: 'The iconic Swiss mountain railway through Klosters. GS arranges private compartments or full carriage bookings for delegations.',
                cost: 'Pricing on enquiry · Direct to Davos · Spectacular Alpine scenery',
              },
              {
                img: '/assets/img/site/transport-car.jpg',
                name: 'Luxury Ground Transfer',
                time: '1h 45m off-peak · 2h 30m+ during Davos week',
                desc: 'Mercedes S-Class, armored vehicles, or executive vans. Our drivers know all alternative routes to avoid road closures.',
                cost: 'Pricing on enquiry · Armoured vehicles available on request',
              },
              {
                img: '/assets/img/site/davos-aerial.jpg',
                name: 'Private Jet + Transfer',
                time: 'Land at Zurich or Samedan Airport',
                desc: 'Samedan Airport (Engadin) is the closest airport — just 45 minutes by car. GS coordinates FBO arrangements and onward transfer.',
                cost: 'Samedan to Davos transfer · Pricing on enquiry · Subject to slot availability',
              },
            ].map((t, i) => (
              <AnimateOnScroll key={t.name} variant="fadeInUp" delay={i * 0.1}>
                <GlassCard className="p-7 flex gap-5 items-start h-full">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#fff' }}>
                      {t.name}
                    </p>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--gold)' }}
                    >
                      {t.time}
                    </p>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
                      {t.desc}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                      {t.cost}
                    </p>
                  </div>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VENUE MAP & DISTANCES ─────────────────────────── */}
      <section
        id="venue"
        className="py-24 relative overflow-hidden"
        aria-labelledby="venue-title"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp" className="mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Venue Guide
            </p>
            <h2
              id="venue-title"
              className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4"
              style={{ color: '#fff' }}
            >
              Conference Venues &amp;{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                The Promenade
              </em>
            </h2>
            <div
              className="w-16 h-0.5 mb-5"
              style={{ background: 'linear-gradient(90deg,var(--gold),transparent)' }}
            />
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              Understanding Davos geography is critical to planning your week
              effectively.
            </p>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Venue cards */}
            <div className="space-y-5">
              <AnimateOnScroll variant="fadeInUp">
                <GlassCard className="p-7">
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/assets/img/site/service-lounge.jpg"
                        alt="Davos Conference Centre"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#fff' }}>
                        Davos Conference Centre
                      </h3>
                      <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
                        The main venue for plenaries, workshops, and sessions.
                        Platinum Accreditation holders have full access. Bilateral
                        meetings with heads of state take place here.
                      </p>
                      <p className="text-xs" style={{ color: 'var(--gold)' }}>
                        All GS Hospitality premium properties are within walking
                        distance.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fadeInUp" delay={0.1}>
                <GlassCard className="p-7">
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/assets/img/site/card-walking.jpg"
                        alt="The Promenade"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: '#fff' }}>
                        The Promenade
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        The main street of Davos becomes the summit's unofficial
                        second campus. 100+ corporate pavilions host private events,
                        product launches, and networking. Pavilion events can invite
                        guests without summit passes.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </AnimateOnScroll>
            </div>

            {/* Districts + map link */}
            <AnimateOnScroll variant="fadeInUp" delay={0.15}>
              <GlassCard className="p-7">
                <h3
                  className="font-serif text-xl font-semibold mb-6"
                  style={{ color: '#fff' }}
                >
                  Key Davos Districts
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    { area: 'Davos (Congress area)', badge: 'Premium Zone', color: 'gold' },
                    { area: 'The Promenade (Pavilions)', badge: 'High Demand', color: 'gold' },
                    { area: 'Davos Dorf (residential)', badge: 'Quieter', color: 'blue' },
                    { area: 'Klosters (nearby resort)', badge: '30 min drive', color: 'blue' },
                  ].map((d) => (
                    <div
                      key={d.area}
                      className="flex justify-between items-center py-3 border-b"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {d.area}
                      </span>
                      <span
                        className="px-3 py-0.5 rounded-full text-xs font-medium"
                        style={
                          d.color === 'gold'
                            ? {
                                background: 'rgba(197,160,89,0.15)',
                                color: 'var(--gold)',
                                border: '1px solid var(--border-gold)',
                              }
                            : {
                                background: 'rgba(99,179,237,0.12)',
                                color: '#63b3ed',
                                border: '1px solid rgba(99,179,237,0.2)',
                              }
                        }
                      >
                        {d.badge}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://maps.google.com/?q=Davos+Congress+Centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1px solid var(--border-gold)',
                    color: 'var(--gold)',
                    background: 'var(--gold-muted)',
                  }}
                >
                  Open in Google Maps →
                </a>
              </GlassCard>
            </AnimateOnScroll>
          </div>

          {/* Properties proximity note */}
          <AnimateOnScroll variant="fadeInUp" delay={0.2} className="mt-8">
            <div style={{ border: '1px solid var(--border-gold)', borderRadius: '16px' }}>
            <GlassCard
              className="p-6"
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <span className="font-semibold" style={{ color: 'var(--gold)' }}>
                  Walking Distance Guarantee:
                </span>{' '}
                All GS Hospitality premium chalets and apartments are within a
                5–12 minute walk of the Davos Conference Centre. During summit
                week, vehicle restrictions make walking the most reliable way to
                reach venue entrances. We select only properties in the "Green
                Zone" to ensure maximum accessibility.
              </p>
            </GlassCard>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 6. TIMELINE / SCHEDULE ───────────────────────────── */}
      <section
        id="timeline"
        className="py-24 relative overflow-hidden"
        aria-labelledby="timeline-title"
        style={{ background: 'var(--bg)' }}
      >
        <div
          className="absolute inset-0 opacity-8 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/wef-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp" className="mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Planning Calendar
            </p>
            <h2
              id="timeline-title"
              className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4"
              style={{ color: '#fff' }}
            >
              Key Dates &amp;{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                Milestones
              </em>
            </h2>
            <div
              className="w-16 h-0.5 mb-5"
              style={{ background: 'linear-gradient(90deg,var(--gold),transparent)' }}
            />
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              [
                {
                  date: 'Now — December 2025',
                  title: 'Accommodation Booking Window',
                  text: 'Premium chalets within walking distance fill first. Book now to secure the best properties. GS Hospitality holds an exclusive portfolio — contact us to view available options.',
                },
                {
                  date: 'January — September 2026',
                  title: 'Service Package Confirmation',
                  text: 'Confirm lounge space, catering requirements, AV needs, and event programme. Davos Promenade slots become available and fill rapidly from March onwards.',
                },
                {
                  date: 'October — December 2026',
                  title: 'Logistics Finalisation',
                  text: 'Transfer bookings, security coordination, staff briefings, dietary confirmations, and final registration support. Swiss permits for pavilion construction submitted.',
                },
              ],
              [
                {
                  date: 'January 17–18, 2027',
                  title: 'Setup & Arrival Days',
                  text: 'GS Hospitality team arrives to set up corporate lounge or pavilion. Clients arrive; GS concierge at Zurich airport for helicopter and ground transfers. Welcome briefing at your property.',
                },
                {
                  date: 'January 19–23, 2027',
                  title: 'Davos Annual Meeting 2027',
                  text: 'Five days of plenaries, sessions, bilateral meetings, and Promenade events. GS Hospitality team on-site 24/7. Daily catering, transfer coordination, and concierge support throughout.',
                },
                {
                  date: 'January 24, 2027',
                  title: 'Breakdown & Departure',
                  text: 'Pavilion dismantled, properties restored. GS manages all departure logistics including transfer back to Zurich, final meals, and property check-out coordination.',
                },
              ],
            ].map((col, ci) => (
              <AnimateOnScroll key={ci} variant="fadeInUp" delay={ci * 0.15}>
                <div className="relative pl-8">
                  {/* Timeline line */}
                  <div
                    className="absolute left-2.5 top-0 bottom-0 w-px"
                    style={{
                      background: 'linear-gradient(to bottom, var(--gold), transparent)',
                    }}
                  />
                  <div className="space-y-10">
                    {col.map((item) => (
                      <div key={item.title} className="relative">
                        {/* Dot */}
                        <div
                          className="absolute -left-5 top-1.5 w-3 h-3 rounded-full"
                          style={{
                            background: 'var(--gold)',
                            boxShadow: '0 0 0 3px rgba(197,160,89,0.2)',
                          }}
                        />
                        <p
                          className="uppercase tracking-widest text-xs mb-1.5"
                          style={{ color: 'var(--gold)' }}
                        >
                          {item.date}
                        </p>
                        <h3
                          className="font-serif text-lg font-semibold mb-2"
                          style={{ color: '#fff' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PACKING / PREPARATION ─────────────────────────── */}
      <section
        id="preparation"
        className="py-24 relative overflow-hidden"
        aria-labelledby="prep-title"
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp" className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Preparation Guide
            </p>
            <h2
              id="prep-title"
              className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4"
              style={{ color: '#fff' }}
            >
              Packing &amp;{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                Dress Code
              </em>
            </h2>
            <div
              className="w-16 h-0.5 mx-auto mb-5"
              style={{
                background: 'linear-gradient(90deg,transparent,var(--gold),transparent)',
              }}
            />
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              January in Davos is alpine winter. Temperatures range -12°C to
              -2°C. Preparation is key to a productive week.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: '/assets/img/site/pack-clothing.jpg',
                title: 'Business Formal',
                items: [
                  'Dark business suits (multiple — 5 days of events)',
                  'Formal overcoat (full-length, wool)',
                  'Dress shoes with non-slip soles',
                  'Conservative ties and pocket squares',
                  'Formal evening wear for gala dinners',
                ],
              },
              {
                img: '/assets/img/site/transport-car.jpg',
                title: 'Alpine Essentials',
                items: [
                  'Thermal base layers (merino wool)',
                  'Quality ski jacket for outdoor transitions',
                  'Waterproof snow boots',
                  'Warm gloves, scarf, and hat',
                  'Hand warmers for outdoor pavilion walks',
                ],
              },
              {
                img: '/assets/img/site/amenity-map.jpg',
                title: 'Practical Items',
                items: [
                  'Power bank (long days, many meetings)',
                  'Business cards (hundreds)',
                  'Event accreditation & ID documents',
                  'Swiss adapter plug (Type J)',
                  'Medications (altitude sensitivity)',
                ],
              },
            ].map((cat, i) => (
              <AnimateOnScroll key={cat.title} variant="fadeInUp" delay={i * 0.12}>
                <GlassCard className="p-7 h-full flex flex-col">
                  <div className="w-full h-36 rounded-xl overflow-hidden mb-5">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      width={400}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="font-serif text-lg font-semibold mb-4"
                    style={{ color: '#fff' }}
                  >
                    {cat.title}
                  </h3>
                  <ul className="space-y-2.5 flex-1">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <span
                          style={{ color: 'var(--gold)' }}
                          className="font-bold mt-0.5 flex-shrink-0"
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fadeInUp" delay={0.2} className="mt-8">
            <div style={{ border: '1px solid var(--border-gold)', borderRadius: '16px' }}>
            <GlassCard className="p-6">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <span className="font-semibold" style={{ color: 'var(--gold)' }}>
                  GS Hospitality Packing Guide:
                </span>{' '}
                All Premium and Elite Package clients receive our comprehensive
                Davos Preparation Pack including a detailed packing list,
                weather forecast briefing, dress code guide for specific events,
                and emergency contacts. We can also arrange last-minute
                purchases in Zurich before transfer.
              </p>
            </GlassCard>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────── */}
      <section
        id="faq"
        className="py-24 relative overflow-hidden"
        aria-labelledby="faq-title"
        style={{ background: 'var(--bg)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/wef-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp" className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Frequently Asked Questions
            </p>
            <h2
              id="faq-title"
              className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4"
              style={{ color: '#fff' }}
            >
              Davos Annual Meeting 2027{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                FAQ
              </em>
            </h2>
            <div
              className="w-16 h-0.5 mx-auto"
              style={{
                background: 'linear-gradient(90deg,transparent,var(--gold),transparent)',
              }}
            />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeInUp" delay={0.1}>
            <FAQAccordion
              items={[
                {
                  q: 'Do I need a summit event pass to attend?',
                  a: 'Yes, the Davos Annual Meeting sessions require summit accreditation. However, Promenade pavilions and most side events hosted by companies can invite guests without passes. GS Hospitality can help maximise your Davos week even without accreditation.',
                },
                {
                  q: 'How far in advance should I book accommodation?',
                  a: 'We strongly recommend booking 12–18 months in advance. The best chalets within walking distance of the conference centre are reserved 18 months ahead. For Davos 2027 (January 19–23), the ideal booking window is now through December 2025.',
                },
                {
                  q: 'What is the weather like in Davos in January?',
                  a: 'January in Davos is cold alpine winter. Temperatures range from -12°C to -2°C, with possible snowfall. Davos has excellent heated indoor facilities and most movement involves short walks. GS Hospitality provides full packing guidance.',
                },
                {
                  q: 'Can GS Hospitality arrange halal or kosher catering?',
                  a: 'Absolutely. We have dedicated private chef networks for halal, kosher, vegan, Jain, and all other dietary requirements. Our Gulf state delegation clients receive fully halal catering with appropriate menus, sourced from vetted suppliers.',
                },
                {
                  q: 'Can I bring a personal security team to Davos?',
                  a: 'Yes, but coordination is required well in advance. Swiss authorities require advance notification for personal security teams. GS Hospitality works with Swiss Federal Police and cantonal authorities to ensure smooth coordination and all necessary permits.',
                },
                {
                  q: "What's the difference between a pavilion and a lounge?",
                  a: 'A pavilion is a standalone branded structure on the Promenade — typically 50–300 sqm, purpose-built for Davos week. A lounge is a private hospitality space within an existing venue. Both can host events without summit passes. Pavilions offer higher brand visibility; lounges offer more privacy.',
                },
                {
                  q: 'Does GS Hospitality provide visa support?',
                  a: 'We provide comprehensive visa advisory services including Schengen visa invitation letters, documentation checklists by nationality, and guidance on processing times. Our travel advisory team will guide you through every step.',
                },
                {
                  q: 'Can I extend my stay for leisure after the Annual Meeting?',
                  a: 'Many clients extend their stays for Swiss Alpine experiences. We arrange Glacier Express journeys, Zermatt and Matterhorn visits, Jungfraujoch excursions, St. Moritz stays, and bespoke Alpine tours.',
                },
              ]}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 9. CTA ───────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        aria-labelledby="cta-title"
        style={{ background: 'var(--bg)' }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll variant="fadeInUp">
            <div
              className="rounded-2xl p-16 text-center relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(197,160,89,0.08), rgba(197,160,89,0.03))',
                border: '1px solid var(--border-gold)',
              }}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 100%, rgba(197,160,89,0.12) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10">
                <p
                  className="uppercase tracking-widest text-xs font-medium mb-4"
                  style={{ color: 'var(--gold)' }}
                >
                  Davos Annual Meeting 2027 · Act Now
                </p>
                <h2
                  id="cta-title"
                  className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-5"
                  style={{ color: '#fff' }}
                >
                  Secure Your Davos 2027{' '}
                  <em className="italic" style={{ color: 'var(--gold)' }}>
                    Accommodation
                  </em>
                </h2>
                <p
                  className="text-base max-w-lg mx-auto mb-10 leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Every conversation starts with a WhatsApp. No forms, no
                  waiting — just direct access to our Davos specialists who
                  have attended every Annual Meeting since 2014.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20start%20planning%20my%20Davos%202027%20experience."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      background: '#25D366',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Start Planning on WhatsApp
                  </a>
                  <Link
                    href="/accommodations"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold)',
                      background: 'var(--gold-muted)',
                    }}
                  >
                    View Properties →
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
