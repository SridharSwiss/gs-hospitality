'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl transition-colors duration-300"
            style={{
              background: 'var(--surface)',
              backdropFilter: 'blur(20px) saturate(150%)',
              border: `1px solid ${isOpen ? 'rgba(197,160,89,0.35)' : 'var(--border)'}`,
            }}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-sm font-medium transition-colors duration-200"
              style={{ color: isOpen ? 'var(--gold)' : 'var(--text)' }}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border text-xs"
                style={{
                  borderColor: isOpen ? 'var(--gold)' : 'var(--border)',
                  color: 'var(--gold)',
                }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
