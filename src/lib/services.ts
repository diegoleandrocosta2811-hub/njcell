import type { PageSeo } from "./seo";
import { notFound } from "next/navigation";

export type Service = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  h1: string;
  seo: PageSeo;
  intro: string[];
  symptoms: string[];
  highlights: string[];
  relatedSlugs: string[];
};

const servicesData: Service[] = [
  {
    slug: "assistencia-tecnica-celular-sorocaba",
    href: "/assistencia-tecnica-celular-sorocaba",
    title: "Assistência Técnica iPhone",
    shortTitle: "Assistência iPhone",
    description:
      "Diagnóstico completo e reparos para iPhone em Sorocaba com equipe especializada Apple.",
    icon: "🍎",
    h1: "Assistência Técnica iPhone em Sorocaba",
    seo: {
      title: "Assistência Técnica iPhone Sorocaba | NJCELL",
      description:
        "Assistência técnica iPhone em Sorocaba com diagnóstico, troca de tela, bateria e reparo em placa. Atendimento Apple rápido e garantia na NJCELL.",
      path: "/assistencia-tecnica-celular-sorocaba",
    },
    intro: [
      "A NJCELL é referência em assistência técnica para iPhone em Sorocaba. Realizamos diagnóstico preciso, orçamento transparente e reparos por técnicos especializados em produtos Apple.",
      "Seja para troca de tela, bateria, conector Lightning ou reparo em placa, nossa equipe avalia seu iPhone e indica a melhor solução antes de qualquer intervenção.",
    ],
    symptoms: [
      "iPhone com tela quebrada ou touch falhando",
      "Bateria descarregando rápido ou aparelho desligando",
      "Entrada Lightning com mau contato",
      "iPhone que não liga ou reinicia sozinho",
      "Câmera, áudio ou Face ID com defeito",
    ],
    highlights: [
      "Especialistas em linha Apple",
      "Diagnóstico antes de qualquer reparo",
      "Garantia de 6 meses nos serviços",
      "Loja física em Sorocaba",
    ],
    relatedSlugs: [
      "troca-de-tela-sorocaba",
      "troca-de-bateria-sorocaba",
      "conserto-iphone-sorocaba",
    ],
  },
  {
    slug: "troca-de-tela-sorocaba",
    href: "/troca-de-tela-sorocaba",
    title: "Troca de Tela iPhone",
    shortTitle: "Troca de Tela",
    description:
      "Substituição de display para iPhone com tela quebrada, trincada ou touch defeituoso.",
    icon: "📱",
    h1: "Troca de Tela de iPhone em Sorocaba",
    seo: {
      title: "Troca de Tela iPhone em Sorocaba | NJCELL",
      description:
        "Troca de tela de iPhone em Sorocaba para display trincado, touch falhando ou sem imagem. Peças de qualidade e serviço ágil na assistência Apple NJCELL.",
      path: "/troca-de-tela-sorocaba",
    },
    intro: [
      "Tela quebrada, trincada ou com touch que não responde? Na NJCELL, em Sorocaba, realizamos troca de tela de iPhone com peças de qualidade e instalação profissional.",
      "Avaliamos o modelo, o tipo de display e testamos brilho, touch e True Tone após a instalação. Muitos serviços são concluídos em até 30 minutos.",
    ],
    symptoms: [
      "Tela trincada ou completamente quebrada",
      "Touch falhando ou respondendo em partes",
      "Manchas, linhas ou display sem imagem",
      "Vidro estilhaçado com risco de corte",
      "Tela escura mesmo com iPhone ligado",
    ],
    highlights: [
      "Peças de qualidade para cada modelo",
      "Teste completo após a instalação",
      "Serviço ágil na maioria dos iPhones",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "conserto-iphone-sorocaba",
      "assistencia-tecnica-celular-sorocaba",
      "reparo-em-placa-sorocaba",
    ],
  },
  {
    slug: "troca-de-bateria-sorocaba",
    href: "/troca-de-bateria-sorocaba",
    title: "Troca de Bateria iPhone",
    shortTitle: "Troca de Bateria",
    description:
      "Bateria nova para iPhone com descarga rápida, aquecimento ou desligamento.",
    icon: "🔋",
    h1: "Troca de Bateria de iPhone em Sorocaba",
    seo: {
      title: "Troca de Bateria iPhone em Sorocaba | NJCELL",
      description:
        "Troca de bateria de iPhone em Sorocaba para aparelhos que descarregam rápido, desligam sozinhos ou aquecem. Diagnóstico Apple e garantia na NJCELL.",
      path: "/troca-de-bateria-sorocaba",
    },
    intro: [
      "Bateria viciada, descarregando rápido ou iPhone desligando mesmo com carga? A NJCELL realiza troca de bateria de iPhone em Sorocaba com diagnóstico prévio e peças compatíveis.",
      "Uma bateria em mau estado pode causar aquecimento e reinicializações. Substituímos com segurança e testamos o desempenho antes da entrega.",
    ],
    symptoms: [
      "Bateria descarregando muito rápido",
      "iPhone desligando com percentual de carga",
      "Aparelho aquecendo durante o uso ou carga",
      "Bateria inchada ou com deformação",
      "Necessidade constante de carregar o iPhone",
    ],
    highlights: [
      "Diagnóstico para confirmar o defeito",
      "Substituição segura da bateria",
      "Melhora imediata na autonomia",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "conserto-iphone-sorocaba",
      "assistencia-tecnica-celular-sorocaba",
      "troca-de-conector-sorocaba",
    ],
  },
  {
    slug: "troca-de-conector-sorocaba",
    href: "/troca-de-conector-sorocaba",
    title: "Troca de Conector iPhone",
    shortTitle: "Troca de Conector",
    description:
      "Reparo da entrada Lightning para iPhone que não carrega ou tem mau contato.",
    icon: "🔌",
    h1: "Troca de Conector de Carga iPhone em Sorocaba",
    seo: {
      title: "Troca de Conector iPhone em Sorocaba | NJCELL",
      description:
        "iPhone que não carrega em Sorocaba? Fazemos troca de conector Lightning com diagnóstico preciso. Assistência Apple especializada na NJCELL.",
      path: "/troca-de-conector-sorocaba",
    },
    intro: [
      "iPhone que não carrega, cabo com mau contato ou entrada danificada? Na NJCELL, em Sorocaba, fazemos troca de conector Lightning com diagnóstico técnico.",
      "Problemas na entrada de carga são comuns após uso intenso, umidade ou quedas. Corrigimos o defeito e testamos a carga antes de devolver o aparelho.",
    ],
    symptoms: [
      "iPhone que não carrega de jeito nenhum",
      "Cabo precisa ficar em posição específica",
      "Entrada Lightning solta ou danificada",
      "Carregamento intermitente",
      "Oxidação visível na porta de carga",
    ],
    highlights: [
      "Diagnóstico da porta e da placa",
      "Substituição do conector com precisão",
      "Teste de carga após o reparo",
      "Especialistas em iPhone",
    ],
    relatedSlugs: [
      "reparo-em-placa-sorocaba",
      "conserto-iphone-sorocaba",
      "troca-de-bateria-sorocaba",
    ],
  },
  {
    slug: "reparo-em-placa-sorocaba",
    href: "/reparo-em-placa-sorocaba",
    title: "Reparo em Placa iPhone",
    shortTitle: "Reparo em Placa",
    description:
      "Diagnóstico e correção de falhas avançadas em placa de iPhone e Mac.",
    icon: "🔧",
    h1: "Reparo em Placa de iPhone em Sorocaba",
    seo: {
      title: "Reparo em Placa iPhone em Sorocaba | NJCELL",
      description:
        "Reparo em placa de iPhone em Sorocaba para aparelho que não liga, molhou ou apresenta falhas avançadas. Diagnóstico técnico Apple na NJCELL.",
      path: "/reparo-em-placa-sorocaba",
    },
    intro: [
      "iPhone que não liga, molhou ou apresenta curto? A NJCELL realiza reparo em placa em Sorocaba com diagnóstico técnico avançado para produtos Apple.",
      "Muitas falhas em placa podem ser corrigidas com microsolda e substituição de componentes, com custo-benefício melhor que trocar o aparelho.",
    ],
    symptoms: [
      "iPhone que não liga após queda ou umidade",
      "Aparelho com curto ou aquecimento excessivo",
      "Reinicialização constante sem causa aparente",
      "Falhas após contato com líquido",
      "Problemas que persistem após troca de peças",
    ],
    highlights: [
      "Diagnóstico técnico especializado",
      "Reparo de oxidação e componentes",
      "Avaliação honesta de viabilidade",
      "Equipe formada em eletrônica",
    ],
    relatedSlugs: [
      "conserto-iphone-sorocaba",
      "assistencia-macbook-sorocaba",
      "troca-de-conector-sorocaba",
    ],
  },
  {
    slug: "conserto-iphone-sorocaba",
    href: "/conserto-iphone-sorocaba",
    title: "Conserto de iPhone",
    shortTitle: "Conserto iPhone",
    description:
      "Assistência técnica Apple em Sorocaba para tela, bateria, câmera e placa.",
    icon: "🍎",
    h1: "Conserto de iPhone em Sorocaba",
    seo: {
      title: "Conserto de iPhone em Sorocaba | Assistência NJCELL",
      description:
        "Conserto de iPhone em Sorocaba: tela, bateria, câmera, conector e placa. Assistência técnica Apple com peças de qualidade e garantia na NJCELL.",
      path: "/conserto-iphone-sorocaba",
    },
    intro: [
      "Precisa de conserto de iPhone em Sorocaba? A NJCELL oferece assistência técnica especializada para modelos Apple, com troca de tela, bateria, câmera, conector e reparo em placa.",
      "Atendemos desde problemas simples até falhas avançadas, sempre com diagnóstico prévio e orçamento claro.",
    ],
    symptoms: [
      "iPhone com tela quebrada ou touch falhando",
      "Bateria com baixa duração",
      "Câmera frontal ou traseira com defeito",
      "Entrada Lightning com mau contato",
      "iPhone que não liga ou trava na Apple",
    ],
    highlights: [
      "Especialistas em linha Apple",
      "Peças de qualidade testadas",
      "Diagnóstico completo antes do reparo",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "troca-de-tela-sorocaba",
      "troca-de-bateria-sorocaba",
      "assistencia-macbook-sorocaba",
    ],
  },
  {
    slug: "assistencia-macbook-sorocaba",
    href: "/assistencia-macbook-sorocaba",
    title: "Assistência MacBook",
    shortTitle: "MacBook",
    description:
      "Conserto e manutenção de Mac e MacBook em Sorocaba.",
    icon: "💻",
    h1: "Assistência Técnica para MacBook em Sorocaba",
    seo: {
      title: "Assistência MacBook em Sorocaba | Conserto NJCELL",
      description:
        "Assistência técnica MacBook em Sorocaba: tela, bateria, teclado, lentidão e sistema. Diagnóstico Apple com profissionais especializados na NJCELL.",
      path: "/assistencia-macbook-sorocaba",
    },
    intro: [
      "MacBook lento, com tela danificada, bateria ruim ou teclado com falha? A NJCELL oferece assistência técnica para MacBook e iMac em Sorocaba.",
      "Atendemos desde ajustes de sistema e formatação até substituição de componentes e reparo em placa.",
    ],
    symptoms: [
      "MacBook lento ou travando",
      "Tela com manchas, linhas ou sem imagem",
      "Bateria com pouca autonomia",
      "Teclado com teclas falhando",
      "Problemas no macOS ou após umidade",
    ],
    highlights: [
      "Especialistas em linha Apple",
      "Upgrade de memória e componentes",
      "Formatação e ajustes de sistema",
      "Diagnóstico técnico completo",
    ],
    relatedSlugs: [
      "conserto-iphone-sorocaba",
      "reparo-em-placa-sorocaba",
      "assistencia-tecnica-celular-sorocaba",
    ],
  },
];

export const services = servicesData;
export const appleServices = servicesData;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceOrNotFound(slug: string): Service {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return service;
}
