import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Lara Cake & Treats, catering out of Agege, Lagos.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="font-display text-4xl text-plum">About Lara</h1>
        <p className="mt-5 text-plum/70">
          Lara Cake &amp; Treats started as home baking for family and friends
          in Agege and grew into full event catering — cakes, small chops,
          buffet, and drinks — for birthdays, weddings, and corporate events
          across Lagos.
        </p>
        <p className="mt-4 text-plum/70">
          Every order is made fresh, sized to your guest list, and delivered
          on time so you can focus on hosting instead of the kitchen.
        </p>
      </div>

      <div className="relative aspect-square overflow-hidden rounded-3xl bg-blush-soft">
        <Image src="/logo.svg" alt="Lara Cake & Treats logo" fill className="object-contain p-12" />
      </div>
    </div>
  );
}
