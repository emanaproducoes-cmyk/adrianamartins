import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt =
  'Adriana Martins 3030 — Coragem para Cuidar! Candidata a Deputada Federal por Rondônia.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Lida uma única vez, fora da função — a imagem não muda por request.
const heroImageData = await readFile(
  join(process.cwd(), 'public/images/hero-adriana.png'),
  'base64'
)
const heroImageSrc = `data:image/png;base64,${heroImageData}`

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#0B1220',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Imagem do hero como fundo */}
        <img
          src={heroImageSrc}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            objectFit: 'cover',
            objectPosition: '60% center',
          }}
        />

        {/* Overlay escuro + acento de marca por cima da foto, pra manter o texto legível */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: 'flex',
            backgroundColor: 'rgba(11,18,32,0.62)',
            backgroundImage:
              'linear-gradient(180deg, rgba(11,18,32,0.45) 0%, rgba(11,18,32,0.65) 50%, rgba(11,18,32,0.92) 100%), radial-gradient(circle at 82% 18%, rgba(255,111,44,0.28) 0%, rgba(11,18,32,0) 45%)',
          }}
        />

        {/* Conteúdo, por cima da imagem */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px',
          }}
        >
          {/* Selo topo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '10px 22px',
              borderRadius: 999,
              border: '2px solid rgba(255,138,61,0.6)',
              color: '#FF8A3D',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              width: 'fit-content',
              backgroundColor: 'rgba(11,18,32,0.4)',
            }}
          >
            Candidata a Deputada Federal
          </div>

          {/* Bloco central */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 104,
                fontWeight: 800,
                lineHeight: 0.95,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Coragem
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 104,
                fontWeight: 800,
                lineHeight: 0.95,
                color: '#FF6F2C',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Para Cuidar!
            </div>
          </div>

          {/* Rodapé */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 44,
                  fontWeight: 800,
                  color: '#FFFFFF',
                }}
              >
                Adriana Martins
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 26,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  marginTop: 6,
                }}
              >
                Deputada Federal · Rondônia · Partido NOVO
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 40px',
                borderRadius: 24,
                backgroundColor: '#FF6F2C',
                color: '#FFFFFF',
                fontSize: 48,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              3030
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
