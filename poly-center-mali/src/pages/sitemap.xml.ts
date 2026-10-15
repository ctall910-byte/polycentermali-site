import type { APIRoute } from 'astro';
import { nav } from '../data/site.js';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://polycenter-mali.vercel.app')).origin;
  const jour = new Date().toISOString().slice(0, 10);
  const urls = nav.map((n: { href: string }) => {
    const accueil = n.href === '/';
    return `  <url>\n    <loc>${base}${n.href}</loc>\n    <lastmod>${jour}</lastmod>\n    <priority>${accueil ? '1.0' : '0.8'}</priority>\n  </url>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
