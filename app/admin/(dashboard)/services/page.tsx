import { createClient } from "@/lib/supabase/server";
import { ServiceEditor } from "@/components/admin/service-editor";

export default async function AdminServicesPage() {
  const supabase = await createClient();
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <h1 className="font-display text-3xl text-plum">Services &amp; pricing</h1>
      <p className="mt-2 text-sm text-plum/60">
        Keep this in sync with what you actually offer — it feeds the public services page directly.
      </p>

      <div className="mt-8">
        <ServiceEditor services={services ?? []} />
      </div>
    </div>
  );
}
