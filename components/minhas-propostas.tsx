'use client'

import Image from 'next/image'
import {
  Route,
  TrendingUp,
  CircleDollarSign,
  Users,
  Home,
  HeartHandshake,
  Sprout,
  Wheat,
  ArrowDown,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { cn } from '@/lib/utils'

type Cor = 'orange' | 'cyan'

const COR_MAP: Record<
  Cor,
  {
    border: string
    badgeBg: string
    badgeText: string
    text: string
    ring: string
    hoverShadow: string
    hoverBorder: string
    glow: string
  }
> = {
  orange: {
    border: 'border-l-novo-orange',
    badgeBg: 'bg-novo-orange',
    badgeText: 'text-novo-orange',
    text: 'text-novo-orange',
    ring: 'hover:border-novo-orange/70',
    hoverShadow: 'hover:shadow-novo-orange/25',
    hoverBorder: 'border-novo-orange/50',
    glow: 'group-hover:bg-novo-orange/10',
  },
  cyan: {
    border: 'border-l-cyan-400',
    badgeBg: 'bg-cyan-400',
    badgeText: 'text-cyan-400',
    text: 'text-cyan-400',
    ring: 'hover:border-cyan-400/70',
    hoverShadow: 'hover:shadow-cyan-400/25',
    hoverBorder: 'border-cyan-400/50',
    glow: 'group-hover:bg-cyan-400/10',
  },
}

const EIXOS = [
  {
    numero: '01',
    cor: 'orange' as Cor,
    categoria: 'Logística',
    icon: Route,
    tema: 'Custo Rondônia',
    nomeCompleto: 'Custo Rondônia — Logística & Mobilidade',
    resumo: 'Frete caro, filas de balsa e voos cancelados. Isolamento terrestre e aéreo sufoca o estado.',
    hashtag: '#CustoRondônia',
    diagnostico: {
      titulo: 'Diagnóstico & Indignação Local',
      icon: TrendingUp,
      texto:
        'A BR-364 e os voos comerciais são as duas veias que ligam Rondônia ao Brasil. Frete elevado, balsas lentas e passagens caríssimas encarecem tudo: do alimento na mesa ao acesso a Brasília e ao tratamento médico fora do estado.',
      destaqueLabel: 'Impacto direto',
      destaqueTexto: 'R$ 1,8 milhão de rondonienses pagam diariamente o preço do isolamento em frete e passagem.',
    },
    solucao: {
      titulo: 'Solução Proposta & Posição Política',
      icon: CircleDollarSign,
      texto:
        'Pacto federal para duplicação preventiva da BR-364, pressão sobre a ANAC por rotas aéreas acessíveis e fiscalização contínua das balanças, balsas e trechos críticos.',
      slogan: '#CustoRondônia · O Pedágio Invisível no seu Bolso.',
    },
  },
  {
    numero: '02',
    cor: 'cyan' as Cor,
    categoria: 'Acolhimento',
    icon: Users,
    tema: 'Proteção à Família',
    nomeCompleto: 'Proteção & Acolhimento à Família',
    resumo: 'Altos índices de violência doméstica e falta de delegacias 24h. Resposta emocional forte.',
    hashtag: '#NenhumaFamíliaSó',
    diagnostico: {
      titulo: 'Urgência Social e Realidade',
      icon: Home,
      texto:
        'Rondônia figura entre os maiores índices de violência doméstica do país. No interior, a falta de Delegacias 24h e de rede de apoio deixa mulheres, crianças e idosos desamparados no pior momento.',
      destaqueLabel: 'Realidade',
      destaqueTexto: 'Falta de suporte contínuo e acolhimento ágil para famílias vulneráveis.',
    },
    solucao: {
      titulo: 'Rede "Nenhuma Família Só"',
      icon: HeartHandshake,
      texto:
        'Casas de acolhimento regionalizadas para toda a família, linha direta de emergência via WhatsApp e fiscalização rigorosa dos recursos de segurança e assistência social do estado.',
      slogan: '#NenhumaFamíliaSó · Proteção 24h e Resposta Rápida.',
    },
  },
  {
    numero: '03',
    cor: 'orange' as Cor,
    categoria: 'Economia',
    icon: Sprout,
    tema: 'Liberdade & Agro',
    nomeCompleto: 'Liberdade Econômica & Agro Sustentável',
    resumo: 'Burocracia ambiental e desincentivo ao produtor. Foco em crédito jovem e café robusta.',
    hashtag: '#LiberdadeParaProduzir',
    diagnostico: {
      titulo: 'Vocação Produtiva & Trava Burocrática',
      icon: Sprout,
      texto:
        'O produtor rural de Rondônia é o grande motor do Estado. No entanto, enfrenta burocracia ambiental punitiva, incerteza jurídica e falta de crédito acessível para o jovem produtor rural.',
      destaqueLabel: 'Foco de Inovação',
      destaqueTexto: 'Valorização do Café Robusta e agronegócio de valor agregado.',
    },
    solucao: {
      titulo: 'Proposta de Descomplicação',
      icon: Wheat,
      texto:
        'Aplicação da Lei da Liberdade Econômica no campo, desburocratização de licenças, fomento ao crédito jovem agrícola e apoio à tecnologia de torrefação e exportação do café.',
      slogan: '#LiberdadeParaProduzir · Do Campo ao Valor Agregado.',
    },
  },
]

function oposto(cor: Cor): Cor {
  return cor === 'orange' ? 'cyan' : 'orange'
}

function scrollToEixo(numero: string) {
  const el = document.getElementById(`eixo-${numero}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function ResumoCard({ eixo }: { eixo: (typeof EIXOS)[number] }) {
  const cor = COR_MAP[eixo.cor]
  const Icon = eixo.icon

  return (
    <button
      type="button"
      onClick={() => scrollToEixo(eixo.numero)}
      className={cn(
        'group relative h-full overflow-hidden rounded-2xl border border-l-4 border-white/10 bg-novo-navy p-6 text-left shadow-lg shadow-black/20 transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-2xl',
        cor.border,
        cor.ring,
        cor.hoverShadow,
      )}
    >
      {/* glow que aparece no hover */}
      <span
        className={cn(
          'pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100',
          cor.glow,
        )}
      />

      <div className="relative flex items-center justify-between">
        <Icon
          className={cn(
            'size-7 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6',
            cor.text,
          )}
        />
        <span
          className={cn(
            'rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-novo-navy transition-transform duration-300 group-hover:scale-105',
            cor.badgeBg,
          )}
        >
          {eixo.categoria}
        </span>
      </div>

      <h3 className="relative mt-4 font-display text-2xl leading-none tracking-wide text-white">
        {eixo.tema}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
        {eixo.resumo}
      </p>

      <div className="relative mt-4 flex items-center justify-between">
        <span className={cn('text-sm font-bold', cor.text)}>{eixo.hashtag}</span>
        <ArrowDown
          className={cn(
            'size-4 text-white/40 transition-all duration-300 group-hover:translate-y-1 group-hover:text-white',
          )}
        />
      </div>
    </button>
  )
}

function DetalheCard({
  cor,
  titulo,
  IconTitulo,
  texto,
  children,
}: {
  cor: Cor
  titulo: string
  IconTitulo: React.ComponentType<{ className?: string }>
  texto: string
  children: React.ReactNode
}) {
  const c = COR_MAP[cor]
  return (
    <div
      className={cn(
        'group rounded-2xl border border-l-4 border-white/10 bg-novo-navy p-6 transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-xl',
        c.border,
        c.ring,
        c.hoverShadow,
      )}
    >
      <h4
        className={cn(
          'flex items-center gap-2 font-display text-lg tracking-wide transition-transform duration-300 group-hover:translate-x-0.5',
          c.text,
        )}
      >
        <IconTitulo className="size-5 transition-transform duration-300 group-hover:scale-110" />
        {titulo}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{texto}</p>
      {children}
    </div>
  )
}

function EixoDetalhado({ eixo }: { eixo: (typeof EIXOS)[number] }) {
  return (
    <Reveal>
      <div
        id={`eixo-${eixo.numero}`}
        className="scroll-mt-24 rounded-3xl border border-white/10 bg-novo-navy/95 p-6 md:p-10"
      >
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-2xl leading-none tracking-wide text-white md:text-3xl">
            Eixo Temático {eixo.numero}: {eixo.nomeCompleto}
          </h3>
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide',
              COR_MAP[eixo.cor].text,
              COR_MAP[eixo.cor].hoverBorder,
            )}
          >
            Diagnóstico Aprofundado
          </span>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DetalheCard
            cor={eixo.cor}
            titulo={eixo.diagnostico.titulo}
            IconTitulo={eixo.diagnostico.icon}
            texto={eixo.diagnostico.texto}
          >
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              <strong className="font-semibold text-white">{eixo.diagnostico.destaqueLabel}:</strong>{' '}
              {eixo.diagnostico.destaqueTexto}
            </p>
          </DetalheCard>

          <DetalheCard
            cor={oposto(eixo.cor)}
            titulo={eixo.solucao.titulo}
            IconTitulo={eixo.solucao.icon}
            texto={eixo.solucao.texto}
          >
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              <strong className="font-semibold text-white">Slogan/Hashtag:</strong> {eixo.solucao.slogan}
            </p>
          </DetalheCard>
        </div>
      </div>
    </Reveal>
  )
}

export function MinhasPropostas() {
  return (
    <section id="propostas" className="relative bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-novo-orange">
              As Soluções
            </span>
            <h2 className="mt-3 text-balance font-display text-5xl leading-none tracking-wide text-novo-navy md:text-6xl">
              Minhas propostas para Rondônia
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Do essencial ao futuro: um plano concreto em três eixos, porque quanto mais concreto o
              problema, mais concreta é a solução.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Image
              src="/images/LOGO_HORIZONTAL_AZUL.png"
              alt="Adriana Martins 3030 - Partido NOVO"
              width={320}
              height={64}
              className="mx-auto mt-8 h-10 w-auto object-contain md:h-30"
            />
            <p className="mt-1 font-display text-3xl italic tracking-wide text-novo-orange">
              Coragem para Cuidar!
            </p>
          </Reveal>
        </div>

        {/* Cards-resumo — clicáveis, rolam até o diagnóstico correspondente */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EIXOS.map((e, i) => (
            <Reveal key={e.numero} delay={i * 100} className="h-full">
              <ResumoCard eixo={e} />
            </Reveal>
          ))}
        </div>

        {/* Diagnóstico aprofundado dos 3 eixos, todos visíveis, empilhados */}
        <div className="mt-10 flex flex-col gap-8">
          {EIXOS.map((e) => (
            <EixoDetalhado key={e.numero} eixo={e} />
          ))}
        </div>

        {/* Contadores */}
        <Reveal>
          <div className="mt-16 grid gap-6 rounded-3xl bg-novo-navy p-8 text-center sm:grid-cols-3 md:p-12">
            <div>
              <p className="font-display text-6xl tracking-wide text-novo-yellow">
                <CountUp end={3} />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-white/70">Eixos Temáticos</p>
            </div>
            <div>
              <p className="font-display text-6xl tracking-wide text-novo-yellow">
                <CountUp end={3} />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-white/70">Ações Parlamentares</p>
            </div>
            <div>
              <p className="font-display text-6xl tracking-wide text-novo-yellow">
                <CountUp end={100} suffix="%" />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-white/70">Foco em Solução</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
