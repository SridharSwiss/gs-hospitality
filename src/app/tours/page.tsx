import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Swiss Alpine Experiences — Glacier Express, Zermatt & Beyond | GS Hospitality',
  description:
    'Curated luxury Swiss tours for Davos summit delegates: Glacier Express, Zermatt Matterhorn, Jungfraujoch, Lake Geneva cruises, St Moritz & bespoke Alpine itineraries. Private guides included.',
  keywords:
    'Swiss tours luxury, Glacier Express tour, Zermatt tour, Jungfraujoch experience, Swiss Alps tour, Lake Geneva cruise, St Moritz tour, Switzerland private tour, Alpine experiences, Swiss luxury travel',
  openGraph: {
    title: 'Luxury Swiss Tours & Alpine Experiences | GS Hospitality',
    description:
      'Curated luxury Swiss tours for Davos summit delegates: Glacier Express, Zermatt Matterhorn, Jungfraujoch, Lake Geneva cruises & bespoke Alpine itineraries.',
    url: 'https://gs-hospitality.ch/tours',
  },
};

const tourCategories = [
  {
    title: 'Glacier Express',
    subtitle: 'Scenic Train Journey',
    image: '/assets/img/site/curate-guide.jpg',
    description:
      "The world’s most beautiful train journey — 291 bridges, 91 tunnels, 8 hours of jaw-dropping Alpine scenery between Zermatt and St. Moritz.",
    duration: '8 hours',
    highlights: ['Private compartment available', 'Zermatt to St Moritz', 'Panoramic windows', 'On-board dining'],
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Glacier%20Express%20private%20tour.',
  },
  {
    title: 'Lake Geneva Cruise',
    subtitle: 'Private Yacht Charter',
    image: '/assets/img/site/curate-cruise.jpg',
    description:
      'Chartered private yacht on Lake Geneva with the Alps as your backdrop. Sail past Montreux, Château de Chillon, and Lausanne with on-board catering.',
    duration: '4–8 hours',
    highlights: ['Private vessel', 'Up to 20 guests', 'Swiss wines included', 'Ideal for networking'],
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Lake%20Geneva%20private%20cruise.',
  },
  {
    title: 'Swiss Package Tours',
    subtitle: 'Multi-Day Itineraries',
    image: '/assets/img/site/curate-package.jpg',
    description:
      'Multi-day curated packages combining the best of Switzerland\'s iconic destinations — Zurich, Lucerne, Interlaken, Geneva, and beyond.',
    duration: '2–7 days',
    highlights: ['Pre or post-summit', 'Private transfers', 'Curated hotels', 'Expert local guides'],
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20a%20Swiss%20multi-day%20package%20tour.',
  },
  {
    title: 'Bespoke Alpine',
    subtitle: 'Fully Custom Experience',
    image: '/assets/img/site/curate-bespoke.jpg',
    description:
      'Fully custom itineraries designed around your interests, timing, and group profile. From private wine cellars to helicopter glacier landings.',
    duration: 'Your schedule',
    highlights: ['Designed around you', 'Any group size', 'Unique access', 'White-glove service'],
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20design%20a%20bespoke%20Swiss%20itinerary.',
  },
];

