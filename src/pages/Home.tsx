import { useState } from 'react'

const SERVICES = [
  {
    num: '01',
    title: 'Fox Box Insurance',
    body: 'When something goes wrong on your server, it helps you put things back: daily snapshots, a restore you can undo, and message exports you can prove are untouched.',
  },
  {
    num: '02',
    title: 'Easy Invite Tracker',
    body: 'Find out who invited each new member and which link they used. Nothing to configure, and nothing stored.',
  },
  {
    num: '03',
    title: 'Dossier (coming soon)',
    body: 'Moderation logs that say who did what, in plain English, with a setup you can finish before your coffee cools.',
  },
  {
    num: '04',
    title: 'Commissions',
    body: 'Need something built that isn\'t on this list? We take on custom projects too.',
  },
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'We write our own code',
    body: 'Wherever it\'s practical, we build it ourselves, which means fewer surprises and software we can fully stand behind. We reach for outside libraries only when a problem calls for one, like encryption.',
  },
  {
    num: '02',
    title: 'Releases that land',
    body: 'Each release has a defined scope and ships complete. We don\'t let a project grow endlessly and never arrive.',
  },
  {
    num: '03',
    title: 'Code that ages well',
    body: 'We measure success by code that\'s clean today and still makes sense years from now, not by how quickly it went out the door.',
  },
  {
    num: '04',
    title: 'Security as a baseline',
    body: 'Security isn\'t a feature we sell. Sensitive data is encrypted at rest, keys are rotated regularly, and a small dependency footprint leaves fewer places for things to go wrong.',
  },
]

const FAQS = [
  {
    q: 'Is it really free?',
    a: 'Yes, every feature, for everyone. The paid tiers we\'re planning will raise usage limits and nothing more.',
  },
  {
    q: 'How do you pay for it?',
    a: 'Through commissions, and optional paid tiers once they launch. Our mission page explains how we think about pricing.',
  },
  {
    q: 'What data do you collect?',
    a: 'It depends on the tool. Easy Invite Tracker keeps nothing. Fox Box Insurance saves messages so they can be exported later, encrypted with a separate key for each user, and anyone can opt out with /data-collection. Nothing is sold or shared.',
  },
  {
    q: 'Can I get a copy of my data?',
    a: 'Yes, wherever you live. Ask in our Discord support server or email support@notfbi.dev.',
  },
  {
    q: 'Can I run my own version?',
    a: 'Yes, under the Apache 2.0 license, even commercially. Keep the license and credit intact, and give your version its own name and branding.',
  },
]

const TICKER_ITEMS = [
  'Discord bots', 'server backups', 'invite tracking', 'moderation logs',
  'open source', 'free for everyone', 'no ad trackers', 'custom projects',
]

