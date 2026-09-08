import { MARQUEE } from '../data/content.js'

// Capabilities ticker. Content duplicated for a seamless loop; hidden from AT.
export default function Marquee() {
  const row = (hidden) => (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {MARQUEE.map((item) => (
        <span key={item}>
          {item}
          <i />
        </span>
      ))}
    </div>
  )

  return (
    <section
      aria-label="Our capabilities"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0a',
        borderTop: '1px solid var(--line-dark)',
        borderBottom: '1px solid var(--line-dark)',
        padding: '20px 0',
        overflow: 'clip',
      }}
    >
      {row(false)}
      <span
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
        }}
      >
        {MARQUEE.join(', ')}
      </span>
    </section>
  )
}
