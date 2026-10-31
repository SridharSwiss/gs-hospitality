'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

interface PropertyCardProps {
  name: string;
  type: string;
  guests: number;
  distance: string;
  description: string;
  imagePath: string;
  brochureNote?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const GuestsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BrochureIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function PropertyCard({
  name,
  type,
  guests,
  distance,
  description,
  imagePath,
  brochureNote,
}: PropertyCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: 'var(--surface)',
        backdropFilter: 'blur(20px) saturate(150%)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay on image bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)',
          }}
        />
        {/* Type badge */}
        <div
          className="absolute top-4 left-4 uppercase tracking-widest text-xs font-medium px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(197,160,89,0.18)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3
          className="text-xl font-semibold leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
        >
          {name}
        </h3>

        {/* Stats row */}
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <GuestsIcon />
            <span>Up to {guests} guests</span>
          </div>
          <span style={{ color: 'var(--border)' }}>|</span>
          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <LocationIcon />
            <span>{distance}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
          {description}
        </p>

        {/* Brochure note */}
        {brochureNote && (
          <div
            className="flex items-start gap-2 text-xs rounded-lg px-3 py-2.5"
            style={{
              background: 'rgba(197,160,89,0.07)',
              border: '1px solid rgba(197,160,89,0.15)',
              color: 'var(--text-subtle)',
            }}
          >
            <span className="mt-0.5 shrink-0" style={{ color: 'var(--gold)' }}>
              <BrochureIcon />
            </span>
            <span>{brochureNote}</span>
          </div>
        )}

        {/* CTA */}
        <WhatsAppButton
          text="Enquire via WhatsApp"
          variant="secondary"
          size="sm"
          className="w-full justify-center"
        />
      </div>
    </motion.article>
  );
}
