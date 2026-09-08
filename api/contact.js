// POST /api/contact — receives the enquiry form and delivers it via Resend.
//
// Hosting: Vercel picks up any file in /api as a serverless function.
// (Netlify users: move this logic into netlify/functions/contact.js with a
//  `exports.handler` wrapper — the validation + Resend call below is unchanged.)
//
// Required env vars (Vercel dashboard → Project → Settings → Environment Variables):
//   RESEND_API_KEY  — from https://resend.com/api-keys
// Optional:
//   CONTACT_TO      — inbox for enquiries (default: obsidiantechsolution@gmail.com)
//   CONTACT_FROM    — verified sender (default: Resend's onboarding sender, which
//                     only delivers to your own Resend account email — verify your
//                     domain in Resend, then set e.g.
//                     "Obsidian Tech Solution <hello@obsidiantechsolution.in>")
//
// No npm packages needed: this uses the platform fetch to call api.resend.com.

const TO_FALLBACK = 'obsidiantechsolution@gmail.com'
const FROM_FALLBACK = 'Obsidian Tech Solution <onboarding@resend.dev>'

const str = (v, max) =>
  String(v ?? '')
    .trim()
    .slice(0, max)
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = {}
    }
  }
  body = body && typeof body === 'object' ? body : {}

  // Honeypot: bots fill this hidden field; humans never see it.
  if (str(body.website, 500)) return res.status(200).json({ ok: true })

  const name = str(body.name, 120)
  const reach = str(body.reach, 160)
  const service = str(body.service, 120)
  const budget = str(body.budget, 80)
  const details = str(body.details, 5000)

  if (!name || !reach || !service || !details) {
    return res.status(400).json({ ok: false, error: 'Please complete every required field.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Email service is not configured yet.' })
  }

  const to = process.env.CONTACT_TO || TO_FALLBACK
  const from = process.env.CONTACT_FROM || FROM_FALLBACK
  const text = [
    `Name: ${name}`,
    `Contact: ${reach}`,
    `Service: ${service}`,
    `Budget: ${budget || 'Not specified'}`,
    '',
    details,
  ].join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        ...(isEmail(reach) ? { reply_to: reach } : {}),
        subject: `Project enquiry — ${service} — ${name}`,
        text,
      }),
    })
    if (!r.ok) {
      const err = await r.text().catch(() => '')
      console.error('Resend rejected the email:', r.status, err)
      return res
        .status(502)
        .json({ ok: false, error: 'Could not deliver just now — please try email instead.' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend request failed:', err)
    return res.status(502).json({ ok: false, error: 'Network issue — please try email instead.' })
  }
}
