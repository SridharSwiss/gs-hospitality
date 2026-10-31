'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ─── animation variants ─────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── data ────────────────────────────────────────────── */

const services = [
  {
    id: 'lounge',
    label: 'Service 01',
    title: 'Corporate Lounge',
    titleAccent: 'Brand Activation',
    image: '/assets/img/heroes/services-hero.jpg',
    description:
      "Your Promenade presence is your brand's most powerful moment of the year. We design, build, staff, and operate every element — so you focus entirely on the relationships that matter.",
    features: [
      'Bespoke pavilion design tailored to your brand identity',
      'Full turnkey build — structure, interiors, branding, signage',
      'Promenade slot coordination and permit management',
      'Professional hostess and front-of-house team',
      'Furniture, fixtures, heating and lighting to specification',
      'Daily refresh, cleaning, and maintenance throughout summit week',
      'Breakdown and site restoration post-summit',
      'On-call project manager throughout the week',
    ],
  },
  {
    id: 'av',
    label: 'Service 02',
    title: 'AV & Sound',
    titleAccent: 'Production',
    image: '/assets/img/sections/av-production.jpg',
    description:
      'In Davos, your session content is seen by the world. Our AV team delivers broadcast-grade quality for every panel, product launch, or announcement — ensuring your message lands with the authority it deserves.',
    features: [
      '4K camera systems and professional lighting rigs',
      'Dedicated 10Gbps fibre connectivity — not shared summit wifi',
      'Real-time live streaming to YouTube, LinkedIn, internal portals',
      'Professional sound engineer on-site for all sessions',
      'LED display walls, projection systems, and confidence monitors',
      'Simultaneous interpretation systems (up to 6 languages)',
      'Recording, post-production, and content delivery within 24 hours',
      'Backup systems with full redundancy — zero downtime record',
    ],
  },
  {
    id: 'events',
    label: 'Service 03',
    title: 'Private Events',
    titleAccent: '& Dinners',
    image: '/assets/img/sections/etiquette-dining.jpg',
    description:
      'From intimate 10-person CEO dinners to 500-person receptions that close deals — our event management team has executed every format. We handle the complexity so your team focuses on the conversations.',
    features: [
      'End-to-end event concept, design, and execution',
      'Speaker and agenda coordination for hosted sessions',
      'Guest list management and RSVP tracking',
      'Restaurant buyouts and venue securing across Davos',
      'Transportation coordination between event locations',
      'Summit accreditation advisory and coordination support',
      'Security team briefings and access management',
      'Post-event reporting, photography, and highlight reels',
    ],
  },
  {
    id: 'catering',
    label: 'Service 04',
    title: 'Catering',
    titleAccent: '& F&B',
    image: '/assets/img/sections/etiquette-dining.jpg',
    description:
      'At Davos, meals are meetings. Every breakfast, lunch, and dinner is an opportunity to deepen relationships. Our private chefs and dining team ensure your table becomes the most sought-after destination of Davos week.',
    features: [
      'Dedicated private chef assigned to your delegation',
      'Cultural dietary requirements handled with precision and respect',
      'All halal, kosher, vegan, Jain, and allergy requirements catered',
      'Daily fresh market shopping from vetted suppliers',
      'Chalet kitchen setup and all equipment provided',
      'Restaurant buyouts and last-minute reservation securing',
      'Wine and beverage programme including Swiss sommelier service',
      'Midnight networking suppers and informal late-night service',
    ],
  },
  {
    id: 'transport',
    label: 'Service 05',
    title: 'Chauffeur',
    titleAccent: '& Transport',
    image: '/assets/img/site/transport-car.jpg',
    description:
      'Discreet, punctual executive transfers between airports, Davos, and Klosters. Our fleet includes luxury saloons, SUVs, and minivans — all with security-cleared, multilingual drivers.',
    features: [
      'Zurich, Geneva, and Basel airport pickups',
      'Dedicated on-call driver throughout summit week',
      'Fleet of luxury saloons, SUVs, and minivans',
      'Security-cleared, multilingual professional drivers',
      'Real-time flight tracking for arrival pickups',
      'Multi-stop coordination across concurrent events',
      'Helicopter transfer coordination on request',
      'Ski-day and leisure transfer management',
    ],
  },
  {
    id: 'concierge',
    label: 'Service 06',
    title: '24/7',
    titleAccent: 'Concierge',
    image: '/assets/img/sections/security-access.jpg',
    description:
      'A personal concierge available around the clock for every request — restaurant reservations, last-minute logistics, security access, gifts, and the unexpected. No ask is too large or too small.',
    features: [
      'Dedicated concierge WhatsApp line, staffed 24/7',
      'Restaurant reservations at full Davos venues',
      'Summit and venue accreditation support',
      'Security access pass management',
      'Gift sourcing and personal shopping',
      'Medical, pharmacy, and emergency coordination',
      'Childcare, personal assistant, and secretarial services',
      'Post-departure arrangements and lost property',
    ],
  },
];

