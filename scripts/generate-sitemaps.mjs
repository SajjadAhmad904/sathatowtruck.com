/**
 * Generates sitemap.xml + sitemap-images.xml into public/ (copied to dist on build)
 */
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const SITE = 'https://sathatowtruck.com'
const today = new Date().toISOString().slice(0, 10)

const pages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/services', priority: '0.9', changefreq: 'weekly' },
  { loc: '/services/emergency-roadside', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/hydraulic-flatbed', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/luxury-sports', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/motorcycle-scooter', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/fleet-commercial', priority: '0.8', changefreq: 'monthly' },
  { loc: '/services/intercity', priority: '0.8', changefreq: 'monthly' },
  { loc: '/about', priority: '0.7', changefreq: 'monthly' },
  { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
]

const images = [
  { path: '/images/logo.png', title: 'شعار سطحة جدة' },
  { path: '/images/satha-1.png', title: 'سطحة جدة لنقل السيارات' },
  { path: '/images/satha-2.png', title: 'سطحة جدة تنقل حافلة' },
  { path: '/images/satha-3.png', title: 'سطحة جدة وقت الغروب' },
  { path: '/images/satha-4.png', title: 'سطحة هيدروليك جدة' },
  { path: '/images/gallery-1.jpg', title: 'سطحة هيدروليك على الطريق' },
  { path: '/images/gallery-2.jpg', title: 'تحميل سيارة على سطحة' },
  { path: '/images/gallery-3.jpg', title: 'سيارة على سطحة هيدروليك' },
  { path: '/images/gallery-4.jpg', title: 'نقل سيارة فل بد' },
  { path: '/images/gallery-5.jpg', title: 'سطحة جدة وقت الغروب' },
  { path: '/images/gallery-6.jpg', title: 'نقل بين المدن من جدة' },
]

const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.loc === '/' ? '/' : p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE}/</loc>
${images
  .map(
    (img) => `    <image:image>
      <image:loc>${SITE}${img.path}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`,
  )
  .join('\n')}
  </url>
</urlset>
`

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE}/sitemap-images.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`

writeFileSync(join(publicDir, 'sitemap-pages.xml'), urlset, 'utf8')
writeFileSync(join(publicDir, 'sitemap-images.xml'), imageSitemap, 'utf8')
writeFileSync(join(publicDir, 'sitemap.xml'), index, 'utf8')
console.log('Sitemaps written to public/')
