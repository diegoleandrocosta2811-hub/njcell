"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SiteImage from "@/components/SiteImage";
import { LOGO_HORIZONTAL, LOGO_ALT, LOGO_TITLE } from "@/lib/company";

type TrackingFormState = {
  gtmId: string;
  ga4Id: string;
  fbPixelId: string;
  fbAccessToken: string;
  hasFbAccessToken: boolean;
  updatedAt: string | null;
};

const initialState: TrackingFormState = {
  gtmId: "",
  ga4Id: "",
  fbPixelId: "",
  fbAccessToken: "",
  hasFbAccessToken: false,
  updatedAt: null,
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [form, setForm] = useState<TrackingFormState>(initialState);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSettings() {
      const response = await fetch("/api/admin/tracking");
      const data = (await response.json()) as {
        error?: string;
        settings?: TrackingFormState;
      };

      if (!response.ok) {
        setError(data.error ?? "Não foi possível carregar as configurações.");
        setLoading(false);
        return;
      }

      if (data.settings) {
        setForm(data.settings);
      }

      setLoading(false);
    }

    void loadSettings();
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin");
    router.refresh();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    const response = await fetch("/api/admin/tracking", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = (await response.json()) as {
      error?: string;
      settings?: TrackingFormState;
    };

    if (!response.ok) {
      setError(data.error ?? "Não foi possível salvar.");
      setSaving(false);
      return;
    }

    if (data.settings) {
      setForm(data.settings);
    }

    setMessage("Configurações salvas. As tags já estão ativas no site.");
    setSaving(false);
  }

  function updateField<K extends keyof TrackingFormState>(
    key: K,
    value: TrackingFormState[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-nj-black text-gray-300">
        Carregando painel...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nj-black px-4 py-10">
      <div className="container-njcell mx-auto max-w-3xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <SiteImage
              src={LOGO_HORIZONTAL}
              alt={LOGO_ALT}
              imageTitle={LOGO_TITLE}
              width={240}
              height={160}
              className="h-12 w-auto shrink-0"
            />
            <div>
              <h1 className="text-2xl font-bold text-white md:text-3xl">Tags e rastreamento</h1>
              <p className="mt-2 text-sm text-gray-300">
                Preencha os IDs abaixo. Deixe em branco o que não for usar.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
          >
            Sair
          </button>
        </div>

        <form onSubmit={handleSubmit} className="card-dark space-y-6 p-6 md:p-8">
          <Field
            id="gtmId"
            label="Google Tag Manager (GTM)"
            hint="Ex.: GTM-XXXXXXX"
            value={form.gtmId}
            onChange={(value) => updateField("gtmId", value)}
          />

          <Field
            id="ga4Id"
            label="Google Analytics 4 (GA4)"
            hint="Ex.: G-XXXXXXXXXX"
            value={form.ga4Id}
            onChange={(value) => updateField("ga4Id", value)}
          />

          <Field
            id="fbPixelId"
            label="Facebook Pixel"
            hint="Ex.: 123456789012345"
            value={form.fbPixelId}
            onChange={(value) => updateField("fbPixelId", value)}
          />

          <Field
            id="fbAccessToken"
            label="Facebook Conversions API (token)"
            hint="Token de acesso para eventos server-side (opcional)"
            value={form.fbAccessToken}
            onChange={(value) => updateField("fbAccessToken", value)}
            type="password"
          />

          <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm leading-relaxed text-gray-300">
            <p className="font-semibold text-white">Dica para o gestor</p>
            <p className="mt-2">
              Se você usa o GTM, pode configurar GA4 e Pixel dentro do próprio
              Google Tag Manager. Nesse caso, basta preencher só o ID do GTM.
            </p>
            <p className="mt-2">
              Evite duplicar GA4 e Pixel no GTM e também aqui, para não contar
              visitas em dobro.
            </p>
          </div>

          {form.updatedAt ? (
            <p className="text-xs text-gray-400">
              Última atualização:{" "}
              {new Date(form.updatedAt).toLocaleString("pt-BR")}
            </p>
          ) : null}

          {error ? (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}

          {message ? (
            <p className="text-sm text-nj-green" role="status">
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-nj-green px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Salvando..." : "Salvar configurações"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password";
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-nj-accent focus:ring-2"
        placeholder={hint}
      />
      <p className="mt-2 text-xs text-gray-400">{hint}</p>
    </div>
  );
}
