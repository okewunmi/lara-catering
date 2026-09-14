import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [{ count: leadCount }, { count: galleryCount }, { count: newLeadCount }] =
    await Promise.all([
      supabase.from("leads").select("*", { count: "exact", head: true }),
      supabase.from("gallery_items").select("*", { count: "exact", head: true }),
      supabase.from("leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    ]);

  const stats = [
    { label: "Total enquiries", value: leadCount ?? 0 },
    { label: "New, unread", value: newLeadCount ?? 0 },
    { label: "Gallery photos", value: galleryCount ?? 0 },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl text-plum">Overview</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-plum/10 bg-ivory p-6">
            <p className="text-3xl font-display text-plum">{stat.value}</p>
            <p className="mt-1 text-sm text-plum/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
