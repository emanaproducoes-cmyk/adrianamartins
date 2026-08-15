import { Reveal } from '@/components/reveal'
import { PROBLEMAS } from '@/lib/site-data'
import {
  Construction,
  TriangleAlert,
  Route,
  PlaneTakeoff,
  Stethoscope,
  ShieldAlert,
  FileStack,
  Users,
} from 'lucide-react'

const ICONS = [
  Construction,
  TriangleAlert,
  Route,
  PlaneTakeoff,
  Stethoscope,
  ShieldAlert,
  FileStack,
  Users,
]

export function RondoniaProblemas() {
  return (
    <section id="rondonia" className="relative overflow-hidden bg-novo-navy py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-novo-orange/10 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-novo-orange">
              O Diagnóstico
            </span>
            <h2 className="mt-3 text-balance font-display text-5xl leading-none tracking-wide text-white md:text-6xl">
              Rondônia precisa ser federal
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/70">
              O cidadão de Rondônia não quer discurso genérico — quer garantia de sobrevivência e
              respostas imediatas. Estes são os gargalos concretos que travam o estado.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMAS.map((problema, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={problema.titulo} delay={(i % 4) * 90} as="article">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-novo-orange/60 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/30">
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-3 font-display text-6xl text-white/[0.06] transition-colors duration-300 group-hover:text-novo-orange/20"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-novo-orange/15 text-novo-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-novo-orange group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-4 font-display text-2xl leading-none tracking-wide text-white">
                    {problema.titulo}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                    {problema.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
