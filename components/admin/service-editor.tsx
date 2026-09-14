"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

type ServiceRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  starting_price: number | null;
  category: string | null;
};

export function ServiceEditor({ services }: { services: ServiceRow[] }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  async function addService(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createClient();
    await supabase.from("services").insert({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      starting_price: price ? Number(price) : null,
    });
    setName("");
    setPrice("");
    router.refresh();
  }

  async function removeService(id: string) {
    const supabase = createClient();
    await supabase.from("services").delete().eq("id", id);
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <form onSubmit={addService} className="flex flex-wrap items-end gap-3">
        <label className="grid gap-2 text-sm">
          <span className="text-plum/70">Service name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-plum/15 bg-ivory px-3 py-2 text-sm"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-plum/70">Starting price (₦)</span>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-xl border border-plum/15 bg-ivory px-3 py-2 text-sm"
          />
        </label>
        <Button type="submit">Add service</Button>
      </form>

      <div className="divide-y divide-plum/10 rounded-2xl border border-plum/10 bg-ivory">
        {services.map((service) => (
          <div key={service.id} className="flex items-center justify-between p-4">
            <div>
              <p className="text-plum">{service.name}</p>
              {service.starting_price && (
                <p className="text-sm text-plum/50">
                  From ₦{service.starting_price.toLocaleString()}
                </p>
              )}
            </div>
            <button
              onClick={() => removeService(service.id)}
              className="text-sm text-plum/40 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        {services.length === 0 && (
          <p className="p-6 text-center text-sm text-plum/50">No services added yet.</p>
        )}
      </div>
    </div>
  );
}
