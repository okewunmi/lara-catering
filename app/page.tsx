import Image from "next/image";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/mock/data";
import { getGalleryItems } from "@/lib/data/gallery";
import { getServices } from "@/lib/data/services";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Cakes, Small Chops & Event Catering in Agege, Lagos",
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
};

export default async function Home() {
  const [galleryItems, services] = await Promise.all([getGalleryItems(), getServices()]);
  const featured = galleryItems.slice(0, 4);

  return (
    <>
      {/* Hero — asymmetric split, photo collage instead of a stock gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blush/60 blur-2xl md:h-96 md:w-96" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
          <div>
            <p className="text-sm text-amber-deep">Agege, Lagos</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-plum sm:text-5xl">
              Cakes, small chops & event catering in Agege, Lagos.
            </h1>
            <p className="mt-5 max-w-md text-plum/70">
              From custom birthday and wedding cakes to small chops, Nigerian buffet service, pastries and drinks, Lara Cake & Treats caters celebrations across Lagos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/booking" variant="primary">
                Book your event
              </Button>
              <Button href="/gallery" variant="ghost">
                See our work
              </Button>
            </div>
          </div>

          <div className="relative mx-auto grid h-80 w-full max-w-sm grid-cols-2 gap-3 sm:h-96">
            <div className="relative col-span-2 overflow-hidden rounded-2xl">
              <Image
                src={featured[2]?.imageUrl}
                alt={featured[2]?.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image src={featured[0]?.imageUrl} alt={featured[0]?.title} fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image src={featured[1]?.imageUrl} alt={featured[1]?.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

     
      
      <section className="border-y border-plum/10 bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-deep">Lagos event catering</p>
            <h2 className="mt-3 font-display text-3xl text-plum">Fresh food and celebration cakes made for Lagos events.</h2>
            <p className="mt-4 leading-relaxed text-plum/70">
              Based in Agege, Lara Cake &amp; Treats serves birthdays, weddings, owambe, office celebrations and other events across Lagos. Choose a custom cake, party small chops, buffet dishes, chilled drinks or a combination for your guest list.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/cakes" className="text-amber-deep underline-offset-4 hover:underline">Birthday &amp; celebration cakes</Link>
              <Link href="/small-chops" className="text-amber-deep underline-offset-4 hover:underline">Small chops packages</Link>
              <Link href="/event-catering" className="text-amber-deep underline-offset-4 hover:underline">Event catering in Lagos</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do — an editorial numbered listing, not icon cards or a wrapped text strip */}
<section className="border-y border-plum/10 bg-cream-deep">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <p className="text-sm uppercase tracking-[0.2em] text-amber-deep">What we do</p>

    <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <div key={service.id} className="border-t border-plum/10 pt-5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-base text-amber-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-display text-lg text-plum">{service.name}</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-plum/60">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl text-plum">Recent orders</h2>
          <Link href="/gallery" className="text-sm text-amber-deep">
            View full gallery
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featured.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden rounded-2xl bg-cream-deep">
              <Image src={item.imageUrl} alt={item.caption || item.title} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial — single editorial pull-quote, not a carousel of cards */}
      <section className="bg-blush-soft/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-display text-2xl leading-relaxed text-plum sm:text-3xl">
            “{testimonials[0].quote}”
          </p>
          <p className="mt-6 text-sm text-plum/60">
            {testimonials[0].customerName} — {testimonials[0].eventType}
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-plum">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl text-cream sm:text-3xl">
            Have a date in mind? Let&apos;s plan the menu.
          </h2>
          <Button href="/booking" variant="secondary">
            Start your booking
          </Button>
        </div>
      </section>
    </>
  );
}
