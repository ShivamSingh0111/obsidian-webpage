import { useState } from 'react'
import { Plus } from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import SectionHeading from './SectionHeading.jsx'
import { FAQ, FAQ_HEAD } from '../data/content.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0a',
        padding: '150px 48px',
        overflow: 'clip',
      }}
    >
      <span className="ghost-num" aria-hidden="true" style={{ top: '24px', right: '32px' }}>
        08
      </span>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeading
          number={FAQ_HEAD.number}
          eyebrow={FAQ_HEAD.eyebrow}
          titleSegments={FAQ_HEAD.titleSegments}
          lede={FAQ_HEAD.lede}
          tone="dark"
        />
        <div style={{ maxWidth: '860px' }}>
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <FadeUp key={item.q} delay={0.05 + i * 0.05}>
                <div className="faq-item" data-open={isOpen}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      type="button"
                      className="faq-q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="faq-no" aria-hidden="true">
                        0{i + 1}
                      </span>
                      <span className="faq-label">{item.q}</span>
                      <span className="button-icon faq-toggle" aria-hidden="true">
                        <Plus size={18} strokeWidth={2} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq-a"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                  >
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
