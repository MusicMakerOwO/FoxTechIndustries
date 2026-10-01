import type { ReactNode } from 'react'

export default function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main style={{ flex: 1, padding: '7rem 3rem 6rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ paddingBottom: '2rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--line)' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.5rem', color: 'var(--bright)' }}>
            {title}
          </h1>
          <p style={{ fontSize: '0.8125rem', color: 'var(--slate)' }}>
            Last updated {updated}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.85 }}>
          {children}
        </div>
      </div>
    </main>
  )
}
