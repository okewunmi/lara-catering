import { createClient } from "@/lib/supabase/server";
import { galleryItems as fallbackItems } from "@/lib/mock/data";
import { GalleryItem } from "@/lib/types";

/**
 * Reads real gallery photos from Supabase (uploaded via /admin/gallery).
 * Falls back to the placeholder mock data if Supabase isn't configured yet
 * or the table is empty, so the site never shows a blank gallery.
 */
export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("gallery_items")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackItems;
    }

    return data.map((row) => ({
      id: row.id,
      title: row.title,
      category: row.category as GalleryItem["category"],
      imageUrl: supabase.storage.from("gallery").getPublicUrl(row.image_path).data.publicUrl,
      caption: row.caption ?? undefined,
    }));
  } catch {
    // No Supabase env vars configured yet, or a network hiccup — show the
    // placeholder content rather than a broken page.
    return fallbackItems;
  }
}
