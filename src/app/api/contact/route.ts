import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO_EMAIL = 'hello@gs-hospitality.ch';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'GS Hospitality Website <noreply@gs-hospitality.ch>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Enquiry] ${subject || 'New Enquiry'} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#f0ede8;padding:32px;border-radius:12px;">
          <h2 style="color:#C5A059;margin-top:0;">New Enquiry via GS Hospitality</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#aaa;width:120px;">Name</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#aaa;">Company</td><td style="padding:6px 0;">${company || '—'}</td></tr>
            <tr><td style="padding:6px 0;color:#aaa;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#C5A059;">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#aaa;">Phone</td><td style="padding:6px 0;">${phone || '—'}</td></tr>
            <tr><td style="padding:6px 0;color:#aaa;">Subject</td><td style="padding:6px 0;">${subject || '—'}</td></tr>
          </table>
          <hr style="border:1px solid #222;margin:20px 0;" />
          <p style="color:#aaa;margin-bottom:6px;">Message:</p>
          <p style="background:#111;padding:16px;border-radius:8px;border-left:3px solid #C5A059;white-space:pre-wrap;">${message}</p>
          <p style="color:#555;font-size:12px;margin-top:32px;">Sent from gs-hospitality.ch contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
