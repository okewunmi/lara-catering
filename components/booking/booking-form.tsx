"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { createClient } from "@/lib/supabase/client";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Choose a service"),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "Custom Celebration Cake",
  "Small Chops Package",
  "Buffet & Native Dishes",
  "Zobo & Drinks",
  "Pastries",
  "Shawarma",
  "Something else",
];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");

    // Log the lead to Supabase so nothing is lost even if the
    // customer doesn't follow through on WhatsApp. Safe to fail silently —
    // the WhatsApp handoff below is the part that must always work.
    try {
      const supabase = createClient();
      await supabase.from("leads").insert({
        name: values.name,
        phone: values.phone,
        service: values.service,
        event_date: values.eventDate || null,
        guest_count: values.guestCount ? Number(values.guestCount) : null,
        message: values.message || null,
      });
    } catch {
      // Non-blocking — the customer's booking should not fail because logging did.
    }

    const link = buildWhatsAppLink({
      name: values.name,
      service: values.service,
      eventDate: values.eventDate,
      guestCount: values.guestCount,
      message: values.message,
    });

    window.open(link, "_blank", "noopener,noreferrer");
    setStatus("idle");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} placeholder="e.g. Funmi Adebayo" />
        </Field>

        <Field label="Phone number" error={errors.phone?.message}>
          <input {...register("phone")} className={inputClass} placeholder="080..." />
        </Field>
      </div>

      <Field label="What do you need?" error={errors.service?.message}>
        <select {...register("service")} className={inputClass} defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Event date (optional)">
          <input type="date" {...register("eventDate")} className={inputClass} />
        </Field>

        <Field label="Number of guests (optional)">
          <input {...register("guestCount")} className={inputClass} placeholder="e.g. 50" />
        </Field>
      </div>

      <Field label="Anything else we should know? (optional)">
        <textarea
          {...register("message")}
          rows={4}
          className={inputClass}
          placeholder="Theme, allergies, delivery location..."
        />
      </Field>

      <Button type="submit" variant="secondary" disabled={status === "submitting"}>
        {status === "submitting" ? "Opening WhatsApp..." : "Continue on WhatsApp"}
      </Button>

      <p className="text-xs text-plum/60">
        This opens WhatsApp with your details pre-filled — just hit send to reach Lara directly.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-plum/15 bg-ivory px-4 py-3 text-sm text-plum placeholder:text-plum/40 focus-visible:border-amber-deep";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-plum/80">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
