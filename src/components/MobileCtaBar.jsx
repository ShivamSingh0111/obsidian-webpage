import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { CONTACT, NAV_CTA } from '../data/content.js'

// Mobile-only sticky bottom bar: WhatsApp shortcut + primary CTA.
// Appears once the hero is scrolled past and hides at the contact section,
// so it never covers the hero intro or the enquiry form. Desktop: hidden.
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const pastHero = window.scrollY > window.innerHeight * 0.75
      const contact = document.getElementById('contact')
      const nearContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.6
        : false
      setVisible(pastHero && !nearContact)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    const delayed = setTimeout(update, 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('hashchange', onScroll)
    return () => {
      clearTimeout(delayed)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('hashchange', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`mobile-cta-bar${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <a
        href={CONTACT.whatsapp.href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        tabIndex={visible ? 0 : -1}
        className="wa-btn"
      >
        <WhatsAppIcon size={26} />
      </a>
      <a href={NAV_CTA.href} tabIndex={visible ? 0 : -1} className="go-btn">
        {NAV_CTA.label}
        <span className="button-icon">
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </a>
    </div>
  )
}
