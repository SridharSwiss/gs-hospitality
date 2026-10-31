'use client';

import { useState } from 'react';

const TEMPLATES: Record<string, { subject: string; body: string }> = {
  newsletter: {
    subject: 'Davos 2027 Weekly Update — GS Hospitality',
    body: `<h2 style="color:#C5A059;font-family:Georgia,serif;margin-top:0;">Davos 2027 Weekly Update</h2>
<p style="color:#F0EDE8;line-height:1.7;">Dear [Name],</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">Here is your weekly update from GS Hospitality ahead of the Davos 2027 season (January 19–23, 2027).</p>
<h3 style="color:#C5A059;">This Week's Highlights</h3>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">[Your content here]</p>
<h3 style="color:#C5A059;">Available Properties</h3>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">[Property updates here]</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">For enquiries, reply to this email or reach us on WhatsApp.</p>
<p style="color:#F0EDE8;">Warm regards,<br><strong style="color:#C5A059;">The GS Hospitality Team</strong></p>`,
  },
  greeting: {
    subject: "Season's Greetings from GS Hospitality",
    body: `<h2 style="color:#C5A059;font-family:Georgia,serif;margin-top:0;">Season's Greetings from GS Hospitality</h2>
<p style="color:#F0EDE8;line-height:1.7;">Dear [Name],</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">[Your seasonal message here]</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">We look forward to welcoming you to Davos in 2027.</p>
<p style="color:#F0EDE8;">With warm regards,<br><strong style="color:#C5A059;">The GS Hospitality Team</strong></p>`,
  },
  followup: {
    subject: 'Following Up — GS Hospitality Davos 2027',
    body: `<h2 style="color:#C5A059;font-family:Georgia,serif;margin-top:0;">Following Up on Your Enquiry</h2>
<p style="color:#F0EDE8;line-height:1.7;">Dear [Name],</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">I wanted to follow up on your recent enquiry with GS Hospitality regarding Davos 2027.</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">[Your message here]</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">Please reply directly or reach us on WhatsApp for the fastest response.</p>
<p style="color:#F0EDE8;">Best regards,<br><strong style="color:#C5A059;">The GS Hospitality Team</strong></p>`,
  },
  update: {
    subject: 'GS Hospitality — Davos 2027 Update',
    body: `<h2 style="color:#C5A059;font-family:Georgia,serif;margin-top:0;">An Update from GS Hospitality</h2>
<p style="color:#F0EDE8;line-height:1.7;">Dear [Name],</p>
<p style="color:rgba(240,237,232,0.8);line-height:1.7;">[Your update here]</p>
<p style="color:#F0EDE8;">Kind regards,<br><strong style="color:#C5A059;">The GS Hospitality Team</strong></p>`,
  },
  custom: { subject: '', body: '' },
};

const inp: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 10,
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(197,160,89,0.25)',
  color: '#F0EDE8', fontSize: 14, boxSizing: 'border-box', outline: 'none',
};

