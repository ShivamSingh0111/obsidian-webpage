import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import BackgroundVideo from './components/BackgroundVideo.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Grain from './components/Grain.jsx'
import MobileCtaBar from './components/MobileCtaBar.jsx'
import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Statement from './components/Statement.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'
import Engagement from './components/Engagement.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Legal from './components/Legal.jsx'

const TITLES = {
  home: 'Obsidian Tech Solution — Websites, Apps & Custom Software',
  contact: 'Contact Us — Obsidian Tech Solution',
  terms: 'Terms of Service — Obsidian Tech Solution',
  privacy: 'Privacy Policy — Obsidian Tech Solution',
}

// Route detection supporting both clean paths (/contact, /terms, /privacy)
// and hash fallbacks (#contact, #/terms, #/privacy).
function getRoute() {
  if (typeof window === 'undefined') return 'home'
  const p = window.location.pathname.replace(/\/$/, '')
  const h = window.location.hash

  if (p === '/terms' || h.startsWith('#/terms')) return 'terms'
  if (p === '/privacy' || h.startsWith('#/privacy')) return 'privacy'
  if (p === '/contact' || h === '#contact' || h.startsWith('#/contact')) return 'contact'
  return 'home'
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [route, setRoute] = useState(getRoute)
  const handleLoaded = useCallback(() => setLoading(false), [])

  // Lock scroll while the preloader is up.
  useEffect(() => {
    if (!loading) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  // Sync document title with current route.
  useEffect(() => {
    document.title = TITLES[route] || TITLES.home
  }, [route])

  // Scroll to section target once preloader finishes.
  useEffect(() => {
    if (loading) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const p = window.location.pathname.replace(/\/$/, '')
    const h = window.location.hash.replace(/^#\/?/, '')

    let targetId = null
    if (p === '/contact' || h === 'contact') {
      targetId = 'contact'
    } else if (h && h !== 'main' && !['privacy', 'terms'].includes(h)) {
      targetId = h
    }

    if (targetId) {
      const timer = setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
        })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [loading])

  // Routing and transitions on hashchange and popstate.
  useEffect(() => {
    const reduce = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const onLocationChange = () => {
      const r = getRoute()
      setRoute(r)

      if (r === 'terms' || r === 'privacy') {
        const root = document.documentElement
        const prev = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        window.scrollTo(0, 0)
        root.scrollTop = 0
        document.body.scrollTop = 0
        root.style.scrollBehavior = prev
        return
      }

      const p = window.location.pathname.replace(/\/$/, '')
      const h = window.location.hash.replace(/^#\/?/, '')
      let targetId = null
      if (p === '/contact' || h === 'contact') {
        targetId = 'contact'
      } else if (h && h !== 'main') {
        targetId = h
      }

      if (targetId) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({
              behavior: reduce() ? 'auto' : 'smooth',
            })
          })
        })
      }
    }

    window.addEventListener('hashchange', onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('hashchange', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  // Automatically sanitize legacy hash URLs (#contact, #/privacy, #/terms, #main, #)
  // so the browser address bar stays on clean canonical paths without '#'
  useEffect(() => {
    if (typeof window === 'undefined') return
    const h = window.location.hash
    if (h === '#contact' || h.startsWith('#/contact')) {
      window.history.replaceState({}, '', '/contact')
    } else if (h.startsWith('#/privacy') || h === '#privacy') {
      window.history.replaceState({}, '', '/privacy')
    } else if (h.startsWith('#/terms') || h === '#terms') {
      window.history.replaceState({}, '', '/terms')
    } else if (h === '#main' || h === '#' || h === '') {
      if (window.location.hash) {
        window.history.replaceState({}, '', window.location.pathname)
      }
    }
  }, [])

  // Intercept internal clean route links (/contact, /privacy, /terms, /) and hash links
  // so browser URL bar displays clean paths without # or unwanted fragment anchors.
  useEffect(() => {
    const handleLinkClick = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return

      if (href === '/contact' || href === '/privacy' || href === '/terms' || href === '/') {
        e.preventDefault()
        if (window.location.pathname !== href || window.location.hash) {
          window.history.pushState({}, '', href)
          window.dispatchEvent(new Event('popstate'))
        } else if (href === '/contact') {
          const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
          document.getElementById('contact')?.scrollIntoView({
            behavior: reduce ? 'auto' : 'smooth',
          })
        }
        return
      }

      if (href.startsWith('#')) {
        const targetId = href.slice(1)
        if (targetId === 'contact') {
          e.preventDefault()
          window.history.pushState({}, '', '/contact')
          window.dispatchEvent(new Event('popstate'))
        } else if (targetId === 'main' || !targetId) {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
          if (window.location.hash) {
            window.history.replaceState({}, '', window.location.pathname)
          }
        } else {
          const el = document.getElementById(targetId)
          if (el) {
            e.preventDefault()
            const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
            el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
            if (window.location.hash) {
              window.history.replaceState({}, '', window.location.pathname)
            }
          }
        }
      }
    }
    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  const isMainSite = route === 'home' || route === 'contact'

  return (
    <div style={{ position: 'relative', background: '#0a0a0a' }}>
      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={handleLoaded} />}
      </AnimatePresence>
      <BackgroundVideo />
      <ScrollProgress />
      <Grain />
      <Navbar />
      {isMainSite && <MobileCtaBar />}
      {isMainSite ? (
        <>
          <main>
            <Hero />
            <Marquee />
            <Statement />
            <Services />
            <Work />
            <Process />
            <Stats />
            <Testimonials />
            <Engagement />
            <Faq />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <main>
            <Legal page={route} />
          </main>
          <Footer />
        </>
      )}
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
