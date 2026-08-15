'use client'

import Image from 'next/image'
import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function Hero() {
  return (
    <>
      <section
        id="topo"
        className="relative flex min-h-[100svh] items-end overflow-hidden bg-novo-navy-deep pt-20 sm:min-h-[92vh] md:pt-24"
      >
        {/* Banner completo */}
        <Image
          src="/images/hero-adriana.png"
          alt="Adriana Martins, candidata a Deputada Federal 3030, com a bandeira de Rondônia e o Congresso Nacional ao fundo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Camada de leitura — cor única (navy) unificando o fundo, sem blur */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-novo-navy-deep via-novo-navy-deep/50 to-novo-navy-deep/20 md:via-novo-navy-deep/35 md:to-novo-navy-deep/10"
        />

        {/* Selo — topo, centralizado no mobile / esquerda a partir de md */}
        <span className="absolute left-1/2 top-20 z-10 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-novo-orange/40 bg-novo-navy-deep/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-novo-yellow backdrop-blur-sm sm:text-xs sm:tracking-[0.2em] md:left-8 md:top-24 md:translate-x-0">
          <ShieldCheck className="size-4" />
          Candidata a Deputada Federal
        </span>

        {/* Conteúdo — centralizado/empilhado no mobile, canto inferior direito a partir de md */}
        <div className="relative z-10 w-full px-4 pb-10 text-center sm:px-6 md:ml-auto md:max-w-xl md:px-8 md:pb-20 md:text-right">
          <h1 className="font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Coragem
            <br />
            <span className="text-novo-orange">para Cuidar!</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-white/85 md:ml-auto md:mr-0 md:text-base">
            Adriana Martins leva a Brasília uma visão{' '}
            <strong className="font-semibold text-white">técnica, jurídica e moderna</strong> para os
            desafios de Rondônia.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-7 md:items-end md:justify-end">
            <a
              href={whatsappLink('Olá! Quero apoiar a campanha da Adriana Martins 3030.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-novo-orange px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-novo-orange/25 transition-all duration-300 hover:scale-[1.03] hover:bg-novo-orange-dark hover:shadow-xl hover:shadow-novo-orange/40 sm:w-auto"
            >
              <HeartHandshake className="size-5" />
              Quero Apoiar
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#propostas"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:border-novo-yellow hover:bg-white/5 hover:text-novo-yellow sm:w-auto"
            >
              Conhecer o Plano
            </a>
          </div>
        </div>
      </section>

      {/* Barra laranja logo abaixo do Hero */}
      <div className="bg-novo-orange px-4 py-3 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-white sm:text-sm sm:tracking-[0.15em] md:text-base">
          Coragem para cuidar de Rondônia — conheça o plano de governo
        </p>
      </div>
    </>
  )
}
