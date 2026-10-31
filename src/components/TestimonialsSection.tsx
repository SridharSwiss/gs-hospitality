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

const testimonials = [
  {
    quote:
      'GS Hospitality transformed our Davos week. Every detail was handled with extraordinary care — the property was impeccable and the concierge service genuinely exceeded our expectations.',
    author: 'C-Suite Executive, Global Financial Institution',
  },
  {
    quote:
      'From airport transfer to final evening dinner, the team ensured our entire delegation experienced flawless, uninterrupted service. We will not use any other provider.',
    author: 'Delegation Lead, European Government',
  },
  {
    quote:
      'Discretion, precision and genuine Swiss hospitality. GS Hospitality is the only partner we trust for the most important week of the diplomatic calendar.',
    author: 'Senior Partner, International Law Firm',
  },
];

const QuoteIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    style={{ color: 'var(--gold)', opacity: 0.45 }}
  >
    <path
      d="M9.333 20c0 2.578 1.756 4 3.334 4 1.578 0 2.666-1.067 2.666-2.667 0-1.6-1.088-2.666-2.666-2.666-.356 0-.667.044-.934.133C11.822 17.244 13.067 15.2 15.111 14l-1.778-2.667C9.6 13.6 9.333 17.244 9.333 20zm13.334 0c0 2.578 1.755 4 3.333 4 1.578 0 2.667-1.067 2.667-2.667 0-1.6-1.089-2.666-2.667-2.666-.355 0-.666.044-.933.133.089-1.556 1.333-3.6 3.377-4.8L26.667 11.333C22.933 13.6 22.667 17.244 22.667 20z"
      fill="currentColor"
    />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 50%, rgba(197,160,89,0.06), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs font-medium mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Client Voices
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
          >
            Trusted by World Leaders
          </h2>
        </div>

        {/* Testimonials grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={fadeInUp}
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{
                background: 'var(--surface)',
                backdropFilter: 'blur(20px) saturate(150%)',
                border: '1px solid var(--border)',
              }}
            >
              <QuoteIcon />
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: 'var(--text-muted)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <div
                  className="w-8 h-px mb-3"
                  style={{ background: 'var(--border-gold)' }}
                  aria-hidden="true"
                />
                <cite
                  className="not-italic text-xs font-medium uppercase tracking-wider"
                  style={{ color: 'var(--gold)' }}
                >
                  {t.author}
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
