"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError("That email or password doesn't match our records.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-6 py-16">
      <h1 className="font-display text-3xl text-plum">Admin login</h1>
      <p className="mt-2 text-sm text-plum/60">For Lara &amp; team only.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-plum/15 bg-ivory px-4 py-3 text-sm"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-plum/15 bg-ivory px-4 py-3 text-sm"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
