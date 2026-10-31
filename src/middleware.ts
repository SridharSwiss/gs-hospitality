import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/|assets/).*)'],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (url && key) {
    const pathname = req.nextUrl.pathname;
    const referrer = req.headers.get('referer') || '';
    const ua = req.headers.get('user-agent') || '';
    const country =
      req.headers.get('x-vercel-ip-country') ||
      req.headers.get('cf-ipcountry') ||
      'Unknown';
    const device = /mobile|android|iphone|ipad/i.test(ua)
      ? 'mobile'
      : /tablet/i.test(ua)
      ? 'tablet'
      : 'desktop';
    const isBot =
      /bot|crawl|spider|slurp|googlebot|bingbot|yandex|duckduck|baidu|semrush|ahref/i.test(ua);

    if (!isBot) {
      fetch(`${url}/rest/v1/page_views`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: key,
          Authorization: `Bearer ${key}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ pathname, referrer, country, device }),
      }).catch(() => {});
    }
  }

  return res;
}
