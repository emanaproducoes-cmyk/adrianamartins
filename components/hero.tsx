'use client'

import Image from 'next/image'
import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function Hero() {
  return (
    <>
      <section
        id="topo"
        className="relative bg-novo-navy-deep pt-24 pb-10 md:pt-28 md:pb-14"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Selo */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-novo-orange/40 bg-novo-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-novo-yellow">
            <ShieldCheck className="size-4" />
            Candidata a Deputada Federal
          </span>

          {/* Moldura do banner — tamanho contido, não ocupa a tela inteira */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5 sm:aspect-[16/10] md:aspect-[21/9]">
            <Image
              src="/images/hero-adriana.png"
              alt="Adriana Martins, candidata a Deputada Federal 3030, com a bandeira de Rondônia e o Congresso Nacional ao fundo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />

            {/* Camada de leitura — cor única (navy), sem blur */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-novo-navy-deep via-novo-navy-deep/40 to-transparent"
            />

            {/* Conteúdo — canto inferior direito do banner */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 text-center sm:px-6 sm:pb-8 md:right-0 md:left-auto md:max-w-lg md:px-8 md:pb-10 md:text-right">
              <h1 className="font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                Coragem
                <br />
                <span className="text-novo-orange">para Cuidar!</span>
              </h1>

              <p className="mx-auto mt-3 max-w-md text-pretty text-xs leading-relaxed text-white/85 sm:text-sm md:ml-auto md:mr-0 md:text-base">
                Adriana Martins leva a Brasília uma visão{' '}
                <strong className="font-semibold text-white">técnica, jurídica e moderna</strong> para os
                desafios de Rondônia.
              </p>

              <div className="mt-4 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-5 md:items-end md:justify-end">
                <a
                  href={whatsappLink('Olá! Quero apoiar a campanha da Adriana Martins 3030.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-novo-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-novo-orange/25 transition-all duration-300 hover:scale-[1.03] hover:bg-novo-orange-dark hover:shadow-xl hover:shadow-novo-orange/40 sm:w-auto md:px-7 md:py-4 md:text-base"
                >
                  <HeartHandshake className="size-4 md:size-5" />
                  Quero Apoiar
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 md:size-5" />
                </a>
                <a
                  href="#propostas"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:border-novo-yellow hover:bg-white/5 hover:text-novo-yellow sm:w-auto md:px-7 md:py-4 md:text-base"
                >
                  Conhecer o Plano
                </a>
              </div>
            </div>
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
