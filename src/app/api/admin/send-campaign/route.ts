import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const TO_EMAIL = 'hello@gs-hospitality.ch';

function brandedHtml(bodyHtml: string, subject: string, previewText: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${subject}</title>
  ${previewText ? `<div style="display:none;max-height:0;overflow:hidden;">${previewText}&nbsp;&#847;&nbsp;</div>` : ''}
</head>
<body style="background:#050508;margin:0;padding:0;font-family:Georgia,serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="color:#C5A059;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0;">GS Hospitality</p>
      <p style="color:rgba(240,237,232,0.4);font-size:11px;margin:4px 0 0;">Davos · Switzerland</p>
    </div>
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(197,160,89,0.2);border-radius:12px;padding:40px;">
      ${bodyHtml}
    </div>
    <div style="text-align:center;margin-top:32px;">
      <p style="color:rgba(240,237,232,0.3);font-size:11px;line-height:1.8;">
        © ${new Date().getFullYear()} GS Hospitality · Davos, Switzerland<br>
        <a href="mailto:${TO_EMAIL}" style="color:#C5A059;text-decoration:none;">${TO_EMAIL}</a><br>
        <span style="color:rgba(240,237,232,0.2);">You received this because you enquired or subscribed on gs-hospitality.ch</span>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const auth = req.headers.get('authorization');
  if (!adminPassword || auth !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  if (!sbUrl || !sbKey || !resendKey) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 });
  }

  const { subject, previewText, bodyHtml, campaignType, audience } = await req.json();
  if (!subject || !bodyHtml || !campaignType || !audience) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Fetch recipients
  const headers = { 'apikey': sbKey, 'Authorization': `Bearer ${sbKey}` };

  const recipientMap = new Map<string, string>(); // email -> name

  if (audience === 'subscribers' || audience === 'both') {
    const res = await fetch(`${sbUrl}/rest/v1/newsletter_subscribers?select=email,name`, { headers });
    const data = await res.json();
    if (Array.isArray(data)) data.forEach((r: any) => { if (r.email) recipientMap.set(r.email, r.name || ''); });
  }

  if (audience === 'leads' || audience === 'both') {
    const res = await fetch(`${sbUrl}/rest/v1/enquiries?select=email,name`, { headers });
    const data = await res.json();
    if (Array.isArray(data)) data.forEach((r: any) => { if (r.email && !recipientMap.has(r.email)) recipientMap.set(r.email, r.name || ''); });
  }

  const recipients = Array.from(recipientMap.entries());
  if (recipients.length === 0) {
    return NextResponse.json({ error: 'No recipients found for the selected audience' }, { status: 400 });
  }

  const resend = new Resend(resendKey);
  const html = brandedHtml(bodyHtml, subject, previewText || '');

  // Resend batch: max 100 per call — chunk if needed
  const chunkSize = 100;
  let totalSent = 0;
  for (let i = 0; i < recipients.length; i += chunkSize) {
    const chunk = recipients.slice(i, i + chunkSize);
    const emails = chunk.map(([email]) => ({
      from: `GS Hospitality <${TO_EMAIL}>`,
      to: email,
      subject,
      html,
    }));
    await resend.batch.send(emails);
    totalSent += chunk.length;
  }

  // Log campaign to Supabase
  await fetch(`${sbUrl}/rest/v1/email_campaigns`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
    body: JSON.stringify({ subject, preview_text: previewText || '', body_html: bodyHtml, campaign_type: campaignType, audience, recipient_count: totalSent, status: 'sent' }),
  });

  return NextResponse.json({ success: true, count: totalSent });
}
