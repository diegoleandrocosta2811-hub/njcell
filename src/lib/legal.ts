import {
  ADDRESS,
  CITY,
  COMPANY_NAME,
  PHONE,
  SITE_URL,
  STATE,
  WHATSAPP_URL,
} from "./company";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

const lastUpdated = "22 de junho de 2026";

export const privacyPolicy = {
  title: "Política de Privacidade",
  subtitle: `Como a ${COMPANY_NAME} coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).`,
  lastUpdated,
  sections: [
    {
      title: "1. Quem somos",
      paragraphs: [
        `A ${COMPANY_NAME} é uma assistência técnica especializada em produtos Apple, com loja física em ${CITY}/${STATE}. Esta Política de Privacidade descreve como tratamos dados pessoais de clientes, visitantes do site ${SITE_URL} e pessoas que entram em contato conosco.`,
        `Controlador dos dados: ${COMPANY_NAME}. Endereço: ${ADDRESS}.`,
      ],
    },
    {
      title: "2. Dados que podemos coletar",
      paragraphs: [
        "Dados de identificação e contato: nome, telefone, e-mail e mensagens enviadas por WhatsApp ou outros canais.",
        "Dados do aparelho: modelo, defeito relatado, histórico de reparo e informações necessárias para diagnóstico e orçamento.",
        "Dados de navegação: endereço IP, páginas visitadas, tipo de navegador, dispositivo e cookies, quando ferramentas de análise estiverem ativas (Google Analytics, Google Tag Manager ou Meta Pixel, conforme configuração do site).",
        "Dados de localização aproximada: derivados do acesso ao site ou do uso de mapas integrados.",
      ],
    },
    {
      title: "3. Finalidades do tratamento",
      paragraphs: [
        "Prestar assistência técnica, diagnóstico, orçamento e execução de reparos em produtos Apple.",
        "Responder solicitações de contato, dúvidas e suporte pós-venda, inclusive garantia.",
        "Melhorar a experiência no site, medir desempenho de campanhas e entender o interesse dos visitantes.",
        "Cumprir obrigações legais, fiscais e regulatórias aplicáveis ao nosso negócio.",
      ],
    },
    {
      title: "4. Bases legais (LGPD)",
      paragraphs: [
        "Execução de contrato ou procedimentos preliminares: quando você solicita orçamento ou deixa um aparelho para reparo.",
        "Legítimo interesse: para melhorar nossos serviços, garantir segurança do site e comunicar informações relevantes sobre reparos.",
        "Consentimento: quando aplicável ao uso de cookies de marketing ou comunicações opcionais.",
        "Cumprimento de obrigação legal: quando exigido por lei ou autoridade competente.",
      ],
    },
    {
      title: "5. Compartilhamento de dados",
      paragraphs: [
        "Não vendemos dados pessoais. Podemos compartilhar informações apenas quando necessário para a prestação do serviço (por exemplo, fornecedores de peças ou ferramentas de comunicação), com prestadores de tecnologia do site (hospedagem e analytics) ou por determinação legal.",
        "Ferramentas de terceiros podem processar dados conforme suas próprias políticas: Google, Meta/Facebook e WhatsApp/Meta.",
      ],
    },
    {
      title: "6. Retenção dos dados",
      paragraphs: [
        "Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas, atender obrigações legais e exercer direitos em processos administrativos ou judiciais.",
        "Registros de atendimento e reparo podem ser conservados pelo prazo aplicável à garantia e à legislação consumerista.",
      ],
    },
    {
      title: "7. Seus direitos",
      paragraphs: [
        "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação de dados desnecessários, informação sobre compartilhamentos e revogação de consentimento, nos termos da LGPD.",
        `Para exercer seus direitos, entre em contato pelo WhatsApp ${PHONE}, telefone ${PHONE} ou presencialmente em nossa loja em ${ADDRESS}.`,
      ],
    },
    {
      title: "8. Cookies e tecnologias similares",
      paragraphs: [
        "O site pode utilizar cookies e tecnologias de medição para funcionamento, estatísticas e marketing. Você pode gerenciar cookies nas configurações do seu navegador.",
        "A desativação de cookies pode limitar algumas funcionalidades de análise, sem impedir o contato por WhatsApp ou visita à loja.",
      ],
    },
    {
      title: "9. Segurança",
      paragraphs: [
        "Adotamos medidas técnicas e organizacionais razoáveis para proteger dados pessoais contra acesso não autorizado, perda ou alteração indevida.",
        "Nenhum sistema é totalmente imune a riscos; recomendamos que você também proteja seu dispositivo e suas credenciais de acesso.",
      ],
    },
    {
      title: "10. Alterações desta política",
      paragraphs: [
        `Podemos atualizar esta Política de Privacidade a qualquer momento. A data da última atualização será indicada no topo desta página. O uso continuado do site após alterações constitui ciência da versão vigente.`,
      ],
    },
    {
      title: "11. Contato",
      paragraphs: [
        `Dúvidas sobre privacidade: ${COMPANY_NAME}, ${ADDRESS}. WhatsApp: ${WHATSAPP_URL}. Telefone: ${PHONE}.`,
      ],
    },
  ] satisfies LegalSection[],
};

