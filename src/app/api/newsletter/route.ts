import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { email, name, company, phone } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!sbUrl || !sbKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    const res = await fetch(`${sbUrl}/rest/v1/newsletter_subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: sbKey,
        Authorization: `Bearer ${sbKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        email,
        name: name.trim(),
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        source: 'website',
      }),
    });

    if (res.status === 409 || res.status === 422) {
      return NextResponse.json({ alreadySubscribed: true });
    }
    if (!res.ok) {
      const body = await res.text();
      if (body.includes('23505')) return NextResponse.json({ alreadySubscribed: true });
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
