import { supabase } from '@/lib/supabase';
import ComposeTab from './ComposeTab';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: { key?: string; tab?: string };
}

export default async function AdminPage({ searchParams }: Props) {
  const adminKey = process.env.ADMIN_PASSWORD;
  const isAuth = !!adminKey && searchParams.key === adminKey;
  const tab = searchParams.tab || 'overview';

  const card: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197,160,89,0.15)', borderRadius: 16, padding: 24 };
  const lbl: React.CSSProperties = { color: 'rgba(240,237,232,0.5)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 };

  if (!isAuth) {
    return (
      <div style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197,160,89,0.2)', borderRadius: 16, padding: '48px', width: '100%', maxWidth: 400, textAlign: 'center' }}>
          <p style={{ color: '#C5A059', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>GS Hospitality</p>
          <h1 style={{ color: '#F0EDE8', fontFamily: 'Georgia, serif', fontSize: 24, marginBottom: 24 }}>Admin Access</h1>
          <form method="GET" action="/admin">
            <input type="password" name="key" placeholder="Enter admin password" required
              style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(197,160,89,0.3)', color: '#F0EDE8', fontSize: 14, marginBottom: 16, boxSizing: 'border-box' }} />
            <button type="submit"
              style={{ width: '100%', padding: '12px', borderRadius: 10, background: 'linear-gradient(135deg, #A8893D, #C5A059, #D4B870)', color: '#050508', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Fetch data based on active tab
  const now = new Date();
  const day7ago = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const day30ago = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  let overviewData: any = null;
  let campaigns: any[] = [];

  if (tab === 'overview') {
    const [tvR, v7R, tpR, bcR, bdR, enqR, subCR, subR] = await Promise.all([
      supabase.from('page_views').select('*', { count: 'exact', head: true }),
      supabase.from('page_views').select('*', { count: 'exact', head: true }).gte('created_at', day7ago),
      supabase.from('page_views').select('pathname').gte('created_at', day30ago),
      supabase.from('page_views').select('country').gte('created_at', day30ago),
      supabase.from('page_views').select('device').gte('created_at', day30ago),
      supabase.from('enquiries').select('*').order('created_at', { ascending: false }).limit(20),
      supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
      supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false }).limit(20),
    ]);

    const pageCount: Record<string, number> = {};
    (tpR.data || []).forEach((r: any) => { pageCount[r.pathname] = (pageCount[r.pathname] || 0) + 1; });
    const topPagesArr = Object.entries(pageCount).sort((a, b) => b[1] - a[1]).slice(0, 8);

    const countryCount: Record<string, number> = {};
    (bcR.data || []).forEach((r: any) => { countryCount[r.country] = (countryCount[r.country] || 0) + 1; });
    const topCountries = Object.entries(countryCount).sort((a, b) => b[1] - a[1]).slice(0, 8);

    const deviceCount: Record<string, number> = { desktop: 0, mobile: 0, tablet: 0 };
    (bdR.data || []).forEach((r: any) => { if (r.device in deviceCount) deviceCount[r.device]++; });

    overviewData = {
      totalCount: tvR.count ?? 0,
      week7Count: v7R.count ?? 0,
      topPagesArr,
      topCountries,
      deviceCount,
      totalDevices: Object.values(deviceCount).reduce((a, b) => a + b, 0),
      enquiries: enqR.data || [],
      subscriberCount: subCR.count ?? 0,
      subscribers: subR.data || [],
    };
  }

  if (tab === 'campaigns') {
    const { data } = await supabase.from('email_campaigns').select('*').order('sent_at', { ascending: false }).limit(50);
    campaigns = data || [];
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'compose', label: 'Compose & Send' },
    { id: 'campaigns', label: 'Campaign History' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#050508', color: '#F0EDE8', fontFamily: 'Inter, sans-serif', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ color: '#C5A059', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>GS Hospitality</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 28, marginTop: 4, marginBottom: 4 }}>Admin Dashboard</h1>
          <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 13, margin: 0 }}>{now.toUTCString()}</p>
        </div>

        {/* Tab nav */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 0 }}>
          {tabs.map(t => (
            <a key={t.id} href={`/admin?key=${searchParams.key}&tab=${t.id}`}
              style={{
                padding: '10px 20px', borderRadius: '10px 10px 0 0', fontSize: 14, textDecoration: 'none', fontWeight: tab === t.id ? 600 : 400, transition: 'all 0.2s',
                background: tab === t.id ? 'rgba(197,160,89,0.12)' : 'transparent',
                color: tab === t.id ? '#C5A059' : 'rgba(240,237,232,0.55)',
                borderBottom: tab === t.id ? '2px solid #C5A059' : '2px solid transparent',
              }}>{t.label}</a>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {tab === 'overview' && overviewData && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Total Visits', value: overviewData.totalCount },
                { label: 'Visits (7d)', value: overviewData.week7Count },
                { label: 'Enquiries', value: overviewData.enquiries.length },
                { label: 'Subscribers', value: overviewData.subscriberCount },
                { label: 'Top Country', value: overviewData.topCountries[0]?.[0] ?? '—' },
              ].map(({ label: l, value }) => (
                <div key={l} style={card}>
                  <p style={lbl}>{l}</p>
                  <p style={{ fontSize: 30, fontWeight: 700, color: '#C5A059', lineHeight: 1, margin: 0 }}>{String(value)}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div style={card}>
                <p style={{ ...lbl, marginBottom: 16 }}>Top Pages (30d)</p>
                {overviewData.topPagesArr.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 13 }}>No data yet.</p>}
                {overviewData.topPagesArr.map(([path, count]: [string, number]) => (
                  <div key={path} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: 'rgba(240,237,232,0.75)' }}>{path || '/'}</span>
                    <span style={{ fontSize: 13, color: '#C5A059', fontWeight: 600 }}>{count}</span>
                  </div>
                ))}
              </div>
              <div style={card}>
                <p style={{ ...lbl, marginBottom: 16 }}>Top Countries (30d)</p>
                {overviewData.topCountries.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 13 }}>No data yet.</p>}
                {overviewData.topCountries.map(([country, count]: [string, number]) => (
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
                {Object.entries(overviewData.deviceCount).map(([d, n]: [string, any]) => (
                  <div key={d}>
                    <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(240,237,232,0.5)', marginBottom: 4 }}>{d}</p>
                    <p style={{ fontSize: 24, fontWeight: 700, color: '#C5A059', margin: 0 }}>{overviewData.totalDevices ? Math.round((n / overviewData.totalDevices) * 100) : 0}%</p>
                    <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.4)', margin: 0 }}>{n} visits</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card, marginBottom: 24 }}>
              <p style={{ ...lbl, marginBottom: 16 }}>Recent Enquiries</p>
              {overviewData.enquiries.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No enquiries yet.</p>}
              {overviewData.enquiries.length > 0 && (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr>{['Date', 'Name', 'Company', 'Email', 'Subject', 'Message'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'rgba(240,237,232,0.45)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {overviewData.enquiries.map((e: any) => (
                        <tr key={e.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.5)', whiteSpace: 'nowrap' }}>{new Date(e.created_at).toLocaleDateString()}</td>
                          <td style={{ padding: '10px 12px', color: '#F0EDE8', fontWeight: 500 }}>{e.name}</td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)' }}>{e.company || '—'}</td>
                          <td style={{ padding: '10px 12px' }}><a href={`mailto:${e.email}`} style={{ color: '#C5A059', textDecoration: 'none' }}>{e.email}</a></td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)' }}>{e.subject}</td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.55)', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div style={card}>
              <p style={{ ...lbl, marginBottom: 16 }}>Newsletter Subscribers</p>
              {overviewData.subscribers.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No subscribers yet.</p>}
              {overviewData.subscribers.length > 0 && (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr>{['Date', 'Name', 'Email', 'Company', 'Phone', 'Source'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'rgba(240,237,232,0.45)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {overviewData.subscribers.map((s: any) => (
                        <tr key={s.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.5)', whiteSpace: 'nowrap' }}>{new Date(s.subscribed_at).toLocaleDateString()}</td>
                          <td style={{ padding: '10px 12px', color: '#F0EDE8', fontWeight: 500 }}>{s.name}</td>
                          <td style={{ padding: '10px 12px' }}><a href={`mailto:${s.email}`} style={{ color: '#C5A059', textDecoration: 'none' }}>{s.email}</a></td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)' }}>{s.company || '—'}</td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)' }}>{s.phone || '—'}</td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.45)' }}>{s.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {/* COMPOSE TAB */}
        {tab === 'compose' && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, margin: '0 0 6px' }}>Compose & Send</h2>
              <p style={{ color: 'rgba(240,237,232,0.45)', fontSize: 14, margin: 0 }}>Write your campaign, choose your audience, and send — emails are delivered via Resend and logged below.</p>
            </div>
            <ComposeTab adminKey={searchParams.key || ''} />
          </div>
        )}

        {/* CAMPAIGNS TAB */}
        {tab === 'campaigns' && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, margin: '0 0 6px' }}>Campaign History</h2>
              <p style={{ color: 'rgba(240,237,232,0.45)', fontSize: 14, margin: 0 }}>All campaigns sent from this dashboard.</p>
            </div>
            <div style={card}>
              {campaigns.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No campaigns sent yet. Go to Compose &amp; Send to send your first campaign.</p>}
              {campaigns.length > 0 && (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr>{['Date', 'Type', 'Subject', 'Audience', 'Recipients', 'Status'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'rgba(240,237,232,0.45)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {campaigns.map((c: any) => (
                        <tr key={c.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.5)', whiteSpace: 'nowrap' }}>{new Date(c.sent_at).toLocaleDateString()}</td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)', textTransform: 'capitalize' }}>{c.campaign_type}</td>
                          <td style={{ padding: '10px 12px', color: '#F0EDE8', fontWeight: 500, maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.subject}</td>
                          <td style={{ padding: '10px 12px', color: 'rgba(240,237,232,0.65)', textTransform: 'capitalize' }}>{c.audience}</td>
                          <td style={{ padding: '10px 12px', color: '#C5A059', fontWeight: 600 }}>{c.recipient_count}</td>
                          <td style={{ padding: '10px 12px' }}>
                            <span style={{ padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, background: 'rgba(37,211,102,0.12)', color: '#25D366', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
