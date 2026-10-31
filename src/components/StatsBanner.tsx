'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsBannerProps {
  stats: Stat[];
}

/** Parse a stat value string like "200+", "15", "100%" into { prefix, number, suffix } */
function parseStat(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return {
    prefix: match[1] ?? '',
    number: parseFloat(match[2] ?? '0'),
    suffix: match[3] ?? '',
  };
}

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const { prefix, number, suffix } = parseStat(value);
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = 1600; // ms

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * number));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [inView, number]);

  const formatted = Number.isInteger(number)
    ? displayed.toLocaleString()
    : displayed.toFixed(1);

  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function StatsBanner({ stats }: StatsBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full rounded-2xl px-6 py-8 md:py-10"
      style={{
        background: 'var(--surface)',
        backdropFilter: 'blur(20px) saturate(150%)',
        border: '1px solid var(--border)',
      }}
    >
      <div className="flex flex-wrap items-stretch justify-center divide-y md:divide-y-0 md:divide-x"
        style={{ '--divider': 'var(--border)' } as React.CSSProperties}
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center px-8 py-4 md:py-0 w-1/2 md:w-auto md:flex-1 relative group">
            {/* Separator line — shown as right border except on last */}
            {i < stats.length - 1 && (
              <span
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10"
                style={{ width: '1px', background: 'var(--border)' }}
                aria-hidden="true"
              />
            )}

            <motion.p
              className="text-3xl md:text-4xl font-bold leading-none mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <AnimatedCounter value={stat.value} inView={inView} />
            </motion.p>

            <p
              className="uppercase tracking-widest text-xs font-medium text-center"
              style={{ color: 'var(--text-muted)' }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
