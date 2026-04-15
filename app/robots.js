import { BASE_URL } from '@/lib/data';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/karta-sajta', '/politika-konfidencialnosti', '/_next/', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
