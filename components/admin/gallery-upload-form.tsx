"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

const categories = ["Cakes", "Small Chops", "Native Dishes", "Drinks", "Pastries", "Events"];

export function GalleryUploadForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    setStatus("uploading");
    const supabase = createClient();

    // 1. Upload the file to the "gallery" storage bucket
    const filePath = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(filePath, file);

    if (uploadError) {
      setStatus("error");
      return;
    }

    // 2. Save the reference + metadata in the gallery_items table
    const { error: insertError } = await supabase.from("gallery_items").insert({
      title,
      category,
      image_path: filePath,
    });

    if (insertError) {
      setStatus("error");
      return;
    }

    setTitle("");
    setFile(null);
    setStatus("idle");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-[2fr_1fr_1fr_auto] sm:items-end">
      <label className="grid gap-2 text-sm">
        <span className="text-plum/70">Title</span>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Two-tier birthday cake"
          className="rounded-xl border border-plum/15 bg-cream px-3 py-2 text-sm"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="text-plum/70">Category</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-plum/15 bg-cream px-3 py-2 text-sm"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm">
        <span className="text-plum/70">Photo</span>
        <input
          required
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="text-sm"
        />
      </label>

      <Button type="submit" disabled={status === "uploading"}>
        {status === "uploading" ? "Uploading..." : "Upload"}
      </Button>

      {status === "error" && (
        <p className="col-span-full text-sm text-red-600">
          Something went wrong uploading that photo — try again.
        </p>
      )}
    </form>
  );
}
