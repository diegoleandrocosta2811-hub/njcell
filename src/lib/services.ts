import type { PageSeo } from "./seo";
import { notFound } from "next/navigation";

export type ServiceImage = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

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
  images?: ServiceImage[];
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
      "troca-de-vidro-tela-sorocaba",
      "troca-de-tampa-traseira-sorocaba",
      "troca-de-cameras-sorocaba",
      "conserto-face-id-sorocaba",
      "conserto-iphone-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-assistencia-iphone-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa realizando assistência técnica de iPhone em Sorocaba",
        title: "Assistência técnica iPhone Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em assistência técnica Apple para iPhone em Sorocaba",
      },
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
      "troca-de-vidro-tela-sorocaba",
      "troca-de-tampa-traseira-sorocaba",
      "troca-de-cameras-sorocaba",
      "conserto-iphone-sorocaba",
      "assistencia-tecnica-celular-sorocaba",
      "conserto-face-id-sorocaba",
      "reparo-em-placa-sorocaba",
    ],
    images: [
      {
        src: "/images/troca-tela-iphone-desmontagem-njcell-sorocaba.jpg",
        alt: "Técnico da NJCELL desmontando iPhone para troca de tela em Sorocaba",
        title: "Troca de tela iPhone Sorocaba - NJCELL",
        caption: "Técnico NJCELL desmontando iPhone para substituição de display em Sorocaba",
      },
    ],
  },
  {
    slug: "troca-de-vidro-tela-sorocaba",
    href: "/troca-de-vidro-tela-sorocaba",
    title: "Troca de Vidro da Tela",
    shortTitle: "Troca de Vidro",
    description:
      "Substituição apenas do vidro quebrado, mantendo a tela original do iPhone quando a imagem e o touch estão ok.",
    icon: "🪟",
    h1: "Troca de Vidro da Tela de iPhone em Sorocaba",
    seo: {
      title: "Troca de Vidro da Tela iPhone em Sorocaba | NJCELL",
      description:
        "Vidro da tela do iPhone trincado com imagem ok? Troca só do vidro em Sorocaba, preservando o display original. Orçamento e diagnóstico na assistência Apple NJCELL.",
      path: "/troca-de-vidro-tela-sorocaba",
    },
    intro: [
      "O vidro da tela do seu iPhone quebrou, mas a imagem e o touch continuam funcionando? Na NJCELL, em Sorocaba, fazemos a troca apenas do vidro, mantendo o display original do aparelho.",
      "Esse serviço é indicado quando só a camada externa está danificada. Avaliamos o modelo e o estado da tela para confirmar se a substituição do vidro é viável antes de iniciar o reparo.",
    ],
    symptoms: [
      "Vidro trincado ou estilhaçado com imagem normal",
      "Touch funcionando apesar do vidro quebrado",
      "Rachaduras superficiais sem manchas no display",
      "Vidro quebrado após queda, sem falha na imagem",
      "Desejo de preservar a tela original do iPhone",
    ],
    highlights: [
      "Mantém o display original do aparelho",
      "Opção mais econômica quando viável",
      "Diagnóstico antes de confirmar o serviço",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "troca-de-tela-sorocaba",
      "troca-de-tampa-traseira-sorocaba",
      "conserto-iphone-sorocaba",
      "conserto-face-id-sorocaba",
    ],
    images: [
      {
        src: "/images/troca-vidro-tela-iphone-njcell-sorocaba.jpg",
        alt: "Técnico da NJCELL realizando troca de vidro da tela de iPhone em Sorocaba",
        title: "Troca de vidro iPhone Sorocaba - NJCELL",
        caption: "Técnico NJCELL trocando apenas o vidro da tela de iPhone em Sorocaba",
      },
    ],
  },
  {
    slug: "troca-de-tampa-traseira-sorocaba",
    href: "/troca-de-tampa-traseira-sorocaba",
    title: "Troca de Tampa Traseira",
    shortTitle: "Tampa Traseira",
    description:
      "Substituição da tampa traseira de vidro do iPhone quebrada, trincada ou com danos estéticos.",
    icon: "📲",
    h1: "Troca de Tampa Traseira de iPhone em Sorocaba",
    seo: {
      title: "Troca de Tampa Traseira iPhone em Sorocaba | NJCELL",
      description:
        "Tampa traseira do iPhone quebrada ou trincada? Troca de vidro traseiro em Sorocaba com peças de qualidade. Assistência Apple especializada na NJCELL.",
      path: "/troca-de-tampa-traseira-sorocaba",
    },
    intro: [
      "A tampa traseira do seu iPhone quebrou ou está trincada? Na NJCELL, em Sorocaba, realizamos a troca da tampa traseira com instalação profissional e acabamento cuidadoso.",
      "Vidro traseiro danificado além de prejudicar a aparência pode expor o aparelho à umidade e poeira. Avaliamos o modelo e substituímos a peça com segurança, testando câmeras e carregamento sem fio quando aplicável.",
    ],
    symptoms: [
      "Vidro traseiro trincado ou estilhaçado",
      "Tampa traseira solta ou com recortes quebrados",
      "Danos estéticos após queda",
      "Risco de entrada de poeira ou umidade pela traseira",
      "Desejo de restaurar a aparência original do iPhone",
    ],
    highlights: [
      "Peças compatíveis com cada modelo",
      "Acabamento alinhado ao aparelho",
      "Teste após a instalação",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "troca-de-tela-sorocaba",
      "troca-de-vidro-tela-sorocaba",
      "troca-de-cameras-sorocaba",
      "conserto-iphone-sorocaba",
    ],
    images: [
      {
        src: "/images/troca-tampa-traseira-iphone-njcell-sorocaba.jpg",
        alt: "Técnico da NJCELL trocando tampa traseira de vidro de iPhone em Sorocaba",
        title: "Troca de tampa traseira iPhone Sorocaba - NJCELL",
        caption: "Técnico NJCELL substituindo vidro traseiro de iPhone em Sorocaba",
      },
    ],
  },
  {
    slug: "troca-de-cameras-sorocaba",
    href: "/troca-de-cameras-sorocaba",
    title: "Troca de Câmeras",
    shortTitle: "Troca de Câmeras",
    description:
      "Substituição de câmera frontal e traseira de iPhone com falha, imagem borrada ou app que não abre.",
    icon: "📷",
    h1: "Troca de Câmeras de iPhone em Sorocaba",
    seo: {
      title: "Troca de Câmeras iPhone em Sorocaba | NJCELL",
      description:
        "Câmera do iPhone com defeito em Sorocaba? Troca de câmera frontal e traseira com diagnóstico Apple, peças de qualidade e garantia na assistência NJCELL.",
      path: "/troca-de-cameras-sorocaba",
    },
    intro: [
      "A câmera do seu iPhone parou de funcionar, está borrada ou não abre o app? Na NJCELL, em Sorocaba, realizamos troca de câmeras frontal e traseira com diagnóstico técnico antes do reparo.",
      "Problemas na câmera podem envolver o módulo, lente ou conexão interna. Avaliamos cada caso e indicamos a melhor solução para restaurar fotos, vídeos e chamadas com qualidade.",
    ],
    symptoms: [
      "Câmera traseira com imagem borrada ou preta",
      "Câmera frontal sem funcionar em fotos ou vídeo",
      "App de câmera travando ou não abrindo",
      "Foco automático que não responde",
      "Manchas ou linhas nas fotos após queda",
    ],
    highlights: [
      "Troca de câmera frontal e traseira",
      "Diagnóstico antes do reparo",
      "Teste de foto, vídeo e flash",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "conserto-face-id-sorocaba",
      "conserto-iphone-sorocaba",
      "troca-de-tela-sorocaba",
    ],
    images: [
      {
        src: "/images/troca-camera-iphone-njcell-sorocaba.jpg",
        alt: "Técnico da NJCELL segurando módulo de câmera de iPhone para troca em Sorocaba",
        title: "Troca de câmera iPhone Sorocaba - NJCELL",
        caption: "Técnico NJCELL com módulo de câmera para troca em iPhone em Sorocaba",
      },
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
      "conserto-face-id-sorocaba",
      "troca-de-conector-sorocaba",
    ],
    images: [
      {
        src: "/images/troca-bateria-iphone-tecnico-njcell-sorocaba.jpg",
        alt: "Técnico da NJCELL realizando troca de bateria de iPhone em Sorocaba",
        title: "Troca de bateria iPhone Sorocaba - NJCELL",
        caption: "Técnico NJCELL realizando substituição de bateria de iPhone em Sorocaba",
      },
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
    images: [
      {
        src: "/images/raposa-troca-conector-iphone-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa trocando conector de carga de iPhone em Sorocaba",
        title: "Troca de conector iPhone Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em reparo de conector de carga de iPhone",
      },
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
      "conserto-face-id-sorocaba",
      "troca-de-conector-sorocaba",
    ],
    images: [
      {
        src: "/images/reparo-placa-iphone-micro-soldagem-njcell-sorocaba.jpg",
        alt: "Técnico da NJCELL realizando microsoldagem em placa de iPhone em Sorocaba",
        title: "Reparo em placa iPhone Sorocaba - NJCELL",
        caption: "Técnico NJCELL em microsoldagem para reparo de placa de iPhone",
      },
    ],
  },
  {
    slug: "conserto-face-id-sorocaba",
    href: "/conserto-face-id-sorocaba",
    title: "Reparo de Face ID",
    shortTitle: "Face ID",
    description:
      "Reparo do Face ID e câmera TrueDepth para iPhone com reconhecimento facial que parou de funcionar.",
    icon: "👤",
    h1: "Reparo de Face ID de iPhone em Sorocaba",
    seo: {
      title: "Reparo Face ID iPhone em Sorocaba | NJCELL",
      description:
        "Face ID não funciona no iPhone? Reparo de Face ID e câmera TrueDepth em Sorocaba. Diagnóstico Apple, reparo após troca de tela ou umidade na NJCELL.",
      path: "/conserto-face-id-sorocaba",
    },
    intro: [
      "O Face ID parou de funcionar no seu iPhone? Na NJCELL, em Sorocaba, realizamos diagnóstico e reparo de Face ID com equipe especializada em produtos Apple.",
      "Problemas no reconhecimento facial podem envolver o módulo TrueDepth, sensores infravermelhos ou falhas na placa. Avaliamos cada caso e indicamos a melhor solução antes de qualquer reparo.",
    ],
    symptoms: [
      "Face ID desativado ou indisponível nas configurações",
      "iPhone não reconhece o rosto ao desbloquear",
      "Face ID parou após troca de tela ou queda",
      "Câmera frontal com falha junto ao Face ID",
      "Mensagem para reposicionar o rosto sem sucesso",
    ],
    highlights: [
      "Diagnóstico do módulo TrueDepth",
      "Reparo após troca de tela mal executada",
      "Avaliação de placa quando necessário",
      "Garantia de 6 meses no serviço",
    ],
    relatedSlugs: [
      "troca-de-cameras-sorocaba",
      "troca-de-tela-sorocaba",
      "troca-de-vidro-tela-sorocaba",
      "reparo-em-placa-sorocaba",
      "conserto-iphone-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-reparo-face-id-iphone-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa reparando Face ID de iPhone em Sorocaba",
        title: "Reparo Face ID iPhone Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em reparo de Face ID para iPhone",
      },
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
      "conserto-face-id-sorocaba",
      "troca-de-vidro-tela-sorocaba",
      "troca-de-tampa-traseira-sorocaba",
      "troca-de-cameras-sorocaba",
      "assistencia-macbook-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-conserto-iphone-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa realizando conserto de iPhone em Sorocaba",
        title: "Conserto de iPhone Sorocaba - NJCELL",
        caption: "Mascote NJCELL representando conserto profissional de iPhone em Sorocaba",
      },
    ],
  },
  {
    slug: "assistencia-macbook-sorocaba",
    href: "/assistencia-macbook-sorocaba",
    title: "Assistência MacBook",
    shortTitle: "MacBook",
    description:
      "Conserto de MacBook em Sorocaba.",
    icon: "💻",
    h1: "Assistência Técnica para MacBook em Sorocaba",
    seo: {
      title: "Assistência MacBook em Sorocaba | Conserto NJCELL",
      description:
        "Assistência técnica MacBook em Sorocaba: tela, bateria, teclado, lentidão e sistema. Diagnóstico Apple com profissionais especializados na NJCELL.",
      path: "/assistencia-macbook-sorocaba",
    },
    intro: [
      "MacBook lento, com tela danificada, bateria ruim ou teclado com falha? A NJCELL oferece assistência técnica para MacBook em Sorocaba. Para iPad e Apple Watch, temos páginas dedicadas de conserto.",
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
      "conserto-ipad-sorocaba",
      "assistencia-tecnica-celular-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-assistencia-macbook-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa realizando assistência técnica de MacBook em Sorocaba",
        title: "Assistência MacBook Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em assistência técnica de MacBook",
      },
    ],
  },
  {
    slug: "conserto-ipad-sorocaba",
    href: "/conserto-ipad-sorocaba",
    title: "Conserto de iPad",
    shortTitle: "Conserto iPad",
    description:
      "Assistência técnica para iPad em Sorocaba: tela, bateria, conector e reparo em placa.",
    icon: "📱",
    h1: "Conserto de iPad em Sorocaba",
    seo: {
      title: "Conserto de iPad em Sorocaba | Assistência NJCELL",
      description:
        "Conserto de iPad em Sorocaba: troca de tela, bateria, conector e placa. Assistência técnica Apple especializada na NJCELL com garantia.",
      path: "/conserto-ipad-sorocaba",
    },
    intro: [
      "Seu iPad parou de funcionar, a tela quebrou ou a bateria não segura carga? A NJCELL realiza conserto de iPad em Sorocaba com diagnóstico técnico e peças de qualidade.",
      "Atendemos modelos iPad, iPad Air, iPad Pro e iPad mini, desde troca de display até reparos mais avançados em placa.",
    ],
    symptoms: [
      "Tela do iPad trincada ou touch falhando",
      "Bateria descarregando rápido",
      "iPad que não liga ou trava na Apple",
      "Conector de carga com mau contato",
      "Problemas após queda ou contato com líquido",
    ],
    highlights: [
      "Especialistas em linha Apple",
      "Diagnóstico antes do reparo",
      "Peças compatíveis com cada modelo",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "troca-de-tela-ipad-sorocaba",
      "troca-de-bateria-ipad-sorocaba",
      "assistencia-macbook-sorocaba",
      "conserto-iphone-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-conserto-ipad-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa realizando conserto de iPad em Sorocaba",
        title: "Conserto de iPad Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em conserto de iPad em Sorocaba",
      },
    ],
  },
  {
    slug: "troca-de-tela-ipad-sorocaba",
    href: "/troca-de-tela-ipad-sorocaba",
    title: "Troca de Tela iPad",
    shortTitle: "Tela iPad",
    description:
      "Substituição de tela para iPad com display trincado, touch defeituoso ou sem imagem.",
    icon: "🖥️",
    h1: "Troca de Tela de iPad em Sorocaba",
    seo: {
      title: "Troca de Tela iPad em Sorocaba | NJCELL",
      description:
        "Tela de iPad quebrada em Sorocaba? Troca de display com peças de qualidade, instalação profissional e garantia na assistência Apple NJCELL.",
      path: "/troca-de-tela-ipad-sorocaba",
    },
    intro: [
      "Tela do iPad trincada, com touch que não responde ou display sem imagem? Na NJCELL, em Sorocaba, fazemos troca de tela de iPad com instalação profissional.",
      "Avaliamos o modelo do aparelho, testamos brilho e touch após a instalação e informamos o prazo com transparência antes de iniciar o serviço.",
    ],
    symptoms: [
      "Tela trincada ou completamente quebrada",
      "Touch falhando ou respondendo em partes",
      "Manchas, linhas ou display sem imagem",
      "Vidro estilhaçado com risco de corte",
      "Tela escura mesmo com iPad ligado",
    ],
    highlights: [
      "Peças de qualidade para cada modelo",
      "Teste completo após a instalação",
      "Atendimento para iPad Air, Pro e mini",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "conserto-ipad-sorocaba",
      "troca-de-bateria-ipad-sorocaba",
      "assistencia-macbook-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-troca-tela-ipad-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa trocando tela de iPad em Sorocaba",
        title: "Troca de tela iPad Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em troca de tela de iPad",
      },
    ],
  },
  {
    slug: "troca-de-bateria-ipad-sorocaba",
    href: "/troca-de-bateria-ipad-sorocaba",
    title: "Troca de Bateria iPad",
    shortTitle: "Bateria iPad",
    description:
      "Bateria nova para iPad com descarga rápida, aquecimento ou desligamento inesperado.",
    icon: "🔋",
    h1: "Troca de Bateria de iPad em Sorocaba",
    seo: {
      title: "Troca de Bateria iPad em Sorocaba | NJCELL",
      description:
        "Bateria de iPad viciada em Sorocaba? Troca com diagnóstico Apple, peças compatíveis e garantia na assistência técnica NJCELL.",
      path: "/troca-de-bateria-ipad-sorocaba",
    },
    intro: [
      "iPad descarregando rápido, desligando sozinho ou com bateria inchada? A NJCELL realiza troca de bateria de iPad em Sorocaba com diagnóstico prévio.",
      "Uma bateria em mau estado pode causar aquecimento e quedas de desempenho. Substituímos com segurança e testamos o aparelho antes da entrega.",
    ],
    symptoms: [
      "Bateria descarregando muito rápido",
      "iPad desligando com percentual de carga",
      "Aparelho aquecendo durante o uso ou carga",
      "Bateria inchada ou com deformação",
      "Necessidade constante de carregar o iPad",
    ],
    highlights: [
      "Diagnóstico para confirmar o defeito",
      "Substituição segura da bateria",
      "Melhora imediata na autonomia",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "conserto-ipad-sorocaba",
      "troca-de-tela-ipad-sorocaba",
      "assistencia-macbook-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-troca-bateria-ipad-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa trocando bateria de iPad em Sorocaba",
        title: "Troca de bateria iPad Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em troca de bateria de iPad",
      },
    ],
  },
  {
    slug: "conserto-apple-watch-sorocaba",
    href: "/conserto-apple-watch-sorocaba",
    title: "Conserto de Apple Watch",
    shortTitle: "Apple Watch",
    description:
      "Assistência técnica para Apple Watch em Sorocaba: tela e reparos gerais.",
    icon: "⌚",
    h1: "Conserto de Apple Watch em Sorocaba",
    seo: {
      title: "Conserto Apple Watch em Sorocaba | Assistência NJCELL",
      description:
        "Conserto de Apple Watch em Sorocaba: troca de tela e diagnóstico técnico. Assistência Apple especializada na NJCELL com garantia.",
      path: "/conserto-apple-watch-sorocaba",
    },
    intro: [
      "Seu Apple Watch parou de ligar ou a tela quebrou? A NJCELL oferece conserto de Apple Watch em Sorocaba com equipe especializada em produtos Apple.",
      "Atendemos diferentes séries e modelos, com diagnóstico prévio e orçamento transparente antes de qualquer reparo.",
    ],
    symptoms: [
      "Tela do Apple Watch trincada ou sem touch",
      "Relógio que não liga ou reinicia sozinho",
      "Problemas após queda ou contato com água",
      "Pulseira ou botão digital com falha",
    ],
    highlights: [
      "Especialistas em linha Apple",
      "Diagnóstico antes do reparo",
      "Peças compatíveis com cada série",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "troca-de-tela-apple-watch-sorocaba",
      "conserto-iphone-sorocaba",
      "conserto-ipad-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-conserto-apple-watch-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa realizando conserto de Apple Watch em Sorocaba",
        title: "Conserto Apple Watch Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em conserto de Apple Watch",
      },
    ],
  },
  {
    slug: "troca-de-tela-apple-watch-sorocaba",
    href: "/troca-de-tela-apple-watch-sorocaba",
    title: "Troca de Tela Apple Watch",
    shortTitle: "Tela Apple Watch",
    description:
      "Substituição de tela e vidro do Apple Watch trincado ou com touch defeituoso.",
    icon: "⌚",
    h1: "Troca de Tela de Apple Watch em Sorocaba",
    seo: {
      title: "Troca de Tela Apple Watch em Sorocaba | NJCELL",
      description:
        "Tela de Apple Watch quebrada em Sorocaba? Troca de display e vidro com instalação profissional e garantia na assistência Apple NJCELL.",
      path: "/troca-de-tela-apple-watch-sorocaba",
    },
    intro: [
      "Tela do Apple Watch trincada, riscada ou com touch que não responde? Na NJCELL, em Sorocaba, realizamos troca de tela de Apple Watch com instalação cuidadosa.",
      "Avaliamos a série e o modelo do relógio para indicar a melhor solução e testamos touch, brilho e sensores após o reparo.",
    ],
    symptoms: [
      "Vidro da tela trincado ou estilhaçado",
      "Touch falhando ou sem resposta",
      "Display com manchas ou sem imagem",
      "Rachaduras após queda ou impacto",
      "Tela escura mesmo com relógio ligado",
    ],
    highlights: [
      "Peças compatíveis com cada série",
      "Instalação precisa e testada",
      "Atendimento para Apple Watch Series e SE",
      "Garantia de 6 meses",
    ],
    relatedSlugs: [
      "conserto-apple-watch-sorocaba",
      "conserto-iphone-sorocaba",
    ],
    images: [
      {
        src: "/images/raposa-troca-tela-apple-watch-njcell-sorocaba.jpg",
        alt: "Mascote NJCELL raposa trocando tela de Apple Watch em Sorocaba",
        title: "Troca de tela Apple Watch Sorocaba - NJCELL",
        caption: "Mascote NJCELL especialista em troca de tela de Apple Watch",
      },
    ],
  },
];

