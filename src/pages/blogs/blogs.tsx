import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export interface BlogMeta {
  id: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
}

const mdxFiles = import.meta.glob('./content/*.mdx', { eager: true })

function getMeta(path: string, mod: unknown): BlogMeta {
  const fm = (mod as { frontmatter?: Partial<BlogMeta> }).frontmatter ?? {}
  const id = path.replace('./content/', '').replace('.mdx', '')
  return {
    id,
    title: fm.title ?? id,
    date: fm.date ?? '',
    author: fm.author ?? '',
    excerpt: fm.excerpt ?? '',
    tags: fm.tags ?? [],
  }
}

export function getAllBlogs(): BlogMeta[] {
  return Object.entries(mdxFiles)
    .map(([path, mod]) => getMeta(path, mod))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4M10.5 2.5V9"
        stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BlogCard({ blog, onClick }: { blog: BlogMeta; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      style={{
        background: '#fff',
        border: '1px solid #E8E5DF',
        borderRadius: 10,
        padding: '1.75rem 2rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = '#C94518'
        el.style.boxShadow = '0 4px 24px rgba(201,69,24,0.06)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = '#E8E5DF'
        el.style.boxShadow = 'none'
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {blog.tags.map(tag => (
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

      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: '1.0625rem',
        letterSpacing: '-0.02em',
        lineHeight: 1.3,
        color: '#0D0D0D',
        margin: 0,
      }}>
        {blog.title}
      </h2>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.875rem',
        color: '#555',
        lineHeight: 1.75,
        margin: 0,
        flexGrow: 1,
      }}>
        {blog.excerpt}
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.875rem',
        borderTop: '1px solid #E8E5DF',
      }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.6875rem',
          color: '#999',
        }}>
          {formatDate(blog.date)}
        </div>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: '#C94518',
        }}>
          Read post <ArrowIcon />
        </span>
      </div>
    </article>
  )
}

export default function Blogs() {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState<BlogMeta[]>([])

  useEffect(() => {
    setBlogs(getAllBlogs())
  }, [])

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

      <header style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 3rem) clamp(2rem, 4vw, 3rem)',
        borderBottom: '1px solid #E8E5DF',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.6875rem',
          color: '#C94518',
          letterSpacing: '0.04em',
          marginBottom: '0.875rem',
        }}>
          Writing
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#0D0D0D',
          marginBottom: '0.75rem',
        }}>
          Fox Tech Industries Blogs
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#555',
          lineHeight: 1.75,
          maxWidth: '40rem',
        }}>
          Read our blogs for insights about the company, our products.</p>
      </header>

      <main style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem)',
      }}>
        {blogs.length === 0 ? (
          <p style={{ color: '#888', fontSize: '0.9375rem' }}>No posts yet. Check back soon.</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {blogs.map(blog => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => navigate(`/blogs/view-post/${blog.id}`)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}