import { ArrowUpRight } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import SectionHeading from './SectionHeading.jsx'
import { WORK, WORK_HEAD } from '../data/content.js'

function WorkFeature({ project, index }) {
  return (
    <FadeUp delay={0.1}>
      <article
        className="work-feature"
        style={{
          padding: '56px 0',
          borderTop: index > 0 ? '1px solid var(--line-dark)' : 'none',
        }}
      >
        <div className={`work-preview work-preview-${index}`} aria-hidden="true">
          <div className="preview-browser-bar">
            <span className="preview-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="preview-address">obsidian / {project.industry.toLowerCase()}</span>
            <span className="preview-menu">...</span>
          </div>
          <div className="preview-canvas">
            <span className="preview-kicker">{project.scope}</span>
            <span className="preview-title">
              {index === 0 ? 'Make the right' : 'Work in focus'}
              <em>{index === 0 ? 'impression.' : 'every day.'}</em>
            </span>
            <span className="preview-line preview-line-wide" />
            <span className="preview-line preview-line-short" />
            <span className="preview-pill">
              View project{' '}
              <span className="preview-pill-icon">
                <ArrowUpRight size={12} />
              </span>
            </span>
            <span className="preview-orb" />
          </div>
          <div className="preview-caption">
            <span>Concept preview</span>
            <span>0{index + 1} / 02</span>
          </div>
        </div>
        <div className="work-row">
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '72px',
              lineHeight: 1,
              color: 'var(--accent)',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{ minWidth: 0 }}>
            <span
              style={{
                display: 'block',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: '14px',
              }}
            >
              {project.industry}
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: 'clamp(26px, 2.8vw, 34px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#fff',
                lineHeight: 1.1,
              }}
            >
              {project.client}
            </h3>
            <span
              style={{
                display: 'block',
                marginTop: '14px',
                fontSize: '15px',
                lineHeight: 1.65,
                color: 'var(--muted-dark)',
                maxWidth: '560px',
              }}
            >
              {project.solution}
            </span>
            <dl className="work-meta">
              {[
                ['Scope', project.scope],
                ['Stack', project.stack.join(' · ')],
                ['Outcome', project.outcome],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </span>
        </div>
      </article>
    </FadeUp>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0a',
        padding: '130px 48px',
        overflow: 'clip',
      }}
    >
      <span className="ghost-num" aria-hidden="true" style={{ top: '24px', right: '32px' }}>
        03
      </span>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeading
          number={WORK_HEAD.number}
          eyebrow={WORK_HEAD.eyebrow}
          titleSegments={WORK_HEAD.titleSegments}
          lede={WORK_HEAD.lede}
          tone="dark"
        />
        <div>
          {WORK.map((project, i) => (
            <WorkFeature key={project.client} project={project} index={i} />
          ))}
        </div>
        <FadeUp delay={0.25}>
          <div style={{ marginTop: '72px', display: 'flex', justifyContent: 'center' }}>
            <a className="text-cta" style={{ color: '#fff', fontSize: '13px' }} href="#contact">
              Discuss your project
              <span className="button-icon button-icon-small">
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
