'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const SESSION_KEY = 'gs-agreed';

const LogoMark = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="23" stroke="url(#lg)" strokeWidth="1.5" />
    <text
      x="24"
      y="31"
      textAnchor="middle"
      fontFamily="'Playfair Display', serif"
      fontSize="18"
      fontWeight="600"
      fill="url(#lg2)"
    >
      GS
    </text>
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4B870" />
        <stop offset="1" stopColor="#A8893D" />
      </linearGradient>
      <linearGradient id="lg2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4B870" />
        <stop offset="1" stopColor="#C5A059" />
      </linearGradient>
    </defs>
  </svg>
);

export default function EntryGate() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) !== '1') {
        setVisible(true);
      }
    } catch {
      // sessionStorage blocked (private mode / iframe); skip gate
    }
  }, []);

  const handleEnter = () => {
    if (!checked) return;
    setLeaving(true);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // ignore
    }
    // AnimatePresence handles removal after exit animation
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="entry-gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 flex items-center justify-center z-[10001] p-4"
          style={{
            background: 'rgba(5,5,8,0.88)',
            backdropFilter: 'blur(18px) saturate(130%)',
          }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="gate-title"
          aria-describedby="gate-desc"
        >
          {/* Gold radial accent */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(197,160,89,0.10), transparent)',
            }}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
            className="relative w-full max-w-lg rounded-2xl p-8 md:p-10 flex flex-col items-center text-center gap-6"
            style={{
              background: 'var(--surface-elevated)',
              backdropFilter: 'blur(24px) saturate(160%)',
              border: '1px solid var(--border-gold)',
            }}
          >
            {/* Logo */}
            <LogoMark />

            {/* Brand name */}
            <div className="flex flex-col items-center gap-1">
              <p
                className="uppercase tracking-widest text-xs font-medium"
                style={{ color: 'var(--gold)' }}
              >
                GS Hospitality
              </p>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1
                id="gate-title"
                className="text-3xl md:text-4xl font-semibold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
              >
                Welcome to GS Hospitality
              </h1>
              <p
                id="gate-desc"
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                We provide exclusive hospitality services for the Davos Annual Meeting in Davos.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px" style={{ background: 'var(--border)' }} aria-hidden="true" />

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-left group">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="sr-only"
                  id="gate-consent"
                />
                {/* Custom checkbox */}
                <div
                  className="w-5 h-5 rounded flex items-center justify-center transition-all duration-200"
                  style={{
                    background: checked ? 'var(--gold)' : 'transparent',
                    border: `1.5px solid ${checked ? 'var(--gold)' : 'rgba(197,160,89,0.45)'}`,
                  }}
                  aria-hidden="true"
                >
                  {checked && (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                      <path d="M1 4L4 7.5L10 1" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I confirm I am a professional seeking hospitality services for business purposes, and
                I agree to the{' '}
                <Link
                  href="/terms"
                  className="underline underline-offset-2 transition-colors hover:text-[var(--gold)]"
                  style={{ color: 'var(--gold-muted)' } as React.CSSProperties}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 transition-colors hover:text-[var(--gold)]"
                  style={{ color: 'var(--gold-muted)' } as React.CSSProperties}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </Link>{' '}
                of GS Hospitality.
              </span>
            </label>

            {/* Enter button */}
            <motion.button
              onClick={handleEnter}
              disabled={!checked}
              whileHover={checked ? { scale: 1.04, boxShadow: '0 0 28px rgba(197,160,89,0.4)' } : {}}
              whileTap={checked ? { scale: 0.97 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-full rounded-full py-4 font-semibold text-base transition-all duration-300"
              style={{
                background: checked
                  ? 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))'
                  : 'rgba(197,160,89,0.12)',
                color: checked ? '#000' : 'rgba(197,160,89,0.4)',
                cursor: checked ? 'pointer' : 'not-allowed',
                boxShadow: checked ? '0 4px 20px rgba(197,160,89,0.2)' : 'none',
              }}
              aria-disabled={!checked}
            >
              Enter Site →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
