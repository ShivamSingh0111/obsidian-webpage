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

// Minimal hash routing for standalone pages (no router dependency):
// '#/privacy' and '#/terms' render the Legal document instead of the homepage.
function getRoute() {
  const h = window.location.hash
  if (h.startsWith('#/terms')) return 'terms'
  if (h.startsWith('#/privacy')) return 'privacy'
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

  // Legal pages <-> homepage transitions.
  useEffect(() => {
    const reduce = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const onHash = () => {
      const r = getRoute()
      setRoute(r)
      if (r !== 'home') {
        // Force-instant scroll to top: mobile browsers often swallow a plain
        // scrollTo() inside hashchange, and the CSS smooth-scroll would fight it.
        const toTop = () => {
          const root = document.documentElement
          const prev = root.style.scrollBehavior
          root.style.scrollBehavior = 'auto'
          window.scrollTo(0, 0)
          root.scrollTop = 0
          document.body.scrollTop = 0
          root.style.scrollBehavior = prev
        }
        toTop()
        requestAnimationFrame(() => requestAnimationFrame(toTop))
        return
      }
      // Returning home to a section anchor: the target mounts after this
      // event, so scroll to it manually once painted.
      const id = window.location.hash.replace('#', '')
      if (id && id !== '/') {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth' })
          })
        })
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div style={{ position: 'relative', background: '#0a0a0a' }}>
      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={handleLoaded} />}
      </AnimatePresence>
      <BackgroundVideo />
      <ScrollProgress />
      <Grain />
      <Navbar />
      {route === 'home' && <MobileCtaBar />}
      {route === 'home' ? (
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
