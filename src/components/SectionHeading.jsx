import FadeUp from './FadeUp.jsx'
import RichReveal from './RichReveal.jsx'

// Shared editorial section header: brass eyebrow + number, display title
// (plain string or accent segments), supporting lede.
// tone: 'dark' (ink bg) | 'light' (paper bg)
export default function SectionHeading({
  number,
  eyebrow,
  title,
  titleSegments,
  lede,
  tone = 'dark',
  align = 'split',
}) {
  const light = tone === 'light'
  const titleColor = light ? '#0a0a0a' : '#ffffff'
  const ledeColor = light ? '#55524b' : 'rgba(255,255,255,0.68)'

  return (
    <div style={{ marginBottom: '56px' }}>
      <FadeUp delay={0}>
        <span className="eyebrow">
          {number} · {eyebrow}
        </span>
      </FadeUp>
      <div
        style={
          align === 'split'
            ? {
                display: 'flex',
                gap: '48px',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: '24px',
              }
            : { marginTop: '24px', maxWidth: '900px' }
        }
      >
        <h2
          className="display-title display-section"
          style={{ color: titleColor, maxWidth: '720px' }}
        >
          {titleSegments ? (
            <RichReveal segments={titleSegments} baseDelay={0.1} step={0.05} />
          ) : (
            title
          )}
        </h2>
        {lede && (
          <FadeUp
            as="p"
            delay={0.3}
            style={{
              margin: 0,
              fontSize: '17px',
              lineHeight: 1.65,
              color: ledeColor,
              maxWidth: '340px',
            }}
          >
            {lede}
          </FadeUp>
        )}
      </div>
    </div>
  )
}