const packages = [
  {
    tier: 'Essential',
    badge: 'Perfect for SMEs',
    description: 'Core corporate presence for a focused delegation of up to 6.',
    features: [
      { label: 'Accommodation (1 property)', included: true },
      { label: 'Airport transfers (return)', included: true },
      { label: 'Basic AV package', included: true },
      { label: 'Concierge (business hours)', included: true },
      { label: 'Corporate lounge setup', included: false },
      { label: 'Dedicated private chef', included: false },
      { label: 'Full event management', included: false },
      { label: '24/7 concierge line', included: false },
    ],
  },
  {
    tier: 'Premier',
    badge: 'Most Popular',
    featured: true,
    description: 'The complete Davos experience for mid-sized corporate delegations.',
    features: [
      { label: 'Accommodation (up to 2 properties)', included: true },
      { label: 'Airport transfers + on-call driver', included: true },
      { label: 'Professional AV & live streaming', included: true },
      { label: '24/7 concierge line', included: true },
      { label: 'Corporate lounge setup (50–100 sqm)', included: true },
      { label: 'Dedicated private chef', included: true },
      { label: 'Up to 3 hosted events', included: true },
      { label: 'Summit accreditation advisory', included: false },
    ],
  },
  {
    tier: 'Elite',
    badge: 'For Large Delegations',
    description: 'Flagship end-to-end service for sovereign, government, and Fortune 500 delegations.',
    features: [
      { label: 'Multiple properties (full delegation)', included: true },
      { label: 'Dedicated driver fleet', included: true },
      { label: 'Full broadcast AV suite', included: true },
      { label: '24/7 concierge + personal assistant', included: true },
      { label: 'Flagship pavilion (100–200 sqm+)', included: true },
      { label: 'Full-time private chef team', included: true },
      { label: 'Unlimited hosted events', included: true },
      { label: 'Summit accreditation advisory', included: true },
    ],
  },
];

const dietaryOptions = [
  'Halal Certified', 'Kosher', 'Vegan', 'Vegetarian',
  'Jain', 'Gluten-Free', 'Indian Cuisine', 'Middle Eastern',
  'Asian', 'European Fine Dining',
];

const cateringMenus = [
  {
    type: 'Working Breakfast',
    description: 'Continental and hot breakfast service with fresh pastries, Swiss breads, pressed juice, and specialty coffee — energising your delegation for morning sessions.',
  },
  {
    type: 'Private Lunch',
    description: 'Seated à la carte or buffet service for 8–40 covers. Regional Swiss and international menus composed by our private chefs using same-day market produce.',
  },
  {
    type: 'Gala Dinner',
    description: 'Multi-course private dining experience with wine pairings by our Swiss sommelier. Ideal for ministerial entertaining and senior leadership dinners.',
  },
  {
    type: 'Cocktail Reception',
    description: 'Standing receptions for 50–500 guests, with curated canapés, Swiss wines, and full beverage service. Perfect for networking evenings on the Promenade.',
  },
  {
    type: 'Midnight Supper',
    description: 'Informal late-night dining for delegates returning from evening events. Light, comforting, culturally appropriate fare served at your chalet.',
  },
];

