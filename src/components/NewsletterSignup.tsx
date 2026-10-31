'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Variant = 'banner' | 'footer';

interface Props {
  variant?: Variant;
}

type State = 'idle' | 'submitting' | 'success' | 'alreadySubscribed' | 'error';

export default function NewsletterSignup({ variant = 'banner' }: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState<State>('idle');
  const [emailErr, setEmailErr] = useState('');
  const [nameErr, setNameErr] = useState('');

  const validate = () => {
    let ok = true;
    if (!name.trim()) { setNameErr('Name is required'); ok = false; } else setNameErr('');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Valid email required'); ok = false;
    } else setEmailErr('');
    return ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, company, phone }),
      });
      const data = await res.json();
      if (data.alreadySubscribed) setState('alreadySubscribed');
      else if (data.success) setState('success');
      else setState('error');
    } catch {
      setState('error');
    }
  };

  const inp = (hasErr?: boolean) => ({
    background: 'rgba(255,255,255,0.06)',
    border: `1px solid ${hasErr ? 'rgba(239,68,68,0.6)' : 'rgba(197,160,89,0.25)'}`,
    borderRadius: 10,
    color: '#F0EDE8',
    fontSize: 14,
    padding: '11px 14px',
    width: '100%',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
  } as React.CSSProperties);

  const label = { fontSize: 11, color: 'rgba(240,237,232,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 4, display: 'block' };

  // ── FOOTER VARIANT ────────────────────────────────────────────────
  if (variant === 'footer') {
    return (
      <div style={{ borderTop: '1px solid rgba(197,160,89,0.12)', paddingTop: 24, marginTop: 8 }}>
        <p style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Newsletter</p>
        <p style={{ color: 'rgba(240,237,232,0.55)', fontSize: 13, marginBottom: 14 }}>Davos 2027 updates and early access.</p>
        <AnimatePresence mode="wait">
          {state === 'success' || state === 'alreadySubscribed' ? (
            <motion.p key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#C5A059', fontSize: 13, fontWeight: 600 }}>
              {state === 'success' ? "You're on the list ✓" : 'Already subscribed ✓'}
            </motion.p>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                  <input type="text" placeholder="Your name *" value={name} onChange={e => setName(e.target.value)} style={{ ...inp(!!nameErr), fontSize: 13 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <input type="email" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} style={{ ...inp(!!emailErr), fontSize: 13 }} />
                </div>
                <button type="submit" disabled={state === 'submitting'}
                  style={{ padding: '11px 18px', borderRadius: 10, background: 'linear-gradient(135deg, #A8893D, #C5A059)', color: '#050508', fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {state === 'submitting' ? '…' : 'Subscribe'}
                </button>
              </div>
              {(nameErr || emailErr) && <p style={{ color: 'rgba(239,68,68,0.85)', fontSize: 12 }}>{nameErr || emailErr}</p>}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── BANNER VARIANT ────────────────────────────────────────────────
  return (
    <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, rgba(197,160,89,0.06) 0%, rgba(5,5,8,0) 100%)', borderTop: '1px solid rgba(197,160,89,0.12)', borderBottom: '1px solid rgba(197,160,89,0.12)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p style={{ color: '#C5A059', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12 }}>Davos 2027 Updates</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 36px)', color: '#F0EDE8', marginBottom: 12, fontWeight: 600, lineHeight: 1.2 }}>
            Stay Ahead of the Season
          </h2>
          <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
            Early access to premium accommodations and exclusive Davos 2027 insights — delivered to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '24px 32px', borderRadius: 14, background: 'rgba(197,160,89,0.1)', border: '1px solid rgba(197,160,89,0.3)' }}>
                <p style={{ color: '#C5A059', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>You&apos;re on the list ✓</p>
                <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: 14 }}>We&apos;ll be in touch with Davos 2027 updates.</p>
              </motion.div>
            ) : state === 'alreadySubscribed' ? (
              <motion.div key="already" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '24px 32px', borderRadius: 14, background: 'rgba(197,160,89,0.07)', border: '1px solid rgba(197,160,89,0.2)' }}>
                <p style={{ color: '#C5A059', fontSize: 16, fontWeight: 600 }}>Already subscribed ✓</p>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14 }}>You&apos;re already on our list.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} noValidate>
                {/* Row 1: name + email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                  <div style={{ textAlign: 'left' }}>
                    <label style={label}>Name <span style={{ color: '#C5A059' }}>*</span></label>
                    <input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} style={inp(!!nameErr)} />
                    {nameErr && <p style={{ color: 'rgba(239,68,68,0.85)', fontSize: 12, marginTop: 4 }}>{nameErr}</p>}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={label}>Email <span style={{ color: '#C5A059' }}>*</span></label>
                    <input type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} style={inp(!!emailErr)} />
                    {emailErr && <p style={{ color: 'rgba(239,68,68,0.85)', fontSize: 12, marginTop: 4 }}>{emailErr}</p>}
                  </div>
                </div>
                {/* Row 2: company + phone (optional) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                  <div style={{ textAlign: 'left' }}>
                    <label style={label}>Company <span style={{ color: 'rgba(240,237,232,0.35)', fontSize: 10 }}>(optional)</span></label>
                    <input type="text" placeholder="Organisation" value={company} onChange={e => setCompany(e.target.value)} style={inp()} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={label}>Phone <span style={{ color: 'rgba(240,237,232,0.35)', fontSize: 10 }}>(optional)</span></label>
                    <input type="tel" placeholder="+1 555 000" value={phone} onChange={e => setPhone(e.target.value)} style={inp()} />
                  </div>
                </div>
                <button type="submit" disabled={state === 'submitting'}
                  style={{ width: '100%', padding: '14px', borderRadius: 12, background: state === 'submitting' ? 'rgba(197,160,89,0.4)' : 'linear-gradient(135deg, #A8893D, #C5A059, #D4B870)', color: '#050508', fontWeight: 700, fontSize: 15, border: 'none', cursor: state === 'submitting' ? 'not-allowed' : 'pointer', letterSpacing: '0.04em', boxShadow: '0 8px 24px rgba(197,160,89,0.25)' }}>
                  {state === 'submitting' ? 'Subscribing…' : 'Subscribe →'}
                </button>
                {state === 'error' && <p style={{ color: 'rgba(239,68,68,0.85)', fontSize: 13, marginTop: 10 }}>Something went wrong. Please try again.</p>}
                <p style={{ color: 'rgba(240,237,232,0.3)', fontSize: 12, marginTop: 14 }}>No spam. Unsubscribe anytime.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
