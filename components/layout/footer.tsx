import Link from "next/link";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-plum text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Lara Cake &amp; Treats</p>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            Expert meals, buffet service, and local catering for every kind of
            celebration in Lagos.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-cream/50">Visit or call</p>
          <p className="mt-3 text-sm text-cream/80">
            No 32 Oladipo Oladimeji, Harclues, Ishaga, Agege, Lagos
          </p>
          <p className="mt-2 text-sm text-cream/80">{BUSINESS_PHONE_DISPLAY}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-cream/50">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-cream/80">
            <Link href="/gallery">Gallery</Link>
            <Link href="/services">Services &amp; pricing</Link>
            <Link href="/booking">Book an event</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Lara Cake &amp; Treats. All rights reserved.
      </div>
    </footer>
  );
}
