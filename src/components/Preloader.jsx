import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND } from '../data/content.js'

const MIN_DISPLAY = 1400 // ms — brand moment never flashes by
const MAX_WAIT = 5000 // ms — never trap the user

// Full-screen brand preloader. Eases a counter toward 90% until the window
// `load` event fires, then completes to 100 and reports done. Parent removes
// it via AnimatePresence (curtain exit defined below).
export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const state = useRef({ value: 0, loaded: false, start: performance.now(), done: false })
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    const s = state.current
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setProgress(100)
      const t = setTimeout(() => doneRef.current?.(), 350)
      return () => clearTimeout(t)
    }

    const onLoad = () => {
      s.loaded = true
    }
    if (document.readyState === 'complete') {
      s.loaded = true
    } else {
      window.addEventListener('load', onLoad)
    }

    let raf = 0
    const tick = () => {
      const elapsed = performance.now() - s.start
      // Forced finish: max wait exceeded.
      if (elapsed >= MAX_WAIT) {
        setProgress(100)
        setTimeout(() => {
          if (!s.done) {
            s.done = true
            doneRef.current?.()
          }
        }, 350)
        return
      }
      // Crawl toward 90 until loaded + min display elapsed, then sprint to 100.
      const target = s.loaded && elapsed >= MIN_DISPLAY ? 100 : 90
      s.value += (target - s.value) * (target === 100 ? 0.12 : 0.035)
      if (target === 100 && 100 - s.value < 0.6) {
        s.value = 100
      }
      setProgress(Math.floor(Math.min(s.value, 100)))
      if (s.value >= 100) {
        setTimeout(() => {
          if (!s.done) {
            s.done = true
            doneRef.current?.()
          }
        }, 350)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('load', onLoad)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <motion.div
      role="status"
      aria-label="Loading Obsidian Tech Solution"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px 0 calc(32px + env(safe-area-inset-bottom, 0px))',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: '#ffffff',
          }}
        >
          {BRAND.short.toUpperCase()}
          <span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span className="eyebrow" style={{ fontSize: '10px' }}>
          Websites · Apps · Software
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(72px, 14vw, 160px)',
            lineHeight: 1,
            color: '#ffffff',
            fontVariantNumeric: 'tabular-nums',
            textAlign: 'center',
            padding: '0 32px',
          }}
        >
          {progress}
        </span>
        {/* progress line — full-width, in the middle under the number */}
        <div
          aria-hidden="true"
          style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.15)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'var(--accent)',
              transition: 'width 0.2s linear',
            }}
          />
        </div>
        {/* progress line — centered under the number */}
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            padding: '0 32px',
          }}
        >
          Preparing experience
        </span>
      </div>
    </motion.div>
  )
}
