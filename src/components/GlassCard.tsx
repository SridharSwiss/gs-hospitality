'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  animate?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const glassStyles: React.CSSProperties = {
  background: 'var(--surface)',
  backdropFilter: 'blur(20px) saturate(150%)',
  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
  border: '1px solid var(--border)',
  borderRadius: '16px',
};

const hoverGlowShadow =
  '0 0 0 1px rgba(197,160,89,0.35), 0 8px 32px rgba(197,160,89,0.10)';

function CardInner({
  children,
  className,
  onClick,
  animate,
}: Omit<GlassCardProps, 'href'>) {
  const baseClass = `overflow-hidden transition-colors duration-300 ${className ?? ''}`;

  if (animate) {
    return (
      <motion.div
        variants={fadeInUp}
        whileHover={{
          scale: 1.02,
          boxShadow: hoverGlowShadow,
          borderColor: 'rgba(197,160,89,0.35)',
          transition: { duration: 0.25 },
        }}
        onClick={onClick}
        style={glassStyles}
        className={baseClass}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: hoverGlowShadow,
        borderColor: 'rgba(197,160,89,0.35)',
        transition: { duration: 0.25 },
      }}
      onClick={onClick}
      style={glassStyles}
      className={baseClass}
    >
      {children}
    </motion.div>
  );
}

export default function GlassCard({
  children,
  className,
  onClick,
  href,
  animate = false,
}: GlassCardProps) {
  if (href) {
    return (
      <Link href={href} className="block">
        <CardInner className={className} onClick={onClick} animate={animate}>
          {children}
        </CardInner>
      </Link>
    );
  }

  return (
    <CardInner className={className} onClick={onClick} animate={animate}>
      {children}
    </CardInner>
  );
}
