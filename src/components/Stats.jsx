import { useEffect, useRef, useState } from 'react'
import FadeUp from './FadeUp.jsx'
import useCountUp from '../hooks/useCountUp.js'
import { BG_POSTER, STATS } from '../data/content.js'

function Stat({ item, index, active }) {
  const value = useCountUp(item.value, active)

  return (
    <FadeUp delay={index * 0.08}>
      {/* TODO: replace with real figures before launch */}
      <div>
        <div className="stat-value">
          {item.prefix}
          {value}
          <em>{item.suffix}</em>
        </div>
        <div
          style={{
            marginTop: '12px',
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--muted-dark)',
          }}
        >
          {item.label}
        </div>
      </div>
    </FadeUp>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="stats"
      aria-label={STATS.eyebrow}
      style={{
        position: 'relative',
        zIndex: 2,
        background: `linear-gradient(rgba(10, 10, 10, 0.84), rgba(10, 10, 10, 0.88)), url("${BG_POSTER}") center / cover no-repeat, #0a0a0a`,
        borderTop: '1px solid var(--line-dark)',
        borderBottom: '1px solid var(--line-dark)',
        padding: '130px 48px',
        overflow: 'clip',
      }}
      className="section-pad-x"
    >
      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeUp delay={0}>
          <span className="eyebrow">{STATS.eyebrow}</span>
        </FadeUp>
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginTop: '44px',
          }}
        >
          {STATS.items.map((item, i) => (
            <Stat key={item.label} item={item} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
