import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { NAV_CTA, NAV_LINKS } from '../data/content.js'

// Full-screen overlay menu for ≤900px. Closes on link click / Esc.
export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        autoFocus
        className="hamburger"
        style={{ display: 'inline-flex', position: 'absolute', top: '20px', right: '20px' }}
      >
        <X size={20} strokeWidth={2} aria-hidden="true" />
      </button>
      <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column' }}>
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="menu-link"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {link.label}
            <span className="idx">0{i + 1}</span>
          </motion.a>
        ))}
      </nav>
      <motion.a
        href={NAV_CTA.href}
        onClick={onClose}
        className="btn-paper"
        style={{ marginTop: '32px' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {NAV_CTA.label}
        <span className="button-icon">
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </motion.a>
    </div>
  )
}
