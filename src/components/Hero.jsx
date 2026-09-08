import { ArrowDown, ArrowUpRight } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import MagneticButton from './MagneticButton.jsx'
import RichReveal from './RichReveal.jsx'
import { HERO } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="main"
      className="hero-section"
      aria-label="Introduction"
      style={{ position: 'relative', zIndex: 1, overflow: 'clip' }}
    >
      <div className="scrim-hero" aria-hidden="true" />

      <div
        className="section-pad-x"
        style={{
          position: 'relative',
          minHeight: 'inherit',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <FadeUp delay={0}>
          <div className="hero-topline">
            <span className="hero-status">
              <span className="status-dot" /> Independent digital studio
            </span>
            <span>India / Worldwide</span>
          </div>
        </FadeUp>

        <div
          className="hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: 'inherit',
            padding: '140px 0 0',
            boxSizing: 'border-box',
          }}
        >
          <FadeUp delay={0.05}>
            <span className="eyebrow">{HERO.eyebrow}</span>
          </FadeUp>

          <h1
            className="display-title display-hero"
            style={{ color: '#fff', marginTop: '28px', maxWidth: '1150px' }}
          >
            <RichReveal segments={HERO.titleSegments} baseDelay={0.1} step={0.045} y={40} />
          </h1>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginTop: '36px',
            }}
          >
            <FadeUp
              as="p"
              delay={0.45}
              style={{
                margin: 0,
                fontSize: '19px',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.78)',
                maxWidth: '480px',
              }}
            >
              {HERO.lede}
            </FadeUp>

            <div className="hero-action-block">
              <FadeUp delay={0.55}>
                <div
                  className="hero-ctas"
                  style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap' }}
                >
                  <MagneticButton>
                    <a className="btn-paper" href={HERO.primaryCta.href}>
                      {HERO.primaryCta.label}
                      <span className="button-icon">
                        <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                      </span>
                    </a>
                  </MagneticButton>
                  <a className="text-cta" style={{ color: '#fff' }} href={HERO.secondaryCta.href}>
                    {HERO.secondaryCta.label}
                    <span className="button-icon button-icon-small">
                      <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.65}>
                <aside className="hero-aside" aria-label="Studio focus">
                  <span className="hero-aside-label">Our point of view</span>
                  <p>Less noise. Better decisions. Digital work with a clear job to do.</p>
                </aside>
              </FadeUp>
            </div>
          </div>

          <FadeUp delay={0.7}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginTop: '72px',
                padding: '22px 0 calc(28px + env(safe-area-inset-bottom, 0px))',
                borderTop: '1px solid var(--line-dark)',
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <ArrowDown size={14} strokeWidth={2} aria-hidden="true" />
                {HERO.metaLeft}
              </span>
              <span>{HERO.metaRight}</span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
