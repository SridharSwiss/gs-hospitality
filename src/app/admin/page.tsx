import { supabase } from '@/lib/supabase';

interface Props {
  searchParams: { key?: string };
}

export const dynamic = 'force-dynamic';

export default async function AdminPage({ searchParams }: Props) {
  const adminKey = process.env.ADMIN_PASSWORD;
  const isAuth = !!adminKey && searchParams.key === adminKey;

  if (!isAuth) {
    return (
      <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197,160,89,0.2)', borderRadius: 16, padding: '48px', width: '100%', maxWidth: 400, textAlign: 'center' }}>
          <p style={{ color: '#C5A059', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>GS Hospitality</p>
          <h1 style={{ color: '#F0EDE8', fontFamily: 'Georgia, serif', fontSize: 24, marginBottom: 24 }}>Admin Access</h1>
          <form method="GET" action="/admin">
            <input
              type="password"
              name="key"
              placeholder="Enter admin password"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(197,160,89,0.3)', color: '#F0EDE8', fontSize: 14, marginBottom: 16, boxSizing: 'border-box' }}
            />
            <button
              type="submit"
              style={{ width: '100%', padding: '12px', borderRadius: 10, background: 'linear-gradient(135deg, #A8893D, #C5A059, #D4B870)', color: '#050508', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}
            >
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  const now = new Date();
  const day7ago = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const day30ago = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const [
    totalViewsRes,
    views7dRes,
    topPagesRes,
    byCountryRes,
    byDeviceRes,
    enquiriesRes,
  ] = await Promise.all([
    supabase.from('page_views').select('*', { count: 'exact', head: true }),
    supabase.from('page_views').select('*', { count: 'exact', head: true }).gte('created_at', day7ago),
    supabase.from('page_views').select('pathname').gte('created_at', day30ago),
    supabase.from('page_views').select('country').gte('created_at', day30ago),
    supabase.from('page_views').select('device').gte('created_at', day30ago),
    supabase.from('enquiries').select('*').order('created_at', { ascending: false }).limit(20),
  ]);

  const totalCount = totalViewsRes.count ?? 0;
  const week7Count = views7dRes.count ?? 0;

  const pageCount: Record<string, number> = {};
  (topPagesRes.data || []).forEach((r) => {
    pageCount[r.pathname] = (pageCount[r.pathname] || 0) + 1;
  });
  const topPagesArr = Object.entries(pageCount).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const countryCount: Record<string, number> = {};
  (byCountryRes.data || []).forEach((r) => {
    countryCount[r.country] = (countryCount[r.country] || 0) + 1;
  });
  const topCountries = Object.entries(countryCount).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const deviceCount: Record<string, number> = { desktop: 0, mobile: 0, tablet: 0 };
  (byDeviceRes.data || []).forEach((r) => {
    if (r.device in deviceCount) deviceCount[r.device]++;
  });
  const totalDevices = Object.values(deviceCount).reduce((a, b) => a + b, 0);
  const enquiries = enquiriesRes.data || [];

  const card: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197,160,89,0.15)', borderRadius: 16, padding: 24 };
  const lbl: React.CSSProperties = { color: 'rgba(240,237,232,0.5)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 };

  return (
    <div style={{ minHeight: '100vh', background: '#050508', color: '#F0EDE8', fontFamily: 'Inter, sans-serif', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ color: '#C5A059', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>GS Hospitality</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 28, marginTop: 4, marginBottom: 4 }}>Analytics Dashboard</h1>
          <p style={{ color: 'rgba(240,237,232,0.45)', fontSize: 13, margin: 0 }}>Last updated: {now.toUTCString()}</p>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Total Visits', value: totalCount },
            { label: 'Visits (7 days)', value: week7Count },
            { label: 'Enquiries', value: enquiries.length },
            { label: 'Top Country', value: topCountries[0]?.[0] ?? '—' },
          ].map(({ label: l, value }) => (
            <div key={l} style={card}>
              <p style={lbl}>{l}</p>
              <p style={{ fontSize: 32, fontWeight: 700, color: '#C5A059', lineHeight: 1, margin: 0 }}>{String(value)}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={card}>
            <p style={{ ...lbl, marginBottom: 16 }}>Top Pages (30d)</p>
            {topPagesArr.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 13 }}>No data yet.</p>}
            {topPagesArr.map(([path, count]) => (
              <div key={path} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: 'rgba(240,237,232,0.75)' }}>{path || '/'}</span>
                <span style={{ fontSize: 13, color: '#C5A059', fontWeight: 600 }}>{count}</span>
              </div>
            ))}
          </div>
          <div style={card}>
            <p style={{ ...lbl, marginBottom: 16 }}>Top Countries (30d)</p>
            {topCountries.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 13 }}>No data yet.</p>}
            {topCountries.map(([country, count]) => (
              <div key={country} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: 'rgba(240,237,232,0.75)' }}>{country}</span>
                <span style={{ fontSize: 13, color: '#C5A059', fontWeight: 600 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...card, marginBottom: 24 }}>
          <p style={{ ...lbl, marginBottom: 16 }}>Device Split (30d)</p>
          <div style={{ display: 'flex', gap: 32 }}>
            {Object.entries(deviceCount).map(([d, n]) => (
              <div key={d}>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(240,237,232,0.5)', marginBottom: 4 }}>{d}</p>
                <p style={{ fontSize: 24, fontWeight: 700, color: '#C5A059', margin: 0 }}>
                  {totalDevices ? Math.round((n / totalDevices) * 100) : 0}%
                </p>
                <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.4)', margin: 0 }}>{n} visits</p>
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <p style={{ ...lbl, marginBottom: 16 }}>Recent Enquiries</p>
          {enquiries.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No enquiries yet.</p>}
          {enquiries.length > 0 && (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr>
                    {['Date', 'Name', 'Company', 'Email', 'Subject', 'Message'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'rgba(240,237,232,0.45)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((e) => (
                    <tr key={e.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.5)', whiteSpace: 'nowrap' }}>{new Date(e.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: '10px 12px', color: '#F0EDE8', fontWeight: 500 }}>{e.name}</td>
                      <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)' }}>{e.company || '—'}</td>
                      <td style={{ padding: '10px 12px' }}><a href={`mailto:${e.email}`} style={{ color: '#C5A059', textDecoration: 'none' }}>{e.email}</a></td>
                      <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)' }}>{e.subject}</td>
                      <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.55)', maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
