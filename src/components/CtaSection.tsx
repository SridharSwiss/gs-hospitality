'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CtaSection() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Dark background with gold radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'var(--bg)' }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,160,89,0.18), transparent)',
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(197,160,89,0.06), transparent)',
        }}
      />

      {/* Decorative border top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-gold), transparent)' }}
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <motion.p
          variants={fadeInUp}
          className="uppercase tracking-widest text-xs font-medium"
          style={{ color: 'var(--gold)' }}
        >
          Davos 2027 · Jan 19–23
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-semibold leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
        >
          Ready for Davos 2027?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg leading-relaxed max-w-xl"
          style={{ color: 'var(--text-muted)' }}
        >
          Secure your exclusive accommodation before availability closes. Our team is available now to discuss your delegation's requirements.
        </motion.p>

        <motion.a
          variants={fadeInUp}
          href="https://wa.me/41795489025"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 36px rgba(197,160,89,0.45)' }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 rounded-full px-10 py-4 font-semibold text-sm transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))',
            color: '#000',
            boxShadow: '0 4px 24px rgba(197,160,89,0.30)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us Now
        </motion.a>
      </motion.div>

      {/* Decorative border bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
