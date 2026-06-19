import { TimelineEvent, Lawyer, PracticeArea, Testimonial, FAQItem } from "./types";

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2012",
    title: "Fundação d'Auden & Associados",
    description: "Estabelecimento da sede em São Paulo com foco exclusivo em demandas empresariais complexas e assessoria de fusões e aquisições (M&A).",
  },
  {
    year: "25 Milhões+",
    title: "Primeira Grande Recuperação Fiscal",
    description: "Estruturação de tese jurídica tributária de vanguarda que resultou na recuperação e economia de recursos cruciais para indústrias nacionais.",
  },
  {
    year: "2018",
    title: "Presença nos Tribunais Superiores",
    description: "Inauguração da unidade de apoio institucional em Brasília/DF, fortalecendo a sustentação oral direta junto ao STJ e STF.",
  },
  {
    year: "2021",
    title: "Liderança em Planejamento Patrimonial",
    description: "Ampliação da área de Wealth Planning, assessorando mais de 50 famílias de alta renda na estruturação de holdings, trustes e holdings familiares.",
  },
  {
    year: "Hoje",
    title: "Excelência e Inovação Legal",
    description: "Consolidação como banca boutique com 98% de resoluções favoráveis em litígios cirúrgicos e implementação de assessoria em governança digital.",
  }
];

