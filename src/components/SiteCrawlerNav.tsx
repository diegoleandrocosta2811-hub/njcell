import Link from "next/link";
import { allSitePages } from "@/lib/site-nav";

/** Mapa do site para crawlers e leitores de tela — não altera o layout visual. */
export default function SiteCrawlerNav() {
  return (
    <nav aria-label="Mapa completo do site NJCELL" className="sr-only">
      <h2>Navegação completa — NJCELL Assistência Apple Sorocaba</h2>
      <ul>
        {allSitePages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
