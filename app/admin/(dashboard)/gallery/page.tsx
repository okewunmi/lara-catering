import { createClient } from "@/lib/supabase/server";
import { GalleryUploadForm } from "@/components/admin/gallery-upload-form";
import { AdminGalleryList } from "@/components/admin/admin-gallery-list";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from("gallery_items")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <h1 className="font-display text-3xl text-plum">Gallery</h1>
      <p className="mt-2 text-sm text-plum/60">
        Upload new photos and tag them with a category so they show up in the right filter on the public gallery.
      </p>

      <div className="mt-8 rounded-2xl border border-plum/10 bg-ivory p-6">
        <GalleryUploadForm />
      </div>

      <div className="mt-10">
        <AdminGalleryList items={items ?? []} />
      </div>
    </div>
  );
}
