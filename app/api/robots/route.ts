
import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://sismopro.xyz/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Specific rules for different bots
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /api/

# Block access to sensitive areas
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