export const termsOfUse = {
  title: "Termos de Uso",
  subtitle: `Condições para utilização do site ${SITE_URL} e relacionamento com os serviços da ${COMPANY_NAME}.`,
  lastUpdated,
  sections: [
    {
      title: "1. Aceitação",
      paragraphs: [
        `Ao acessar o site ${SITE_URL} ou utilizar nossos canais de contato, você declara ter lido e concordado com estes Termos de Uso e com nossa Política de Privacidade.`,
      ],
    },
    {
      title: "2. Sobre a NJCELL",
      paragraphs: [
        `A ${COMPANY_NAME} é assistência técnica especializada em produtos Apple, com atendimento em ${CITY}/${STATE}. Atendemos exclusivamente a marca Apple: iPhone, iPad, MacBook, iMac e Apple Watch.`,
        `Endereço da loja: ${ADDRESS}.`,
      ],
    },
    {
      title: "3. Serviços oferecidos",
      paragraphs: [
        "O site apresenta informações sobre nossos serviços de reparo e assistência técnica. Os detalhes, prazos e valores são confirmados somente após diagnóstico e orçamento individualizado.",
        "Imagens, textos e descrições têm caráter informativo e podem ser atualizados sem aviso prévio.",
      ],
    },
    {
      title: "4. Orçamentos e aprovação",
      paragraphs: [
        "Todo reparo é precedido de diagnóstico e orçamento. O serviço só é iniciado após sua aprovação expressa do valor e das condições apresentadas.",
        "Orçamentos têm validade conforme informado no atendimento e podem variar conforme modelo do aparelho e complexidade do defeito.",
      ],
    },
    {
      title: "5. Garantia",
      paragraphs: [
        "Os reparos realizados pela NJCELL contam com garantia de 6 meses, conforme o tipo de serviço e peça utilizada, informada no momento do orçamento e registrada no atendimento.",
        "A garantia não cobre danos por mau uso, quedas, contato com líquidos após o reparo ou intervenções realizadas por terceiros.",
      ],
    },
    {
      title: "6. Responsabilidades do cliente",
      paragraphs: [
        "O cliente é responsável por informar corretamente o estado do aparelho, realizar backup de dados quando possível e retirar o equipamento dentro do prazo combinado.",
        "A NJCELL não se responsabiliza por perda de dados em aparelhos sem backup, salvo disposição legal em contrário.",
      ],
    },
    {
      title: "7. Limitações de responsabilidade",
      paragraphs: [
        "Empregamos boas práticas técnicas, porém alguns defeitos em placa ou aparelhos previamente danificados podem limitar a recuperação total do equipamento, situação que será comunicada no diagnóstico.",
        "O site é fornecido \"como está\". Não garantimos disponibilidade ininterrupta do site ou de links de terceiros.",
      ],
    },
    {
      title: "8. Propriedade intelectual",
      paragraphs: [
        `Marcas, logotipos, textos, imagens e layout do site são de propriedade da ${COMPANY_NAME} ou de seus licenciadores. É proibida a reprodução sem autorização prévia.`,
        "Apple, iPhone, iPad, MacBook, iMac e Apple Watch são marcas registradas da Apple Inc. A NJCELL é assistência técnica independente e não é afiliada à Apple.",
      ],
    },
    {
      title: "9. Links externos",
      paragraphs: [
        "O site pode conter links para Instagram, WhatsApp, Google Maps e outros serviços de terceiros. Não nos responsabilizamos pelo conteúdo ou políticas desses sites.",
      ],
    },
    {
      title: "10. Alterações dos termos",
      paragraphs: [
        "Podemos alterar estes Termos de Uso a qualquer momento. Recomendamos revisar esta página periodicamente. A data da última atualização consta no topo do documento.",
      ],
    },
    {
      title: "11. Lei aplicável e foro",
      paragraphs: [
        "Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Sorocaba/SP para dirimir controvérsias, salvo disposição legal em contrário em relação ao consumidor.",
      ],
    },
    {
      title: "12. Contato",
      paragraphs: [
        `Dúvidas sobre estes termos: ${COMPANY_NAME}, ${ADDRESS}. WhatsApp e telefone: ${PHONE}.`,
      ],
    },
  ] satisfies LegalSection[],
};
