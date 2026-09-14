"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type GalleryRow = {
  id: string;
  title: string;
  category: string;
  image_path: string;
};

export function AdminGalleryList({ items }: { items: GalleryRow[] }) {
  const router = useRouter();
  const supabase = createClient();

  async function handleDelete(item: GalleryRow) {
    if (!confirm(`Remove "${item.title}" from the gallery?`)) return;
    await supabase.storage.from("gallery").remove([item.image_path]);
    await supabase.from("gallery_items").delete().eq("id", item.id);
    router.refresh();
  }

  function publicUrl(path: string) {
    return supabase.storage.from("gallery").getPublicUrl(path).data.publicUrl;
  }

  if (items.length === 0) {
    return <p className="text-sm text-plum/50">No photos uploaded yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {items.map((item) => (
        <div key={item.id} className="group relative aspect-square overflow-hidden rounded-xl bg-cream-deep">
          {/* <Image src={publicUrl(item.image_path)} alt={item.title} fill className="object-cover" /> */}
          <Image
  src={publicUrl(item.image_path)}
  alt={item.title}
  fill
  className="object-cover"
  sizes="(min-width: 768px) 16vw, (min-width: 640px) 25vw, 50vw"
/>
          <button
            onClick={() => handleDelete(item)}
            className="absolute right-2 top-2 rounded-full bg-plum/80 px-2 py-1 text-xs text-ivory opacity-0 transition-opacity group-hover:opacity-100"
          >
            Remove
          </button>
          <p className="absolute inset-x-0 bottom-0 truncate bg-plum/70 px-2 py-1 text-xs text-ivory">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
