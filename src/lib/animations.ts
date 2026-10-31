import type { Variants } from 'framer-motion'

/* ─── Shared easing ──────────────────────────────────────────────────── */
const ease = [0.25, 0.1, 0.25, 1] as const

/* ─── Directional Fade-ins ───────────────────────────────────────────── */
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export const fadeInDown: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
}

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
}

/* ─── Stagger Containers ─────────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren:  0.12,
      delayChildren:    0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

/* ─── Scale ──────────────────────────────────────────────────────────── */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
}

/* ─── Glow Pulse (for decorative gold elements) ─────────────────────── */
export const glowPulse: Variants = {
  initial: {
    opacity: 0.6,
    filter:  'blur(40px)',
  },
  animate: {
    opacity:    [0.6, 1, 0.6],
    filter:     ['blur(40px)', 'blur(30px)', 'blur(40px)'],
    transition: {
      duration: 4,
      ease:     'easeInOut',
      repeat:   Infinity,
    },
  },
}
