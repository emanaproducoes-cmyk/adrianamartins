import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Adriana Martins 3030 — Coragem para Cuidar! Candidata a Deputada Federal por Rondônia.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          backgroundColor: '#0B1220',
          backgroundImage:
            'radial-gradient(circle at 82% 18%, rgba(255,111,44,0.35) 0%, rgba(11,18,32,0) 45%), radial-gradient(circle at 8% 92%, rgba(56,189,248,0.18) 0%, rgba(11,18,32,0) 40%)',
          fontFamily: 'sans-serif',
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 44, fontWeight: 800, color: '#FFFFFF' }}>
              Adriana Martins
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.65)',
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
    ),
    { ...size }
  )
}

