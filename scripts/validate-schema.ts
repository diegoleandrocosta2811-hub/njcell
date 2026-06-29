/**
 * Valida os grafos JSON-LD do projeto.
 * Executar: npx tsx scripts/validate-schema.ts
 */
import { getServiceOrNotFound, services } from "../src/lib/services";
import { serviceFaqs } from "../src/lib/faqs";
import {
  buildContactSchemaGraph,
  buildHomeSchemaGraph,
  buildPrivacySchemaGraph,
  buildServicosSchemaGraph,
  buildServiceSchemaGraph,
  buildTermsSchemaGraph,
  validateSchemaGraph,
} from "../src/lib/schema";

const graphs = [
  { name: "home", graph: buildHomeSchemaGraph() },
  { name: "servicos", graph: buildServicosSchemaGraph() },
  { name: "contato", graph: buildContactSchemaGraph() },
  { name: "politica-de-privacidade", graph: buildPrivacySchemaGraph() },
  { name: "termos-de-uso", graph: buildTermsSchemaGraph() },
  ...services.map((service) => ({
    name: service.slug,
    graph: buildServiceSchemaGraph(
      service,
      serviceFaqs[service.slug] ?? [],
    ),
  })),
];

let hasErrors = false;

for (const { name, graph } of graphs) {
  const errors = validateSchemaGraph(graph);
  if (errors.length > 0) {
    hasErrors = true;
    console.error(`\n❌ ${name}:`);
    errors.forEach((error) => console.error(`  - ${error}`));
  } else {
    console.log(`✓ ${name}`);
  }
}

// Smoke test: JSON serializable
for (const { name, graph } of graphs) {
  try {
    JSON.stringify(graph);
  } catch {
    hasErrors = true;
    console.error(`\n❌ ${name}: grafo não serializável em JSON`);
  }
}

// Referência cruzada de serviço específico
getServiceOrNotFound("troca-de-tela-sorocaba");

if (hasErrors) {
  process.exit(1);
}

console.log(`\n✅ ${graphs.length} grafos JSON-LD validados com sucesso.`);
