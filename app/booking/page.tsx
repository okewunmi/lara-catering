import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/booking-form";

export const metadata: Metadata = {
  title: "Book an Event",
  description:
    "Tell us your event date, guest count, and what you need — we'll pick it up on WhatsApp.",
};

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-4xl text-plum">Book your event</h1>
      <p className="mt-3 text-plum/70">
        Fill in a few details and we&apos;ll continue the conversation on
        WhatsApp — no account needed.
      </p>

      <div className="mt-10 rounded-3xl border border-plum/10 bg-ivory p-8">
        <BookingForm />
      </div>
    </div>
  );
}
