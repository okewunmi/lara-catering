import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Small Chops Packages in Agege & Lagos",
  description: "Party small chops including puff-puff, spring rolls and samosa for birthdays, weddings, office events and celebrations across Lagos.",
  alternates: { canonical: `${SITE_URL}/small-chops` },
  openGraph: { title: "Small Chops Packages in Agege & Lagos", description: "Party small chops prepared for events across Lagos by Lara Cake & Treats.", url: `${SITE_URL}/small-chops`, images: ["/gallery/small-chops-cups.jpg"] },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "Small Chops Packages", provider: { "@id": `${SITE_URL}/#business` }, areaServed: { "@type": "City", name: "Lagos" }, description: "Small chops packages for parties and events in Lagos." };

export default function SmallChopsPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-deep">Small chops in Lagos</p>
          <h1 className="mt-3 font-display text-4xl text-plum sm:text-5xl">Party small chops for birthdays, weddings and events.</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-plum/70">Order popular Nigerian party favourites including puff-puff, spring rolls and samosa. Packages can be planned around your guest count and event needs.</p>
          <div className="mt-8"><Button href="/booking" variant="primary">Request a small chops quote</Button></div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image src="/gallery/small-chops-cups.jpg" alt="Assorted small chops prepared for a Lagos event by Lara Cake & Treats" fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </div>
      <section className="mt-20 border-t border-plum/10 pt-12">
        <h2 className="font-display text-3xl text-plum">What can be included?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div><h3 className="font-display text-lg text-plum">Puff-puff</h3><p className="mt-2 text-sm text-plum/70">Soft, freshly prepared puff-puff for sharing at parties and gatherings.</p></div>
          <div><h3 className="font-display text-lg text-plum">Spring rolls</h3><p className="mt-2 text-sm text-plum/70">Crispy spring rolls suitable for cocktail-style service and party trays.</p></div>
          <div><h3 className="font-display text-lg text-plum">Samosa &amp; more</h3><p className="mt-2 text-sm text-plum/70">Mix your favourites and ask about a package for your guest count.</p></div>
        </div>
      </section>
    </div>
  </>;
}