const featuredTours = [
  {
    title: 'Glacier Express — The Scenic Throne',
    image: '/assets/img/tours/glacier-express.jpg',
    alt: 'Glacier Express scenic alpine train journey',
    description:
      'Arguably the world\'s most beautiful train journey: 291 bridges, 91 tunnels, and 8 hours of jaw-dropping Alpine scenery between Zermatt and St. Moritz. Private compartments for GS clients.',
    duration: '8 hours',
    group: 'Private compartment',
    location: 'Zermatt – St Moritz',
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Glacier%20Express%20private%20tour.',
  },
  {
    title: 'Zermatt & Matterhorn Private Day',
    image: '/assets/img/tours/matterhorn.jpg',
    alt: 'Zermatt and Matterhorn private day tour',
    description:
      'Private chauffeured transfer to Zermatt (car-free village), Matterhorn Glacier Paradise at 3,883m, and a private fondue lunch with a view of the world\'s most iconic peak.',
    duration: 'Full day (10h)',
    group: 'Up to 8 guests',
    location: 'From Davos / Zurich',
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Zermatt%20and%20Matterhorn%20private%20day%20tour.',
  },
  {
    title: 'Jungfraujoch — Top of Europe',
    image: '/assets/img/tours/jungfraujoch.jpg',
    alt: 'Jungfraujoch Top of Europe alpine summit',
    description:
      'Take the rack railway to 3,454m — the highest railway station in Europe. Glacier views, the Sphinx Observatory, and a private warm lunch above the clouds. Unforgettable on a clear January day.',
    duration: 'Full day (9h)',
    group: 'Private group',
    location: 'Interlaken / Grindelwald',
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Jungfraujoch%20private%20tour.',
  },
  {
    title: 'Zurich Private City Experience',
    image: '/assets/img/tours/zurich.jpg',
    alt: 'Zurich private city experience',
    description:
      'The Bahnhofstrasse luxury shopping district, old town with medieval guildhalls, private art collection viewings, and a dinner at a Michelin-starred restaurant by the lake.',
    duration: 'Half or full day',
    group: 'Up to 6 guests',
    location: 'Zurich',
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Zurich%20private%20city%20experience.',
  },
  {
    title: 'Lake Geneva Private Cruise',
    image: '/assets/img/tours/lake-geneva.jpg',
    alt: 'Lake Geneva private cruise',
    description:
      'Chartered private yacht on Lake Geneva with the Alps as your backdrop. Sail past Montreux, Château de Chillon, and Lausanne. On-board catering and Swiss wines included. Ideal for private networking.',
    duration: '4–8 hours',
    group: 'Up to 20 guests',
    location: 'Geneva / Lausanne',
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Lake%20Geneva%20private%20cruise.',
  },
  {
    title: 'Swiss Cheese & Chocolate Country',
    image: '/assets/img/tours/swiss-countryside.jpg',
    alt: 'Swiss cheese and chocolate countryside tour',
    description:
      'A private guided tour through the Emmental region — home of Swiss cheese — then to Broc\'s Cailler chocolate factory for a private tasting. A uniquely Swiss experience beloved by international delegates.',
    duration: 'Full day (8h)',
    group: 'Up to 10 guests',
    location: 'Emmental / Broc',
    waMsg: 'Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20Swiss%20Cheese%20and%20Chocolate%20Country%20tour.',
  },
];

const itineraries = [
  {
    name: 'Popular Combination',
    subtitle: '4-day post-summit programme',
    image: '/assets/img/site/itinerary-alps.jpg',
    days: [
      'Day 1: Davos → Glacier Express → Zermatt (private compartment)',
      'Day 2: Matterhorn Glacier Paradise + private dinner Zermatt',
      'Day 3: Zermatt → Lucerne by train · Lake cruise · Pilatus cablecar',
      'Day 4: Lucerne → Zurich · City tour · Departures',
    ],
    duration: '4 days · 2 pax',
  },
  {
    name: 'West Switzerland Circuit',
    subtitle: '3-day pre or post-summit',
    image: '/assets/img/site/curate-cruise.jpg',
    days: [
      'Day 1: Davos → Geneva · Michelin dinner · Old town',
      'Day 2: Lake Geneva private cruise · Chateau de Chillon · Montreux',
      'Day 3: Lausanne · Zurich · GVA departures',
    ],
    duration: '3 days · private group',
  },
];

const bespokeInclusions = [
  'Pre-summit arrival tours to explore Switzerland before Davos',
  'Post-summit extensions across 2–7 days',
  'Multi-city Swiss itineraries: Zurich, Bern, Geneva, Lucerne',
  'Alpine adventure activities: skiing, snowshoeing, dog sledding',
  'Private access: vineyard tours, watch manufacture visits, chocolate ateliers',
  'Culinary experiences: Michelin restaurants, private chef dinners',
  'Cultural: private museum tours, opera, symphony orchestra',
];

const privateTourFeatures = [
  {
    icon: '✦',
    title: 'Dedicated Guide',
    text: 'Expert English-speaking Swiss guides exclusively for your group throughout the journey.',
  },
  {
    icon: '✦',
    title: 'Bespoke Transport',
    text: 'Executive vehicles, private rail compartments, or chartered helicopters — your preference.',
  },
  {
    icon: '✦',
    title: 'Access Unlocked',
    text: 'Private museum after-hours, vineyard cellars, watch manufactures, and exclusive Alpine clubs.',
  },
  {
    icon: '✦',
    title: 'Fully Coordinated',
    text: 'All logistics, permits, reservations, and transfers handled by GS Hospitality. You only arrive.',
  },
];

