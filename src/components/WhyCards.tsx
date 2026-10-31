'use client';

import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Prime Location',
    body: 'Every property is handpicked for proximity to the congress centre — delegates arrive on time, every time, without compromise.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'White Glove Service',
    body: 'From the moment you land to the moment you depart, our concierge team handles every detail — transport, catering, scheduling and beyond.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Swiss Precision',
    body: 'We operate to the exacting standards Switzerland is renowned for — punctual, methodical and relentlessly thorough in every arrangement.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Complete Privacy',
    body: 'Discretion is non-negotiable. Our clients and their schedules remain entirely confidential — guaranteed by contract and principle.',
  },
];

export default function WhyCards() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/sections/security-access.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(5,5,8,0.88)' }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(197,160,89,0.10), transparent)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
          >
            Why GS Hospitality
          </h2>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{
                background: 'var(--surface)',
                backdropFilter: 'blur(20px) saturate(150%)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  background: 'rgba(197,160,89,0.12)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--gold)',
                }}
              >
                {card.icon}
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
