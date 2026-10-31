'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── animation variants ─────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── properties ─────────────────────────────────────── */
const properties = [
  {
    name: 'Grünistrasse 2a',
    type: '2BR Apartment',
    guests: 4,
    distance: '1.9 km to Congress Centre',
    description:
      'Elegant two-bedroom apartment with balcony views and direct access to Davos Dorf. A refined base for summit delegates seeking comfort and privacy.',
    imagePath: '/assets/img/properties/gruenistrasse-living.jpg',
    amenities: ['2 bedrooms', 'Balcony with Alpine view', 'Pool access', 'Private parking', 'High-speed WiFi', 'Daily housekeeping'],
    tag: 'Apartment · Davos Platz',
  },
  {
    name: 'Talstrasse 19',
    type: '2BR Apartment',
    guests: 4,
    distance: '1 km to Congress Centre',
    description:
      'Modern open-plan apartment on Talstrasse, just 1 km from the Congress Centre with private garage. Comfortably accommodates a four-person delegation.',
    imagePath: '/assets/img/properties/talstrasse-living.jpg',
    amenities: ['2 bedrooms', 'Open-plan living', 'Private garage', 'Concierge service', 'High-speed WiFi', 'Daily housekeeping'],
    tag: 'Apartment · Davos Platz',
  },
  {
    name: 'Lehenweg 26, Klosters',
    type: '3BR Chalet + Sauna',
    guests: 6,
    distance: '22 min drive / 15 min train',
    description:
      'Private chalet with sauna and open fireplace in Klosters Serneus. Authentic Swiss charm and total privacy for senior delegations.',
    imagePath: '/assets/img/properties/lehenweg-living.jpg',
    amenities: ['3 bedrooms', 'Private sauna', 'Open fireplace', 'Mountain views', 'Private parking', 'Chef-ready kitchen'],
    tag: 'Chalet · Klosters',
  },
  {
    name: 'Davos Summit Apartment',
    type: '3.5-Room Apartment',
    guests: 4,
    distance: '2 min walk to Promenade',
    description:
      "Bright 3.5-room apartment on the 3rd floor, 2 minutes' walk from Davos Promenade with parking. Premium finishes and a prime position in central Davos.",
    imagePath: '/assets/img/properties/summit-apt-living.jpg',
    amenities: ['3 bedrooms', 'Promenade access', 'Underground parking', 'Balcony', 'High-speed WiFi', 'Daily housekeeping'],
    tag: 'Apartment · Davos Centre',
  },
  {
    name: 'Alpine Chalet Klosters Haus',
    type: '4.5-Room Chalet',
    guests: 8,
    distance: '22 min drive / 15 min train',
    description:
      'Spacious chalet in Klosters village with private back garden, 3 parking spaces and a queen room. Grand alpine retreat for senior leadership groups.',
    imagePath: '/assets/img/properties/klosters-living.jpg',
    amenities: ['4 bedrooms', 'Private garden', '3 parking spaces', 'Sauna', 'Fireplace lounge', 'Chef-ready kitchen'],
    tag: 'Chalet · Klosters',
  },
];

