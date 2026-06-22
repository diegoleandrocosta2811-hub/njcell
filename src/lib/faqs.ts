import type { FaqItem } from "./seo";

export const homeFaqs: FaqItem[] = [
  {
    question: "A NJCELL atende quais aparelhos Apple em Sorocaba?",
    answer:
      "Atendemos iPhone, MacBook, iMac e iPad. Realizamos assistência técnica especializada em produtos Apple em Sorocaba, com diagnóstico, troca de peças e reparo em placa.",
  },
  {
    question: "Quanto tempo leva para trocar a tela ou bateria do iPhone?",
    answer:
      "Muitos serviços de troca de tela e bateria em iPhone são concluídos em até 30 minutos, dependendo do modelo. Fazemos o diagnóstico antes e informamos o prazo com clareza.",
  },
  {
    question: "Os reparos da NJCELL têm garantia?",
    answer:
      "Sim. Os serviços realizados na NJCELL contam com garantia de 6 meses, conforme o tipo de reparo e peça utilizada. Tudo é explicado no orçamento antes da aprovação.",
  },
  {
    question: "Preciso agendar para levar meu iPhone ou MacBook?",
    answer:
      "Não é obrigatório agendar. Você pode falar conosco pelo WhatsApp ou vir direto à loja em Sorocaba para diagnóstico e orçamento sem compromisso.",
  },
  {
    question: "A NJCELL faz reparo em placa de iPhone?",
    answer:
      "Sim. Realizamos diagnóstico e reparo em placa para iPhones que não ligam, molharam ou apresentam falhas avançadas. Avaliamos cada caso antes de iniciar o serviço.",
  },
];

export const serviceFaqs: Record<string, FaqItem[]> = {
  "assistencia-tecnica-celular-sorocaba": [
    {
      question: "O que inclui a assistência técnica iPhone na NJCELL?",
      answer:
        "Fazemos diagnóstico completo, troca de tela, bateria, conector Lightning, câmera e reparo em placa para iPhone em Sorocaba com transparência no orçamento.",
    },
    {
      question: "Vocês consertam iPhone que não liga?",
      answer:
        "Sim. Avaliamos se o problema é bateria, conector, tela ou placa. Em muitos casos o defeito tem solução com reparo técnico especializado Apple.",
    },
    {
      question: "Como funciona o orçamento na NJCELL?",
      answer:
        "Recebemos o iPhone, fazemos o diagnóstico e apresentamos o valor antes de qualquer reparo. Só iniciamos o serviço após sua aprovação.",
    },
  ],
  "troca-de-tela-sorocaba": [
    {
      question: "Quanto custa a troca de tela de iPhone em Sorocaba?",
      answer:
        "O valor varia conforme o modelo do iPhone e o tipo de display. Fazemos orçamento gratuito após avaliar o aparelho na NJCELL.",
    },
    {
      question: "Vocês trocam tela de iPhone com touch que não responde?",
      answer:
        "Sim. Trocamos telas com touch falhando, trincadas, com manchas ou sem imagem. Utilizamos peças de qualidade compatíveis com cada modelo Apple.",
    },
    {
      question: "A troca de tela demora quanto tempo?",
      answer:
        "Na maioria dos modelos de iPhone, a substituição é feita em até 30 minutos após aprovação do orçamento.",
    },
  ],
  "troca-de-bateria-sorocaba": [
    {
      question: "Como saber se preciso trocar a bateria do iPhone?",
      answer:
        "Sinais comuns são descarga rápida, aparelho desligando com carga restante, aquecimento excessivo e bateria inchada. Fazemos teste na loja para confirmar.",
    },
    {
      question: "A bateria nova tem garantia?",
      answer:
        "Sim. A troca de bateria de iPhone na NJCELL inclui garantia de 6 meses sobre o serviço e a peça instalada.",
    },
    {
      question: "Vocês trocam bateria de todos os modelos de iPhone?",
      answer:
        "Sim. Realizamos troca de bateria para iPhone em Sorocaba, desde modelos mais antigos até linhas recentes.",
    },
  ],
  "troca-de-conector-sorocaba": [
    {
      question: "Meu iPhone só carrega em certa posição. É o conector?",
      answer:
        "Muito provavelmente sim. Mau contato na entrada Lightning é comum. Fazemos diagnóstico na NJCELL.",
    },
    {
      question: "Vocês consertam entrada de carga molhada no iPhone?",
      answer:
        "Sim. Avaliamos oxidação e danos no conector Lightning. Em alguns casos é necessário limpeza técnica ou substituição da peça.",
    },
    {
      question: "A troca de conector resolve iPhone que não carrega?",
      answer:
        "Na maioria dos casos relacionados à porta de carga, sim. Se o problema for na placa, informamos após o diagnóstico.",
    },
  ],
  "reparo-em-placa-sorocaba": [
    {
      question: "O que é reparo em placa de iPhone?",
      answer:
        "É a correção de falhas no circuito interno do aparelho, como curto, oxidação ou componentes queimados. Exige equipamento e técnico especializado Apple.",
    },
    {
      question: "iPhone molhado tem conserto?",
      answer:
        "Depende do tempo e da extensão do dano. Quanto antes o aparelho for avaliado na NJCELL, maiores as chances de recuperação da placa.",
    },
    {
      question: "Vale a pena reparar a placa ou comprar outro iPhone?",
      answer:
        "Avaliamos custo-benefício no diagnóstico. Para muitos modelos, o reparo em placa é mais econômico que trocar o aparelho.",
    },
  ],
  "conserto-iphone-sorocaba": [
    {
      question: "Vocês consertam todos os modelos de iPhone?",
      answer:
        "Atendemos desde modelos mais antigos até linhas recentes de iPhone, incluindo troca de tela, bateria, câmera, conector e placa em Sorocaba.",
    },
    {
      question: "A troca de tela de iPhone perde qualidade?",
      answer:
        "Utilizamos peças de qualidade e testamos touch, brilho e sensores após a instalação para garantir bom funcionamento.",
    },
    {
      question: "Fazem diagnóstico de iPhone com problema na placa?",
      answer:
        "Sim. Nossa equipe técnica avalia iPhones que não ligam, reiniciam sozinhos ou apresentam falhas avançadas.",
    },
  ],
  "assistencia-macbook-sorocaba": [
    {
      question: "Quais problemas de MacBook vocês resolvem?",
      answer:
        "MacBook lento, tela com defeito, bateria ruim, teclado com falha, problemas de sistema e diagnóstico de placa em Sorocaba.",
    },
    {
      question: "Fazem upgrade de memória em Mac?",
      answer:
        "Dependendo do modelo, realizamos upgrade de memória, substituição de componentes e ajustes no macOS.",
    },
    {
      question: "MacBook molhado tem conserto?",
      answer:
        "Avaliamos cada caso. Oxidação e curto na placa podem ser tratados com diagnóstico técnico especializado na NJCELL.",
    },
  ],
};
