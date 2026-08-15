'use client'

import Image from 'next/image'
import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function Hero() {
  return (
    <>
      <section
        id="topo"
        className="relative flex min-h-[92vh] items-end overflow-hidden bg-novo-navy-deep pt-24"
      >
        {/* Banner completo */}
        <Image
          src="/images/hero-banner.png"
          alt="Adriana Martins, candidata a Deputada Federal 3030, com a bandeira de Rondônia e o Congresso Nacional ao fundo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Camada de leitura — cor única (navy) unificando o fundo, sem blur */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-novo-navy-deep via-novo-navy-deep/35 to-novo-navy-deep/10"
        />

        {/* Selo — topo esquerdo */}
        <span className="absolute left-4 top-24 z-10 inline-flex items-center gap-2 rounded-full border border-novo-orange/40 bg-novo-navy-deep/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-novo-yellow backdrop-blur-sm md:left-8">
          <ShieldCheck className="size-4" />
          Candidata a Deputada Federal
        </span>

        {/* Conteúdo — canto inferior direito */}
        <div className="relative z-10 ml-auto w-full max-w-xl px-4 pb-14 text-right md:px-8 md:pb-20">
          <h1 className="font-display text-5xl leading-[0.92] tracking-wide text-white sm:text-6xl md:text-7xl">
            Coragem
            <br />
            <span className="text-novo-orange">para Cuidar!</span>
          </h1>

          <p className="mt-4 ml-auto max-w-md text-pretty text-sm leading-relaxed text-white/85 md:text-base">
            Adriana Martins leva a Brasília uma visão{' '}
            <strong className="font-semibold text-white">técnica, jurídica e moderna</strong> para os
            desafios de Rondônia.
          </p>

          <div className="mt-7 flex flex-col items-end gap-3 sm:flex-row sm:justify-end">
            <a
              href={whatsappLink('Olá! Quero apoiar a campanha da Adriana Martins 3030.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-novo-orange px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-novo-orange/25 transition-all duration-300 hover:scale-[1.03] hover:bg-novo-orange-dark hover:shadow-xl hover:shadow-novo-orange/40"
            >
              <HeartHandshake className="size-5" />
              Quero Apoiar
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#propostas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:border-novo-yellow hover:bg-white/5 hover:text-novo-yellow"
            >
              Conhecer o Plano
            </a>
          </div>
        </div>
      </section>

      {/* Barra laranja logo abaixo do Hero */}
      <div className="bg-novo-orange py-3 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-white sm:text-base">
          Coragem para cuidar de Rondônia — conheça o plano de governo
        </p>
      </div>
    </>
  )
}