/* ─── FAQs ───────────────────────────────────────────── */
const faqs = [
  {
    q: 'When do Davos Summit 2027 accommodation prices apply?',
    a: 'Davos week pricing applies from January 17–24, 2027 (setup days through departure). Pre- and post-Davos nights are available at non-summit rates for clients who wish to arrive early or stay for Swiss Alpine experiences. We strongly recommend booking the full 8-night block to secure the best properties.',
  },
  {
    q: 'Is catering included in the accommodation price?',
    a: 'Catering is typically quoted separately as requirements vary significantly by delegation. We offer full-service private chef arrangements, daily breakfast-only packages, or complete meal programmes. This allows clients to tailor their catering budget precisely. All GS properties are compatible with our private chef network.',
  },
  {
    q: 'Can we host events at our accommodation?',
    a: 'Yes — all luxury chalets and corporate HQ venues are suitable for private events. Chalets can host intimate dinners for up to 30 covers. Corporate HQ venues can hold receptions of 60+ guests. Executive apartments are not designed for external events. GS Hospitality handles all permit requirements for hosted events.',
  },
  {
    q: 'What if our delegation size changes after booking?',
    a: 'We understand that delegation sizes often fluctuate. We maintain a portfolio of overflow properties and relationships with other Davos property owners to accommodate changes. Notify us as early as possible and we will do our best to adjust. Our contracts include flexibility provisions for size changes up to 8 weeks before the summit.',
  },
  {
    q: 'Do properties come with parking at the Davos Summit?',
    a: 'Vehicle access in central Davos is heavily restricted during Davos week. Some chalets have private garages, but GS Hospitality recommends using our chauffeured transfer service or the summit shuttle buses for in-town movement. For delegations requiring armoured vehicles, we coordinate with Swiss authorities for special access permits well in advance.',
  },
];

