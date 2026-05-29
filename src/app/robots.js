export default function robots() {
  const baseUrl = "https://anita-pal-portfolio.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}