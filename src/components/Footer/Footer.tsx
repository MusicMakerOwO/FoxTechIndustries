import { Link } from 'react-router-dom'

const FOOTER_COLS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Mission', href: '/mission' },
      { label: 'Products', href: '/projects' },
      { label: 'Blogs', href: '/blogs' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Discord', href: 'https://discord.gg/9SR6fnbRuV', external: true },
      { label: 'GitHub', href: 'https://github.com', external: true },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
      { label: 'Refunds policy', href: '/refunds-policy' },
    ],
  },
]

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: '#F7F6F3',
    borderTop: '1px solid #E8E5DF',
    padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 3rem) 0',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: '3rem',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
  },
  logoMark: {
    width: 28,
    height: 28,
    flexShrink: 0,
    objectFit: 'contain' as const,
  },
  logoText: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '0.9375rem',
    letterSpacing: '-0.02em',
    color: '#0D0D0D',
  },
  tagline: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8125rem',
    color: '#888',
    lineHeight: 1.65,
    maxWidth: '22ch',
  },
  col: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  colHeading: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.6875rem',
    fontWeight: 600,
    color: '#C94518',
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
  },
  linkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.625rem',
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8125rem',
    color: '#555',
    textDecoration: 'none',
    transition: 'color 0.15s',
  },
  bottom: {
    maxWidth: 1200,
    margin: '2.5rem auto 0',
    borderTop: '1px solid #E8E5DF',
    padding: '1.5rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
  bottomText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    color: '#888',
  },
  bottomLink: {
    color: '#888',
    textDecoration: 'none',
    transition: 'color 0.15s',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner} className="footer-inner">
        <div style={styles.brand}>
          <Link to="/" style={styles.logoWrap}>
            <img
              src="/logo.png"
              alt="Fox Tech Industries logo"
              width={28}
              height={28}
              style={styles.logoMark}
            />
            <span style={styles.logoText}>Fox Tech Industries</span>
          </Link>
          <p style={styles.tagline}>
            Independent software, built in the open.
          </p>
        </div>

        {FOOTER_COLS.map(col => (
          <div key={col.heading} style={styles.col}>
            <span style={styles.colHeading}>{col.heading}</span>
            <ul style={styles.linkList}>
              {col.links.map(link => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      style={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#0D0D0D')}
                      onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#555')}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      style={styles.link}
                      onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#0D0D0D')}
                      onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#555')}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.bottom} className="footer-bottom">
        <p style={styles.bottomText}>
          &copy; {new Date().getFullYear()} Fox Tech Industries LLC. All rights reserved.
        </p>
        <p style={styles.bottomText}>
          Built with no trackers.{' '}
          <a
            href="https://github.com"
            style={styles.bottomLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#0D0D0D')}
            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#888')}
          >
            View source.
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 540px) {
          .footer-inner {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}