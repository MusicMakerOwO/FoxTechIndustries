import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '9rem 5rem 6rem', minHeight: 'calc(100vh - 64px)', textAlign: 'center' }}>
      <div>
        <div style={{ fontSize: '5rem', fontWeight: 700, color: 'var(--ember)', letterSpacing: '-0.04em', lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontSize: '1.5rem', letterSpacing: '-0.03em', margin: '1rem 0 0.75rem' }}>
          This page doesn't exist.
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', marginBottom: '2rem' }}>
          It might have moved to mars, or the link simply expired :shug:
        </p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 600, background: 'var(--ember)', color: '#fff', border: 'none', padding: '0.85rem 2rem', cursor: 'pointer', borderRadius: '10px', letterSpacing: '0.02em' }}>
            Back to home
          </button>
        </Link>
      </div>
    </main>
  )
}
