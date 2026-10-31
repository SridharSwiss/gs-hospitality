import type { Metadata } from 'next';
import AccommodationsClient from './AccommodationsClient';

/* ─── metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Davos Luxury Accommodation 2027 — Chalets, Venues & Apartments | GS Hospitality',
  description:
    'Luxury chalets, corporate HQ venues and executive apartments in Davos for the January 2027 summit. Steps from the conference centre. Limited availability — book now.',
  keywords: [
    'Davos accommodation 2027',
    'luxury chalet Davos',
    'Davos chalet rental 2027',
    'corporate venue Davos',
    'Davos apartment summit',
    'Davos summit accommodation',
    'Switzerland luxury chalet',
    'Davos January 2027 stay',
  ],
  alternates: {
    canonical: 'https://gs-hospitality.ch/accommodations',
  },
  openGraph: {
    title: 'Davos Luxury Accommodation 2027 | GS Hospitality',
    description:
      'Luxury chalets, corporate HQ venues and executive apartments in Davos for the January 2027 summit. Steps from the conference centre. Limited availability — book now.',
    url: 'https://gs-hospitality.ch/accommodations',
    siteName: 'GS Hospitality',
    images: [{ url: '/assets/img/heroes/accommodations-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_CH',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davos Luxury Accommodation 2027 | GS Hospitality',
    description:
      'Luxury chalets, corporate HQ venues and executive apartments in Davos for the January 2027 summit.',
  },
};

/* ─── JSON-LD ────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'GS Hospitality — Davos Luxury Accommodations',
  url: 'https://gs-hospitality.ch/accommodations',
  description:
    'Luxury chalets, corporate HQ venues and executive apartments in Davos for the January 2027 summit. Steps from the conference centre.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Davos',
    addressRegion: 'Graubünden',
    postalCode: '7270',
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.8026,
    longitude: 9.8373,
  },
  telephone: '+41795489025',
  email: 'hello@gs-hospitality.ch',
  priceRange: 'On Request',
  starRating: { '@type': 'Rating', ratingValue: '5' },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'High-speed WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24/7 Concierge', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Chef Available', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Walking distance to Davos conference centre', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Parking', value: true },
  ],
  availableLanguage: ['English', 'German', 'French'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+41795489025',
    email: 'hello@gs-hospitality.ch',
    availableLanguage: ['English', 'German'],
  },
  containsPlace: [
    {
      '@type': 'LodgingBusiness',
      name: 'Grünistrasse 2a',
      description: '2-bedroom apartment with balcony and pool access — 1.9 km to Congress Centre.',
      address: { '@type': 'PostalAddress', addressLocality: 'Davos Platz', addressCountry: 'CH' },
    },
    {
      '@type': 'LodgingBusiness',
      name: 'Talstrasse 19',
      description: 'Modern open-plan apartment on Talstrasse — 1 km from the Congress Centre with private garage.',
      address: { '@type': 'PostalAddress', addressLocality: 'Davos Platz', addressCountry: 'CH' },
    },
    {
      '@type': 'LodgingBusiness',
      name: 'Lehenweg 26, Klosters',
      description: 'Private chalet with sauna and open fireplace in Klosters Serneus.',
      address: { '@type': 'PostalAddress', addressLocality: 'Klosters', addressCountry: 'CH' },
    },
    {
      '@type': 'LodgingBusiness',
      name: 'Davos Summit Apartment',
      description: "Bright 3.5-room apartment, 2 minutes' walk from Davos Promenade with parking.",
      address: { '@type': 'PostalAddress', addressLocality: 'Davos', addressCountry: 'CH' },
    },
    {
      '@type': 'LodgingBusiness',
      name: 'Alpine Chalet Klosters Haus',
      description: 'Spacious 4.5-room chalet in Klosters village with private back garden and 3 parking spaces.',
      address: { '@type': 'PostalAddress', addressLocality: 'Klosters', addressCountry: 'CH' },
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20enquire%20about%20Davos%20Summit%202027%20accommodation.',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
    result: { '@type': 'LodgingReservation', name: 'Davos Summit 2027 Accommodation' },
  },
};

/* ─── page ───────────────────────────────────────────── */
export default function AccommodationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AccommodationsClient />
    </>
  );
}
