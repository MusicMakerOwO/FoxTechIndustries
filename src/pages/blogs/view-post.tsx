import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import type { BlogMeta } from './blogs'

type MdxComponentProps = {
  components?: Record<string, React.ElementType>
}

type MdxModule = {
  default: React.ComponentType<MdxComponentProps>
  frontmatter?: Partial<BlogMeta>
}

function useMdxPost(id: string | undefined) {
  const [Component, setComponent] = useState<React.ComponentType<MdxComponentProps> | null>(null)
  const [meta, setMeta] = useState<BlogMeta | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setError(false)

    import(`./content/${id}.mdx`)
      .then((mod: MdxModule) => {
        setComponent(() => mod.default)
        const fm = mod.frontmatter ?? {}
        setMeta({
          id,
          title: fm.title ?? id,
          date: fm.date ?? '',
          author: fm.author ?? '',
          excerpt: fm.excerpt ?? '',
          tags: fm.tags ?? [],
        })
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [id])

  return { Component, meta, loading, error }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function BackIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M10.5 2.5L2.5 10.5M2.5 10.5H9M2.5 10.5V4"
        stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const mdxComponents: Record<string, React.ElementType> = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
      letterSpacing: '-0.03em', lineHeight: 1.15,
      color: '#0D0D0D', marginBottom: '1.5rem', marginTop: '2.5rem',
    }} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700, fontSize: '1.25rem',
      letterSpacing: '-0.02em', lineHeight: 1.25,
      color: '#0D0D0D', marginBottom: '0.875rem', marginTop: '2.5rem',
    }} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600, fontSize: '1rem',
      letterSpacing: '-0.015em', lineHeight: 1.3,
      color: '#0D0D0D', marginBottom: '0.625rem', marginTop: '2rem',
    }} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} style={{
      fontSize: '1rem', lineHeight: 1.85,
      color: '#333', marginBottom: '1.25rem',
    }} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} style={{
      paddingLeft: '1.25rem', marginBottom: '1.25rem',
      display: 'flex', flexDirection: 'column', gap: '0.5rem',
    }} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} style={{
      paddingLeft: '1.25rem', marginBottom: '1.25rem',
      display: 'flex', flexDirection: 'column', gap: '0.5rem',
    }} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} style={{
      fontSize: '1rem', lineHeight: 1.75, color: '#333',
    }} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} style={{ fontWeight: 600, color: '#0D0D0D' }} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em {...props} style={{ fontStyle: 'italic', color: '#444' }} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} style={{ color: '#C94518', textDecoration: 'underline', textUnderlineOffset: 3 }} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.8125rem',
      background: 'rgba(201,69,24,0.07)',
      color: '#C94518',
      padding: '0.15rem 0.4rem',
      borderRadius: 4,
    }} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.8125rem', lineHeight: 1.75,
      background: '#0D0D0D', color: '#E8E5DF',
      padding: '1.25rem 1.5rem', borderRadius: 8,
      overflowX: 'auto', marginBottom: '1.5rem',
    }} />
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: '1px solid #E8E5DF', margin: '2rem 0' }} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} style={{
      borderLeft: '3px solid #C94518',
      paddingLeft: '1.25rem', margin: '1.5rem 0',
      color: '#555', fontStyle: 'italic',
    }} />
  ),
}

export default function ViewPost() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { Component, meta, loading, error } = useMdxPost(id)

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#F7F6F3',
      color: '#0D0D0D',
      minHeight: '100vh',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Mono&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 2rem) clamp(4rem, 8vw, 6rem)',
      }}>
        <button
          onClick={() => navigate('/blogs')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.8125rem', fontWeight: 500,
            color: '#555', background: 'transparent', border: 'none',
            cursor: 'pointer', padding: 0, marginBottom: '2.5rem',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#0D0D0D')}
          onMouseLeave={e => (e.currentTarget.style.color = '#555')}
        >
          <BackIcon /> Back to writing
        </button>

        {loading && (
          <p style={{ color: '#888', fontFamily: "'Space Mono', monospace", fontSize: '0.875rem' }}>
            Loading…
          </p>
        )}

        {error && (
          <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Post not found
            </p>
            <p style={{ color: '#888', fontSize: '0.875rem' }}>
              This post doesn't exist or hasn't been published yet.
            </p>
          </div>
        )}

        {!loading && !error && meta && Component && (
          <>
            <header style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {meta.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.625rem',
                    background: 'rgba(201,69,24,0.08)',
                    color: '#C94518',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 4,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}>
                {meta.title}
              </h1>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6875rem', color: '#999',
                paddingBottom: '2rem',
                borderBottom: '1px solid #E8E5DF',
              }}>
                <span>{meta.author}</span>
                <span style={{ color: '#E8E5DF' }}>—</span>
                <span>{formatDate(meta.date)}</span>
              </div>
            </header>

            <article>
              <Component components={mdxComponents} />
            </article>
          </>
        )}
      </div>
    </div>
  )
}