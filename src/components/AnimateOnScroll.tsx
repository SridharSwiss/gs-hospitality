'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type VariantName = 'fadeInUp' | 'fadeIn' | 'scaleIn';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
}

const variants: Record<VariantName, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
};

export default function AnimateOnScroll({
  children,
  variant = 'fadeInUp',
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const selectedVariant = variants[variant];

  const visibleTransition =
    typeof selectedVariant.visible === 'object' &&
    !Array.isArray(selectedVariant.visible)
      ? (selectedVariant.visible as { transition?: object }).transition
      : {};

  const variantWithDelay: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...(typeof selectedVariant.visible === 'object' &&
      !Array.isArray(selectedVariant.visible)
        ? selectedVariant.visible
        : {}),
      transition: {
        ...visibleTransition,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={variantWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
