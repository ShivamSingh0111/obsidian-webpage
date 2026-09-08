import { useState } from 'react'
import { ArrowUpRight, Menu } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import MobileMenu from './MobileMenu.jsx'
import useScrolled from '../hooks/useScrolled.js'
import { BRAND, NAV_CTA, NAV_LINKS } from '../data/content.js'

export default function Navbar() {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className={`obsidian-nav${scrolled ? ' nav-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 32px',
        }}
      >
        <FadeUp delay={0}>
          <a
            href="#main"
            aria-label={`${BRAND.full} — home`}
            style={{
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            {BRAND.short}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </a>
          <span className="nav-subline">Tech solution / 2026</span>
        </FadeUp>

        <div className="nav-links-desktop" style={{ display: 'flex', gap: '36px' }}>
          {NAV_LINKS.map((link, i) => (
            <FadeUp key={link.label} delay={0.05 + i * 0.05}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="nav-cta-desktop">
          <a className="nav-cta" href={NAV_CTA.href}>
            {NAV_CTA.label}
            <span className="button-icon button-icon-compact">
              <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
            </span>
          </a>
        </FadeUp>

        <button
          type="button"
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={2} aria-hidden="true" />
        </button>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
