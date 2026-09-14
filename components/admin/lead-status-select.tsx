"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const statuses = ["new", "contacted", "booked", "closed"];

export function LeadStatusSelect({ id, status }: { id: string; status: string }) {
  const [value, setValue] = useState(status);

  async function handleChange(next: string) {
    setValue(next);
    const supabase = createClient();
    await supabase.from("leads").update({ status: next }).eq("id", id);
  }

  return (
    <select
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-full border border-plum/15 bg-cream px-3 py-1 text-xs capitalize"
    >
      {statuses.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
