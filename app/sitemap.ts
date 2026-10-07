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
  }));
}