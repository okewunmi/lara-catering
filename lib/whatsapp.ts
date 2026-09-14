/**
 * Central place for all WhatsApp deep-link logic.
 * Every "book" / "enquire" action in the app should go through here
 * so the phone number and message format only live in one place.
 */

export const BUSINESS_PHONE_INTL = "2348060557045"; // no +, no leading 0, as wa.me expects
export const BUSINESS_PHONE_DISPLAY = "0806 055 7045";

export type BookingDetails = {
  name: string;
  service: string;
  eventDate?: string;
  guestCount?: string;
  message?: string;
};

/**
 * Builds a wa.me link with a pre-filled message.
 * Works on mobile (opens the WhatsApp app) and desktop (opens WhatsApp Web).
 */
export function buildWhatsAppLink(details: Partial<BookingDetails> = {}) {
  const lines = [
    `Hi Lara, I'd like to enquire about ${details.service || "your catering services"}.`,
  ];

  if (details.eventDate) lines.push(`Event date: ${details.eventDate}`);
  if (details.guestCount) lines.push(`Guests: ${details.guestCount}`);
  if (details.name) lines.push(`My name is ${details.name}.`);
  if (details.message) lines.push(details.message);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${BUSINESS_PHONE_INTL}?text=${text}`;
}

export function buildTelLink() {
  return `tel:+${BUSINESS_PHONE_INTL}`;
}
