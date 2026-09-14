import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Delivery areas, minimum order size, lead time, and payment for Lara Cake & Treats.",
};

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For cakes, at least 3-5 days notice. For full buffet or large small-chops orders, 1-2 weeks gives the best result, though we do accommodate urgent requests where possible.",
  },
  {
    q: "Do you deliver?",
    a: "Yes, within Lagos. Delivery fees depend on distance from Agege — this is confirmed when you book on WhatsApp.",
  },
  {
    q: "Is there a minimum order?",
    a: "Small chops and buffet orders have a minimum guest count for delivery; cakes and pastries can be ordered in smaller quantities. Ask on WhatsApp for specifics.",
  },
  {
    q: "How do I pay?",
    a: "Bank transfer, with a deposit to confirm your booking and the balance before or on delivery — details are shared once your order is confirmed.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-plum">Frequently asked questions</h1>

      <div className="mt-10 divide-y divide-plum/10 border-t border-plum/10">
        {faqs.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="cursor-pointer list-none font-display text-lg text-plum">
              {item.q}
            </summary>
            <p className="mt-3 text-plum/70">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