const winterActivities = [
  {
    title: 'Alpine Skiing & Snowboarding',
    description:
      'Access world-class slopes across the Davos-Klosters ski area — 300km of pistes ranging from gentle blues to challenging blacks. Private ski instructors and equipment hire arranged.',
    icon: '⛷',
  },
  {
    title: 'Snowshoeing Expeditions',
    description:
      'Guided snowshoe treks through pristine winter forest trails around Davos, Klosters, and the Parsenn area. Morning or afternoon half-day options. Suitable for all fitness levels.',
    icon: '🏔',
  },
  {
    title: 'Ice Skating on Davos Lake',
    description:
      'Davos Lake transforms into one of Europe\'s largest natural ice rinks in winter. Private session hire available with equipment included. A truly memorable Alpine evening.',
    icon: '⛸',
  },
  {
    title: 'Dog Sledding',
    description:
      'An unforgettable private dog sledding experience through the Prättigau valley near Klosters. Handle the reins yourself or ride as a passenger. Groups of 2–8.',
    icon: '🐕',
  },
  {
    title: 'Toboggan Runs',
    description:
      'The legendary Schatzalp run — a 1.5km toboggan track descending to Davos Platz. Equipment provided. Popular evening activity after summit sessions.',
    icon: '🛷',
  },
  {
    title: 'Curling & Ice Sports',
    description:
      'Private curling lessons and match at the Davos Eisstadion. A classic Swiss experience for groups. Team-building format available for corporate delegations.',
    icon: '🥌',
  },
];

const bookingSteps = [
  {
    num: '1',
    title: 'WhatsApp Us',
    text: 'Send us a message with your dates, group size, interests, and how many days you have. We aim to respond within 2 hours¹ with tailored options.',
  },
  {
    num: '2',
    title: 'We Design Your Journey',
    text: 'Our Swiss travel specialists build a custom itinerary with pricing within 24 hours. One revision included. Adjustments made until you\'re satisfied.',
  },
  {
    num: '3',
    title: 'Confirm & Enjoy',
    text: 'Confirm with a deposit. We handle all bookings, permits, transfers, and logistics. You simply show up and experience the best of Switzerland.',
  },
];

const reviews = [
  {
    initials: 'IR',
    name: 'Industry Leader',
    role: 'Chief Sustainability Officer · European Energy Group',
    review:
      '"We extended our stay to do the Swiss Alpine tour after the summit. The Glacier Express, Zermatt, Jungfraujoch — all organised seamlessly. Our team is still talking about it six months later."',
    service: 'Swiss Alpine Tour',
    date: 'March 2024',
  },
  {
    initials: 'PS',
    name: 'Senior Executive',
    role: 'Head of Global Affairs · Asia-Pacific Conglomerate',
    review:
      '"We added a 3-day Lucerne and Interlaken extension. The private guide was exceptional — genuinely passionate about Swiss history. The Jungfraujoch was a career highlight for our whole team."',
    service: 'Post-Summit Alpine Extension',
    date: 'February 2024',
  },
  {
    initials: 'HM',
    name: 'Financial Executive',
    role: 'Chief Executive · European Private Bank',
    review:
      '"I am Swiss myself and I still learned things from the GS private Zurich city tour arranged for my international guests. The private art collection visit was extraordinary."',
    service: 'Zurich Private City Experience',
    date: 'January 2024',
  },
];

