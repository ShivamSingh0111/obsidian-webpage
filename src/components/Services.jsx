import { ArrowUpRight } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import SectionHeading from './SectionHeading.jsx'
import { SECONDARY_SERVICES, SERVICES, SERVICES_HEAD } from '../data/content.js'

function ServiceRow({ service, index }) {
  return (
    <FadeUp delay={0.1 + index * 0.08}>
      <a
        className="service-row zoom-hover"
        href="/contact"
        aria-label={`${service.title} — discuss your project`}
      >
        <span className="service-no">{service.no}</span>
        <span style={{ minWidth: 0, paddingRight: '72px' }}>
          <span
            className="service-title"
            style={{
              display: 'block',
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.02,
              color: '#0a0a0a',
              marginBottom: '12px',
            }}
          >
            {service.title}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: '15px',
              lineHeight: 1.65,
              color: 'var(--muted-light)',
              maxWidth: '460px',
              marginBottom: '18px',
            }}
          >
            {service.text}
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {service.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </span>
        </span>
        <span className="row-arrow" aria-hidden="true">
          <span className="button-icon button-icon-large">
            <ArrowUpRight size={20} strokeWidth={2} />
          </span>
        </span>
      </a>
    </FadeUp>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
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
        style={{ top: '24px', right: '32px' }}
      >
        02
      </span>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeading
          number={SERVICES_HEAD.number}
          eyebrow={SERVICES_HEAD.eyebrow}
          titleSegments={SERVICES_HEAD.titleSegments}
          lede={SERVICES_HEAD.lede}
          tone="light"
        />

        <div>
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px 28px',
              marginTop: '40px',
              paddingTop: '28px',
              borderTop: '1px solid var(--line-light)',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-ink)',
                fontWeight: 600,
                width: '100%',
                marginBottom: '4px',
              }}
            >
              Also covered
            </span>
            {SECONDARY_SERVICES.map((item, si) => (
              <span
                key={item}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '28px' }}
              >
                {si > 0 && (
                  <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                    ·
                  </span>
                )}
                <a
                  href="/contact"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--line-light)',
                    paddingBottom: '2px',
                  }}
                >
                  {item}
                </a>
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
