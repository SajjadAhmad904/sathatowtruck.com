import { PHONE, servicePages } from './data'

/** All public routes for prerender + sitemap (Google-crawlable HTML) */
export const staticRoutes = [
  '/',
  '/services',
  '/about',
  '/contact',
  ...servicePages.map((s) => `/services/${s.slug}`),
] as const

export function homeSeo() {
  return {
    title: `سطحة جدة ${PHONE} | سطحة هيدروليك جدة لنقل السيارات`,
    description: `سطحة جدة رقم ${PHONE} — خدمة سطحة هيدروليك على مدار 24 ساعة. نقل وسحب السيارات داخل جدة وبين المدن.`,
  }
}
