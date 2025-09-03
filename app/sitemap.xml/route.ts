import { projects } from '@/lib/projects'

export async function GET() {
  const baseUrl = 'https://tharanithar-r.dev'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const allPages = [...staticPages, ...projectPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