const avCapabilities = [
  { spec: 'Connectivity', detail: '10Gbps dedicated fibre — not shared summit wifi' },
  { spec: 'Cameras', detail: '4K broadcast-grade camera systems, multiple angles' },
  { spec: 'Live Streaming', detail: 'YouTube, LinkedIn, internal portals, custom RTMP' },
  { spec: 'Sound', detail: 'Line array PA systems, in-ear monitoring, simultaneous translation' },
  { spec: 'Interpretation', detail: 'Up to 6 simultaneous languages, booth and wireless' },
  { spec: 'Displays', detail: 'LED walls, projection, confidence monitors, teleprompter' },
  { spec: 'Recording', detail: 'Multi-camera recording, edited highlights within 24 hours' },
  { spec: 'Redundancy', detail: 'Dual backup systems — zero AV failures across 10 summit years' },
];

/* ─── CheckIcon ──────────────────────────────────────── */
function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(197,160,89,0.15)] flex-shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l2.5 2.5L9 1" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.04] flex-shrink-0">
      <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
        <line x1="1" y1="1" x2="9" y2="1" stroke="rgba(240,237,232,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* ─── WaIcon ─────────────────────────────────────────── */
function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────── */
export default function ServicesClient() {
  return (
    <main id="main-content" className="overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '72vh', paddingTop: '7rem', paddingBottom: '6rem' }}
        aria-labelledby="services-hero-title"
      >
        <Image
          src="/assets/img/heroes/services-hero.jpg"
          alt="World-class hospitality services at the Davos Summit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(rgba(5,5,8,0.65),rgba(5,5,8,0.65)), radial-gradient(ellipse 80% 60% at 50% 100%,rgba(197,160,89,0.12),transparent)',
          }}
        />
        {/* fade to bg at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom,transparent,var(--bg))' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Davos Summit · Concierge &amp; Events
          </motion.p>
          <motion.h1
            id="services-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-semibold leading-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}
          >
            World-Class Hospitality{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>Services</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg leading-relaxed mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            Four core disciplines — lounge activation, AV production, event management, and private
            catering — delivered by specialists who have operated at the Davos Summit for over a decade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20your%20Davos%20Summit%202027%20business%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg,#C5A059,#D4B870)',
                color: '#050508',
                boxShadow: '0 0 0 0 rgba(197,160,89,0)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(197,160,89,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(197,160,89,0)';
              }}
            >
              <WaIcon />
              Enquire on WhatsApp
            </a>
            <a
              href="#services-grid"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300"
              style={{
                background: 'var(--surface)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold)',
              }}
            >
              Explore Services ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────── */}
      <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { num: '48H', label: 'Pavilion Build Time' },
              { num: '500+', label: 'Catering Covers Served' },
              { num: '10Gbps', label: 'Dedicated Connectivity' },
              { num: '0', label: 'AV Failures at Summit' },
            ].map(stat => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <div className="font-serif font-bold mb-1" style={{ fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div className="uppercase tracking-widest text-xs" style={{ color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section id="services-grid" className="py-20 px-6" aria-labelledby="services-grid-title">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>
              What We Deliver
            </p>
            <h2 id="services-grid-title" className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Six Disciplines. <em className="italic" style={{ color: 'var(--gold)' }}>One Team.</em>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map(svc => (
              <motion.article
                key={svc.id}
                variants={fadeInUp}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--surface)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.4), 0 0 40px rgba(197,160,89,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={`${svc.title} ${svc.titleAccent}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(5,5,8,0.7))' }} />
                  <span
                    className="absolute top-4 left-4 uppercase tracking-widest text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: 'rgba(197,160,89,0.15)', border: '1px solid var(--border-gold)', color: 'var(--gold)' }}
                  >
                    {svc.label}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-white text-xl mb-1">
                    {svc.title}{' '}
                    <em className="italic" style={{ color: 'var(--gold)' }}>{svc.titleAccent}</em>
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                    {svc.description}
                  </p>
                  <ul className="space-y-2">
                    {svc.features.slice(0, 4).map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`#${svc.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium mt-4 transition-colors"
                    style={{ color: 'var(--gold)' }}
                  >
                    Full details →
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Detailed Service Sections ─────────────────────── */}

      {/* Service 01 — Corporate Lounge */}
      <section
        id="lounge"
        className="py-20 px-6 relative overflow-hidden"
        aria-labelledby="lounge-title"
        style={{ background: 'var(--bg)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(197,160,89,0.04), transparent)' }} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Service 01</p>
              <h2 id="lounge-title" className="font-serif font-semibold text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Corporate Lounge &amp;{' '}
                <em className="italic" style={{ color: 'var(--gold)' }}>Brand Activation</em>
              </h2>
              <div className="h-0.5 w-14 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Your Promenade presence at the Davos Summit is your brand's most powerful moment of the year.
                We design, build, staff, and operate every element — so you can focus entirely on the
                relationships that matter.
              </p>

              <h3 className="font-serif font-semibold text-white text-xl mb-4">What&apos;s Included</h3>
              <ul className="space-y-3 mb-10">
                {[
                  'Bespoke pavilion design tailored to your brand identity',
                  'Full turnkey build — structure, interiors, branding, signage',
                  'Promenade slot coordination and summit permit management',
                  'Professional hostess and front-of-house team',
                  'Furniture, fixtures, heating and lighting to specification',
                  'Daily refresh, cleaning, and maintenance throughout summit week',
                  'Breakdown and site restoration post-summit',
                  'On-call project manager throughout the week',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-serif font-semibold text-white text-xl mb-4">Our Process</h3>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Discovery & Brief (8 weeks out)', text: 'Brand briefing, space requirements, guest volume estimates, visual identity review, Promenade slot selection.' },
                  { step: '2', title: 'Design & Approval (6 weeks out)', text: '3D renders, material samples, permit applications submitted. Client sign-off on final design.' },
                  { step: '3', title: 'Build (Jan 17–18)', text: '48-hour construction window. GS crew builds, installs AV/tech, tests all systems, completes branding.' },
                  { step: '4', title: 'Operations (Jan 19–23)', text: 'Daily 07:00–22:00 staffed operation. Daily briefing with your team. Real-time issue resolution.' },
                ].map(proc => (
                  <div key={proc.step} className="flex gap-4 items-start">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)', color: 'var(--gold)' }}
                    >
                      {proc.step}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">{proc.title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{proc.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="space-y-6">
              {/* Pricing card */}
              <div className="rounded-2xl p-7" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <h3 className="font-serif font-semibold text-white text-lg mb-5">Pricing Guide</h3>
                <div className="space-y-3">
                  {[
                    'Small Lounge (30–50 sqm)',
                    'Standard Pavilion (50–100 sqm)',
                    'Premium Pavilion (100–200 sqm)',
                    'Flagship Pavilion (200 sqm+)',
                  ].map(tier => (
                    <div key={tier} className="flex justify-between items-center pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{tier}</span>
                      <span className="font-semibold text-sm" style={{ color: 'var(--gold)' }}>On Request</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color: 'var(--text-subtle)' }}>
                  Prices include build, staffing, and breakdown. Catering and AV quoted separately.
                </p>
              </div>

              <a
                href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20a%20corporate%20lounge%20or%20pavilion%20setup%20for%20Davos%20Summit%202027."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{ background: '#25D366', color: 'white' }}
              >
                <WaIcon />
                Enquire About Lounge Setup
              </a>

              {/* Testimonial */}
              <blockquote
                className="rounded-2xl p-6"
                style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg,var(--gold-dark),var(--gold))', color: '#050508' }}>HM</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Financial Executive</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Chief Executive · European Private Bank</div>
                  </div>
                </div>
                <div className="mb-2 text-sm" style={{ color: 'var(--gold)', letterSpacing: '2px' }}>★★★★★</div>
                <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  "Our pavilion on the Promenade was the talk of Davos week. GS Hospitality designed, built and operated
                  everything — branding, sound, catering — with zero issues across 5 consecutive days."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                    Corporate Lounge Setup + AV
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>January 2024</span>
                </div>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,var(--gold),transparent)' }} />

      {/* Service 02 — AV */}
      <section
        id="av"
        className="py-20 px-6 relative overflow-hidden"
        aria-labelledby="av-title"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <Image src="/assets/img/sections/av-production.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — pricing side */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="space-y-6 lg:order-2">
              <div className="rounded-2xl p-7" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <h3 className="font-serif font-semibold text-white text-lg mb-5">AV Pricing Guide</h3>
                <div className="space-y-3">
                  {['Basic AV Package', 'Professional Production', 'Live Streaming + Production', 'Full Broadcast Suite'].map(tier => (
                    <div key={tier} className="flex justify-between items-center pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{tier}</span>
                      <span className="font-semibold text-sm" style={{ color: 'var(--gold)' }}>On Request</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20need%20AV%20and%20sound%20production%20for%20my%20Davos%20Summit%202027%20event." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full px-8 py-4 font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: '#25D366', color: 'white' }}
              >
                <WaIcon />Enquire About AV Production
              </a>
              <blockquote className="rounded-2xl p-6" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg,var(--gold-dark),var(--gold))', color: '#050508' }}>SC</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Corporate Executive</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>VP Strategy · Global Technology Group</div>
                  </div>
                </div>
                <div className="mb-2 text-sm" style={{ color: 'var(--gold)', letterSpacing: '2px' }}>★★★★★</div>
                <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  "The live stream quality was broadcast-grade. Our global audience watched our Davos session in real time
                  with zero buffering. The GS AV team ran it all without us lifting a finger."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)', color: 'var(--gold)' }}>AV Production + Live Streaming</span>
                  <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>January 2024</span>
                </div>
              </blockquote>
            </motion.div>

            {/* Right — detail */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="lg:order-1">
              <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Service 02</p>
              <h2 id="av-title" className="font-serif font-semibold text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                AV &amp; Sound <em className="italic" style={{ color: 'var(--gold)' }}>Production</em>
              </h2>
              <div className="h-0.5 w-14 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                In Davos, your session content is seen by the world. Our AV team delivers broadcast-grade quality for every
                panel discussion, product launch, or announcement — ensuring your message lands with the authority it deserves.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '4K camera systems and professional lighting rigs',
                  'Dedicated 10Gbps fibre connectivity — not shared summit wifi',
                  'Real-time live streaming to YouTube, LinkedIn, internal portals',
                  'Professional sound engineer on-site for all sessions',
                  'LED display walls, projection systems, and confidence monitors',
                  'Simultaneous interpretation systems (up to 6 languages)',
                  'Recording, post-production, and content delivery within 24 hours',
                  'Backup systems for high-reliability with redundant backups',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-5" style={{ background: 'rgba(197,160,89,0.05)', border: '1px solid var(--border-gold)' }}>
                <div className="font-semibold text-sm mb-2" style={{ color: 'var(--gold)' }}>Zero Downtime Record</div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Across 10 consecutive Davos Summit events and 80+ hosted sessions, GS Hospitality AV has recorded zero
                  technical failures. Every system runs with a dedicated backup — because at Davos, there is no second chance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,var(--gold),transparent)' }} />

      {/* Service 03 — Events */}
      <section id="events" className="py-20 px-6 relative overflow-hidden" aria-labelledby="events-title">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(197,160,89,0.04), transparent)' }} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Service 03</p>
              <h2 id="events-title" className="font-serif font-semibold text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Event <em className="italic" style={{ color: 'var(--gold)' }}>Management</em>
              </h2>
              <div className="h-0.5 w-14 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                From intimate 10-person CEO dinners to 500-person receptions that close deals — our event management team
                has executed every format. We handle the complexity so your team can focus on the conversations.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'End-to-end event concept, design, and execution',
                  'Speaker and agenda coordination for hosted sessions',
                  'Guest list management and RSVP tracking',
                  'Restaurant buyouts and venue securing across Davos',
                  'Transportation coordination between multiple event locations',
                  'Summit accreditation advisory and coordination support',
                  'Security team briefings and access management',
                  'Post-event reporting, photography, and highlight reels',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="font-serif font-semibold text-white text-xl mb-4">Event Types We Manage</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Private Dinners', detail: '8–40 covers, chalet or restaurant', img: '/assets/img/sections/etiquette-dining.jpg' },
                  { label: 'Panel Sessions', detail: '20–200 attendees, full AV', img: '/assets/img/sections/av-production.jpg' },
                  { label: 'Networking Receptions', detail: '50–500 guests, Promenade', img: '/assets/img/heroes/services-hero.jpg' },
                  { label: 'Bilateral Meetings', detail: 'Private rooms, secure setting', img: '/assets/img/site/transport-car.jpg' },
                ].map(ev => (
                  <div key={ev.label} className="rounded-xl overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div className="relative h-16">
                      <Image src={ev.img} alt={ev.label} fill className="object-cover" sizes="200px" />
                    </div>
                    <div className="p-3">
                      <div className="font-semibold text-white text-sm mb-1">{ev.label}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{ev.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="space-y-6">
              {/* Case study */}
              <div className="rounded-2xl p-6" style={{ background: 'rgba(197,160,89,0.04)', border: '1px solid var(--border-gold)' }}>
                <h3 className="font-serif font-semibold text-white text-lg mb-1">Case Study</h3>
                <p className="uppercase tracking-widest text-xs mb-4" style={{ color: 'var(--gold)' }}>Most-Visited Pavilion, Davos 2024</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                  A sovereign wealth fund needed the most prominent Promenade presence at the summit 2024. GS Hospitality
                  designed and built a 180 sqm flagship pavilion, staffed it with 12 professionals, and coordinated 14
                  discrete events across 5 days — including two ministerial bilateral meetings, a live-streamed CEO panel
                  (38,000 viewers), and a nightly cultural reception.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { num: '4,200', label: 'Unique Visitors' },
                    { num: '14', label: 'Events in 5 Days' },
                    { num: '38K', label: 'Livestream Viewers' },
                    { num: '0', label: 'Technical Issues' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="font-serif font-bold text-2xl" style={{ color: 'var(--gold)' }}>{stat.num}</div>
                      <div className="uppercase tracking-widest text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <a href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20need%20event%20management%20for%20Davos%20Summit%202027." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full px-8 py-4 font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: '#25D366', color: 'white' }}
              >
                <WaIcon />Discuss Your Davos Events
              </a>

              <blockquote className="rounded-2xl p-6" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg,var(--gold-dark),var(--gold))', color: '#050508' }}>AR</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Government Official</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Senior Trade Representative · Gulf Region Delegation</div>
                  </div>
                </div>
                <div className="mb-2 text-sm" style={{ color: 'var(--gold)', letterSpacing: '2px' }}>★★★★★</div>
                <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  "Sixty-person delegation, multiple simultaneous events. GS Hospitality coordinated everything with Swiss
                  precision. We will use no one else."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)', color: 'var(--gold)' }}>Elite Package — Event Management</span>
                  <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>February 2024</span>
                </div>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,var(--gold),transparent)' }} />

      {/* Service 04 — Catering */}
      <section id="catering" className="py-20 px-6 relative overflow-hidden" aria-labelledby="catering-title" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <Image src="/assets/img/sections/etiquette-dining.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="space-y-6 lg:order-2">
              <div className="rounded-2xl p-7" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <h3 className="font-serif font-semibold text-white text-lg mb-5">Catering Pricing Guide</h3>
                <div className="space-y-3">
                  {['Breakfast Service (per person/day)', 'Private Lunch (per person)', 'Gala Dinner (per person)', 'Private Chef (per day)', 'Full Week Catering Package'].map(tier => (
                    <div key={tier} className="flex justify-between items-center pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{tier}</span>
                      <span className="font-semibold text-sm" style={{ color: 'var(--gold)' }}>On Request</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <h3 className="font-serif font-semibold text-white text-base mb-4">Dietary Specialisms</h3>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map(opt => (
                    <span key={opt} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              <a href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20discuss%20catering%20and%20private%20dining%20for%20Davos%20Summit%202027." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full px-8 py-4 font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: '#25D366', color: 'white' }}
              >
                <WaIcon />Discuss Your Catering Needs
              </a>

              <blockquote className="rounded-2xl p-6" style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg,var(--gold-dark),var(--gold))', color: '#050508' }}>PS</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Senior Executive</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Head of Global Affairs · Asia-Pacific Conglomerate</div>
                  </div>
                </div>
                <div className="mb-2 text-sm" style={{ color: 'var(--gold)', letterSpacing: '2px' }}>★★★★★</div>
                <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  "GS Hospitality understood our cultural needs before we even asked. The private chef served authentic
                  meals every morning — our delegation felt at home in Davos."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)', color: 'var(--gold)' }}>Accommodation + Indian Catering</span>
                  <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>February 2024</span>
                </div>
              </blockquote>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="lg:order-1">
              <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Service 04</p>
              <h2 id="catering-title" className="font-serif font-semibold text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Catering &amp; <em className="italic" style={{ color: 'var(--gold)' }}>Private Dining</em>
              </h2>
              <div className="h-0.5 w-14 mb-6" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                At Davos, meals are meetings. Every breakfast, lunch, and dinner is an opportunity to deepen relationships.
                Our private chefs and dining team ensure your table becomes the most sought-after destination of Davos week.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Dedicated private chef assigned to your delegation',
                  'Cultural dietary requirements handled with precision and respect',
                  'All halal, kosher, vegan, Jain, and allergy requirements catered',
                  'Daily fresh market shopping from vetted suppliers',
                  'Chalet kitchen setup and all equipment provided',
                  'Restaurant buyouts and last-minute reservation securing',
                  'Wine and beverage programme including Swiss sommelier service',
                  'Midnight networking suppers and informal late-night service',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-5" style={{ background: 'rgba(197,160,89,0.05)', border: '1px solid var(--border-gold)' }}>
                <div className="font-semibold text-sm mb-2" style={{ color: 'var(--gold)' }}>Cultural Intelligence in Every Plate</div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Our catering team has prepared meals for Gulf state delegations, Indian corporate groups, African
                  government ministers, and Far Eastern business leaders — all with different cultural, religious, and
                  dietary requirements. We brief our chefs on cultural protocols before arrival, not after.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Corporate Packages ────────────────────────────── */}
      <section className="py-20 px-6" aria-labelledby="packages-title">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Packages</p>
            <h2 id="packages-title" className="font-serif font-semibold text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Corporate <em className="italic" style={{ color: 'var(--gold)' }}>Packages</em>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Three tiers designed around delegation size and ambition. All pricing on request — every package is
              tailored to your exact brief.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {packages.map(pkg => (
              <motion.div
                key={pkg.tier}
                variants={fadeInUp}
                className="rounded-2xl p-8 flex flex-col"
                style={{
                  background: pkg.featured ? 'linear-gradient(135deg,rgba(197,160,89,0.12),rgba(197,160,89,0.04))' : 'var(--surface)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  border: pkg.featured ? '1px solid var(--border-gold)' : '1px solid var(--border)',
                  position: 'relative',
                }}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--gold)', color: '#050508' }}>
                    Most Popular
                  </div>
                )}
                <div className="mb-1">
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{pkg.badge}</span>
                </div>
                <h3 className="font-serif font-semibold text-white text-2xl mb-2">{pkg.tier}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{pkg.description}</p>
                <ul className="space-y-3 flex-1 mb-6">
                  {pkg.features.map(f => (
                    <li key={f.label} className="flex items-start gap-3 text-sm" style={{ color: f.included ? 'var(--text)' : 'var(--text-subtle)' }}>
                      <CheckIcon included={f.included} />
                      {f.label}
                    </li>
                  ))}
                </ul>
                <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Pricing</span>
                    <span className="font-semibold" style={{ color: 'var(--gold)' }}>On Request</span>
                  </div>
                  <a
                    href={`https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.tier)}%20package%20for%20Davos%20Summit%202027.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                    style={
                      pkg.featured
                        ? { background: 'linear-gradient(135deg,#C5A059,#D4B870)', color: '#050508' }
                        : { background: 'transparent', border: '1px solid var(--border-gold)', color: 'var(--gold)' }
                    }
                  >
                    Enquire About {pkg.tier}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Catering Menus ────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden" aria-labelledby="catering-menus-title" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Food &amp; Beverage</p>
            <h2 id="catering-menus-title" className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Catering <em className="italic" style={{ color: 'var(--gold)' }}>Menus</em>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cateringMenus.map(menu => (
              <motion.div
                key={menu.type}
                variants={fadeInUp}
                className="rounded-2xl p-6"
                style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 flex-shrink-0" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
                    {menu.type === 'Working Breakfast' ? '☕' : menu.type === 'Private Lunch' ? '🍽️' : menu.type === 'Gala Dinner' ? '🥂' : menu.type === 'Cocktail Reception' ? '🍾' : '🌙'}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-white text-lg mb-2">{menu.type}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{menu.description}</p>
              </motion.div>
            ))}

            {/* Dietary card */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(197,160,89,0.04)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border-gold)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(197,160,89,0.1)', border: '1px solid var(--border-gold)' }}>
                <span style={{ color: 'var(--gold)' }}>🌿</span>
              </div>
              <h3 className="font-serif font-semibold text-white text-lg mb-3">Dietary Options</h3>
              <div className="flex flex-wrap gap-2">
                {dietaryOptions.map(opt => (
                  <span key={opt} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.08)', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                    {opt}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AV Capabilities ───────────────────────────────── */}
      <section className="py-20 px-6" aria-labelledby="av-capabilities-title">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Technical Specs</p>
            <h2 id="av-capabilities-title" className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              AV <em className="italic" style={{ color: 'var(--gold)' }}>Capabilities</em>
            </h2>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border)' }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(197,160,89,0.06)' }}>
                    <th className="text-left px-6 py-4 uppercase tracking-widest text-xs font-semibold" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--border)' }}>
                      Capability
                    </th>
                    <th className="text-left px-6 py-4 uppercase tracking-widest text-xs font-semibold" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--border)' }}>
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {avCapabilities.map((row, i) => (
                    <tr key={row.spec} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td className="px-6 py-4 font-semibold text-sm" style={{ color: 'var(--gold)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-muted)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Protocol & Etiquette ──────────────────────────── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        aria-labelledby="protocol-title"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <Image src="/assets/img/sections/etiquette-dining.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%,rgba(197,160,89,0.1),transparent)' }} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            <p className="uppercase tracking-widest text-xs font-medium mb-3" style={{ color: 'var(--gold)' }}>Swiss Standards</p>
            <h2 id="protocol-title" className="font-serif font-semibold text-white mb-6" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Protocol &amp; <em className="italic" style={{ color: 'var(--gold)' }}>Etiquette</em>
            </h2>
            <div className="h-0.5 w-14 mx-auto mb-8" style={{ background: 'linear-gradient(90deg,transparent,var(--gold),transparent)' }} />
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
              Switzerland is a country of precision, discretion, and protocol. At the Davos Summit, the world's most
              powerful executives, heads of state, and business leaders expect every interaction to meet the highest
              standard. Our team is briefed in Swiss business protocol, diplomatic etiquette, and the cultural norms of
              all major delegations before every engagement.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              {
                icon: '🤝',
                title: 'Business Introductions',
                text: 'Title-first introductions, correct forms of address for dignitaries, and culturally sensitive greeting protocols for all major delegations.',
              },
              {
                icon: '🍽️',
                title: 'Dining Protocol',
                text: 'Swiss fine-dining customs, dietary sensitivity, wine service etiquette, and seating arrangements for high-protocol dinners.',
              },
              {
                icon: '🔒',
                title: 'Discretion & Confidentiality',
                text: 'Every GS team member signs a comprehensive NDA. Information shared at our events stays within our events.',
              },
            ].map(item => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-2xl p-6"
                style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-serif font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 px-6" aria-labelledby="cta-title">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-2xl px-8 py-16 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg,rgba(197,160,89,0.08),rgba(197,160,89,0.03))',
              border: '1px solid var(--border-gold)',
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%,rgba(197,160,89,0.1),transparent 70%)' }} />
            <div className="relative z-10">
              <p className="uppercase tracking-widest text-xs font-medium mb-4" style={{ color: 'var(--gold)' }}>
                Davos 2027 · Jan 19–23
              </p>
              <h2 id="cta-title" className="font-serif font-semibold text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Plan Your Davos <em className="italic" style={{ color: 'var(--gold)' }}>Event</em>
              </h2>
              <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                Tell us what you need and we'll build a custom proposal within 48 hours. No obligation, no pressure —
                just expert advice from people who know Davos better than anyone.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20plan%20my%20Davos%20Summit%202027%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: '#25D366', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
                >
                  <WaIcon />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: 'transparent', border: '1px solid var(--border-gold)', color: 'var(--gold)' }}
                >
                  Send Detailed Enquiry
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                {['Custom proposal in 48 hours', 'No obligation', '10+ years at Davos'].map(trust => (
                  <div key={trust} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--gold)' }}>✓</span>
                    {trust}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
