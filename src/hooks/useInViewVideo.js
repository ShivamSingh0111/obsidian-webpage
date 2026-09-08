import { useEffect, useRef } from 'react'

// Plays the attached video only while it is in view.
// Below-fold card videos use preload="none" and start on intersection.
export default function useInViewVideo({ threshold = 0.2 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Property (not just attribute) required by iOS Safari for autoplay.
    el.muted = true
    el.defaultMuted = true
    if (typeof IntersectionObserver === 'undefined') {
      el.play?.().catch(() => {})
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play?.().catch(() => {})
          } else {
            el.pause?.()
          }
        })
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return ref
}
