'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  imagePath: string;
  imageAlt: string;
  children?: React.ReactNode;
  height?: string;
  label?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function HeroSection({
  title,
  subtitle,
  description,
  imagePath,
  imageAlt,
  children,
  height = '70vh',
  label,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: height === 'full' ? '100vh' : height }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(5,5,5,0.65)' }}
      />

      {/* Gold radial accent — bottom */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(197,160,89,0.15), transparent)',
        }}
      />

      {/* Gold radial accent — top */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(197,160,89,0.08), transparent)',
        }}
      />

      {/* Bottom fade to --bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[3] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 min-h-[inherit]"
        style={{ minHeight: height === 'full' ? '100vh' : height }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {label && (
            <motion.p
              variants={fadeInUp}
              className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--gold)' }}
            >
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ background: 'var(--gold)' }}
              />
              {label}
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ background: 'var(--gold)' }}
              />
            </motion.p>
          )}

          <motion.h1
            variants={fadeInUp}
            className="mb-6 font-serif leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'var(--text)',
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-xl sm:text-2xl font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: 'var(--gold-light)',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
