import FadeUp from './FadeUp.jsx'
import SectionHeading from './SectionHeading.jsx'
import { TESTIMONIALS, TESTIMONIALS_HEAD } from '../data/content.js'

// Evidence wall: one giant featured quote + supporting hairline rows.
// No quote cards, no fake names — anonymous attributions only.
export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <section
      id="clients"
      aria-label="Client testimonials"
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, var(--band-top), #0a0a0a 40%)',
        color: '#fff',
        padding: '150px 48px',
        overflow: 'clip',
      }}
    >
      <span className="ghost-num" aria-hidden="true" style={{ top: '24px', right: '32px' }}>
        06
      </span>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeading
          number={TESTIMONIALS_HEAD.number}
          eyebrow={TESTIMONIALS_HEAD.eyebrow}
          titleSegments={TESTIMONIALS_HEAD.titleSegments}
          lede={TESTIMONIALS_HEAD.lede}
          tone="dark"
        />
        {/* TODO: replace with real client testimonials (no invented names) */}
        <FadeUp delay={0.1}>
          <figure style={{ margin: 0, maxWidth: '1000px' }}>
            <span
              aria-hidden="true"
              style={{
                display: 'block',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '120px',
                lineHeight: 0.6,
                color: 'var(--accent)',
                marginBottom: '32px',
              }}
            >
              &ldquo;
            </span>
            <blockquote
              style={{
                margin: 0,
                fontSize: 'clamp(26px, 3.4vw, 48px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              {featured.quote}
            </blockquote>
            <figcaption
              style={{
                marginTop: '32px',
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--muted-dark)',
              }}
            >
              {featured.author} — {featured.role}
            </figcaption>
          </figure>
        </FadeUp>
        <div style={{ marginTop: '72px' }}>
          {rest.map((t, i) => (
            <FadeUp key={t.author} delay={0.1 + i * 0.08}>
              <figure
                style={{
                  margin: 0,
                  padding: '36px 0',
                  borderTop: '1px solid var(--line-dark)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '16px',
                  maxWidth: '860px',
                }}
              >
                <blockquote
                  style={{
                    margin: 0,
                    fontSize: 'clamp(18px, 2.2vw, 24px)',
                    lineHeight: 1.5,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {t.author} — {t.role}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