const serviceGroupDefinitions = [
  {
    slug: "iphone",
    title: "iPhone",
    description:
      "Assistência completa para todos os modelos de iPhone em Sorocaba: tela, bateria, placa e mais.",
    slugs: [
      "assistencia-tecnica-celular-sorocaba",
      "conserto-iphone-sorocaba",
      "troca-de-tela-sorocaba",
      "troca-de-vidro-tela-sorocaba",
      "troca-de-tampa-traseira-sorocaba",
      "troca-de-cameras-sorocaba",
      "troca-de-bateria-sorocaba",
      "troca-de-conector-sorocaba",
      "reparo-em-placa-sorocaba",
      "conserto-face-id-sorocaba",
    ],
  },
  {
    slug: "macbook",
    title: "MacBook",
    description:
      "Reparos para MacBook em Sorocaba com técnicos especializados Apple.",
    slugs: ["assistencia-macbook-sorocaba"],
  },
  {
    slug: "ipad",
    title: "iPad",
    description: "Conserto, troca de tela e bateria para iPad em Sorocaba.",
    slugs: [
      "conserto-ipad-sorocaba",
      "troca-de-tela-ipad-sorocaba",
      "troca-de-bateria-ipad-sorocaba",
    ],
  },
  {
    slug: "apple-watch",
    title: "Apple Watch",
    description: "Assistência para Apple Watch em Sorocaba: tela e reparos gerais.",
    slugs: [
      "conserto-apple-watch-sorocaba",
      "troca-de-tela-apple-watch-sorocaba",
    ],
  },
] as const;

const servicesBySlug = new Map(
  servicesData.map((service) => [service.slug, service]),
);

export const serviceCatalogGroups = serviceGroupDefinitions.map((group) => ({
  slug: group.slug,
  title: group.title,
  description: group.description,
  services: group.slugs
    .map((slug) => servicesBySlug.get(slug))
    .filter((service): service is Service => Boolean(service)),
}));

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