/* ─── FAQ accordion ──────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: 'var(--surface)',
        backdropFilter: 'blur(20px) saturate(150%)',
        border: `1px solid ${open ? 'var(--border-gold)' : 'var(--border)'}`,
        borderRadius: 10,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          padding: '20px 24px',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: open ? 'var(--gold)' : 'var(--text)',
          fontSize: '0.9375rem',
          fontWeight: 500,
          fontFamily: 'inherit',
          transition: 'color 0.3s',
        }}
      >
        {q}
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            border: `1.5px solid ${open ? 'var(--gold)' : 'var(--border)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold)',
            fontSize: '0.6rem',
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s, border-color 0.3s',
          }}
        >
          ▼
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── main client component ──────────────────────────── */
export default function AccommodationsClient() {
  return (
    <>
      {/* ── 1. HERO ────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          paddingTop: 'calc(72px + 80px)',
          paddingBottom: 80,
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/img/heroes/accommodations-hero.jpg"
            alt="Davos luxury accommodation aerial view"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(rgba(5,5,8,0.65), rgba(5,5,8,0.65))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,160,89,0.12), transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            zIndex: 3,
            background: 'linear-gradient(to bottom, transparent, var(--bg))',
          }}
        />
        <motion.div
          style={{ position: 'relative', zIndex: 4, maxWidth: 760, padding: '0 24px' }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 16,
            }}
          >
            HANDPICKED PROPERTIES · DAVOS 2027
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: 20,
            }}
          >
            Luxury Davos{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Accommodations</em>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              maxWidth: 600,
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            50+ curated Davos properties — from private chalets to corporate headquarters — all
            within walking distance of the conference centre. Book early: the best properties
            disappear 18 months ahead.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a
              href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20check%20accommodation%20availability%20for%20Davos%20Summit%202027."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))',
                color: '#000',
                boxShadow: '0 4px 24px rgba(197,160,89,0.35)',
                textDecoration: 'none',
              }}
            >
              Check Availability
            </a>
            <a
              href="#properties"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: '0.9rem',
                background: 'var(--surface)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold)',
                textDecoration: 'none',
              }}
            >
              View Properties
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. PROPERTY CATEGORIES ─────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg)', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              Property Portfolio
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
                marginBottom: 8,
              }}
            >
              Three Categories of{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Luxury</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}
            >
              Each category is hand-selected for proximity, privacy, and the specific needs of
              Davos summit delegates.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                title: 'Luxury Chalets',
                desc: 'Private alpine chalets combining Swiss heritage with modern luxury. The preferred choice for senior delegations who value privacy and the ability to host events.',
                img: '/assets/img/site/cat-chalet.jpg',
                anchor: '#luxury-chalets',
                meta: '4–12 Bedrooms · Up to 30-cover dinners · 2–8 min walk',
              },
              {
                title: 'Corporate HQ Venues',
                desc: 'Purpose-configured venues for large organisations. Full AV infrastructure, brand customisation and capacity for 60+ reception events.',
                img: '/assets/img/site/card-venue.jpg',
                anchor: '#corporate-venues',
                meta: '8–25 Bedrooms · 60+ reception · Built-in AV',
              },
              {
                title: 'Executive Apartments',
                desc: 'Premium serviced apartments with hotel-grade services. Ideal for individuals and small teams who prefer privacy without the investment of a full chalet.',
                img: '/assets/img/properties/summit-apt-living.jpg',
                anchor: '#executive-apartments',
                meta: '1–4 Bedrooms · Hotel-grade service · Central location',
              },
            ].map((cat) => (
              <motion.a
                key={cat.title}
                href={cat.anchor}
                variants={fadeInUp}
                style={{
                  display: 'block',
                  background: 'var(--surface)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                whileHover={{ y: -6 }}
              >
                <div style={{ position: 'relative', height: 220 }}>
                  <Image src={cat.img} alt={cat.title} fill style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(5,5,8,0.85))',
                    }}
                  />
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.375rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: 8,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 16 }}>
                    {cat.desc}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: 12 }}>
                    {cat.meta}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 500 }}>
                    Explore →
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. FEATURED PROPERTIES ─────────────────────────── */}
      <section
        id="properties"
        style={{ padding: '80px 0', background: 'var(--bg)', position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,160,89,0.06), transparent)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              Listings Updated Daily
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              Featured <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Properties</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: 560,
                margin: '16px auto 0',
                lineHeight: 1.7,
              }}
            >
              Five hand-selected properties for Davos Annual Meeting 2027. Pricing on request;
              enquire for a tailored proposal.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            {properties.map((prop) => (
              <motion.div key={prop.name} variants={fadeInUp}>
                <div
                  style={{
                    background: 'var(--surface)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: 'clamp(280px, 35%, 420px) 1fr',
                    gap: 0,
                  }}
                >
                  {/* image */}
                  <div style={{ position: 'relative', minHeight: 280 }}>
                    <Image
                      src={prop.imagePath}
                      alt={prop.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: 'rgba(5,5,8,0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid var(--border-gold)',
                        borderRadius: 6,
                        padding: '4px 10px',
                        fontSize: '0.65rem',
                        color: 'var(--gold)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {prop.tag}
                    </div>
                  </div>
                  {/* details */}
                  <div style={{ padding: '32px 36px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                        gap: 12,
                        flexWrap: 'wrap',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#fff',
                            marginBottom: 4,
                          }}
                        >
                          {prop.name}
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {prop.type} · Up to {prop.guests} guests
                        </p>
                      </div>
                      <div
                        style={{
                          background: 'rgba(197,160,89,0.1)',
                          border: '1px solid var(--border-gold)',
                          borderRadius: 8,
                          padding: '8px 14px',
                          textAlign: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.65rem',
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: 2,
                          }}
                        >
                          Rate
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 700 }}>
                          On Request
                        </div>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {prop.description}
                    </p>
                    {/* amenities */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {prop.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid var(--border)',
                            borderRadius: 8,
                            padding: '5px 12px',
                            fontSize: '0.775rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>✓</span>
                          {amenity}
                        </span>
                      ))}
                    </div>
                    {/* distance */}
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 20 }}>
                      📍 {prop.distance}
                    </p>
                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <a
                        href={`https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20am%20interested%20in%20${encodeURIComponent(prop.name)}%20for%20Davos%20Summit%202027.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '10px 20px',
                          borderRadius: 9999,
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))',
                          color: '#000',
                          textDecoration: 'none',
                        }}
                      >
                        Enquire via WhatsApp
                      </a>
                      <a
                        href={`mailto:hello@gs-hospitality.ch?subject=Davos 2027 — ${prop.name}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '10px 20px',
                          borderRadius: 9999,
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          background: 'var(--surface)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid var(--border-gold)',
                          color: 'var(--gold)',
                          textDecoration: 'none',
                        }}
                      >
                        ✉ Email Enquiry
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ────────────────────────────── */}
      <section
        style={{
          padding: '80px 0',
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(197,160,89,0.07), transparent)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              Side-by-Side
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              Property <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Comparison</em>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              overflowX: 'auto',
              borderRadius: 16,
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr style={{ background: 'rgba(197,160,89,0.06)' }}>
                  {['Feature', 'Luxury Chalet', 'Corporate HQ', 'Executive Apartment'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '14px 20px',
                        fontSize: '0.775rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--gold)',
                        borderBottom: '1px solid var(--border)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bedrooms', '4–12', '8–25', '1–4'],
                  ['Max Guests', 'Up to 20', 'Up to 50', 'Up to 6'],
                  ['Congress Centre Walk', '2–8 minutes', '5–12 minutes', '5–15 minutes'],
                  ['Weekly Rate', 'On Request', 'On Request', 'On Request'],
                  ['Private Parking', '✓ Yes', '✓ Yes', '✓ Select units'],
                  ['Sauna', '✓ Available', '✓ Available', '✗ Not included'],
                  ['Private Chef Ready', '✓ Yes', '✓ Yes', '✓ On request'],
                  ['Event Hosting', 'Up to 30 covers', 'Up to 60+ reception', '✗ Not suitable'],
                  ['AV Infrastructure', 'On request', '✓ Built-in', '✗ Not included'],
                  ['Brand Customisation', 'Partial', '✓ Full', '✗ Not available'],
                  ['Dedicated Concierge', '✓ Included', '✓ Included', '✓ Remote 24/7'],
                  ['Best For', 'Senior delegation (5–20)', 'Large org (15–60)', 'Individual / small team (1–6)'],
                ].map(([feature, chalet, hq, apt], rowIdx) => (
                  <tr key={feature}>
                    <td
                      style={{
                        padding: '14px 20px',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        borderBottom: rowIdx < 11 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </td>
                    {[chalet, hq, apt].map((val, i) => (
                      <td
                        key={i}
                        style={{
                          padding: '14px 20px',
                          fontSize: '0.875rem',
                          borderBottom: rowIdx < 11 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                          color: (val ?? '').startsWith('✓')
                            ? '#25D366'
                            : (val ?? '').startsWith('✗')
                            ? '#ff5555'
                            : val === 'On Request' || feature === 'Bedrooms' || feature === 'Max Guests'
                            ? 'var(--gold)'
                            : 'var(--text-muted)',
                          fontWeight:
                            val === 'On Request' || feature === 'Bedrooms' || feature === 'Max Guests'
                              ? 600
                              : 400,
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 5. BOOKING PROCESS ─────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              How It Works
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              The Booking{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Process</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: 500,
                margin: '16px auto 0',
                lineHeight: 1.7,
              }}
            >
              Four steps from enquiry to arrival — each one handled by our dedicated team.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                step: '01',
                title: 'Enquire',
                desc: 'Reach out via WhatsApp or email with your dates, delegation size and preferences. We respond within 2 hours.',
                icon: '✉',
              },
              {
                step: '02',
                title: 'Confirm',
                desc: 'We present a shortlist of suitable properties with detailed proposals. You select and sign a bespoke rental agreement.',
                icon: '✓',
              },
              {
                step: '03',
                title: 'Arrange',
                desc: 'Our team coordinates all logistics — transfers, catering, AV setup, staffing and arrival briefings — before you land.',
                icon: '⚙',
              },
              {
                step: '04',
                title: 'Enjoy',
                desc: 'Arrive to a fully prepared property with 24/7 concierge support throughout your Davos stay. Focus on what matters.',
                icon: '★',
              },
            ].map((s) => (
              <motion.div
                key={s.step}
                variants={fadeInUp}
                style={{
                  background: 'var(--surface)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '36px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* big ghost number */}
                <div
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: 16,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '5rem',
                    fontWeight: 700,
                    color: 'rgba(197,160,89,0.06)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {s.step}
                </div>
                {/* step circle */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: 'rgba(197,160,89,0.12)',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    marginBottom: 20,
                  }}
                >
                  {s.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ────────────────────────────────── */}
      <section
        style={{
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(197,160,89,0.05), transparent)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              Guest Reviews
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              Guests on Our{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Properties</em>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
              maxWidth: 900,
              margin: '0 auto',
            }}
          >
            {[
              {
                initials: 'PS',
                name: 'Senior Executive',
                role: 'Head of Global Affairs · Asia-Pacific Conglomerate',
                text: '"The chalet was steps from the conference centre. Every morning we woke to Alpine views, and our private chef had breakfast on the table at exactly 7am. I cannot imagine returning to a hotel after this experience."',
                service: 'Luxury Chalet — 5 Nights',
                date: 'February 2024',
              },
              {
                initials: 'DO',
                name: 'Development Leader',
                role: 'Executive Director · Continental Development Fund',
                text: '"As a first-time Davos Summit attendee, I was nervous about navigating Davos. The GS team had my executive apartment fully set up with a welcome briefing, local guide, and the concierge was available via WhatsApp whenever I needed anything."',
                service: 'Executive Apartment — 6 Nights',
                date: 'January 2023',
              },
            ].map((r) => (
              <motion.article
                key={r.initials}
                variants={fadeInUp}
                style={{
                  background: 'var(--surface)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: '#050508',
                      flexShrink: 0,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#fff' }}>{r.name}</div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: 2 }}>{r.role}</div>
                  </div>
                </div>
                <div style={{ color: 'var(--gold)', fontSize: '0.875rem', letterSpacing: 2, marginBottom: 10 }}>
                  ★★★★★
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: 16,
                  }}
                >
                  {r.text}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.725rem',
                      color: 'var(--gold)',
                      background: 'rgba(197,160,89,0.1)',
                      border: '1px solid var(--border)',
                      borderRadius: 100,
                      padding: '3px 10px',
                    }}
                  >
                    {r.service}
                  </span>
                  <span style={{ fontSize: '0.725rem', color: 'var(--text-subtle)' }}>{r.date}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. FAQ ─────────────────────────────────────────── */}
      <section
        style={{ padding: '80px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              Common Questions
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              Accommodation{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>FAQ</em>
            </motion.h2>
          </motion.div>

          <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ─────────────────────────────────────────── */}
      <section
        style={{
          padding: '80px 0',
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(197,160,89,0.1), transparent)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              background: 'linear-gradient(135deg, rgba(197,160,89,0.08), rgba(197,160,89,0.03))',
              border: '1px solid var(--border-gold)',
              borderRadius: 20,
              padding: 'clamp(40px, 8vw, 64px) clamp(24px, 6vw, 48px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 100%, rgba(197,160,89,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <motion.span
              variants={fadeInUp}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                display: 'block',
                marginBottom: 16,
                position: 'relative',
              }}
            >
              Limited Availability
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#fff',
                marginBottom: 16,
                position: 'relative',
              }}
            >
              Secure Your Davos{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Accommodation</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: 500,
                margin: '0 auto 36px',
                lineHeight: 1.7,
                position: 'relative',
              }}
            >
              Premium properties for January 19–23, 2027 are already being reserved. Contact us
              now to secure your preferred property before availability closes.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
                position: 'relative',
              }}
            >
              <a
                href="https://wa.me/41795489025?text=Hello%20GS%20Hospitality%2C%20I%20would%20like%20to%20enquire%20about%20Davos%20Summit%202027%20accommodation."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '16px 32px',
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))',
                  color: '#000',
                  textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(197,160,89,0.35)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire via WhatsApp
              </a>
              <a
                href="mailto:hello@gs-hospitality.ch?subject=Davos 2027 Accommodation Enquiry"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '16px 32px',
                  borderRadius: 9999,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  background: 'var(--surface)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                }}
              >
                hello@gs-hospitality.ch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
