import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Event Catering in Lagos | Buffet & Nigerian Party Food",
  description: "Event catering in Lagos for birthdays, weddings, owambe and corporate celebrations. Buffet service, jollof rice, fried rice, grilled fish, chicken and drinks from Agege.",
  alternates: { canonical: `${SITE_URL}/event-catering` },
  openGraph: { title: "Event Catering in Lagos | Lara Cake & Treats", description: "Buffet and Nigerian party catering for Lagos events.", url: `${SITE_URL}/event-catering`, images: ["/gallery/party-jollof-fish.jpg"] },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: "Event Catering", provider: { "@id": `${SITE_URL}/#business` }, areaServed: { "@type": "City", name: "Lagos" }, description: "Buffet and Nigerian event catering for celebrations and corporate events in Lagos." };

export default function EventCateringPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-deep">Event catering in Lagos</p>
          <h1 className="mt-3 font-display text-4xl text-plum sm:text-5xl">Buffet and Nigerian party catering for your guests.</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-plum/70">From smoky party jollof and fried rice to grilled fish, chicken, swallow options, zobo and other drinks, Lara Cake &amp; Treats helps you plan food around your event and guest count.</p>
          <div className="mt-8"><Button href="/booking" variant="primary">Plan your event menu</Button></div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image src="/gallery/party-jollof-fish.jpg" alt="Party jollof rice and grilled fish prepared for an event in Lagos" fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </div>
      <section className="mt-20 grid gap-8 border-t border-plum/10 pt-12 md:grid-cols-2">
        <div><h2 className="font-display text-2xl text-plum">For birthdays, weddings &amp; owambe</h2><p className="mt-3 leading-relaxed text-plum/70">Tell us your date, location and expected guest count. We can help combine buffet dishes, small chops, cakes and drinks into one event order.</p></div>
        <div><h2 className="font-display text-2xl text-plum">For corporate events</h2><p className="mt-3 leading-relaxed text-plum/70">Office celebrations and staff events can be planned around practical portions, delivery timing and the menu your team prefers.</p></div>
      </section>
    </div>
  </>;
}
