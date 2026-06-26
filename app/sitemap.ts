import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vampire-crawlers-guide.vercel.app';
  const pages = [
    '',
    '/tier-list',
    '/builds',
    '/cards',
    '/evolutions',
    '/dungeons',
    '/beginners-guide',
    '/guides',
    '/faq',
    '/news',
    '/privacy',
    '/terms',
  ];
  const now = new Date();
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' || path === '/news' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : path === '/tier-list' || path === '/builds' ? 0.9 : 0.7,
  }));
}
