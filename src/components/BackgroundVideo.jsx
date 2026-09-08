import { useCallback, useEffect, useRef, useState } from 'react'
import { BG_POSTER, BG_VIDEO, BG_VIDEO_MOBILE } from '../data/content.js'

// Fixed full-viewport background video (z 0) with poster fallback,
// save-data awareness, reduced-motion support, and load-failure fallback.
//
// Autoplay reliability notes:
// - `src` is set directly on <video> (not <source> children) so
//   programmatic play() works consistently across browsers.
// - `muted` is forced via ref as well as attribute: some browsers
//   (notably iOS Safari) require the muted *property* for autoplay.
// - play() is attempted on mount + on loadeddata; failures fall back
//   to the poster image instead of a black box.
export default function BackgroundVideo() {
  const [failed, setFailed] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [saveData, setSaveData] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(!!mq?.matches)
    apply()
    mq?.addEventListener?.('change', apply)
    return () => mq?.removeEventListener?.('change', apply)
  }, [])

  useEffect(() => {
    const conn = navigator.connection
    if (conn && (conn.saveData || /^(slow-2g|2g)$/.test(conn.effectiveType || ''))) {
      setSaveData(true)
    }
    const mq = window.matchMedia?.('(max-width: 900px)')
    const applyWidth = () => setIsMobile(!!mq?.matches)
    applyWidth()
    mq?.addEventListener?.('change', applyWidth)
    return () => mq?.removeEventListener?.('change', applyWidth)
  }, [])

  const attachVideo = useCallback((el) => {
    videoRef.current = el
    if (!el) return
    // Property (not just attribute) required by iOS Safari for autoplay.
    el.muted = true
    el.defaultMuted = true
    el.play?.().catch(() => {})
  }, [])

  if (failed || reduced || saveData) {
    return (
      <img
        src={BG_POSTER}
        alt=""
        aria-hidden="true"
        className="bg-video"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
    )
  }

  return (
    <video
      ref={attachVideo}
      src={isMobile ? BG_VIDEO_MOBILE : BG_VIDEO}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      preload="metadata"
      poster={BG_POSTER}
      onError={() => setFailed(true)}
      onLoadedData={(e) => e.currentTarget.play?.().catch(() => {})}
      className="bg-video"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}
