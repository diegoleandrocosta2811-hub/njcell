"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LOGO_HORIZONTAL, LOGO_ALT } from "@/lib/company";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = (await response.json()) as { error?: string };

    if (!response.ok) {
      setError(data.error ?? "Não foi possível entrar.");
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-nj-black px-4 py-16">
      <div className="card-dark w-full max-w-md p-8">
        <Image
          src={LOGO_HORIZONTAL}
          alt={LOGO_ALT}
          width={280}
          height={187}
          className="mx-auto mb-6 h-16 w-auto"
        />
        <h1 className="mb-2 text-center text-2xl font-bold text-white">Painel de rastreamento</h1>
        <p className="mb-8 text-sm leading-relaxed text-gray-300">
          Configure GTM, GA4, Pixel e API do Facebook sem precisar alterar código.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-200">
              Senha de acesso
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-nj-accent focus:ring-2"
              autoComplete="current-password"
              required
            />
          </div>

          {error ? (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-nj-green px-4 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
