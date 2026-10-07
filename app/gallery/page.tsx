import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo/site";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { getGalleryItems } from "@/lib/data/gallery";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/gallery` },
  title: "Gallery",
  description:
    "Browse cakes, small chops, buffet dishes, and drinks from past events by Lara Cake & Treats in Agege, Lagos.",
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl text-plum">Gallery</h1>
      <p className="mt-3 max-w-xl text-plum/70">
        A look at cakes, small chops, and buffet spreads from recent events.
        Tap any photo you like and mention it when you book.
      </p>

      <div className="mt-10">
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}
