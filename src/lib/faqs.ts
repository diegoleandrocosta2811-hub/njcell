import type { FaqItem } from "./seo";

export const homeFaqs: FaqItem[] = [
  {
    question: "A NJCELL atende quais aparelhos Apple em Sorocaba?",
    answer:
      "Atendemos iPhone, iPad, MacBook, iMac e Apple Watch. Realizamos assistência técnica especializada em produtos Apple em Sorocaba, com diagnóstico, troca de peças e reparo em placa.",
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
  "troca-de-vidro-tela-sorocaba": [
    {
      question: "Quando vale a pena trocar só o vidro da tela do iPhone?",
      answer:
        "Quando o vidro está trincado ou quebrado, mas a imagem e o touch continuam normais. Na NJCELL avaliamos o aparelho em Sorocaba para confirmar se o display original está íntegro.",
    },
    {
      question: "Qual a diferença entre trocar o vidro e trocar a tela inteira?",
      answer:
        "Na troca de vidro mantemos o display original do iPhone e substituímos apenas a camada externa. Na troca de tela completa instalamos um módulo novo, indicado quando há falha na imagem, touch ou LCD.",
    },
    {
      question: "A troca de vidro preserva o True Tone e a qualidade original?",
      answer:
        "Sim, quando o serviço é viável. Por manter a tela original do aparelho, preservamos características do display Apple que seriam perdidas em algumas trocas de módulo completo.",
    },
  ],
  "troca-de-tampa-traseira-sorocaba": [
    {
      question: "Vocês trocam a tampa traseira de vidro do iPhone?",
      answer:
        "Sim. Realizamos troca de tampa traseira em iPhone em Sorocaba para aparelhos com vidro traseiro trincado, quebrado ou danificado após queda.",
    },
    {
      question: "A troca da tampa traseira afeta o carregamento sem fio?",
      answer:
        "Quando o serviço é feito corretamente, o carregamento sem fio continua funcionando nos modelos compatíveis. Testamos o aparelho após a instalação na NJCELL.",
    },
    {
      question: "Quanto tempo leva para trocar a tampa traseira do iPhone?",
      answer:
        "O prazo varia conforme o modelo. Após o diagnóstico e aprovação do orçamento, informamos o tempo estimado com clareza antes de iniciar o serviço.",
    },
  ],
  "troca-de-cameras-sorocaba": [
    {
      question: "Vocês trocam câmera frontal e traseira do iPhone?",
      answer:
        "Sim. Realizamos troca de câmeras frontal e traseira em iPhone em Sorocaba, conforme o modelo e o diagnóstico feito na NJCELL.",
    },
    {
      question: "A câmera do iPhone está borrada. Tem conserto?",
      answer:
        "Depende da causa. Pode ser sujeira na lente, módulo danificado ou falha interna. Avaliamos o aparelho e indicamos limpeza, troca da câmera ou outro reparo.",
    },
    {
      question: "A troca de câmera afeta o Face ID?",
      answer:
        "Na câmera frontal, avaliamos com cuidado por envolver o módulo TrueDepth em alguns modelos. Informamos o procedimento adequado após o diagnóstico.",
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
  "conserto-face-id-sorocaba": [
    {
      question: "Por que o Face ID do meu iPhone parou de funcionar?",
      answer:
        "As causas mais comuns são dano no módulo TrueDepth após queda ou umidade, troca de tela sem calibração adequada ou falha em componentes da placa. Fazemos diagnóstico na NJCELL para identificar a origem.",
    },
    {
      question: "Vocês reparam Face ID que parou depois da troca de tela?",
      answer:
        "Sim. Esse é um dos casos mais frequentes. Avaliamos o módulo frontal, sensores e conexões para restaurar o reconhecimento facial quando o reparo é viável.",
    },
    {
      question: "Todo iPhone com Face ID pode ser reparado?",
      answer:
        "Depende do modelo e da extensão do dano. Após o diagnóstico em Sorocaba, informamos se o reparo envolve o módulo TrueDepth, ajustes na placa ou outra intervenção.",
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
  "conserto-ipad-sorocaba": [
    {
      question: "Vocês consertam todos os modelos de iPad?",
      answer:
        "Sim. Atendemos iPad, iPad Air, iPad Pro e iPad mini em Sorocaba, com troca de tela, bateria e reparos mais avançados.",
    },
    {
      question: "Quanto tempo leva para trocar a tela do iPad?",
      answer:
        "O prazo varia conforme o modelo. Após o diagnóstico e aprovação do orçamento, informamos o tempo estimado com clareza.",
    },
    {
      question: "iPad molhado tem conserto?",
      answer:
        "Depende da extensão do dano. Quanto antes o aparelho for avaliado na NJCELL, maiores as chances de recuperação.",
    },
  ],
  "troca-de-tela-ipad-sorocaba": [
    {
      question: "Quanto custa a troca de tela de iPad em Sorocaba?",
      answer:
        "O valor varia conforme o modelo do iPad e o tipo de display. Fazemos orçamento gratuito após avaliar o aparelho na NJCELL.",
    },
    {
      question: "Vocês trocam tela de iPad com touch que não responde?",
      answer:
        "Sim. Trocamos telas com touch falhando, trincadas, com manchas ou sem imagem para iPad Air, Pro e mini.",
    },
    {
      question: "A troca de tela do iPad tem garantia?",
      answer:
        "Sim. O serviço inclui garantia de 6 meses sobre a instalação e a peça utilizada.",
    },
  ],
  "troca-de-bateria-ipad-sorocaba": [
    {
      question: "Como saber se preciso trocar a bateria do iPad?",
      answer:
        "Sinais comuns são descarga rápida, aparelho desligando com carga restante, aquecimento excessivo e bateria inchada. Fazemos teste na loja.",
    },
    {
      question: "A bateria nova do iPad tem garantia?",
      answer:
        "Sim. A troca de bateria de iPad na NJCELL inclui garantia de 6 meses sobre o serviço e a peça instalada.",
    },
    {
      question: "Vocês trocam bateria de iPad Pro e iPad Air?",
      answer:
        "Sim. Realizamos troca de bateria para diferentes modelos de iPad em Sorocaba, sempre com diagnóstico prévio.",
    },
  ],
  "conserto-apple-watch-sorocaba": [
    {
      question: "Vocês consertam Apple Watch em Sorocaba?",
      answer:
        "Sim. Realizamos conserto de Apple Watch com troca de tela, bateria e diagnóstico técnico para diferentes séries e modelos.",
    },
    {
      question: "Apple Watch molhado tem conserto?",
      answer:
        "Depende do tempo e da extensão do dano. Avaliamos cada caso na NJCELL antes de indicar o reparo.",
    },
    {
      question: "Quais modelos de Apple Watch vocês atendem?",
      answer:
        "Atendemos Apple Watch Series, SE e modelos recentes. O orçamento depende da série e do tipo de reparo necessário.",
    },
  ],
  "troca-de-tela-apple-watch-sorocaba": [
    {
      question: "Vocês trocam tela de Apple Watch trincada?",
      answer:
        "Sim. Fazemos troca de tela e vidro de Apple Watch em Sorocaba para relógios com display quebrado ou touch com falha.",
    },
    {
      question: "A troca de tela afeta a resistência à água?",
      answer:
        "Após o reparo, testamos o funcionamento do relógio. Informamos sobre cuidados e limitações conforme o modelo e o serviço realizado.",
    },
    {
      question: "Quanto custa trocar a tela do Apple Watch?",
      answer:
        "O valor varia conforme a série do relógio. Fazemos orçamento gratuito após avaliar o aparelho na NJCELL.",
    },
  ],
  "troca-de-bateria-apple-watch-sorocaba": [
    {
      question: "Como saber se preciso trocar a bateria do Apple Watch?",
      answer:
        "Sinais comuns são descarga muito rápida, relógio desligando antes do fim do dia e aquecimento durante o uso. Fazemos teste na loja.",
    },
    {
      question: "A troca de bateria melhora a autonomia do Apple Watch?",
      answer:
        "Sim. Com bateria nova e desgaste corrigido, a autonomia volta a ficar mais próxima do esperado para o modelo.",
    },
    {
      question: "A troca de bateria do Apple Watch tem garantia?",
      answer:
        "Sim. O serviço na NJCELL inclui garantia de 6 meses sobre a instalação e a peça utilizada.",
    },
  ],
};
