"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Cakes",
  "Small Chops",
  "Native Dishes",
  "Drinks",
  "Pastries",
  "Events",
] as const;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === category
                ? "border-plum bg-plum text-ivory"
                : "border-plum/20 text-plum/70 hover:border-plum/50"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <figure
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-deep"
          >
            <Image
              src={item.imageUrl}
              alt={item.caption || item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/80 to-transparent p-3 text-xs text-ivory opacity-0 transition-opacity group-hover:opacity-100">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-plum/60">
          No photos in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
