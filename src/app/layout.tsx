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
  title: 'GS Hospitality — Davos Summit 2027 | gs-hospitality.ch',
  description:
    'Luxury hospitality specialists for the Davos Annual Meeting. Private chalets, corporate suites, and bespoke concierge services in Davos, January 19–23 2027. Contact us at hello@gs-hospitality.ch.',
  metadataBase: new URL('https://gs-hospitality.ch'),
  openGraph: {
    title: 'GS Hospitality — Davos Summit 2027',
    description:
      'Private chalets, corporate suites, and bespoke concierge services for the Davos Annual Meeting 2027.',
    url: 'https://gs-hospitality.ch',
    siteName: 'GS Hospitality',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GS Hospitality — Davos Summit 2027',
    description:
      'Luxury Davos hospitality specialists. Private chalets & concierge services for the Annual Meeting.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* ─── JSON-LD Structured Data ────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'GS Hospitality',
  url: 'https://gs-hospitality.ch',
  telephone: '+41795489025',
  email: 'hello@gs-hospitality.ch',
  description:
    'Luxury Davos Summit hospitality specialists — private chalets, corporate suites, and concierge services for the Annual Meeting.',
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
