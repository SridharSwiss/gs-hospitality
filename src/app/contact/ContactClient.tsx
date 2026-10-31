'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { WHATSAPP_URL, EMAIL } from '@/lib/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const WA_ICON = (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.502L4 29l7.7-1.804A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.88 0-3.637-.516-5.137-1.41l-.363-.218-4.572 1.072 1.096-4.461-.236-.376A9.957 9.957 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.522-7.478c-.3-.15-1.774-.876-2.049-.975-.275-.1-.475-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.892-.795-1.494-1.777-1.669-2.077-.175-.3-.019-.462.131-.61.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.586-.492-.506-.676-.516l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.116 3.228 5.126 4.527.716.309 1.276.493 1.712.631.72.228 1.374.196 1.892.119.577-.086 1.774-.726 2.024-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z" />
  </svg>
);

export default function ContactClient() {
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '', subject: 'Accommodation Enquiry', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setErrors({ message: 'Something went wrong. Please try emailing us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase = "w-full px-4 py-3 rounded-xl text-[var(--text)] placeholder-[rgba(240,237,232,0.25)] focus:outline-none transition-all duration-200 font-sans text-[0.9375rem]";
  const inputSt = (err?: string) => ({
    background: 'rgba(255,255,255,0.05)',
    border: `1px solid ${err ? 'rgba(239,68,68,0.55)' : 'var(--border)'}`,
  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <HeroSection
        imagePath="/assets/img/heroes/contact-hero.jpg"
        imageAlt="Contact GS Hospitality — Davos 2027"
        title="Get in Touch"
        label="DAVOS 2027 · ENQUIRIES"
        description="Reach our team for accommodation, services, and tour enquiries. We respond within 24 hours — WhatsApp is fastest for urgent matters."
      />

      {/* ── WHATSAPP CARD ───────────────────────────── */}
      <section className="py-16 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className="rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(18,140,126,0.18) 0%, rgba(37,211,102,0.10) 100%)',
                border: '1px solid rgba(37,211,102,0.28)',
                backdropFilter: 'blur(20px) saturate(150%)',
              }}
            >
              {/* animated glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 110%, rgba(37,211,102,0.18), transparent)' }}
              />
              <div className="relative z-10">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.45)' }}
                >
                  {WA_ICON}
                </div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#25D366' }}>
                  Fastest Response
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">
                  Fastest Response Channel
                </h2>
                <p className="mb-8 text-base" style={{ color: 'rgba(240,237,232,0.6)' }}>
                  Typically within 2 hours · Mon–Sun 08:00–22:00 CET
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-base"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 28px rgba(37,211,102,0.35)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="white"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.502L4 29l7.7-1.804A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.88 0-3.637-.516-5.137-1.41l-.363-.218-4.572 1.072 1.096-4.461-.236-.376A9.957 9.957 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.522-7.478c-.3-.15-1.774-.876-2.049-.975-.275-.1-.475-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.892-.795-1.494-1.777-1.669-2.077-.175-.3-.019-.462.131-.61.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.586-.492-.506-.676-.516l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.116 3.228 5.126 4.527.716.309 1.276.493 1.712.631.72.228 1.374.196 1.892.119.577-.086 1.774-.726 2.024-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z" /></svg>
                  WhatsApp Us Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FORM + DETAILS ──────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ background: 'linear-gradient(180deg, var(--bg) 0%, rgba(197,160,89,0.04) 50%, var(--bg) 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="rounded-2xl p-8 md:p-10"
              style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}
            >
              <p className="text-xs font-medium tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
                Send an Enquiry
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-7">
                Tell Us How We Can Help
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(197,160,89,0.15)', border: '1px solid rgba(197,160,89,0.30)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">Enquiry Sent</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(240,237,232,0.6)' }}>
                    Thank you, {form.name.split(' ')[0]}. We will be in touch within 24 hours.
                    For urgent matters,{' '}
                    <a href={WHATSAPP_URL} style={{ color: '#25D366' }} target="_blank" rel="noopener noreferrer">
                      WhatsApp us
                    </a>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', subject: 'Accommodation Enquiry', message: '' }); }}
                    className="text-sm px-6 py-2 rounded-full transition-colors"
                    style={{ border: '1px solid rgba(197,160,89,0.3)', color: 'var(--gold)', background: 'none', cursor: 'pointer' }}
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-[0.08em] uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.6)' }}>
                        Name <span style={{ color: 'var(--gold)' }}>*</span>
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputBase} style={inputSt(errors.name)} />
                      {errors.name && <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-[0.08em] uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.6)' }}>Company</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Organisation (optional)" className={inputBase} style={inputSt()} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-[0.08em] uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.6)' }}>
                        Email <span style={{ color: 'var(--gold)' }}>*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputBase} style={inputSt(errors.email)} />
                      {errors.email && <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-[0.08em] uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.6)' }}>Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (optional)" className={inputBase} style={inputSt()} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.6)' }}>Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-[var(--text)] focus:outline-none cursor-pointer transition-all duration-200 text-[0.9375rem]"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C5A059' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '40px' }}
                    >
                      <option value="Accommodation Enquiry">Accommodation Enquiry</option>
                      <option value="Service Enquiry">Service Enquiry</option>
                      <option value="Tour Enquiry">Tour Enquiry</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-[0.08em] uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.6)' }}>
                      Message <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your requirements, preferred dates, group size, or any questions…"
                      className={inputBase + ' resize-y'}
                      style={{ ...inputSt(errors.message), minHeight: '120px' }}
                    />
                    {errors.message && <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300"
                    style={{
                      background: submitting ? 'rgba(197,160,89,0.45)' : 'linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))',
                      color: '#050508',
                      border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      boxShadow: submitting ? 'none' : '0 8px 24px rgba(197,160,89,0.28)',
                    }}
                  >
                    {submitting ? 'Sending…' : 'Send Enquiry →'}
                  </motion.button>
                  <p className="text-xs text-center" style={{ color: 'rgba(240,237,232,0.35)' }}>
                    All pricing is on request. We respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* DETAILS + RESPONSE TIMES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="flex flex-col gap-6"
            >
              {/* Contact details */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl p-8"
                style={{ background: 'var(--surface)', backdropFilter: 'blur(20px) saturate(150%)', border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-medium tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
                  Contact Details
                </p>
                <h3 className="font-serif text-xl font-semibold text-white mb-6">Reach Us Directly</h3>
                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:opacity-90"
                    style={{ background: 'rgba(197,160,89,0.08)', border: '1px solid rgba(197,160,89,0.22)', textDecoration: 'none' }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: 'rgba(197,160,89,0.15)' }}>
                      ✉
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(240,237,232,0.55)' }}>Email</p>
                      <p className="font-semibold text-sm" style={{ color: 'var(--gold)' }}>{EMAIL}</p>
                    </div>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:opacity-90"
                    style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.22)', textDecoration: 'none' }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,211,102,0.15)' }}>
                      <svg width="22" height="22" viewBox="0 0 32 32" fill="#25D366"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.502L4 29l7.7-1.804A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.88 0-3.637-.516-5.137-1.41l-.363-.218-4.572 1.072 1.096-4.461-.236-.376A9.957 9.957 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.522-7.478c-.3-.15-1.774-.876-2.049-.975-.275-.1-.475-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.892-.795-1.494-1.777-1.669-2.077-.175-.3-.019-.462.131-.61.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.586-.492-.506-.676-.516l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.116 3.228 5.126 4.527.716.309 1.276.493 1.712.631.72.228 1.374.196 1.892.119.577-.086 1.774-.726 2.024-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(240,237,232,0.55)' }}>WhatsApp</p>
                      <p className="font-semibold text-sm" style={{ color: '#25D366' }}>Chat with us — fastest response</p>
                    </div>
                  </a>
                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: 'rgba(197,160,89,0.10)' }}>
                      📍
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(240,237,232,0.55)' }}>Location</p>
                      <p className="font-semibold text-sm text-white">Based in Switzerland</p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(240,237,232,0.45)' }}>Available for Davos 2027 · Jan 19–23, 2027</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Response times */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(197,160,89,0.09), rgba(197,160,89,0.03))',
                  border: '1px solid rgba(197,160,89,0.22)',
                }}
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, rgba(197,160,89,0.12), transparent)' }} />
                <div className="relative z-10">
                  <p className="text-xs font-medium tracking-[0.22em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
                    Response Times
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-white mb-5">Always Reachable</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(240,237,232,0.6)' }}>
                    We respond to all enquiries within 24 hours. For urgent matters, WhatsApp is fastest.
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      { ch: 'WhatsApp', time: 'Typically within 2 hours', note: 'Fastest — ideal for urgent matters', color: '#25D366' },
                      { ch: 'Email', time: 'Within 24 hours', note: 'hello@gs-hospitality.ch', color: 'var(--gold)' },
                      { ch: 'Enquiry Form', time: 'Within 24 hours', note: 'Every submission reviewed personally', color: 'var(--gold)' },
                    ].map(({ ch, time, note, color }) => (
                      <div key={ch} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-[6px] flex-shrink-0" style={{ background: color }} />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {ch} — <span style={{ color }}>{time}</span>
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: 'rgba(240,237,232,0.5)' }}>{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-xs font-medium tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Davos 2027
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Plan Your{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>Davos 2027</em>{' '}
              Experience?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base leading-relaxed mb-9 max-w-xl mx-auto" style={{ color: 'rgba(240,237,232,0.6)' }}>
              Whether you need a chalet, private transfers, curated Swiss tours or full corporate hospitality —
              our team is standing by. All pricing on request.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 6px 22px rgba(37,211,102,0.30)' }}
              >
                WhatsApp Us
              </a>
              <Link
                href="/davos-2027"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:opacity-80"
                style={{ color: 'var(--gold)', border: '1px solid rgba(197,160,89,0.30)', textDecoration: 'none' }}
              >
                Explore Davos 2027 →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
