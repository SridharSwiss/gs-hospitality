'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMobile() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeMobile])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinkVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
  }

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as const } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as const } },
  }

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
  }

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'backdrop-blur-xl border-b'
            : '',
        ].join(' ')}
        style={
          scrolled
            ? {
                background: 'rgba(5,5,8,0.88)',
                borderColor: 'var(--border-gold)',
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" onClick={closeMobile}>
              <span
                className="text-xl font-bold tracking-tight transition-colors duration-200 group-hover:opacity-90"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text)' }}
              >
                GS Hospitality
              </span>
              <span
                className="text-[9px] font-medium tracking-widest uppercase mt-0.5"
                style={{ color: 'var(--gold)', letterSpacing: '0.2em' }}
              >
                Davos Summit Specialists
              </span>
            </Link>

            {/* Desktop nav links */}
            <motion.ul
              className="hidden lg:flex items-center gap-1"
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href
                return (
                  <motion.li key={link.href} custom={i} variants={navLinkVariants}>
                    <Link
                      href={link.href}
                      className={[
                        'relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md',
                        active
                          ? ''
                          : 'hover:opacity-100',
                      ].join(' ')}
                      style={{
                        color: active ? 'var(--gold)' : 'var(--text-muted)',
                      }}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-px rounded-full"
                          style={{ background: 'var(--gold)' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>

            {/* Desktop CTA */}
            <motion.div
              className="hidden lg:flex items-center"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                  color: '#050508',
                  boxShadow: '0 0 0 0 rgba(197,160,89,0)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(197,160,89,0.35)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 0 rgba(197,160,89,0)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md transition-colors duration-200"
              style={{ color: 'var(--text)' }}
              onClick={() => setMobileOpen(v => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="text-2xl leading-none select-none">{mobileOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(5,5,8,0.97)',
              backdropFilter: 'blur(24px)',
            }}
          >
            {/* Gold accent top line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
            />

            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href
                  return (
                    <motion.li key={link.href} custom={i} variants={mobileLinkVariants} initial="hidden" animate="visible">
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="block text-3xl font-semibold tracking-tight transition-colors duration-200"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: active ? 'var(--gold)' : 'var(--text)',
                        }}
                      >
                        {link.label}
                        {active && (
                          <span
                            className="block h-px mt-1 rounded-full"
                            style={{ background: 'var(--gold)' }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="mt-12"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
                style={{
                  background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                  color: '#050508',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