export default function ToursPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <HeroSection
        title="Swiss Alpine Experiences"
        label="CURATED TOURS · BEYOND DAVOS"
        description="Many of our Davos Summit clients extend their stay to discover Switzerland's extraordinary landscapes. From the Glacier Express to private Matterhorn views — we curate journeys that match the calibre of your Davos week."
        imagePath="/assets/img/heroes/tours-hero.jpg"
        imageAlt="Swiss Alpine landscape with mountains and snow"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#featured-tours"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: '#050508',
              boxShadow: '0 4px 24px rgba(197,160,89,0.3)',
            }}
          >
            Browse Tours
          </a>
          <a
            href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20plan%20a%20bespoke%20Swiss%20tour%20around%20Davos%20Summit%202027."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold)',
              backdropFilter: 'blur(20px)',
            }}
          >
            Bespoke Itinerary
          </a>
        </div>
      </HeroSection>

      {/* ── CURATED TOURS GRID ───────────────────────────────── */}
      <SectionWrapper className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p
                className="text-xs uppercase tracking-widest font-medium mb-4"
                style={{ color: 'var(--gold)' }}
              >
                Tour Categories
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6" style={{ color: '#fff' }}>
                How We{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Curate
                </em>
              </h2>
              <div
                className="w-16 h-px mx-auto"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourCategories.map((cat, i) => (
              <AnimateOnScroll key={cat.title} delay={i * 0.12}>
                <div
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                  }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent 40%, rgba(5,5,8,0.85))',
                      }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#fff' }}>
                      {cat.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
                      {cat.description}
                    </p>

                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                        Highlights
                      </p>
                      <ul className="space-y-1">
                        {cat.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--gold)' }}>✓</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: '1px solid var(--border)' }}
                    >
                      <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                        ⏱ {cat.duration}
                      </span>
                      <a
                        href={`https://wa.me/41795489025?text=${cat.waMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          color: 'var(--gold)',
                          border: '1px solid var(--border-gold)',
                          background: 'var(--gold-muted)',
                        }}
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── FEATURED TOURS ───────────────────────────────────── */}
      <SectionWrapper
        id="featured-tours"
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/tours-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,160,89,0.08), transparent)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Our Most Popular
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#fff' }}>
                Featured{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Tours
                </em>
              </h2>
              <div
                className="w-16 h-px mx-auto mb-6"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
              <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                Six experiences our clients request year after year. Each can be private, extended, or combined into a multi-day programme.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour, i) => (
              <AnimateOnScroll key={tour.title} delay={i * 0.1}>
                <div
                  className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                  }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent 50%, rgba(5,5,8,0.9))',
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: '#fff' }}>
                      {tour.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
                      {tour.description}
                    </p>

                    <div
                      className="flex flex-wrap gap-3 mb-4 text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span>⏱ {tour.duration}</span>
                      <span>👥 {tour.group}</span>
                      <span>📍 {tour.location}</span>
                    </div>

                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: '1px solid var(--border)' }}
                    >
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: 'var(--text-subtle)' }}>
                          Pricing
                        </p>
                        <p className="font-serif text-base font-semibold" style={{ color: 'var(--gold)' }}>
                          On Request
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/41795489025?text=${tour.waMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          color: 'var(--gold)',
                          border: '1px solid var(--border-gold)',
                          background: 'var(--gold-muted)',
                        }}
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── FEATURED ITINERARIES — MATTERHORN / JUNGFRAUJOCH / LUCERNE ── */}
      <SectionWrapper
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/site/itinerary-alps.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Custom Itineraries
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#fff' }}>
                Bespoke{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Swiss Journey
                </em>
              </h2>
              <div
                className="w-16 h-px mb-6"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Our most discerning clients prefer to design their own Swiss experience from scratch. Tell us your interests, your group, how many days you have, and we build a journey unlike anything you&apos;ll find in a brochure.
              </p>
              <ul className="space-y-3 mb-8">
                {bespokeInclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="font-bold mt-0.5" style={{ color: 'var(--gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20design%20a%20bespoke%20Swiss%20itinerary%20around%20Davos%20Summit%202027."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  boxShadow: '0 4px 24px rgba(37,211,102,0.25)',
                }}
              >
                Design My Swiss Journey
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="space-y-4">
                {itineraries.map((itin) => (
                  <div
                    key={itin.name}
                    className="rounded-2xl p-6"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={itin.image} alt={itin.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: '#fff' }}>
                          {itin.name}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {itin.subtitle}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {itin.days.map((day) => (
                        <li key={day} className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {day}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex justify-between items-center mt-4 pt-4"
                      style={{ borderTop: '1px solid var(--border)' }}
                    >
                      <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                        {itin.duration}
                      </span>
                      <span className="font-medium text-xs" style={{ color: 'var(--gold)' }}>
                        Pricing on enquiry
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </SectionWrapper>

      {/* ── PRIVATE TOURS ────────────────────────────────────── */}
      <SectionWrapper
        className="py-24"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Private Experiences
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#fff' }}>
                The Private{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Difference
                </em>
              </h2>
              <div
                className="w-16 h-px mx-auto mb-6"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
              <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                Every GS Hospitality tour is fully private. No shared coaches, no strangers, no compromise — only you, your group, and Switzerland at its finest.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {privateTourFeatures.map((feat, i) => (
              <AnimateOnScroll key={feat.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl"
                    style={{
                      background: 'rgba(197,160,89,0.12)',
                      border: '1px solid var(--border-gold)',
                    }}
                  >
                    <span style={{ color: 'var(--gold)' }}>{feat.icon}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: '#fff' }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {feat.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── WINTER ACTIVITIES ────────────────────────────────── */}
      <SectionWrapper
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/tours-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(197,160,89,0.07), transparent)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Davos · Klosters Region
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#fff' }}>
                Winter{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Activities
                </em>
              </h2>
              <div
                className="w-16 h-px mx-auto mb-6"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
              <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                Between or after summit sessions, the Davos-Klosters area offers world-class winter experiences. We arrange everything — equipment, guides, and transfers.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {winterActivities.map((act, i) => (
              <AnimateOnScroll key={act.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                  }}
                >
                  <div className="text-3xl mb-4">{act.icon}</div>
                  <h3 className="font-serif text-lg font-semibold mb-3" style={{ color: '#fff' }}>
                    {act.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {act.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div className="text-center mt-12">
              <a
                href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20winter%20activities%20around%20Davos%20during%20the%20summit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  color: 'var(--gold)',
                  border: '1px solid var(--border-gold)',
                  background: 'var(--gold-muted)',
                }}
              >
                Arrange Winter Activities
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* ── BOOKING INFO ─────────────────────────────────────── */}
      <SectionWrapper
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/heroes/tours-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Simple Process
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#fff' }}>
                How to Book{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Your Tour
                </em>
              </h2>
              <div
                className="w-16 h-px mx-auto"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {bookingSteps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.15}>
                <div
                  className="rounded-2xl p-8 text-center h-full"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-lg"
                    style={{
                      background: 'rgba(197,160,89,0.12)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold)',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#fff' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {step.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div
              className="rounded-2xl p-6 text-center mb-10"
              style={{
                background: 'rgba(197,160,89,0.06)',
                border: '1px solid var(--border-gold)',
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--gold)' }}>
                Recommended Lead Times
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong style={{ color: '#fff' }}>Popular tours (Glacier Express, Jungfraujoch):</strong> Book 4–6 weeks before your planned date during the January summit period.&nbsp; · &nbsp;
                <strong style={{ color: '#fff' }}>Bespoke itineraries:</strong> Allow 2–3 weeks for planning.&nbsp; · &nbsp;
                <strong style={{ color: '#fff' }}>Half-day activities:</strong> 5–7 business days sufficient.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <div className="text-center">
              <a
                href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20book%20a%20Swiss%20tour%20experience."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  color: '#050508',
                  boxShadow: '0 4px 24px rgba(197,160,89,0.3)',
                }}
              >
                Start Planning My Tour
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <SectionWrapper
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/img/site/davos-aerial.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Traveller Reviews
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#fff' }}>
                Clients on{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>
                  Their Swiss Tours
                </em>
              </h2>
              <div
                className="w-16 h-px mx-auto"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <AnimateOnScroll key={rev.initials + i} delay={i * 0.12}>
                <article
                  className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                        color: '#050508',
                      }}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#fff' }}>
                        {rev.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {rev.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs tracking-wider mb-3" style={{ color: 'var(--gold)' }}>
                    ★★★★★
                  </p>
                  <p className="text-sm leading-relaxed italic mb-5 flex-1" style={{ color: 'var(--text-muted)' }}>
                    {rev.review}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(197,160,89,0.1)',
                        border: '1px solid var(--border)',
                        color: 'var(--gold)',
                      }}
                    >
                      {rev.service}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                      {rev.date}
                    </span>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <SectionWrapper
        className="py-24"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <div
              className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(197,160,89,0.08), rgba(197,160,89,0.03))',
                border: '1px solid var(--border-gold)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 100%, rgba(197,160,89,0.1), transparent 70%)',
                }}
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: 'var(--gold)' }}>
                  Extend Your Swiss Experience
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5" style={{ color: '#fff' }}>
                  Curate Your{' '}
                  <em className="italic" style={{ color: 'var(--gold)' }}>
                    Swiss Experience
                  </em>
                </h2>
                <p
                  className="text-base leading-relaxed max-w-lg mx-auto mb-10"
                  style={{ color: 'var(--text-muted)' }}
                >
                  The most memorable summit visits extend beyond the Forum. Let us design a Swiss experience that complements your Davos week and gives your delegation memories to last a lifetime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20plan%20Swiss%20tours%20around%20my%20Davos%20Summit%202027%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                    style={{
                      background: '#25D366',
                      color: '#fff',
                      boxShadow: '0 4px 24px rgba(37,211,102,0.25)',
                    }}
                  >
                    Plan My Swiss Experience
                  </a>
                  <Link
                    href="/swiss-travel"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                    style={{
                      color: 'var(--gold)',
                      border: '1px solid var(--border-gold)',
                      background: 'var(--gold-muted)',
                    }}
                  >
                    Swiss Travel Guide →
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>
    </>
  );
}
