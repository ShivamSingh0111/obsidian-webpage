import { ArrowUpRight } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import SectionHeading from './SectionHeading.jsx'
import { ENGAGEMENT, ENGAGEMENT_HEAD } from '../data/content.js'

// Editorial engagement index: sticky heading + full-width model rows.
// Deliberately NOT pricing cards — hierarchy through treatment, not badges.
function EngagementRow({ tier, index }) {
  const featured = tier.featured
  return (
    <FadeUp delay={0.1 + index * 0.08}>
      <div className={`engage-row${featured ? ' featured' : ''}`}>
        <span
          aria-hidden="true"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '64px',
            lineHeight: 1,
            color: featured ? 'var(--accent)' : 'var(--accent-ink)',
          }}
        >
          0{index + 1}
        </span>
        <span style={{ minWidth: 0 }}>
          {featured && (
            <span
              style={{
                display: 'block',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              Most chosen
            </span>
          )}
          <span
            style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: featured ? 'var(--accent)' : 'var(--accent-ink)',
              marginBottom: '10px',
            }}
          >
            {tier.tagline}
          </span>
          <span
            className="engage-name"
            style={{
              display: 'block',
              fontSize: featured ? 'clamp(30px, 3.4vw, 40px)' : 'clamp(28px, 3vw, 34px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: featured ? '#fff' : '#0a0a0a',
            }}
          >
            {tier.name}
          </span>
          <span
            style={{
              display: 'block',
              marginTop: '14px',
              fontSize: '15px',
              lineHeight: 1.65,
              color: featured ? 'var(--muted-dark)' : 'var(--muted-light)',
              maxWidth: '520px',
            }}
          >
            {tier.text}
          </span>
          <span
            style={{
              display: 'block',
              marginTop: '16px',
              fontSize: '13px',
              lineHeight: 1.7,
              letterSpacing: '0.02em',
              color: featured ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.6)',
              maxWidth: '560px',
            }}
          >
            {tier.meta}
          </span>
        </span>
        <a
          className="engage-cta"
          href={tier.cta.href}
          aria-label={`${tier.cta.label} — ${tier.name}`}
          style={{ color: featured ? '#fff' : '#0a0a0a' }}
        >
          <span className="button-icon button-icon-large">
            <ArrowUpRight size={22} strokeWidth={2} aria-hidden="true" />
          </span>
        </a>
      </div>
    </FadeUp>
  )
}

export default function Engagement() {
  return (
    <section
      id="engagement"
      aria-label="Engagement models"
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'var(--paper-2)',
        color: '#0a0a0a',
        padding: '150px 48px',
        overflow: 'clip',
      }}
    >
      <span
        className="ghost-num on-light"
        aria-hidden="true"
        style={{ top: '24px', right: '32px' }}
      >
        07
      </span>
      <div
        className="engage-layout"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="engage-sticky">
          <SectionHeading
            number={ENGAGEMENT_HEAD.number}
            eyebrow={ENGAGEMENT_HEAD.eyebrow}
            titleSegments={ENGAGEMENT_HEAD.titleSegments}
            lede={ENGAGEMENT_HEAD.lede}
            tone="light"
            align="stack"
          />
          <FadeUp delay={0.4}>
            <a
              className="text-cta"
              href="#contact"
              style={{ color: '#0a0a0a', marginTop: '8px', fontSize: '13px' }}
            >
              Start a project
              <span className="button-icon button-icon-small">
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
              </span>
            </a>
          </FadeUp>
        </div>
        <div>
          {ENGAGEMENT.map((tier, i) => (
            <EngagementRow key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
