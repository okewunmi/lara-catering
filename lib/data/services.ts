import { createClient } from "@/lib/supabase/server";
import { services as fallbackServices } from "@/lib/mock/data";
import { Service } from "@/lib/types";

/**
 * Reads real services/pricing from Supabase (managed via /admin/services).
 * Falls back to placeholder data if Supabase isn't configured yet or the
 * table is empty.
 */
export async function getServices(): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return fallbackServices;
    }

    return data.map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description ?? "",
      startingPrice: row.starting_price ?? undefined,
      category: row.category ?? "",
    }));
  } catch {
    return fallbackServices;
  }
}
