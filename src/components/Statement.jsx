import FadeUp from './FadeUp.jsx'
import RichReveal from './RichReveal.jsx'
import { STATEMENT } from '../data/content.js'

export default function Statement() {
  return (
    <section
      id="statement"
      aria-label="Who we are"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0a',
        padding: '200px 48px',
        overflow: 'clip',
      }}
      className="section-pad-x"
    >
      <span className="ghost-num" aria-hidden="true" style={{ top: '24px', right: '32px' }}>
        01
      </span>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeUp delay={0}>
          <span className="eyebrow">
            {STATEMENT.number} · {STATEMENT.eyebrow}
          </span>
        </FadeUp>

        <h2
          className="display-title"
          style={{
            color: '#fff',
            fontSize: 'clamp(36px, 5vw, 80px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginTop: '28px',
            maxWidth: '1150px',
          }}
        >
          <RichReveal segments={STATEMENT.titleSegments} baseDelay={0.15} step={0.04} y={36} />
        </h2>

        <FadeUp
          as="p"
          delay={0.5}
          style={{
            margin: '48px 0 0',
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'var(--muted-dark)',
            maxWidth: '560px',
          }}
        >
          {STATEMENT.body}
        </FadeUp>

        <ul
          className="ticks-grid"
          style={{
            listStyle: 'none',
            margin: '64px 0 0',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {STATEMENT.ticks.map((tick, i) => (
            <FadeUp
              key={tick}
              as="li"
              delay={0.6 + i * 0.08}
              style={{
                borderTop: '1px solid var(--line-dark)',
                paddingTop: '20px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '40px',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}
              >
                0{i + 1}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                {tick}
              </span>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={0.9}>
          <div
            style={{
              marginTop: '72px',
              borderTop: '1px solid var(--line-dark)',
              paddingTop: '28px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {STATEMENT.foundersLabel}
            </span>
            <div
              className="ticks-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginTop: '20px',
              }}
            >
              {STATEMENT.founders.map((name) => (
                <span
                  key={name}
                  className="serif-accent"
                  style={{
                    fontSize: 'clamp(28px, 3.4vw, 42px)',
                    color: '#fff',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
