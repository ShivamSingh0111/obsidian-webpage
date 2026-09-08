import { useRef, useState } from 'react'

// Subtle pointer-tracked wrapper for primary CTAs.
// Disabled on touch devices and reduced-motion (renders children as-is).
export default function MagneticButton({ children, strength = 6 }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const canMagnet = () =>
    window.matchMedia?.('(hover: hover)').matches &&
    !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const onMove = (e) => {
    if (!canMagnet() || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setOffset({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2 * strength,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2 * strength,
    })
  }

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        display: 'inline-block',
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {children}
    </span>
  )
}
