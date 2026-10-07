import { BUSINESS_ADDRESS, BUSINESS_PHONE, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/site";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Bakery", "FoodEstablishment"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  image: [DEFAULT_OG_IMAGE, `${SITE_URL}/gallery/paw-patrol-cake.jpg`, `${SITE_URL}/gallery/party-jollof-fish.jpg`],
  description: SITE_DESCRIPTION,
  telephone: BUSINESS_PHONE,
  priceRange: "₦₦",
  servesCuisine: ["Nigerian", "Bakery", "Small chops"],
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Place", name: "Agege" },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#business` },
};
