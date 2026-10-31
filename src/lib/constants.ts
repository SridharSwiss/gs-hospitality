import type { Variants } from 'framer-motion'

/* ─── Contact & Identity ─────────────────────────────────────────────── */
export const WHATSAPP_NUMBER = '41795489025'
export const WHATSAPP_URL    = 'https://wa.me/41795489025'
export const EMAIL           = 'hello@gs-hospitality.ch'
export const SITE_URL        = 'https://gs-hospitality.ch'

/* ─── Event Dates ────────────────────────────────────────────────────── */
export const DAVOS_DATES = 'January 19–23, 2027'

/* ─── Navigation ─────────────────────────────────────────────────────── */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home',           href: '/'              },
  { label: 'Davos 2027',     href: '/davos-2027'    },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Services',       href: '/services'      },
  { label: 'Swiss Travel',   href: '/swiss-travel'  },
  { label: 'Tours',          href: '/tours'         },
  { label: 'Contact',        href: '/contact'       },
]

/* ─── Properties ─────────────────────────────────────────────────────── */
export interface Property {
  id:          string
  name:        string
  type:        'Chalet' | 'Suite' | 'Penthouse' | 'Villa' | 'Apartment'
  guests:      number
  distance:    string
  description: string
  image:       string
}

export const PROPERTIES: Property[] = [
  {
    id:          'chalet-alpine-crest',
    name:        'Alpine Crest Chalet',
    type:        'Chalet',
    guests:      12,
    distance:    '4 min walk to Congress Centre',
    description:
      'A masterpiece of alpine architecture, this fully staffed private chalet delivers sweeping mountain panoramas, a spa suite, and a private chef — the ultimate retreat for senior delegations.',
    image:       '/images/properties/alpine-crest.jpg',
  },
  {
    id:          'davos-grand-penthouse',
    name:        'Grand Belvedere Penthouse',
    type:        'Penthouse',
    guests:      8,
    distance:    '2 min walk to Congress Centre',
    description:
      'Floor-to-ceiling glass, a wraparound terrace, and a dedicated concierge. This penthouse positions your team at the very heart of Davos — discreet, secure, and effortlessly elegant.',
    image:       '/images/properties/grand-belvedere.jpg',
  },
  {
    id:          'sertig-valley-villa',
    name:        'Sertig Valley Villa',
    type:        'Villa',
    guests:      16,
    distance:    '12 min by private transfer',
    description:
      'Exclusive privacy in the pristine Sertig valley. This landmark estate accommodates large delegations with multiple living wings, a wellness pavilion, and panoramic views of untouched alpine forest.',
    image:       '/images/properties/sertig-villa.jpg',
  },
  {
    id:          'congress-corporate-suite',
    name:        'Congress Corporate Suite',
    type:        'Suite',
    guests:      4,
    distance:    'Directly adjoining Congress Centre',
    description:
      'Purpose-built for executive productivity: a high-speed secure network, a private meeting room, and 24-hour butler service — all within steps of the main venue.',
    image:       '/images/properties/congress-suite.jpg',
  },
  {
    id:          'promenade-residences',
    name:        'Promenade Luxury Apartments',
    type:        'Apartment',
    guests:      6,
    distance:    '6 min walk to Congress Centre',
    description:
      'Impeccably appointed apartments on Davos Promenade combine the comfort of a private residence with hotel-grade services. Ideal for compact delegations seeking flexibility and discretion.',
    image:       '/images/properties/promenade-apartments.jpg',
  },
]

/* ─── Framer Motion Variants ─────────────────────────────────────────── */
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
