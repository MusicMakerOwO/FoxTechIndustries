import { useState } from 'react'

const projects = [
  { name: 'Fox Box Insurance', href: 'https://notfbi.dev/', body: 'Backup and recovery for Discord servers.' },
  { name: 'Easy Invite Tracker', href: 'https://github.com/MusicMakerOwO/EasyInviteTracker', body: 'Minimal Discord invite tracker.' },
  { name: 'Dungeon Crawler', href: 'https://github.com/MusicMakerOwO/Buildathon-2025', body: 'Text RPG game for the Discord Buildathon 2025.' },
  { name: 'Self Host Manager', href: 'https://github.com/MusicMakerOwO/SelfHostManager', body: 'Easy process manager for self hosting projects.' },
]

const tools = [
  { name: 'SimplyJS', href: 'https://github.com/MusicMakerOwO/SimplyJS', body: 'TypeScript-first Discord library with one dependency. Three years in, nearly 1,000 tests, heading to beta. MIT licensed.' },
  { name: 'Micro Base', href: 'https://github.com/MusicMakerOwO/MicroBase', body: 'Premade Discord bot to skip project setup.' },
]

const stack = ['JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Rust (learning)']

function ArrowIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkList({ items }: { items: { name: string; href: string; body: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {items.map(item => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '1rem', padding: '0.875rem 0',
            borderBottom: '1px solid var(--line)',
            textDecoration: 'none', transition: 'opacity 0.12s ease',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
        >
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--bright)', marginBottom: '0.15rem' }}>
              {item.name}
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
              {item.body}
            </div>
          </div>
          <span style={{ color: 'var(--ember)', flexShrink: 0 }}><ArrowIcon /></span>
        </a>
      ))}
    </div>
  )
}

const tabs = [
  { id: 'company', label: 'The Company' },
  { id: 'founder', label: 'The Founder' },
] as const

type TabId = typeof tabs[number]['id']

export default function About() {
  const [activeTab, setActiveTab] = useState<TabId>('company')

  return (
    <main style={{ flex: 1, padding: '7rem 3rem 6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--ember)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              About
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--bright)' }}>
              Fox Tech Industries
            </h1>
          </div>

          <div style={{ display: 'inline-flex', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: '0.8125rem', fontWeight: 500, border: 'none', cursor: 'pointer',
                  padding: '0.6rem 1.25rem',
                  background: activeTab === tab.id ? 'rgba(255,255,255,0.07)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--bright)' : 'var(--muted)',
                  borderRight: tab.id === 'company' ? '1px solid var(--line)' : 'none',
                  transition: 'all 0.15s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'company' ? (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start', marginBottom: '4rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, lineHeight: 1.3, marginBottom: '1.5rem', color: 'var(--bright)' }}>
                  The studio behind the bots.
                </h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Fox Tech Industries LLC makes Fox Box Insurance, Easy Invite Tracker and the upcoming Dossier. Our work lives on Discord today, but the company isn't tied to any one platform, and we'll go wherever the tools are needed.
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.85 }}>
                  We're small by choice. Every line of code is written with intent, and nothing ships until we understand it completely. We'd rather build fewer things well than many things fast.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--line)', borderRadius: '10px', overflow: 'hidden', background: 'var(--line)' }}>
                {[
                  { stat: '2', label: 'Products live' },
                  { stat: '1', label: 'In development' },
                  { stat: '1', label: 'Developer, plus community contributors' },
                  { stat: 'Apache 2.0', label: 'License on every product' },
                ].map(item => (
                  <div key={item.label} style={{
                    background: 'var(--surface)', padding: '1.5rem 1.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                  }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{item.label}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--bright)', letterSpacing: '-0.02em' }}>
                      {item.stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '3rem' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                How we're set up
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem 4rem' }}>
                {[
                  { title: 'Inside Discord', body: 'Our tools work where your community already is. Setup and day-to-day use happen in Discord, so there\'s no separate account to create.' },
                  { title: 'Open to everyone', body: 'Every product\'s source is on GitHub. Read it, report what you find, or borrow the parts you like.' },
                  { title: 'Bug bounty', body: 'Fox Box Insurance runs a bug bounty program. If you find a security issue in it, we want to hear about it.' },
                ].map(p => (
                  <div key={p.title}>
                    <div style={{ width: 20, height: 2, background: 'var(--ember)', borderRadius: 1, marginBottom: '0.875rem' }} />
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--bright)', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'start',
              border: '1px solid var(--line)', borderRadius: '10px',
              padding: '2.5rem', marginBottom: '3rem', background: 'var(--surface)',
            }}>
              <img
                src="https://github.com/MusicMakerOwO.png"
                alt="MusicMakerOwO"
                style={{
                  width: '88px', height: '88px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0,
                  border: '1px solid var(--line)',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <a href="https://github.com/MusicMakerOwO" target="_blank" rel="noreferrer"
                    style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--bright)' }}>
                    MusicMakerOwO
                  </a>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontFamily: 'monospace' }}>
                    Founder & Lead Engineer
                  </span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                  Focused on user control and developer experience. Code quality and readability come first, and efficient data structures and well-considered algorithms are the baseline, not the goal.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {stack.map(tech => (
                    <span key={tech} style={{
                      fontSize: '0.75rem', fontWeight: 500, color: 'var(--muted)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--line)', borderRadius: '4px', padding: '0.25rem 0.65rem',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Projects
                </div>
                <LinkList items={projects} />
              </div>

              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Libraries & Tools
                </div>
                <LinkList items={tools} />

                <div style={{ marginTop: '2.5rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    Direct contact
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href="https://discord.gg/9SR6fnbRuV" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--line)', textDecoration: 'none', transition: 'opacity 0.12s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                    >
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>Support server</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ember)' }}>discord.gg/9SR6fnbRuV</span>
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--line)' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>Discord</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--bright)' }}>@musicmaker</span>
                    </div>
                    <a href="mailto:support@notfbi.dev" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--line)', textDecoration: 'none', transition: 'opacity 0.12s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                    >
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>Email</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ember)' }}>support@notfbi.dev</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
