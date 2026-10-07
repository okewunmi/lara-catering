import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Birthday & Celebration Cakes in Agege, Lagos",
  description: "Custom birthday, wedding and anniversary cakes made in Agege, Lagos. Choose your design, size and theme, then book with Lara Cake & Treats.",
  alternates: { canonical: `${SITE_URL}/cakes` },
  openGraph: { title: "Birthday & Celebration Cakes in Agege, Lagos", description: "Custom celebration cakes from Lara Cake & Treats in Agege, Lagos.", url: `${SITE_URL}/cakes`, images: ["/gallery/paw-patrol-cake.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Celebration Cakes",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "City", name: "Lagos" },
  description: "Custom birthday, wedding and anniversary cakes made to order in Agege, Lagos.",
};

export default function CakesPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-deep">Cakes in Agege</p>
          <h1 className="mt-3 font-display text-4xl text-plum sm:text-5xl">Birthday and celebration cakes made for your event.</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-plum/70">Lara Cake &amp; Treats creates custom cakes for birthdays, weddings, anniversaries and themed celebrations. Share your date, guest count and preferred design and we will confirm what is possible.</p>
          <div className="mt-8"><Button href="/booking" variant="primary">Book a cake</Button></div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image src="/gallery/paw-patrol-cake.jpg" alt="Custom PAW Patrol birthday cake by Lara Cake & Treats in Lagos" fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </div>

      <section className="mt-20 grid gap-8 border-t border-plum/10 pt-12 md:grid-cols-3">
        <div><h2 className="font-display text-xl text-plum">Birthday cakes</h2><p className="mt-2 text-sm leading-relaxed text-plum/70">From children&apos;s themed cakes to elegant adult birthday designs, we can plan around your colours and celebration.</p></div>
        <div><h2 className="font-display text-xl text-plum">Wedding &amp; anniversary</h2><p className="mt-2 text-sm leading-relaxed text-plum/70">Ask about tiered cakes and designs suited to weddings, anniversaries and milestone celebrations.</p></div>
        <div><h2 className="font-display text-xl text-plum">Custom themes</h2><p className="mt-2 text-sm leading-relaxed text-plum/70">Send a reference image or describe the theme. We&apos;ll discuss the design, size and finishing details before confirming.</p></div>
      </section>
    </div>
  </>;
}
