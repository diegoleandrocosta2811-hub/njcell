import Link from "next/link";
import type { Metadata } from "next";
import { buildNotFoundMetadata } from "@/lib/seo";

export const metadata: Metadata = buildNotFoundMetadata();

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-nj-black px-6 py-16 text-center text-white"
      tabIndex={-1}
    >
      <h1 className="mb-4 text-3xl font-bold">Página não encontrada</h1>
      <p className="mb-8 max-w-md text-gray-200" role="status">
        O endereço acessado não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-md bg-nj-green-button px-6 py-3 font-semibold text-white hover:bg-nj-green-dark"
      >
        Voltar para a home
      </Link>
    </main>
  );
}
