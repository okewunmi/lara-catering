import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/mock/data";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Cakes, small chops, buffet catering, drinks, pastries, and shawarma for events in Lagos — starting prices and booking.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl text-plum">Services &amp; pricing</h1>
      <p className="mt-3 max-w-xl text-plum/70">
        Starting prices below — final pricing depends on guest count, design,
        and delivery location. Message us on WhatsApp for an exact quote.
      </p>

      <div className="mt-12 divide-y divide-plum/10 border-t border-plum/10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <h2 className="font-display text-xl text-plum">{service.name}</h2>
              <p className="mt-2 text-sm text-plum/70">{service.description}</p>
              {service.startingPrice && (
                <p className="mt-2 text-sm text-amber-deep">
                  From ₦{service.startingPrice.toLocaleString()}
                </p>
              )}
            </div>
            <Button
              href={buildWhatsAppLink({ service: service.name })}
              variant="ghost"
              className="shrink-0"
            >
              Enquire
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
