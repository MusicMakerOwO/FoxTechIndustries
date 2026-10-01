import { useState, useEffect } from 'react'

interface Product {
  tag: string
  status: string
  name: string
  body: string
  features: string[]
  note: string | null
  link: string | null
  liveLink: string | null
  extraLinks?: { label: string; href: string }[]
  detailedDescription?: string
  techStack?: string[]
  faqs?: { q: string; a: string }[]
}

const products: Product[] = [
  {
    tag: 'Discord Bot',
    status: 'Live',
    name: 'Fox Box Insurance',
    body: 'Insurance for your Discord server. Automatic backups of its structure, a restore you can preview and undo, and tamper-evident message exports, with users in control of their own data.',
    features: [
      'Automatic daily server snapshots',
      'Restore with a full preview, confirmation and undo',
      'Tamper-evident message exports (HTML, JSON, text)',
      'Per-user encryption and opt-out',
      'Server and channel activity charts',
    ],
    note: 'A paid tier with higher limits is planned for heavier users.',
    link: 'https://github.com/MusicMakerOwO/FoxBoxInsurance',
    liveLink: 'https://notfbi.dev/',
    detailedDescription: 'Most Discord bots are built around moderation, to stop trouble before it happens. Fox Box Insurance assumes things will sometimes go wrong anyway: a rogue admin, a compromised account, a raid or an accidental deletion. Snapshots record your channels, roles and bans every 24 hours, and a restore rolls the server back to match one, after showing you exactly what will change. Members can export a channel\'s history, and /verify checks whether an export has been changed since it was made. Admins can switch each feature on or off for their server.',
    techStack: ['TypeScript', 'discord.js v14', 'MariaDB'],
    faqs: [
      { q: 'How is my data protected?', a: 'Saved messages are encrypted at rest with AES-256, with a separate key for each user, and keys are rotated monthly. Any user can opt out with /data-collection, and their future messages are stored redacted.' },
      { q: 'How often are backups taken?', a: 'Server snapshots are taken automatically every 24 hours, and admins can take one by hand at any time. Messages are saved as they are sent, up to the most recent 10,000 per channel.' },
    ],
  },
  {
    tag: 'Discord Bot',
    status: 'Live',
    name: 'Easy Invite Tracker',
    body: 'Invite tracking cut down to the essentials. It tells you who invited each new member and which link they used. One command sets it up, and it stores none of your data.',
    features: [
      'Shows who invited each new member',
      'Logs invites as they are created and deleted',
      'Browse and clean up your server\'s invites',
      'One command to set up',
    ],
    note: null,
    link: 'https://github.com/MusicMakerOwO/EasyInviteTracker',
    liveLink: null,
    detailedDescription: 'Discord doesn\'t tell you which invite a new member used. Easy Invite Tracker works it out and posts the inviter, the invite code and its use count to your log channel. It also logs invites as they are created and deleted, and gives admins a simple way to browse and delete invites. Where other trackers pile on customization, we kept the feature set deliberately small: fewer moving parts means fewer bugs and nothing to configure.',
    techStack: ['TypeScript', 'discord.js v14'],
    faqs: [
      { q: 'Does it work with vanity URLs?', a: 'Yes. When a member joins through your server\'s vanity URL, the join is credited to the vanity link.' },
      { q: 'What data does it store?', a: 'None. There\'s no data of yours to protect in the first place.' },
      { q: 'How do I set it up?', a: 'Run /setup with the channel you want logs posted in. That\'s it.' },
    ],
  },
  {
    tag: 'Discord Bot',
    status: 'Coming soon',
    name: 'Dossier',
    body: 'A moderation logging bot you can set up in about two minutes. A guided setup walks you through what to log, with events grouped so configuration never turns into a wall of toggles.',
    features: [
      'One /config panel, no dashboards or docs to read',
      'Shows what a deleted message actually said',
      'Names who did it, using the audit log',
      'Colour-coded, plain-English log entries',
      'Merges noisy bursts into a single entry',
    ],
    note: null,
    link: null,
    liveLink: null,
    extraLinks: [
      { label: 'Follow progress on Discord', href: 'https://discord.gg/9SR6fnbRuV' },
    ],
    detailedDescription: 'Dossier gives moderators a record of what changed in their server, who it happened to, and who did it. Events are sorted into groups a moderator would recognise (messages, moderation, channels and threads, roles, and assets), and each group is switched on by choosing a channel for it. Every entry has a coloured strip for the kind of event and a plain-English label, so a busy log channel can be scanned at a glance.',
    techStack: ['TypeScript', 'SimplyJS', 'SQLite'],
    faqs: [
      { q: 'How does it know what a deleted message said?', a: 'Discord doesn\'t include it, so Dossier keeps its own copy of recent messages and their attachments for 14 days.' },
      { q: 'What is SimplyJS?', a: 'A Discord library written by our founder. Dossier is its first real-world test before its beta release.' },
    ],
  },
]

function ArrowIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Projects() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main style={{ flex: 1, padding: '7rem 3rem 6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ paddingBottom: '2.5rem', marginBottom: '3.5rem', borderBottom: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--ember)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Products
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--bright)' }}>
              Two products live, one on the way.
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '36rem', lineHeight: 1.7 }}>
              Select a product to see what it does, what it's built with, and answers to common questions.
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {products.map((p) => (
            <div key={p.name}
              style={{ 
                background: 'var(--surface)', 
                padding: '2rem', 
                borderRadius: '10px',
                border: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onClick={() => handleOpenModal(p)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {p.tag}
                </span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--slate)' }} />
                <span style={{
                  fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.05em',
                  color: p.status === 'Live' ? '#4ade80' : 'var(--muted)',
                }}>
                  {p.status}
                </span>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--bright)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                {p.name}
              </h2>

              <p style={{ 
                fontSize: '0.875rem', 
                color: 'var(--muted)', 
                lineHeight: 1.7, 
                marginBottom: '1.5rem',
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {p.body}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                {p.features.slice(0, 2).map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, color: 'var(--ember)' }}>
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{f}</span>
                  </div>
                ))}
                {p.features.length > 2 && (
                  <span style={{ fontSize: '0.7rem', color: 'var(--slate)', marginLeft: '1.25rem' }}>
                    +{p.features.length - 2} more
                  </span>
                )}
              </div>

              <div style={{ 
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--ember)', fontWeight: 600 }}>
                  View details →
                </span>
                <span style={{ fontSize: '0.65rem', color: 'var(--slate)' }}>
                  {p.status === 'Live' ? '● Active' : '● Coming soon'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--slate)', marginTop: '2rem', textAlign: 'center' }}>
          More tools are on the way.
        </p>
      </div>

      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: 'var(--surface)',
              borderRadius: '16px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: 'sticky',
                top: 0,
                float: 'right',
                background: 'transparent',
                border: 'none',
                color: 'var(--muted)',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--line)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <CloseIcon />
            </button>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {selectedProduct.tag}
                </span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--slate)' }} />
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em',
                  color: selectedProduct.status === 'Live' ? '#4ade80' : 'var(--muted)',
                }}>
                  {selectedProduct.status}
                </span>
              </div>

              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--bright)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                {selectedProduct.name}
              </h2>

              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  About
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  {selectedProduct.detailedDescription || selectedProduct.body}
                </p>
              </div>

              {selectedProduct.techStack && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Tech Stack
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {selectedProduct.techStack.map((tech) => (
                      <span key={tech} style={{
                        background: 'var(--line)',
                        padding: '0.3rem 0.9rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: 'var(--bright)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Capabilities
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {selectedProduct.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', borderBottom: '1px solid var(--line)' }}>
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, color: 'var(--ember)' }}>
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProduct.faqs && selectedProduct.faqs.length > 0 && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    FAQ
                  </h3>
                  {selectedProduct.faqs.map((faq, idx) => (
                    <div key={idx} style={{ marginBottom: '0.75rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--bright)', marginBottom: '0.25rem' }}>
                        {faq.q}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedProduct.note && (
                <p style={{ fontSize: '0.85rem', color: 'var(--slate)', lineHeight: 1.65, padding: '0.75rem 1rem', background: 'var(--line)', borderRadius: '8px' }}>
                  💡 {selectedProduct.note}
                </p>
              )}

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
                {selectedProduct.link && (
                  <a href={selectedProduct.link} target="_blank" rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--bright)', textDecoration: 'none' }}
                  >
                    GitHub source <ArrowIcon />
                  </a>
                )}
                {selectedProduct.liveLink && (
                  <a href={selectedProduct.liveLink} target="_blank" rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ember)', textDecoration: 'none' }}
                  >
                    Visit site <ArrowIcon />
                  </a>
                )}
                {selectedProduct.extraLinks?.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ember)', textDecoration: 'none' }}
                  >
                    {link.label} <ArrowIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}