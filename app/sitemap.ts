import type { MetadataRoute } from "next";

const siteUrl = "https://laracakeandtreats.com"; // TODO: replace once the real domain is live

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/gallery", "/services", "/about", "/booking", "/contact", "/faq"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