export default function ComposeTab({ adminKey }: { adminKey: string }) {
  const [campaignType, setCampaignType] = useState('newsletter');
  const [audience, setAudience] = useState('both');
  const [subject, setSubject] = useState(TEMPLATES.newsletter.subject);
  const [previewText, setPreviewText] = useState('');
  const [body, setBody] = useState(TEMPLATES.newsletter.body);
  const [showPreview, setShowPreview] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; count?: number; error?: string } | null>(null);

  const applyTemplate = (type: string) => {
    setCampaignType(type);
    const t = TEMPLATES[type];
    if (t.subject) setSubject(t.subject);
    if (t.body) setBody(t.body);
    setResult(null);
  };

  const handleSend = async () => {
    if (!subject.trim() || !body.trim()) return;
    const confirmed = window.confirm(`Send "${subject}" to ${audience === 'both' ? 'all subscribers + enquiry leads' : audience === 'subscribers' ? 'newsletter subscribers' : 'enquiry leads'}?\n\nThis cannot be undone.`);
    if (!confirmed) return;
    setSending(true);
    setResult(null);
    try {
      const res = await fetch('/api/admin/send-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${adminKey}` },
        body: JSON.stringify({ subject, previewText, bodyHtml: body, campaignType, audience }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setResult({ success: true, count: data.count });
    } catch (e: any) {
      setResult({ error: e.message });
    } finally {
      setSending(false);
    }
  };

  const lbl: React.CSSProperties = { color: 'rgba(240,237,232,0.5)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6, display: 'block' };
  const card: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197,160,89,0.15)', borderRadius: 16, padding: 24, marginBottom: 16 };

  return (
    <div>
      <div style={card}>
        <label style={lbl}>Campaign Type</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
          {[
            { value: 'newsletter', label: 'Weekly Newsletter' },
            { value: 'update', label: 'GS Update' },
            { value: 'followup', label: 'Follow-up' },
            { value: 'greeting', label: 'Festival Greeting' },
            { value: 'custom', label: 'Custom' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => applyTemplate(value)}
              style={{
                padding: '8px 16px', borderRadius: 20, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s',
                background: campaignType === value ? 'linear-gradient(135deg,#A8893D,#C5A059)' : 'rgba(255,255,255,0.05)',
                border: campaignType === value ? 'none' : '1px solid rgba(197,160,89,0.2)',
                color: campaignType === value ? '#050508' : '#F0EDE8',
                fontWeight: campaignType === value ? 700 : 400,
              }}
            >{label}</button>
          ))}
        </div>
        <p style={{ color: 'rgba(240,237,232,0.35)', fontSize: 12, margin: '8px 0 0' }}>Selecting a type pre-fills subject and body template.</p>
      </div>

      <div style={card}>
        <label style={lbl}>Audience</label>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            { value: 'subscribers', label: 'Newsletter Subscribers' },
            { value: 'leads', label: 'Enquiry Leads' },
            { value: 'both', label: 'Both (deduplicated)' },
          ].map(({ value, label }) => (
            <label key={value} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: audience === value ? '#C5A059' : 'rgba(240,237,232,0.7)' }}>
              <input type="radio" name="audience" value={value} checked={audience === value} onChange={() => setAudience(value)}
                style={{ accentColor: '#C5A059' }} />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div style={card}>
        <div style={{ marginBottom: 16 }}>
          <label style={lbl}>Subject Line *</label>
          <input style={inp} value={subject} onChange={e => setSubject(e.target.value)} placeholder="Email subject line" />
        </div>
        <div>
          <label style={lbl}>Preview Text <span style={{ opacity: 0.5 }}>(shown under subject in inbox)</span></label>
          <input style={inp} value={previewText} onChange={e => setPreviewText(e.target.value)} placeholder="Short preview snippet..." />
        </div>
      </div>

      <div style={card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <label style={{ ...lbl, margin: 0 }}>Email Body (HTML) *</label>
          <button onClick={() => setShowPreview(v => !v)}
            style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer', background: showPreview ? 'rgba(197,160,89,0.15)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(197,160,89,0.25)', color: '#C5A059' }}>
            {showPreview ? 'Edit' : 'Preview'}
          </button>
        </div>
        {showPreview ? (
          <div style={{ background: '#0a0a0f', borderRadius: 10, padding: 24, border: '1px solid rgba(197,160,89,0.15)' }}
            dangerouslySetInnerHTML={{ __html: body }} />
        ) : (
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={14}
            style={{ ...inp, resize: 'vertical', fontFamily: 'monospace', fontSize: 12, lineHeight: 1.6 }}
            placeholder="<p>Your email content here...</p>"
          />
        )}
        <p style={{ color: 'rgba(240,237,232,0.3)', fontSize: 11, marginTop: 8 }}>Write HTML. Use [Name] as a placeholder — it is not auto-replaced; personalise manually or leave generic.</p>
      </div>

      {result?.success && (
        <div style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 16, color: '#25D366', fontSize: 14 }}>
          ✓ Campaign sent to <strong>{result.count}</strong> recipient{result.count !== 1 ? 's' : ''}.
        </div>
      )}
      {result?.error && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 16, color: 'rgba(239,68,68,0.9)', fontSize: 14 }}>
          Error: {result.error}
        </div>
      )}

      <button
        onClick={handleSend}
        disabled={sending || !subject.trim() || !body.trim()}
        style={{
          padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer',
          background: sending ? 'rgba(197,160,89,0.4)' : 'linear-gradient(135deg,#A8893D,#C5A059,#D4B870)',
          color: '#050508', border: 'none', width: '100%',
          boxShadow: sending ? 'none' : '0 4px 20px rgba(197,160,89,0.25)',
        }}
      >
        {sending ? 'Sending…' : 'Send Campaign →'}
      </button>
    </div>
  );
}
