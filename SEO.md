# SEO checklist (Google SEO Starter Guide)

Follows: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## Done in this site

- [x] Descriptive URLs (`/services/hydraulic-flatbed`)
- [x] Unique `<title>` + meta description per page
- [x] Canonical URLs
- [x] Mobile viewport + responsive layout
- [x] Clear headings (one H1 per page)
- [x] Internal links with descriptive Arabic anchor text
- [x] Image `alt` text
- [x] `robots.txt` + XML sitemaps (pages + images)
- [x] Structured data: TowingService, WebSite, FAQ, BreadcrumbList
- [x] No fake aggregate ratings (Google spam policy)
- [x] Prerendered HTML for all main routes (JS SEO)
- [x] Favicon / logo
- [x] Crawlable `noscript` fallback links

## After you deploy (you must do these)

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://sathatowtruck.com`
3. Verify (HTML tag, DNS, or file upload)
4. Submit sitemap: `https://sathatowtruck.com/sitemap.xml`
5. Use **URL Inspection** on the homepage and one service page
6. Request indexing if needed
7. Create / claim **Google Business Profile** for Jeddah (local pack)
8. Link GBP website to `https://sathatowtruck.com`

## Optional next steps

- Add Google Analytics 4
- Add call conversion tracking for Google Ads
- Earn real reviews, then add rating schema only with real data
- Build neighborhood landing pages over time (people-first content)

## Build command

```bash
npm run build
```

This runs TypeScript check → Vite build → sitemap generation is in public → prerender all routes into `dist/`.