export const LAWYERS: Lawyer[] = [
  {
    name: "Dr. Henrique Auden",
    role: "Sócio Fundador & Head Tributário",
    oab: "OAB/SP 142.895",
    specialty: "Direito Tributário e Societário de Alta Complexidade",
    bio: "Graduado e Mestre em Direito Comercial pela USP, conta com mais de 20 anos de experiência estruturando blindagem fiscal, holdings patrimoniais e defesas tributárias estratégicas.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dra. Beatriz Valença",
    role: "Sócia Executiva & Head de Litígios",
    oab: "OAB/SP 210.456",
    specialty: "Contencioso Cível Estratégico e Tribunais Superiores",
    bio: "Especialista em Direito Processual Civil pela PUC-SP e com vivência em cortes internacionais. Lidera a equipe de contencioso em disputas contratuais complexas com foco em eficiência.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Felipe Castanhari",
    role: "Sócio Associado & Direito Digital",
    oab: "OAB/SP 382.910",
    specialty: "Compliance, LGPD, M&A e Direito de Startups",
    bio: "Formado pelo Mackenzie com especialização em Corporate Strategy pelo Insper, é pioneiro na estruturação de compliance de privacidade de dados para o setor de tecnologia na América Latina.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "societario-merg",
    iconName: "Briefcase",
    title: "Societário, M&A & Governança",
    summary: "Segurança societária plena para estruturar investimentos, transações societárias críticas e acordos de acionistas com alta visão de negócios.",
    details: [
      "Operações de M&A (Fusões, Aquisições e Incorporações).",
      "Elaboração de acordos de acionistas de alta robustez jurídica.",
      "Planejamento de governança corporativa e sucessão operacional.",
      "Assessoria preventiva na captação de investimentos de Venture Capital."
    ],
    features: ["Segurança Jurídica", "Visão de Negócios", "Mitigação de Riscos"]
  },
  {
    id: "tributario-fiscal",
    iconName: "FileSpreadsheet",
    title: "Tributário de Alta Performance",
    summary: "Maximização de eficiência financeira através da recuperação lícita de impostos e consultoria proativa em teses de repercussão geral.",
    details: [
      "Recuperação administrativa e judicial de créditos fiscais.",
      "Auditoria prévia no cruzamento de dados de obrigações acessórias.",
      "Defesa cirúrgica em autos de infração e execuções fiscais federais/estaduais.",
      "Análise de regimes tributários ideais para escalonamento comercial."
    ],
    features: ["Resgate de Créditos", "Defesa Ativa", "Redução de Custo Fiscal"]
  },
  {
    id: "patrimonio-wealth",
    iconName: "Shield",
    title: "Planejamento e Blindagem Patrimonial",
    summary: "Prevenção absoluta de perdas financeiras familiares através de holdings e estruturas de governança exclusivas para famílias empresárias.",
    details: [
      "Constituição impecável de holdings familiares e holdings imobiliárias.",
      "Estruturação de doações com cláusulas personalizadas de usufruto, reversão e impenhorabilidade.",
      "Alocação internacional e governança de Family Offices.",
      "Protocolos familiares minuciosos para transição de comando segura."
    ],
    features: ["Prevenção de Inventário", "Proteção de Ativos", "Paz Familiar"]
  },
  {
    id: "contencioso-elite",
    iconName: "Scale",
    title: "Litígios Cíveis & Tribunais Superiores",
    summary: "Atuação cirúrgica em litígios que envolvem risco reputacional ou heranças financeiras de valor relevante e sustentações estratégicas.",
    details: [
      "Representação em arbitragens complexas nacionais e internacionais.",
      "Ações judiciais de rescisão de contratos de grande porte e indenizações milionárias.",
      "Sustentação oral técnica de alta persuasão perante o STJ e STF.",
      "Elaboração de pareceres jurídicos de alta autoridade para embasamento processual."
    ],
    features: ["Voz ativa em Brasília", "Sólida Argumentação", "Foco em Solução"]
  },
  {
    id: "direito-digital",
    iconName: "Cpu",
    title: "Direito Digital & Compliance LGPD",
    summary: "Adequação completa ao ecossistema tecnológico contemporâneo para proteção de dados, segredos de propriedade industrial e propriedade intelectual.",
    details: [
      "Auditoria jurídica e mapeamento de fluxo de dados (Data Mapping) para LGPD.",
      "Redação e blindagem de Termos de Uso e Políticas de Privacidade.",
      "Assessoria em incidentes de vazamento e notificações perante a ANPD.",
      "Proteção de software, algoritmos empresariais e patentes digitais."
    ],
    features: ["Adequação Rápida", "Suporte a Vazamentos", "Inovação Protegida"]
  },
  {
    id: "contratos-negocios",
    iconName: "FileCheck",
    title: "Contratos de Alta Engenharia Jurídica",
    summary: "Modelagem de contratos nacionais e internacionais com cláusulas sofisticadas para mitigar passivos ocultos em negociações robustas.",
    details: [
      "Análise de integridade de passivos em contratos de infraestrutura, concessão e EPC.",
      "Assessoria contratual para distribuição comercial, franquias e logísticas integradas.",
      "Cláusulas compromissórias rigorosas para prevenção de quebra de confidencialidade.",
      "Adequação internacional para transações multinacionais de bens ou capital."
    ],
    features: ["Sem Brechas", "Minimização de Passivos", "Cláusulas Especializadas"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    initials: "L. E. G.",
    clientCategory: "Diretor-Presidente de Conglomerado Industrial de Alimentos",
    segment: "Societário & Sucessório",
    content: "A condução do nosso processo de reorganização societária e holding de controle foi feita de forma exemplar. Além da alta precisão técnica das minutas, o cuidado com as relações familiares trouxe uma leveza essencial ao processo.",
    rating: 5
  },
  {
    id: "test-2",
    initials: "C. F. S.",
    clientCategory: "CFO de Marketplace de Logística Integrada",
    segment: "Planejamento Tributário Estratégico",
    content: "Conseguimos recuperar expressivos valores em tributos cobrados indevidamente por anos, sem expor o negócio a riscos desnecessários. Recomendo o escritório pelo perfil cirúrgico, ético e extremamente corporativo.",
    rating: 5
  },
  {
    id: "test-3",
    initials: "M. A. O.",
    clientCategory: "Investidor de Real Estate e Desenvolvimento Imobiliário",
    segment: "Defesa Patrimonial & Wealth Mapping",
    content: "O profissionalismo e o sigilo absoluto foram os pilares que nos fizeram escolher a banca Auden. Hoje nossas holdings patrimoniais dão completa garantia de segurança à nossa linhagem e facilitação de transição.",
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Consultas",
    question: "Como funciona o primeiro atendimento ou consulta?",
    answer: "O atendimento inicial é estruturado sob absoluto sigilo profissional. Realizamos uma análise prévia das informações enviadas para identificar conflitos de interesses e, em seguida, agendamos uma conferência detalhada com um dos sócios especialistas para avaliar as possíveis estratégias jurídicas."
  },
  {
    category: "Geografia",
    question: "O escritório atua em todo o território nacional?",
    answer: "Sim. Nossas sedes principais estão em São Paulo-SP e Brasília-DF, mas nossa banca atende clientes em todo o território nacional por meio de tecnologia avançada de processo eletrônico e audiências/reuniões online integradas. Contamos também com parceiros estratégicos nas principais capitais brasileiras."
  },
  {
    category: "Tecnologia",
    question: "É possível realizar todo o processo e reuniões de forma 100% digital?",
    answer: "Perfeitamente. Em respeito ao tempo dos nossos clientes corporativos, oferecemos atendimento virtual integrado por videoconferência segura, assinatura eletrônica qualificada de procurações e documentos, e relatórios mensais de acompanhamento via e-mail ou central segura de atendimento."
  },
  {
    category: "Ética e Sigilo",
    question: "Como o escritório assegura a total confidencialidade dos meus dados?",
    answer: "A confidencialidade é a pedra angular da nossa advocacia de prestígio. Armazenamos todos os documentos de clientes em servidores protegidos por criptografia de nível militar e rígido compliance, operando sob o estrito sigilo assegurado pelo Estatuto da Advocacia e da OAB, respaldado pelas diretrizes éticas mais rigorosas do mercado nacional."
  },
  {
    category: "Honorários",
    question: "Como são determinados os valores dos honorários advocatícios?",
    answer: "Cada demanda é precificada de forma transparente e personalizada após a primeira análise do caso. Adotamos o modelo de Honorários Fixos Mensais (Retainer Fee) para assessoria continuada, Honorários de Êxito (Success Fee) de acordo com limites permitidos pela OAB em causas específicas, ou Honorários Fechados por projeto, sempre formalizados em contrato de prestação de serviços detalhado."
  }
];
