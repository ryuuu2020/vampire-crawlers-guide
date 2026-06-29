import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://vampire-crawlers-guide.vercel.app';

function walk(dir: string, prefix: string): string[] {
  const routes: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Check if this directory has a page.tsx
      const pagePath = path.join(fullPath, 'page.tsx');
      const pagePathJs = path.join(fullPath, 'page.ts');

      const route = prefix === '' ? `/${entry.name}` : `${prefix}/${entry.name}`;

      if (fs.existsSync(pagePath) || fs.existsSync(pagePathJs)) {
        routes.push(route);
      }

      // Recurse into subdirectories
      routes.push(...walk(fullPath, route));
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app');
  const routes = walk(appDir, '');

  const allRoutes = ['', ...routes];
  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' || route === '/news' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/tier-list' || route === '/builds' || route === '/build-guide' ? 0.9 : 0.7,
  }));
}
