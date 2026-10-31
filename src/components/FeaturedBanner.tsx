'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          key="featured-banner"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-50 w-full"
          style={{
            background: 'linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light), var(--gold))',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-4">
            {/* Limited availability pill */}
            <span
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ background: 'rgba(0,0,0,0.18)', color: '#000' }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#000' }}
              />
              Limited Availability
            </span>

            <Link
              href="/accommodations"
              className="text-xs sm:text-sm font-semibold text-center leading-snug hover:underline underline-offset-2"
              style={{ color: '#000' }}
            >
              NOW AVAILABLE · DAVOS ANNUAL MEETING 2027 — Secure your exclusive accommodation now
            </Link>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss banner"
              className="shrink-0 ml-2 p-1 rounded-full transition-colors hover:bg-black/10"
              style={{ color: '#000' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
