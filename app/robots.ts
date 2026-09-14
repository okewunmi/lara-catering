import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://laracakeandtreats.com/sitemap.xml", // TODO: replace once the real domain is live
  };
}