const STATS = [
  { num: '100%', label: 'Of our product code is public on GitHub.' },
  { num: '$0', label: 'To use any feature, in any product.' },
  { num: 'Zero', label: 'Ad scripts or third-party trackers in anything we ship.' },
]

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4M10.5 2.5V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [outlineHovered, setOutlineHovered] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)

  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#F7F6F3', color: '#0D0D0D', WebkitFontSmoothing: 'antialiased' }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&family=Space+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 4rem;
          align-items: start;
        }
        .hero-panel-wrap { display: block; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          border: 1px solid #E8E5DF;
          border-radius: 10px;
          overflow: hidden;
          background: #E8E5DF;
          margin-top: 3rem;
        }

        .process-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 5rem;
          align-items: start;
        }
        .process-sticky { position: sticky; top: 80px; }

        .faq-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 5rem;
          align-items: start;
        }
        .faq-sticky { position: sticky; top: 80px; }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #E8E5DF;
          gap: 1px;
        }

        .cta-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-panel-wrap { display: none !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .process-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .process-sticky { position: static !important; }
          .faq-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .faq-sticky { position: static !important; }
          .stats-row { grid-template-columns: 1fr !important; }
          .cta-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem)',
        borderBottom: '1px solid #E8E5DF',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem',
                color: '#C94518', marginBottom: '1.75rem', letterSpacing: '0.02em',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#C94518',
                  display: 'block', flexShrink: 0,
                  animation: 'pulse 2s infinite',
                }} />
                Independent software studio
              </div>

              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.07,
                letterSpacing: '-0.03em',
                color: '#0D0D0D',
                marginBottom: '1.5rem',
              }}>
                Tools that put control back in{' '}
                <span style={{ color: '#C94518' }}>your hands.</span>
              </h1>

              <p style={{
                fontSize: '1.0625rem', lineHeight: 1.75,
                color: '#4a4a4a', maxWidth: '34rem', marginBottom: '2.5rem',
              }}>
                We build Discord bots that server owners can rely on, from backups to invite tracking to moderation logs. No feature is held back for paying users.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="#products"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.875rem', fontWeight: 600,
                    background: primaryHovered ? '#A33610' : '#C94518',
                    color: '#fff',
                    padding: '0.8125rem 1.625rem', borderRadius: 7,
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={() => setPrimaryHovered(true)}
                  onMouseLeave={() => setPrimaryHovered(false)}
                >
                  View our products <ArrowIcon />
                </a>
                <a
                  href="#faq"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.875rem', fontWeight: 500,
                    background: 'transparent',
                    color: outlineHovered ? '#0D0D0D' : '#555',
                    padding: '0.8125rem 1.625rem', borderRadius: 7,
                    border: `1px solid ${outlineHovered ? '#bbb' : '#E8E5DF'}`,
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}
                  onMouseEnter={() => setOutlineHovered(true)}
                  onMouseLeave={() => setOutlineHovered(false)}
                >
                  Read the FAQ
                </a>
              </div>
            </div>

            {/* Right panel - logo */}
            <div className="hero-panel-wrap">
              <img
                src="/logo.png"
                alt="Fox Tech Industries logo"
                width={256}
                height={256}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{
        borderBottom: '1px solid #E8E5DF', overflow: 'hidden',
        padding: '0.875rem 0', background: '#F7F6F3',
        display: 'flex', alignItems: 'center', whiteSpace: 'nowrap',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '3rem',
          animation: 'ticker-scroll 30s linear infinite', flexShrink: 0,
        }}>
          {tickerItems.map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#888',
            }}>
              {item}
              <span style={{ color: '#C0BAB0', margin: '0 0.5rem' }}>/</span>
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="stats-row" style={{ borderBottom: '1px solid #E8E5DF' }}>
        {STATS.map(s => (
          <div key={s.num} style={{
            background: '#F7F6F3',
            padding: '2.5rem clamp(1.25rem, 5vw, 3rem)',
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
              fontWeight: 700, letterSpacing: '-0.04em', color: '#0D0D0D', lineHeight: 1,
            }}>
              {s.num}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem', lineHeight: 1.5 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section style={{
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 3rem)',
        borderBottom: '1px solid #E8E5DF',
      }} id="products">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#C94518', letterSpacing: '0.04em', marginBottom: '0.875rem' }}>
            What we build
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 'clamp(1.625rem, 3vw, 2.375rem)', letterSpacing: '-0.025em',
            lineHeight: 1.15, color: '#0D0D0D', maxWidth: '36rem',
          }}>
            Tools for Discord communities.
          </h2>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, maxWidth: '42rem', marginTop: '0.875rem' }}>
            Two bots you can add today, one on the way, and custom projects when they're a good fit.
          </p>

          <div className="services-grid">
            {SERVICES.map(s => (
              <ServiceCard key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 3rem)',
        borderBottom: '1px solid #E8E5DF',
      }} id="how-we-work">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="process-layout">
            <div className="process-sticky">
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#C94518', letterSpacing: '0.04em', marginBottom: '0.875rem' }}>
                How we work
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 'clamp(1.625rem, 3vw, 2.375rem)', letterSpacing: '-0.025em',
                lineHeight: 1.15, color: '#0D0D0D',
              }}>
                The habits behind everything we ship.
              </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, marginTop: '0.875rem' }}>
                They're why our tools stay small, and why they keep working.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.num} style={{
                  display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1.25rem',
                  padding: '2rem 0', alignItems: 'start',
                  borderBottom: i < PROCESS_STEPS.length - 1 ? '1px solid #E8E5DF' : 'none',
                  paddingTop: i === 0 ? 0 : '2rem',
                }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.8125rem', color: '#C0BAB0', paddingTop: 2 }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.9375rem', color: '#0D0D0D', marginBottom: '0.5rem', letterSpacing: '-0.015em' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.75 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 3rem)',
        background: '#fff', borderBottom: '1px solid #E8E5DF',
      }} id="faq">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="faq-layout">
            <div className="faq-sticky">
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#C94518', letterSpacing: '0.04em', marginBottom: '0.875rem' }}>
                FAQ
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 'clamp(1.625rem, 3vw, 2.375rem)', letterSpacing: '-0.025em',
                lineHeight: 1.15, color: '#0D0D0D',
              }}>
                Straight answers.
              </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, marginTop: '0.875rem' }}>
                The questions we get asked most often.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div key={faq.q} style={{ borderBottom: '1px solid #E8E5DF' }}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', gap: '1rem', padding: '1.25rem 0',
                        background: 'transparent', border: 'none', textAlign: 'left',
                        cursor: 'pointer', font: 'inherit',
                      }}
                    >
                      <span style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.9375rem', fontWeight: 500,
                        color: isOpen ? '#0D0D0D' : '#444',
                        transition: 'color 0.15s',
                      }}>
                        {faq.q}
                      </span>
                      <span style={{
                        flexShrink: 0, width: 24, height: 24,
                        border: `1px solid ${isOpen ? '#C0BAB0' : '#E8E5DF'}`,
                        borderRadius: '50%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: '#888',
                        background: isOpen ? '#E8E5DF' : 'transparent',
                        transition: 'border-color 0.15s, background 0.15s',
                      }}>
                        <ChevronDown />
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ paddingBottom: '1.375rem' }}>
                        <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.8 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

{/* CTA */}
<section style={{
  padding: 'clamp(3.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 3rem)',
  background: '#fff',
  borderBottom: '1px solid #E8E5DF',
}} id="contact">
  <div style={{ maxWidth: 1200, margin: '0 auto' }}>
    <div className="cta-inner">
      <div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: 'clamp(1.625rem, 3vw, 2.25rem)', color: '#0D0D0D',
          letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '0.625rem',
        }}>
          Have something you want to build?
        </h2>
        <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.6 }}>
          Tell us what you're working on and we'll tell you honestly whether we can help. If we can't, we'll say so.
        </p>
      </div>

      <a
        href="mailto:support@notfbi.dev"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.875rem', fontWeight: 600,
          background: ctaHovered ? '#A33610' : '#C94518',
          color: '#fff',
          padding: '0.875rem 1.75rem', borderRadius: 7,
          border: '1px solid transparent',
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          whiteSpace: 'nowrap', transition: 'background 0.15s',
        }}
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
      >
        Send us a note <ArrowIcon />
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

function ServiceCard({ num, title, body }: { num: string; title: string; body: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        background: hovered ? '#fff' : '#F7F6F3',
        padding: '2rem 2.25rem',
        transition: 'background 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#C94518', marginBottom: '1rem' }}>
        {num}
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem', color: '#0D0D0D', marginBottom: '0.625rem', letterSpacing: '-0.015em' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.75 }}>
        {body}
      </p>
    </div>
  )
}