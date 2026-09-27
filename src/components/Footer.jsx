import { ArrowUp, Facebook, Instagram, Linkedin, X } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import { BRAND, CONTACT, FOOTER } from '../data/content.js'

const SOCIAL_ICONS = {
  Instagram: <Instagram size={16} strokeWidth={2} aria-hidden="true" />,
  'X (Twitter)': <X size={16} strokeWidth={2.5} aria-hidden="true" />,
  LinkedIn: <Linkedin size={16} strokeWidth={2} aria-hidden="true" />,
  Facebook: <Facebook size={16} strokeWidth={2} aria-hidden="true" />,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0a',
        borderTop: '1px solid var(--line-dark)',
        padding: '72px 32px 32px',
        marginBottom: 0,
      }}
      className="section-pad-x"
    >
      <div
        aria-hidden="true"
        style={{
          maxWidth: '1280px',
          margin: '0 auto 56px',
          overflow: 'clip',
          fontSize: 'clamp(56px, 9vw, 132px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 0.9,
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.05)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {BRAND.short.toUpperCase()}.
      </div>
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '40px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <FadeUp delay={0}>
          <div>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#fff',
              }}
            >
              {BRAND.short.toUpperCase()}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p
              style={{
                margin: '16px 0 0',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--muted-dark)',
                maxWidth: '300px',
              }}
            >
              {FOOTER.tagline}
            </p>
          </div>
        </FadeUp>

        {FOOTER.columns.map((col, ci) => (
          <FadeUp key={col.heading} delay={0.1 + ci * 0.08}>
            <div>
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '20px',
                }}
              >
                {col.heading}
              </div>
              <ul
                style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '12px' }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a className="footer-link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}

        <FadeUp delay={0.3}>
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '20px',
              }}
            >
              Contact
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '12px' }}>
              <li>
                <a className="footer-link" href={CONTACT.email.href}>
                  {CONTACT.email.label}
                </a>
              </li>
              {(CONTACT.phones || (CONTACT.phone ? [CONTACT.phone] : [])).map((p) => (
                <li key={p.href}>
                  <a className="footer-link" href={p.href}>
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="footer-link" href={CONTACT.whatsapp.href}>
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="social-row" style={{ marginTop: '20px' }}>
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  className="social-btn"
                  style={{ width: '38px', height: '38px' }}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.label} (opens in new tab)`}
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '64px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid var(--line-dark)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: '12px', color: 'var(--faint-dark)' }}>
          © {year} {BRAND.full} · All rights reserved.
        </span>
        <nav
          aria-label="Legal"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}
        >
          <a className="footer-link" href="/privacy">
            Privacy Policy
          </a>
          <span aria-hidden="true" style={{ color: 'var(--faint-dark)' }}>
            ·
          </span>
          <a className="footer-link" href="/terms">
            Terms of Service
          </a>
        </nav>
        <a
          href="#main"
          aria-label="Back to top"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted-dark)',
            textDecoration: 'none',
          }}
          className="link-arrow"
        >
          Back to top
          <ArrowUp size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
