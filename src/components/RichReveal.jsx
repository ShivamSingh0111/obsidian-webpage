import FadeUp from './FadeUp.jsx'

// Word-by-word reveal that supports per-segment styling (e.g. serif italic
// accent words). Parent heading provides flex-wrap layout + gap for spacing.
// segments: [{ t: 'string with trailing space ', accent?: boolean }]
export default function RichReveal({ segments, baseDelay = 0.1, step = 0.06, y = 28 }) {
  let i = -1
  return (
    <>
      {segments.flatMap((seg, si) =>
        seg.t.split(' ').map((word, wi) => {
          if (word === '') return null
          i += 1
          const key = `${si}-${wi}`
          return (
            <FadeUp
              key={key}
              as="span"
              delay={baseDelay + i * step}
              y={y}
              className={seg.accent ? 'serif-accent' : undefined}
            >
              {word}
            </FadeUp>
          )
        }),
      )}
    </>
  )
}
