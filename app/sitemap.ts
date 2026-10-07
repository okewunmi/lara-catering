// import type { MetadataRoute } from "next";

// const siteUrl = "https://laratreats.com.ng"; // TODO: replace once the real domain is live

// export default function sitemap(): MetadataRoute.Sitemap {
//   const routes = ["", "/gallery", "/services", "/about", "/booking", "/contact", "/faq"];

//   return routes.map((route) => ({
//     url: `${siteUrl}${route}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: route === "" ? 1 : 0.7,
//   }));
// }

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/cakes",
    "/small-chops",
    "/event-catering",
    "/gallery",
    "/about",
    "/booking",
    "/contact",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
