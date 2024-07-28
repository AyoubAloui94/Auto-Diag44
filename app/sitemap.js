export default async function sitemap() {
  const baseUrl = "https://www.autodiag44.com"

  const pages = ["", "about", "contact", "services", "legal/privacy-policy", "legal/terms-of-service"] // Add your page paths here

  const urls = pages.map(page => ({
    url: `${baseUrl}${page ? `/${page}` : ""}`,
    lastModified: new Date().toISOString()
  }))

  return urls
}
