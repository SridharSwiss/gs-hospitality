'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const services = [
  {
    title: 'Corporate Lounge',
    description:
      'State-of-the-art AV, premium catering and bespoke event management — a private base for your delegation, configured to your brand.',
    imagePath: '/assets/img/sections/av-production.jpg',
    href: '/services',
  },
  {
    title: 'Premium Transport',
    description:
      'Discreet chauffeur-driven vehicles, private transfers and airport logistics, available around the clock throughout the summit week.',
    imagePath: '/assets/img/sections/visa-travel.jpg',
    href: '/services',
  },
  {
    title: 'Concierge 24/7',
    description:
      'A dedicated concierge available at any hour — restaurant reservations, last-minute arrangements and personal requests handled without delay.',
    imagePath: '/assets/img/sections/etiquette-dining.jpg',
    href: '/services',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
          >
            Services Overview
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl overflow-hidden group"
              style={{
                background: 'var(--surface)',
                backdropFilter: 'blur(20px) saturate(150%)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.imagePath}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,5,8,0.55) 0%, transparent 55%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 gap-4">
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                  {svc.description}
                </p>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline underline-offset-2"
                  style={{ color: 'var(--gold)' }}
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
