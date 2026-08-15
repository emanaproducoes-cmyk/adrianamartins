export const WHATSAPP_NUMBER = '5569992865915'
export const WHATSAPP_DISPLAY = '(69) 99286-5915'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { href: '#historia', label: 'Minha História' },
  { href: '#rondonia', label: 'Rondônia Federal' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#somar', label: 'Somar Forças' },
]

export const PROBLEMAS = [
  {
    titulo: 'Malha viária precária',
    desc: 'Estradas esburacadas que travam o escoamento da produção rondoniense.',
  },
  {
    titulo: 'BR-364 crítica',
    desc: 'A principal via do estado com condições de manutenção perigosas.',
  },
  {
    titulo: 'Vicinais abandonadas',
    desc: 'Estradas rurais deterioradas isolam famílias e produtores.',
  },
  {
    titulo: 'Isolamento logístico',
    desc: 'Municípios do interior sem integração aérea e de transporte.',
  },
  {
    titulo: 'UBS desassistidas',
    desc: 'Postos de saúde sem médicos e sem insumos básicos.',
  },
  {
    titulo: 'Insegurança',
    desc: 'Ausência de delegacias estruturadas na área urbana e rural.',
  },
  {
    titulo: 'Excesso de burocracia',
    desc: 'Entraves que sufocam o pequeno produtor e o pequeno negócio.',
  },
  {
    titulo: 'Evasão de talentos',
    desc: 'Jovens deixam o estado por falta de oportunidades em tecnologia.',
  },
]

export const EIXOS = [
  {
    numero: '01',
    tema: 'Segurança & Acesso',
    resumo: 'Do essencial: garantir saúde, estradas e proteção para viver bem.',
    cor: 'green' as const,
    propostas: [
      'Equipamento direto para UBS e fomento a cozinhas comunitárias nos polos regionais.',
      'Fiscalização ativa das verbas de manutenção de rodovias e vicinais, com relatórios públicos.',
      'Delegacias 24h integradas e equipadas com tecnologia de monitoramento.',
    ],
  },
  {
    numero: '02',
    tema: 'Pertencimento & Renda',
    resumo: 'Valorizar o território, gerar renda e destravar a burocracia.',
    cor: 'orange' as const,
    propostas: [
      '"Rondônia de Valor": selos de qualidade e origem para café, carne e peixe rondonienses.',
      '"Balcão de Desburocratização": menos exigências para o pequeno empresário e produtor rural.',
      'Incentivos fiscais e de crédito para a sucessão familiar no campo.',
    ],
  },
  {
    numero: '03',
    tema: 'Futuro & Inovação',
    resumo: 'Conectar a juventude ao século 21 e reter talentos no estado.',
    cor: 'yellow' as const,
    propostas: [
      '"Conecta Rondônia": internet nas escolas rurais e laboratórios de inovação com UNIR e Institutos Federais.',
      'Microcrédito facilitado para startups e modernização do setor produtivo.',
      'Mentorias e rodadas de negócios conectando jovens empreendedores a investidores.',
    ],
  },
]

export const ETAPAS = [
  {
    titulo: 'Conhecer',
    desc: 'Explore o plano e entenda as propostas concretas para Rondônia.',
    exemplo: 'Leia os 3 eixos e descubra a solução para cada problema do estado.',
  },
  {
    titulo: 'Compartilhar',
    desc: 'Leve a mensagem para a sua família, vizinhos e grupos.',
    exemplo: 'Envie o site e os conteúdos da campanha no seu WhatsApp.',
  },
  {
    titulo: 'Militar',
    desc: 'Entre em um dos nossos grupos e some forças com a campanha.',
    exemplo: 'Escolha o grupo que combina com você no assistente de WhatsApp.',
  },
  {
    titulo: 'Votar',
    desc: 'No dia da eleição, confirme o voto na mudança concreta.',
    exemplo: 'Digite 3030 e eleja a força técnica de Rondônia em Brasília.',
  },
]
