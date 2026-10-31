import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Davos Corporate Services — Lounge Setup, AV, Events & Catering | GS Hospitality',
  description:
    'End-to-end corporate services for the Davos Summit: branded lounge & pavilion setup, professional AV production, full event management, private catering. Trusted by Fortune 500 delegations.',
  keywords:
    'Davos corporate lounge setup, Davos AV production, Davos event management, private catering Davos, Davos pavilion setup, corporate hospitality Davos, Davos brand activation, Switzerland event services',
  openGraph: {
    title: 'Davos Corporate Services — Lounge, AV & Events | GS Hospitality',
    description:
      'End-to-end corporate services for the Davos Summit: branded lounge & pavilion setup, professional AV production, full event management, private catering.',
    url: 'https://gs-hospitality.ch/services',
    type: 'website',
    images: [{ url: 'https://gs-hospitality.ch/assets/img/og-services.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davos Corporate Services — Lounge, AV & Events | GS Hospitality',
    description:
      'End-to-end corporate services for the Davos Summit: lounge setup, AV production, event management, private catering.',
    images: ['https://gs-hospitality.ch/assets/img/og-services.jpg'],
  },
  alternates: { canonical: 'https://gs-hospitality.ch/services' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GS Hospitality — Davos Corporate Services',
  url: 'https://gs-hospitality.ch/services',
  telephone: '+41795489025',
  email: 'hello@gs-hospitality.ch',
  priceRange: 'CHF — On Request',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Davos',
    addressRegion: 'Graubünden',
    addressCountry: 'CH',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Davos Summit Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Lounge & Brand Activation',
          description: 'Turnkey pavilion design, build and operation on the Davos Promenade.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AV & Sound Production',
          description: '10Gbps connectivity, professional AV systems, live streaming and stage production.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Events & Dinners',
          description: 'Full-spectrum event planning from intimate CEO dinners to 500-person receptions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Catering & Private Dining',
          description: 'Michelin-standard private dining and catering for Davos delegations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chauffeur & Transport',
          description: 'Discreet executive transfers and fleet management across Davos and the Alps.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Concierge',
          description: 'Round-the-clock personal concierge and security access management.',
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
