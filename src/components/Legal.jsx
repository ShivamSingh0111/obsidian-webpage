import FadeUp from './FadeUp.jsx'
import RichReveal from './RichReveal.jsx'

// Standalone legal documents rendered at #/privacy and #/terms (see App.jsx).
// NOTE: standard template wording for an IT services studio — have counsel
// review before treating this as binding legal advice.
const DOCS = {
  privacy: {
    eyebrow: 'Legal · Privacy',
    titleSegments: [{ t: 'Privacy ' }, { t: 'policy', accent: true }],
    updated: 'Last updated: September 2026',
    intro:
      'Obsidian Tech Solution (“we”, “us”) builds websites, apps, and custom software for businesses. This policy explains what information we collect through this website and how we use it. If anything here is unclear, email us and we will answer plainly.',
    sections: [
      {
        h: 'Information you share with us',
        p: [
          'When you send an enquiry through our contact form, your details travel directly from your own email app to our inbox — we operate no separate database, account system, or newsletter list on this site.',
          'We receive whatever you choose to include: typically your name, an email address or phone number, the service you need, a budget range, and your project description.',
        ],
      },
      {
        h: 'How we use it',
        p: [
          'We use your enquiry solely to respond to you: to discuss your project, prepare a quote, and follow up on that conversation. We do not sell your details, rent lists, or share your information with advertisers.',
          'If we end up working together, project-related correspondence continues over email, phone, or WhatsApp — only through channels you have already used with us.',
        ],
      },
      {
        h: 'Cookies and analytics',
        p: [
          'This website sets no cookies of its own and runs no third-party analytics, advertising pixels, or cross-site trackers. Embedded fonts load from their providers’ CDNs, which may log routine technical data per their own policies.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'Enquiry emails live in our mailbox for as long as the conversation — and any resulting business relationship — reasonably requires, then are deleted on request. There is no automated retention schedule beyond that.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'Write to obsidiantechsolution@gmail.com any time to ask what we hold about you, to correct it, or to have it deleted. We will act within 30 days. Where Indian law (including the DPDP Act, 2023) grants you further rights, those apply in full.',
        ],
      },
      {
        h: 'Changes to this policy',
        p: [
          'If our practices change, we will update this page and revise the date above. Continued use of the site after a change means you accept the updated policy.',
        ],
      },
    ],
  },
  terms: {
    eyebrow: 'Legal · Terms',
    titleSegments: [{ t: 'Terms of ' }, { t: 'service', accent: true }],
    updated: 'Last updated: September 2026',
    intro:
      'These terms govern projects with Obsidian Tech Solution (“we”, “us”). Every engagement is confirmed in a written quote or proposal — and where these terms and a signed quote differ, the signed quote wins.',
    sections: [
      {
        h: 'Services and quotes',
        p: [
          'We design and build websites, web and mobile applications, custom software, UI/UX, business automation, AI chatbot implementations, and technology consulting, as described in your signed quote.',
          'Anything outside the agreed scope — extra pages, features, platforms, or revisions beyond what the quote includes — is estimated and billed separately, only after your written approval.',
        ],
      },
      {
        h: 'Timelines',
        p: [
          'Timelines in a quote assume prompt feedback and content from you. Each round of review pauses our clock until you respond; delays on inputs move delivery dates by at least the same length.',
        ],
      },
      {
        h: 'Fees and payment',
        p: [
          'Fees, milestones, and payment schedules are fixed in your quote before work begins. Work starts on receipt of the agreed advance; final files, credentials, and store or production releases are handed over on receipt of final payment.',
          'Late payments may pause scheduled work until the account is current.',
        ],
      },
      {
        h: 'Ownership and intellectual property',
        p: [
          'On full payment, you own the finished website, app, or software built specifically for you — code, design, and content created under the engagement.',
          'We retain ownership of our pre-existing tools, libraries, boilerplates, and general know-how, and may reuse non-confidential techniques learned along the way. We claim no rights over your trademarks, data, or business content.',
        ],
      },
      {
        h: 'Confidentiality',
        p: [
          'We treat your idea, data, and materials as confidential by default and are happy to sign your NDA before discovery. Neither side discloses the other’s confidential information without written consent.',
        ],
      },
      {
        h: 'Support after launch',
        p: [
          'Every project includes 30 days of post-launch support for defects in what we delivered, counted from the go-live date. After that, ongoing care continues under a care plan or a separate agreement — out-of-scope changes and third-party outages are billable, not bugs.',
        ],
      },
      {
        h: 'Liability',
        p: [
          'To the maximum extent permitted by law, our total liability for any engagement is limited to the fees you paid for that engagement. We are not liable for indirect losses such as lost profits, nor for failures of third-party hosting, app stores, payment gateways, or platforms outside our control.',
        ],
      },
      {
        h: 'Ending an engagement',
        p: [
          'Either side may end a project with written notice. You pay for work completed and committed costs up to that date; we hand over everything finished and paid for. Advances cover scheduled capacity and are adjusted against work done.',
        ],
      },
      {
        h: 'Governing law',
        p: [
          'These terms are governed by the laws of India. Disputes will first be attempted in good-faith discussion, failing which they are subject to the courts at our principal place of business in India.',
        ],
      },
    ],
  },
}

