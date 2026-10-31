import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EntryGate from '@/components/EntryGate'
import HeroSection from '@/components/HeroSection'
import StatsBanner from '@/components/StatsBanner'
import PropertyCard from '@/components/PropertyCard'
import FeaturedBanner from '@/components/FeaturedBanner'
import WhyCards from '@/components/WhyCards'
import ServicesOverview from '@/components/ServicesOverview'
import CtaSection from '@/components/CtaSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'GS Hospitality — Davos Summit 2027 Hospitality Specialists',
  description:
    "GS Hospitality delivers luxury accommodations, corporate lounges, and white-glove concierge for the Davos Annual Meeting 2027. From chalets to turnkey pavilions — Swiss precision for the world's most influential gathering.",
  keywords: [
    'Davos 2027 accommodation',
    'Davos Summit hospitality',
    'luxury chalet Davos',
    'corporate hospitality Davos',
    'WEF 2027 accommodation',
    'GS Hospitality',
    'Davos Annual Meeting',
  ],
  openGraph: {
    title: 'GS Hospitality — Davos Summit 2027 Hospitality Specialists',
    description:
      'Luxury accommodations and concierge services for the Davos Annual Meeting 2027.',
    url: 'https://gs-hospitality.ch',
    siteName: 'GS Hospitality',
    images: [{ url: '/assets/img/og-home.jpg', width: 1200, height: 630 }],
    locale: 'en_CH',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'GS Hospitality',
      url: 'https://gs-hospitality.ch',
      logo: 'https://gs-hospitality.ch/assets/img/site/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'hello@gs-hospitality.ch',
        availableLanguage: ['English', 'German', 'French'],
      },
      sameAs: ['https://wa.me/41795489025'],
    },
    {
      '@type': 'Event',
      name: 'Davos Annual Meeting 2027',
      startDate: '2027-01-19',
      endDate: '2027-01-23',
      location: {
        '@type': 'Place',
        name: 'Davos Congress Centre',
        address: { '@type': 'PostalAddress', addressLocality: 'Davos', addressCountry: 'CH' },
      },
      organizer: { '@type': 'Organization', name: 'GS Hospitality', url: 'https://gs-hospitality.ch' },
    },
  ],
}

const stats = [
  { value: '5', label: 'Exclusive Properties' },
  { value: '15+', label: 'Years of Davos Experience' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '100%', label: 'Verified Properties' },
]

const properties = [
  {
    name: 'Grünistrasse 2a',
    type: '2BR Apartment',
    guests: 2,
    distance: '1.9 km to Congress Centre',
    description:
      'Elegant two-bedroom apartment with refined interiors, balcony views and direct access to Davos Dorf. A refined base for summit delegates.',
    imagePath: '/assets/img/properties/gruenistrasse-living.jpg',
  },
  {
    name: 'Talstrasse 19',
    type: '2BR Apartment',
    guests: 4,
    distance: '1 km to Congress Centre',
    description:
      'Centrally located apartment on the main Promenade axis, walking distance to the congress centre. Comfortably accommodates a four-person delegation.',
    imagePath: '/assets/img/properties/talstrasse-living.jpg',
  },
  {
    name: 'Lehenweg 26, Klosters',
    type: '3BR Chalet + Sauna',
    guests: 3,
    distance: '22 min to Congress Centre',
    description:
      'Alpine chalet in Klosters featuring sauna, mountain views and authentic Swiss charm. Privacy and luxury away from the summit bustle.',
    imagePath: '/assets/img/properties/lehenweg-living.jpg',
  },
  {
    name: 'Davos Summit Apartment',
    type: '3.5-Room Apartment',
    guests: 3,
    distance: 'Near Promenade',
    description:
      'Spacious 3.5-room apartment steps from the Promenade, offering premium finishes and a prime position in central Davos for the annual summit week.',
    imagePath: '/assets/img/properties/summit-apt-living.jpg',
  },
  {
    name: 'Alpine Chalet Klosters Haus',
    type: '4.5-Room Chalet',
    guests: 6,
    distance: '22 min to Congress Centre',
    description:
      'Grand four-and-a-half room Klosters chalet with private garden — ideal for senior leadership groups seeking privacy, space and alpine grandeur.',
    imagePath: '/assets/img/properties/klosters-living.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Entry Gate */}
      <EntryGate />

      {/* 2. Featured Banner */}
      <FeaturedBanner />

      {/* 3. Hero */}
      <HeroSection
        title="Your Complete Davos Summit 2027 Partner"
        label="DAVOS SUMMIT HOSPITALITY SPECIALISTS"
        description="From luxury chalets steps from the conference centre to turnkey corporate pavilions — GS Hospitality delivers Swiss precision for the world's most influential gathering."
        imagePath="/assets/img/heroes/home-hero.jpg"
        imageAlt="Davos alpine panorama at dusk"
        height="full"
      >
        {/* CTA Buttons */}
        <a
          href="https://wa.me/41795489025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))',
            color: '#000',
            boxShadow: '0 4px 24px rgba(197,160,89,0.35)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us Now
        </a>
        <Link
          href="/davos-2027"
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{
            background: 'var(--surface)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold)',
          }}
        >
          Explore Davos 2027 →
        </Link>

        {/* Trust badges */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium"
          style={{ color: 'var(--text-muted)', width: '100%' }}
        >
          <span className="flex items-center gap-1.5">
            <span style={{ color: 'var(--gold)' }}>★</span> Highly rated by clients
          </span>
          <span
            className="hidden sm:block w-px h-4"
            style={{ background: 'var(--border)' }}
            aria-hidden="true"
          />
          <span>10+ years of Davos Summit experience</span>
          <span
            className="hidden sm:block w-px h-4"
            style={{ background: 'var(--border)' }}
            aria-hidden="true"
          />
          <span className="flex items-center gap-1.5">
            <span style={{ color: 'var(--gold)' }}>✓</span> Fully verified properties
          </span>
        </div>
      </HeroSection>

      {/* 4. Stats */}
      <section className="py-12 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-5xl mx-auto">
          <StatsBanner stats={stats} />
        </div>
      </section>

      {/* 5. Featured Listings */}
      <section className="py-20 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-medium mb-4"
              style={{ color: 'var(--gold)' }}
            >
              Handpicked for the Summit
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
            >
              Featured Listings
            </h2>
            {/* Gold separator */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px flex-1 max-w-[80px]" style={{ background: 'var(--border-gold)' }} />
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--gold)' }}
              />
              <span className="h-px flex-1 max-w-[80px]" style={{ background: 'var(--border-gold)' }} />
            </div>
          </div>

          {/* Property grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
              <PropertyCard key={p.name} {...p} />
            ))}
          </div>

          {/* View all link */}
          <div className="mt-12 text-center">
            <Link
              href="/accommodations"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--surface)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold)',
              }}
            >
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why GS Hospitality */}
      <WhyCards />

      {/* 7. Services Overview */}
      <ServicesOverview />

      {/* 8. CTA Section */}
      <CtaSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. Newsletter */}
      <NewsletterSignup variant="banner" />
    </>
  )
}
