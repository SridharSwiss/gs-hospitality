import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact GS Hospitality — Davos 2027 Enquiries | Switzerland',
  description:
    'Contact GS Hospitality for Davos 2027 hospitality enquiries. Email hello@gs-hospitality.ch or WhatsApp +41 79 548 90 25. Typically within 2 hours.',
  keywords:
    'contact GS Hospitality, Davos 2027 enquiry, Davos accommodation enquiry, hospitality Davos contact, WhatsApp Switzerland hospitality',
  openGraph: {
    title: 'Contact GS Hospitality — Davos 2027 Enquiries',
    description:
      'Reach GS Hospitality for Davos 2027 hospitality — accommodation, services, tours. WhatsApp for fastest response.',
    url: 'https://gs-hospitality.ch/contact',
    type: 'website',
    images: [{ url: 'https://gs-hospitality.ch/assets/img/heroes/contact-hero.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GS Hospitality — Davos 2027',
    description: 'hello@gs-hospitality.ch · WhatsApp · Typically within 2 hours.',
  },
  alternates: { canonical: 'https://gs-hospitality.ch/contact' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact GS Hospitality',
  url: 'https://gs-hospitality.ch/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'GS Hospitality',
    telephone: '+41795489025',
    email: 'hello@gs-hospitality.ch',
    openingHours: 'Mo-Su 08:00-22:00',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
      addressLocality: 'Davos',
      addressRegion: 'Graubünden',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
