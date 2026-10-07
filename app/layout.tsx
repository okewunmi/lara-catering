// import type { Metadata } from "next";
// import { Fraunces, Work_Sans } from "next/font/google";
// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";
// import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-button";
// import "./globals.css";

// const fraunces = Fraunces({
//   variable: "--font-fraunces",
//   subsets: ["latin"],
//   axes: ["opsz"],
// });

// const workSans = Work_Sans({
//   variable: "--font-work-sans",
//   subsets: ["latin"],
// });

// const siteUrl = "https://laratreats.com.ng"; // TODO: replace with the real domain once live

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),
//   title: {
//     default: "Lara Cake & Treats — Catering, Cakes & Small Chops in Agege, Lagos",
//     template: "%s | Lara Cake & Treats",
//   },
//   description:
//     "Custom celebration cakes, small chops, buffet catering, and drinks for parties and events in Agege, Lagos. Book on WhatsApp in minutes.",
//   keywords: [
//     "catering Lagos",
//     "cake shop Agege",
//     "small chops Lagos",
//     "party jollof rice Lagos",
//     "birthday cake Agege",
//     "event catering Lagos",
//   ],
//   openGraph: {
//     title: "Lara Cake & Treats",
//     description:
//       "Custom celebration cakes, small chops, buffet catering, and drinks for parties and events in Agege, Lagos.",
//     url: siteUrl,
//     siteName: "Lara Cake & Treats",
//     locale: "en_NG",
//     type: "website",
//   },
// };

// const localBusinessJsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Bakery",
//   name: "Lara Cake & Treats",
//   image: `${siteUrl}/logo.png`,
//   telephone: "+2348060557045",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "No 32 Oladipo Oladimeji, Harclues, Ishaga",
//     addressLocality: "Agege",
//     addressRegion: "Lagos",
//     addressCountry: "NG",
//   },
//   servesCuisine: "Nigerian",
//   priceRange: "₦₦",
// };

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html
//       lang="en"
//       className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
//       data-scroll-behavior="smooth"
//       suppressHydrationWarning
//     >
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
//         />
//       </head>
//       <body className="min-h-full flex flex-col">
//         <Navbar />
//         <main className="flex-1">{children}</main>
//         <Footer />
//         <WhatsAppFloatingButton />
//       </body>
//     </html>
//   );
// }





import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-button";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/site";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["opsz"] });
const workSans = Work_Sans({ variable: "--font-work-sans", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#4b233b",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lara Cake & Treats | Cakes, Small Chops & Catering in Lagos",
    template: "%s | Lara Cake & Treats",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Lara Cake & Treats",
    "cakes in Agege Lagos",
    "birthday cakes Agege",
    "small chops Lagos",
    "event catering Lagos",
    "buffet catering Lagos",
    "Nigerian catering Agege",
  ],
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Lara Cake & Treats | Cakes, Small Chops & Catering in Lagos",
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 800, alt: "Lara Cake & Treats catering in Lagos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lara Cake & Treats | Cakes, Small Chops & Catering in Lagos",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: { icon: "/icon.png", shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${fraunces.variable} ${workSans.variable} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
