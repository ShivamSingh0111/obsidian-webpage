import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react'
import FadeUp from './FadeUp.jsx'
import RichReveal from './RichReveal.jsx'
import { CONTACT, SECONDARY_SERVICES, SERVICES } from '../data/content.js'

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), ...SECONDARY_SERVICES]

const SOCIAL_ICONS = {
  Instagram: <Instagram size={18} strokeWidth={2} aria-hidden="true" />,
  'X (Twitter)': <X size={18} strokeWidth={2.5} aria-hidden="true" />,
  LinkedIn: <Linkedin size={18} strokeWidth={2} aria-hidden="true" />,
  Facebook: <Facebook size={18} strokeWidth={2} aria-hidden="true" />,
}

// Enquiry form delivers via POST /api/contact (Resend). If the endpoint is
// missing (e.g. local `vite dev` without functions) or delivery fails, the
// visitor falls back to a pre-addressed email — nobody ever hits a dead end.
function EnquiryForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [failed, setFailed] = useState(null)

  const mailtoFor = ({ name, reach, service, budget, details }) => {
    const subject = `Project enquiry — ${service} — ${name}`
    const body = [
      `Name: ${name}`,
      `Contact: ${reach}`,
      `Service: ${service}`,
      `Budget: ${budget || 'Not specified'}`,
      '',
      details,
    ].join('\n')
    return `mailto:${CONTACT.email.label}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      name: String(data.get('name') || '').trim(),
      reach: String(data.get('reach') || '').trim(),
      service: String(data.get('service') || ''),
      budget: String(data.get('budget') || ''),
      details: String(data.get('details') || '').trim(),
      website: String(data.get('website') || ''),
    }
    if (!payload.name || !payload.reach || !payload.service || !payload.details) return
    setStatus('sending')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const out = await r.json().catch(() => ({}))
      if (!r.ok || !out.ok) throw new Error(out.error || 'delivery failed')
      setStatus('sent')
    } catch {
      setFailed(payload)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" style={{ padding: '24px 0' }}>
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--accent)',
            color: 'var(--ink)',
            marginBottom: '24px',
          }}
        >
          <Check size={26} strokeWidth={2.5} />
        </span>
        <p
          style={{ margin: 0, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#fff' }}
        >
          Thanks — your enquiry is on its way.
        </p>
        <p
          style={{
            margin: '16px 0 0',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'var(--muted-dark)',
          }}
        >
          We reply within 24 hours. In a hurry?{' '}
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--accent)' }}
          >
            WhatsApp us directly
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="link-arrow"
          style={{ color: '#fff', marginTop: '28px', fontSize: '12px' }}
        >
          Send another enquiry
          <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div role="alert" style={{ padding: '24px 0' }}>
        <p
          style={{ margin: 0, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#fff' }}
        >
          Couldn&apos;t send just now.
        </p>
        <p
          style={{
            margin: '16px 0 0',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'var(--muted-dark)',
          }}
        >
          Nothing you typed is lost — send it through your own email app instead, or try again.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '28px' }}>
          <a className="btn-brass" href={failed ? mailtoFor(failed) : CONTACT.email.href}>
            Send via email app
            <span className="button-icon">
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="link-arrow"
            style={{ color: '#fff', fontSize: '12px' }}
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="form-intro">
        <div>
          <span className="form-kicker">Project enquiry</span>
          <h3>
            Let&apos;s make it <em>useful.</em>
          </h3>
        </div>
        <span className="form-step">
          01 <i /> 02
        </span>
      </div>
      <p className="form-note">
        A few details help us arrive prepared. No sales script, just a useful first conversation.
      </p>
      {/* honeypot — invisible to humans, catches bots */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }}
      />
      <div className="contact-form-grid">
        <div className="field">
          <label htmlFor="enquiry-name">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Rahul Sharma"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="enquiry-reach">
            Email or phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="enquiry-reach"
            name="reach"
            type="text"
            autoComplete="email"
            placeholder="you@company.com / +91…"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="enquiry-service">
            Service needed <span aria-hidden="true">*</span>
          </label>
          <span className="select-wrap">
            <select id="enquiry-service" name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
        <div className="field">
          <label htmlFor="enquiry-budget">Budget range</label>
          <span className="select-wrap">
            <select id="enquiry-budget" name="budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              {CONTACT.budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
        <div className="field field-full">
          <label htmlFor="enquiry-details">
            Project details <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="enquiry-details"
            name="details"
            rows={6}
            placeholder="What do you want to build? Goals, timeline, links to your current site…"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn-brass"
        style={{ marginTop: '28px' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Start a project'}
        <span className="button-icon">
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </button>
      <p
        style={{
          margin: '20px 0 0',
          fontSize: '11px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--faint-dark)',
        }}
      >
        Free consultation · Response &lt; 24h
      </p>
    </form>
  )
}

function InfoRow({ href, external, icon, children, label }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '13px 0',
        fontSize: '17px',
        fontWeight: 500,
        color: '#fff',
        textDecoration: 'none',
      }}
      className="info-row"
    >
      <span
        aria-hidden="true"
        style={{ color: 'var(--accent)', display: 'inline-flex', flex: 'none' }}
      >
        {icon}
      </span>
      {children}
    </a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0a',
        padding: '320px 48px 100px',
        overflow: 'clip',
      }}
    >
      {/* faint brass glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '-320px',
          width: '720px',
          height: '720px',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(212,168,83,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <span className="ghost-num" aria-hidden="true" style={{ top: '24px', right: '32px' }}>
        09
      </span>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        <FadeUp delay={0}>
          <div
            className="contact-shell-card"
            style={{
              position: 'relative',
              overflow: 'clip',
              background: 'rgba(17, 17, 17, 0.78)',
              border: '1px solid var(--line-dark)',
              borderRadius: '32px',
              padding: 'clamp(32px, 5vw, 72px)',
            }}
          >
            <div className="contact-shell">
              <div>
                <span className="eyebrow">
                  {CONTACT.number} · {CONTACT.eyebrow}
                </span>
                <h2
                  className="display-title"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(44px, 5.5vw, 84px)',
                    lineHeight: 0.98,
                    letterSpacing: '-0.02em',
                    marginTop: '24px',
                  }}
                >
                  <RichReveal segments={CONTACT.titleSegments} baseDelay={0.1} step={0.05} y={40} />
                </h2>
                <p
                  style={{
                    margin: '28px 0 0',
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'var(--muted-dark)',
                    maxWidth: '420px',
                  }}
                >
                  {CONTACT.lede}
                </p>
                <p
                  style={{
                    display: 'inline-block',
                    margin: '28px 0 0',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    border: '1px solid rgba(212, 168, 83, 0.4)',
                    background: 'rgba(212, 168, 83, 0.1)',
                    borderRadius: '9999px',
                    padding: '10px 20px',
                  }}
                >
                  {CONTACT.responseBadge}
                </p>
                <div
                  style={{
                    marginTop: '24px',
                    borderTop: '1px solid var(--line-dark)',
                    paddingTop: '12px',
                  }}
                >
                  <InfoRow
                    href={CONTACT.email.href}
                    icon={<Mail size={18} strokeWidth={2} />}
                    label={`Email us at ${CONTACT.email.label}`}
                  >
                    {CONTACT.email.label}
                  </InfoRow>
                  <InfoRow
                    href={CONTACT.phone.href}
                    icon={<Phone size={18} strokeWidth={2} />}
                    label={`Call us at ${CONTACT.phone.label}`}
                  >
                    {CONTACT.phone.label}
                  </InfoRow>
                  <InfoRow
                    href={CONTACT.whatsapp.href}
                    external
                    icon={<MessageCircle size={18} strokeWidth={2} />}
                    label="Chat with us on WhatsApp"
                  >
                    {CONTACT.whatsapp.label}
                  </InfoRow>
                </div>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    margin: '24px 0 0',
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--muted-dark)',
                  }}
                >
                  <ShieldCheck
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    style={{ color: 'var(--accent)', flex: 'none' }}
                  />
                  {CONTACT.confidentiality}
                </p>
                <p
                  style={{
                    margin: '28px 0 0',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--muted-dark)',
                  }}
                >
                  Follow us
                </p>
                <div className="social-row" style={{ marginTop: '16px' }}>
                  {CONTACT.socials.map((s) => (
                    <a
                      key={s.label}
                      className="social-btn"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${s.label} (opens in new tab)`}
                    >
                      {SOCIAL_ICONS[s.label]}
                    </a>
                  ))}
                </div>
                <p
                  style={{
                    margin: '24px 0 0',
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--faint-dark)',
                  }}
                >
                  {CONTACT.hours}
                </p>
              </div>

              <div
                className="contact-form-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--line-dark)',
                  borderRadius: '24px',
                  padding: 'clamp(24px, 3vw, 40px)',
                }}
              >
                <EnquiryForm />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
