import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('support@notfbi.dev').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main style={{ flex: 1, padding: '7rem 3rem 6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ paddingBottom: '2.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--ember)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Contact
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--bright)' }}>
            Get in touch.
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Questions, bug reports, data requests, or a project you'd like to commission. Every message is read by a person and answered directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                border: '1px solid var(--line)', borderRadius: '8px',
                padding: '1rem 1.25rem', background: 'var(--surface)', gap: '1rem',
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Email
                  </div>
                  <a href="mailto:support@notfbi.dev" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--bright)' }}>
                    support@notfbi.dev
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  style={{
                    fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600,
                    background: copied ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.07)',
                    color: copied ? '#4ade80' : 'var(--muted)',
                    border: '1px solid var(--line)', padding: '0.4rem 0.9rem',
                    cursor: 'pointer', borderRadius: '5px', letterSpacing: '-0.01em',
                    transition: 'all 0.15s ease', flexShrink: 0,
                  }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                border: '1px solid var(--line)', borderRadius: '8px',
                padding: '1rem 1.25rem', background: 'var(--surface)',
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Discord support server
                  </div>
                  <a href="https://discord.gg/9SR6fnbRuV" target="_blank" rel="noreferrer" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--bright)' }}>
                    discord.gg/9SR6fnbRuV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Other channels
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'GitHub', value: 'github.com/MusicMakerOwO', href: 'https://github.com/MusicMakerOwO' },
                { label: 'Discord', value: '@musicmaker', href: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer"
                      style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--bright)', textDecoration: 'none', transition: 'opacity 0.12s' }}
                      onMouseEnter={e => (e.currentTarget).style.opacity = '0.65'}
                      onMouseLeave={e => (e.currentTarget).style.opacity = '1'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--bright)' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--bright)', marginBottom: '0.5rem' }}>
                Interested in a commission?
              </h3>
              <p style={{ fontSize: '0.8375rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Email us a few lines about what you need: what it should do, who it's for, and any deadline. We'll reply with whether it's something we can take on.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}