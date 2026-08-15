'use client'

import { useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink, WHATSAPP_DISPLAY } from '@/lib/site-data'

export function Hero() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mensagem = nome
      ? `Olá! Meu nome é ${nome}. Quero apoiar a campanha Adriana Martins 3030 e receber as propostas.`
      : 'Olá! Quero apoiar a campanha Adriana Martins 3030 e receber as propostas.'
    window.open(whatsappLink(mensagem), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden bg-novo-navy-deep py-24 text-white md:py-32">
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 size-[520px] rounded-full bg-novo-orange/20 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 size-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
        {/* Texto principal */}
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-novo-orange/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-novo-orange">
            A Hora é Agora
          </span>

          <h1 className="mt-5 font-display text-6xl uppercase leading-[0.95] tracking-wide text-white md:text-7xl">
            Coragem
            <br />
            <span className="text-novo-orange">Para Cuidar!</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            Rondônia precisa de uma voz técnica e firme em Brasília. Deixe seus dados e receba as
            propostas da campanha diretamente no seu WhatsApp. Juntos, vamos transformar problemas
            concretos em soluções concretas.
          </p>
        </Reveal>

        {/* Card de captação */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-white/10 bg-novo-navy/80 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="hero-nome" className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Nome completo
                </label>
                <input
                  id="hero-nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-novo-orange"
                />
              </div>

              <div>
                <label htmlFor="hero-telefone" className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  WhatsApp
                </label>
                <input
                  id="hero-telefone"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(69) 9 9999-9999"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-novo-orange"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-novo-orange px-6 py-4 font-display text-lg uppercase tracking-wide text-white transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                <ArrowRight className="size-5" />
                Quero Apoiar
              </button>
            </form>

            <a
              href={whatsappLink('Olá! Quero falar com a campanha Adriana Martins 3030.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-white/50 transition-colors hover:text-novo-yellow"
            >
              <MessageCircle className="size-4" />
              Prefiro falar direto no WhatsApp oficial ({WHATSAPP_DISPLAY})
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
