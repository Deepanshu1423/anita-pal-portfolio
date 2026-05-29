export default function sitemap() {
  const baseUrl = "https://anita-pal-portfolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}