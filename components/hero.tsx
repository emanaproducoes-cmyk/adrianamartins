'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const onScroll = () => setOffset(window.scrollY * 0.15)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-novo-navy-deep pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* Glow decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 size-[520px] rounded-full bg-novo-orange/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-novo-green/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        {/* Coluna texto */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-novo-orange/40 bg-novo-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-novo-yellow">
            <ShieldCheck className="size-4" />
            Candidata a Deputada Federal
          </span>

          <h1 className="mt-5 font-display text-6xl leading-[0.92] tracking-wide text-white sm:text-7xl md:text-8xl">
            Coragem
            <br />
            <span className="text-novo-orange">para Cuidar!</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
            Adriana Martins leva a Brasília uma visão{' '}
            <strong className="font-semibold text-white">técnica, jurídica e moderna</strong> para os
            desafios de Rondônia — do desenvolvimento da logística e infraestrutura à proteção jurídica
            e social da mulher e da família.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

        {/* Coluna imagem — HERO HEADER (sem distorção) */}
        <div className="order-1 lg:order-2" style={{ transform: `translateY(${offset}px)` }}>
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5">
            <Image
              src="/images/hero-adriana.png"
              alt="Adriana Martins, candidata a Deputada Federal 3030, com a bandeira de Rondônia e o Congresso Nacional ao fundo"
              width={1731}
              height={920}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
