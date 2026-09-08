import FadeUp from './FadeUp.jsx'
import SectionHeading from './SectionHeading.jsx'
import { PROCESS, PROCESS_HEAD } from '../data/content.js'

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Process"
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'var(--paper)',
        color: '#0a0a0a',
        padding: '130px 48px',
        overflow: 'clip',
      }}
    >
      <span
        className="ghost-num on-light"
        aria-hidden="true"
        style={{ bottom: '24px', right: '32px', top: 'auto' }}
      >
        05
      </span>
      <div
        className="process-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 420px) 1fr',
          gap: '80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="process-sticky">
          <SectionHeading
            number={PROCESS_HEAD.number}
            eyebrow={PROCESS_HEAD.eyebrow}
            titleSegments={PROCESS_HEAD.titleSegments}
            lede={PROCESS_HEAD.lede}
            tone="light"
            align="stack"
          />
        </div>

        <div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {PROCESS.map((step, i) => (
              <FadeUp key={step.no} delay={0.1 + i * 0.06}>
                <li className="process-step">
                  <span className="process-big-no">{step.no}</span>
                  <span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        flexWrap: 'wrap',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.title}
                      </span>
                      <span className="chip">{step.tag}</span>
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: 'var(--muted-light)',
                        maxWidth: '520px',
                      }}
                    >
                      {step.text}
                    </span>
                  </span>
                </li>
              </FadeUp>
            ))}
          </ol>
          <FadeUp delay={0.2}>
            <p
              style={{
                margin: '56px 0 0',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '24px',
                lineHeight: 1.3,
                color: '#0a0a0a',
                maxWidth: '560px',
              }}
            >
              You get a technology partner — not just a vendor.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
