import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink, buildTelLink, BUSINESS_PHONE_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Lara Cake & Treats by WhatsApp, phone, or visit in Agege, Lagos.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-plum">Contact</h1>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-plum/10 bg-ivory p-6">
          <p className="text-sm uppercase tracking-wide text-plum/50">WhatsApp / Phone</p>
          <p className="mt-2 text-lg text-plum">{BUSINESS_PHONE_DISPLAY}</p>
          <div className="mt-4 flex gap-3">
            <Button href={buildWhatsAppLink()} variant="secondary">
              Chat now
            </Button>
            <Button href={buildTelLink()} variant="ghost">
              Call
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-plum/10 bg-ivory p-6">
          <p className="text-sm uppercase tracking-wide text-plum/50">Address</p>
          <p className="mt-2 text-plum/80">
            No 32 Oladipo Oladimeji, Harclues, Ishaga, Agege, Lagos
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-plum/10">
        <iframe
          title="Map to Lara Cake & Treats"
          src="https://www.google.com/maps?q=No+32+Oladipo+Oladimeji+Ishaga+Agege+Lagos&output=embed"
          width="100%"
          height="320"
          loading="lazy"
        />
      </div>
    </div>
  );
}
