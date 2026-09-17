/**
 * Post-build prerender: writes real HTML for each route so Googlebot
 * sees content without waiting on client JS (Google JS SEO guidance).
 */
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import puppeteer from 'puppeteer-core'

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')

const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/services/emergency-roadside',
  '/services/hydraulic-flatbed',
  '/services/luxury-sports',
  '/services/motorcycle-scooter',
  '/services/fleet-commercial',
  '/services/intercity',
]

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

function findChrome() {
  for (const p of chromeCandidates) {
    if (p && existsSync(p)) return p
  }
  throw new Error('Chrome/Edge not found. Set CHROME_PATH to your browser executable.')
}

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webp': 'image/webp',
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
      let filePath = join(dist, urlPath === '/' ? 'index.html' : urlPath)

      if (!existsSync(filePath) || (existsSync(filePath) && statSync(filePath).isDirectory())) {
        // SPA fallback while prerendering
        filePath = join(dist, 'index.html')
      }

      try {
        const data = readFileSync(filePath)
        res.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream' })
        res.end(data)
      } catch {
        res.writeHead(404)
        res.end('Not found')
      }
    })

    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address()
      resolve({ server, port })
    })
  })
}

function outPathForRoute(route) {
  if (route === '/') return join(dist, 'index.html')
  return join(dist, route.replace(/^\//, ''), 'index.html')
}

async function main() {
  if (!existsSync(join(dist, 'index.html'))) {
    throw new Error('dist/index.html missing — run vite build first')
  }

  const { server, port } = await startStaticServer()
  const executablePath = findChrome()
  console.log(`Prerender using: ${executablePath}`)
  console.log(`Serving dist on http://127.0.0.1:${port}`)

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
  })

  try {
    for (const route of routes) {
      const page = await browser.newPage()
      const url = `http://127.0.0.1:${port}${route}`
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
      await page.waitForSelector('#root header, #root main', { timeout: 20000 })
      // Let Helmet settle
      await new Promise((r) => setTimeout(r, 300))

      // React 19 + Helmet can leave duplicate title/meta — keep the last of each
      await page.evaluate(() => {
        const head = document.head
        const keepLast = (selector) => {
          const nodes = [...head.querySelectorAll(selector)]
          nodes.slice(0, -1).forEach((n) => n.remove())
        }
        keepLast('title')
        keepLast('meta[name="description"]')
        keepLast('link[rel="canonical"]')
        keepLast('meta[property="og:title"]')
        keepLast('meta[property="og:description"]')
        keepLast('meta[property="og:url"]')
        keepLast('meta[property="og:image"]')
        keepLast('meta[name="twitter:title"]')
        keepLast('meta[name="twitter:description"]')
        keepLast('meta[name="twitter:image"]')
      })

      const html = await page.content()
      const out = outPathForRoute(route)
      mkdirSync(dirname(out), { recursive: true })
      writeFileSync(out, html, 'utf8')
      console.log(`✓ ${route} → ${out.replace(root + '\\', '').replace(root + '/', '')}`)
      await page.close()
    }
  } finally {
    await browser.close()
    server.close()
  }

  console.log('Prerender complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
