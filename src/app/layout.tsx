import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

/* ─── Fonts ──────────────────────────────────────────────────────────── */
const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

/* ─── Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'GS Hospitality — Davos 2027 Luxury Hospitality | gs-hospitality.ch',
    template: '%s | GS Hospitality',
  },
  description:
    'Luxury hospitality specialists for the Davos Annual Meeting 2027 (Jan 19–23). Private chalets, corporate suites, VIP concierge, private transfers, and curated Swiss tours. Contact hello@gs-hospitality.ch.',
  metadataBase: new URL('https://gs-hospitality.ch'),
  keywords: [
    'Davos 2027 accommodation',
    'Davos Annual Meeting hospitality',
    'luxury chalets Davos',
    'Davos corporate suites',
    'Switzerland VIP concierge',
    'Davos private transfer',
    'Davos luxury rental',
    'Swiss Alps hospitality',
    'Davos 2027 lodging',
    'GS Hospitality',
  ],
  alternates: {
    canonical: 'https://gs-hospitality.ch',
  },
  openGraph: {
    title: 'GS Hospitality — Davos 2027 Luxury Hospitality',
    description:
      'Private chalets, corporate suites, VIP concierge, and curated Swiss experiences for the Davos Annual Meeting 2027.',
    url: 'https://gs-hospitality.ch',
    siteName: 'GS Hospitality',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://gs-hospitality.ch/assets/img/heroes/davos-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'GS Hospitality — Luxury Davos Accommodation for the Annual Meeting 2027',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GS Hospitality — Davos 2027 Luxury Hospitality',
    description:
      'Private chalets, VIP concierge & curated Swiss experiences for the Davos Annual Meeting. hello@gs-hospitality.ch',
    images: ['https://gs-hospitality.ch/assets/img/heroes/davos-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    other: {
      'msvalidate.01': '',
    },
  },
}

/* ─── JSON-LD Structured Data ────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'GS Hospitality',
  url: 'https://gs-hospitality.ch',
  email: 'hello@gs-hospitality.ch',
  description:
    'Luxury Davos Annual Meeting hospitality specialists — private chalets, corporate suites, VIP concierge, private transfers, and curated Swiss tours.',
  priceRange: 'On Request',
  areaServed: [
    { '@type': 'City', name: 'Davos', containedInPlace: { '@type': 'Country', name: 'Switzerland' } },
  ],
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Davos 2027 Hospitality Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Premium Accommodation', description: 'Vetted private chalets and corporate suites in Davos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Transfers', description: 'Dedicated vehicles with professional drivers for airport and intercity travel' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Curated Swiss Tours', description: 'Glacier Express, Zermatt, Jungfraujoch, Lake Geneva and bespoke Alpine itineraries' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP Concierge', description: 'End-to-end logistics, restaurant reservations, and personal assistance throughout your stay' } },
    ],
  },
}

/* ─── Root Layout ────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
