'use client'

import { useRef } from 'react'
import { Check } from 'lucide-react'
import { EIXOS } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { cn } from '@/lib/utils'

const COR_MAP = {
  green: {
    accent: 'text-novo-green',
    badge: 'bg-novo-green',
    ring: 'hover:border-novo-green/60',
    check: 'text-novo-green',
    glow: 'group-hover:shadow-novo-green/20',
  },
  orange: {
    accent: 'text-novo-orange',
    badge: 'bg-novo-orange',
    ring: 'hover:border-novo-orange/60',
    check: 'text-novo-orange',
    glow: 'group-hover:shadow-novo-orange/20',
  },
  yellow: {
    accent: 'text-novo-yellow',
    badge: 'bg-novo-yellow',
    ring: 'hover:border-novo-yellow/60',
    check: 'text-novo-yellow',
    glow: 'group-hover:shadow-novo-yellow/20',
  },
} as const

function TiltCard({ eixo, index }: { eixo: (typeof EIXOS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const cor = COR_MAP[eixo.cor]

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <Reveal delay={index * 120} className="h-full">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={cn(
          'group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 will-change-transform hover:shadow-2xl',
          cor.ring,
          cor.glow,
        )}
      >
        <div className="flex items-center justify-between">
          <span className={cn('font-display text-6xl leading-none tracking-wide', cor.accent)}>
            {eixo.numero}
          </span>
          <span
            className={cn(
              'rounded-full px-3 py-1 font-display text-lg tracking-wide text-white',
              cor.badge,
            )}
          >
            Eixo {eixo.numero}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl leading-none tracking-wide text-novo-navy">
          {eixo.tema}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{eixo.resumo}</p>

        <ul className="mt-6 space-y-3">
          {eixo.propostas.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span
                className={cn(
                  'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted transition-colors',
                  cor.check,
                )}
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-foreground/90">{p}</span>
            </li>
          ))}
        </ul>
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
            <p className="mt-8 font-display text-3xl italic tracking-wide text-novo-orange">
              Coragem para Cuidar!
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {EIXOS.map((eixo, i) => (
            <TiltCard key={eixo.numero} eixo={eixo} index={i} />
          ))}
        </div>

        {/* Contadores */}
        <Reveal>
          <div className="mt-16 grid gap-6 rounded-3xl bg-novo-navy p-8 text-center sm:grid-cols-3 md:p-12">
            <div>
              <p className="font-display text-6xl tracking-wide text-novo-yellow">
                <CountUp end={3} />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-white/70">Bandeiras Macro</p>
            </div>
            <div>
              <p className="font-display text-6xl tracking-wide text-novo-yellow">
                <CountUp end={9} suffix="+" />
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-white/70">Propostas Concretas</p>
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