export default function Legal({ page }) {
  const doc = DOCS[page] || DOCS.privacy

  return (
    <section
      id="main"
      aria-label={page === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
      className="section-pad-x"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, var(--band-top), #0a0a0a 30%)',
        padding: '170px 48px 130px',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <FadeUp delay={0}>
          <a
            href="#main"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = '#main'
              window.scrollTo({ top: 0, behavior: 'auto' })
            }}
            className="link-arrow"
            style={{ color: 'var(--muted-dark)', fontSize: '12px' }}
          >
            Back to home
          </a>
        </FadeUp>
        <FadeUp delay={0.05}>
          <span className="eyebrow" style={{ marginTop: '36px' }}>
            {doc.eyebrow}
          </span>
        </FadeUp>
        <h1
          className="display-title"
          style={{
            color: '#fff',
            fontSize: 'clamp(44px, 7vw, 96px)',
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            marginTop: '24px',
          }}
        >
          <RichReveal segments={doc.titleSegments} baseDelay={0.1} step={0.05} y={36} />
        </h1>
        <FadeUp
          as="p"
          delay={0.3}
          style={{
            margin: '24px 0 0',
            fontSize: '13px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--faint-dark)',
          }}
        >
          {doc.updated}
        </FadeUp>
        <FadeUp
          as="p"
          delay={0.35}
          style={{
            margin: '28px 0 0',
            fontSize: '17px',
            lineHeight: 1.75,
            color: 'var(--muted-dark)',
            maxWidth: '680px',
          }}
        >
          {doc.intro}
        </FadeUp>
        <ol style={{ listStyle: 'none', margin: '64px 0 0', padding: 0 }}>
          {doc.sections.map((s, i) => (
            <FadeUp key={s.h} as="li" delay={0.05 + i * 0.03}>
              <div
                className="legal-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: '24px',
                  padding: '36px 0',
                  borderTop: '1px solid var(--line-dark)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '32px',
                    lineHeight: 1,
                    color: 'var(--accent)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: '22px',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: '#fff',
                    }}
                  >
                    {s.h}
                  </h2>
                  {s.p.map((para, pi) => (
                    <p
                      key={pi}
                      style={{
                        margin: '14px 0 0',
                        fontSize: '15px',
                        lineHeight: 1.75,
                        color: 'var(--muted-dark)',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </ol>
        <FadeUp delay={0.1}>
          <p
            style={{
              margin: '48px 0 0',
              paddingTop: '28px',
              borderTop: '1px solid var(--line-dark)',
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--muted-dark)',
            }}
          >
            Questions about these terms? Email{' '}
            <a href="mailto:obsidiantechsolution@gmail.com" style={{ color: 'var(--accent)' }}>
              obsidiantechsolution@gmail.com
            </a>{' '}
            — we reply within one business day.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
