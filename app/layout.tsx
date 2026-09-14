import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-button";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const siteUrl = "https://laracakeandtreats.com"; // TODO: replace with the real domain once live

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lara Cake & Treats — Catering, Cakes & Small Chops in Agege, Lagos",
    template: "%s | Lara Cake & Treats",
  },
  description:
    "Custom celebration cakes, small chops, buffet catering, and drinks for parties and events in Agege, Lagos. Book on WhatsApp in minutes.",
  keywords: [
    "catering Lagos",
    "cake shop Agege",
    "small chops Lagos",
    "party jollof rice Lagos",
    "birthday cake Agege",
    "event catering Lagos",
  ],
  openGraph: {
    title: "Lara Cake & Treats",
    description:
      "Custom celebration cakes, small chops, buffet catering, and drinks for parties and events in Agege, Lagos.",
    url: siteUrl,
    siteName: "Lara Cake & Treats",
    locale: "en_NG",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Lara Cake & Treats",
  image: `${siteUrl}/logo.svg`,
  telephone: "+2348060557045",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 32 Oladipo Oladimeji, Harclues, Ishaga",
    addressLocality: "Agege",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  servesCuisine: "Nigerian",
  priceRange: "₦₦",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
  lang="en"
  className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
  suppressHydrationWarning
>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
