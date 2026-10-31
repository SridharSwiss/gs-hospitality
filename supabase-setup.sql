-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New query)

-- page_views table
create table if not exists page_views (
  id bigserial primary key,
  pathname text not null,
  referrer text default '',
  country text default 'Unknown',
  device text default 'desktop',
  created_at timestamptz default now()
);

-- enquiries table
create table if not exists enquiries (
  id bigserial primary key,
  name text not null,
  company text,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

-- indexes for dashboard queries
create index if not exists page_views_created_at_idx on page_views(created_at);
create index if not exists page_views_pathname_idx on page_views(pathname);
create index if not exists enquiries_created_at_idx on enquiries(created_at);

-- Row Level Security: service role bypasses RLS by default,
-- but enable it so anon key cannot access the data
alter table page_views enable row level security;
alter table enquiries enable row level security;

-- Newsletter subscribers
create table if not exists newsletter_subscribers (
  id bigserial primary key,
  email text not null unique,
  name text not null,
  company text,
  phone text,
  subscribed_at timestamptz default now(),
  source text default 'website'
);
create index if not exists newsletter_email_idx on newsletter_subscribers(email);
alter table newsletter_subscribers enable row level security;
create policy "service role access newsletter" on newsletter_subscribers
  for all using (true) with check (true);
