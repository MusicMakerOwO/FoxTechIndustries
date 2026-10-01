import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

interface NavItem {
  href: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/mission', label: 'Mission' },
  { href: '/projects', label: 'Products' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/#faq') {
      return location.pathname === '/' && location.hash === '#faq'
    }
    if (href === '/') {
      return location.pathname === '/' && location.hash !== '#faq'
    }
    return location.pathname === href
  }

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="header-nav" aria-label="Main Navigation">
        <Link to="/" className="brand-link" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Fox Tech Industries logo"
            width={32}
            height={32}
            className="brand-logo"
          />
          <div className="brand-details">
            <span className="brand-name">Fox Tech Industries</span>
            <span className="brand-tagline">LLC · Open source software</span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'is-active' : ''}`} />
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {NAV_ITEMS.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  to={href}
                  className={`nav-link ${active ? 'active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="nav-divider" aria-hidden="true" />

          <Link to="/contact" className="cta-button" onClick={closeMenu}>
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  )
}