import { createClient } from "@/lib/supabase/server";
import { LeadStatusSelect } from "@/components/admin/lead-status-select";

export default async function AdminLeadsPage() {
  const supabase = await createClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-display text-3xl text-plum">Enquiries</h1>
      <p className="mt-2 text-sm text-plum/60">
        Every booking form submission, even if the customer didn&apos;t follow through on WhatsApp.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-plum/10 bg-ivory">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-plum/10 text-plum/50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Service</th>
              <th className="p-4">Event date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-plum/5">
            {leads?.map((lead) => (
              <tr key={lead.id}>
                <td className="p-4 text-plum">{lead.name}</td>
                <td className="p-4 text-plum/70">{lead.phone}</td>
                <td className="p-4 text-plum/70">{lead.service}</td>
                <td className="p-4 text-plum/70">{lead.event_date ?? "—"}</td>
                <td className="p-4">
                  <LeadStatusSelect id={lead.id} status={lead.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {(!leads || leads.length === 0) && (
          <p className="p-8 text-center text-plum/50">
            No enquiries yet — they&apos;ll show up here as soon as someone books.
          </p>
        )}
      </div>
    </div>
  );
}
