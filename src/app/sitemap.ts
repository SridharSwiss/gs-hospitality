import { MetadataRoute } from 'next';

const BASE = 'https://gs-hospitality.ch';
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE}/davos-2027`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/accommodations`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/contact`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/swiss-travel`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/tours`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
