export default function robots() {
  const baseUrl = "https://www.autodiag44.com"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
