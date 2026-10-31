export const WA_NUMBER = '41795489025';
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const EMAIL = 'hello@gs-hospitality.ch';
export const DOMAIN = 'gs-hospitality.ch';
export const SITE_URL = `https://${DOMAIN}`;
export const DAVOS_START = '2027-01-19T08:00:00+01:00';
export const DAVOS_END = '2027-01-23T18:00:00+01:00';
export const DAVOS_DATES = 'January 19–23, 2027';

export function waLink(msg: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Davos 2027', href: '/davos-2027' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Services', href: '/services' },
  { label: 'Swiss Travel', href: '/swiss-travel' },
  { label: 'Tours', href: '/tours' },
  { label: 'Contact', href: '/contact' },
] as const;
