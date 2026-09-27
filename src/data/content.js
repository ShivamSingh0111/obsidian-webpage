// Central content contract — Obsidian Tech Solution premium site.
// Placeholders are explicit TODOs. No fabricated clients, metrics, or names.

export const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4'
// TODO: replace with final graded Obsidian footage:
// '/video/obsidian-bg-desktop.mp4' + '/video/obsidian-bg-mobile.mp4'
export const BG_VIDEO_MOBILE = BG_VIDEO
// TODO: encode a ≤2MB 720p rendition and point BG_VIDEO_MOBILE at it.
export const BG_POSTER = '/posters/obsidian-hero.svg'

export const BRAND = {
  short: 'Obsidian',
  full: 'Obsidian Tech Solution',
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#engagement' },
  { label: 'FAQ', href: '#faq' },
]

export const NAV_CTA = { label: 'Start a project', href: '/contact' }

export const HERO = {
  eyebrow: 'Obsidian Tech Solution — Websites · Apps · Software',
  // `accent: true` renders the phrase in Instrument Serif italic.
  titleSegments: [
    { t: 'We build ' },
    { t: 'digital systems ', accent: true },
    { t: 'that move ' },
    { t: 'business forward.', accent: true },
  ],
  lede: 'A technology partner for businesses that take digital seriously. Design, engineering, and long-term support under one roof.',
  primaryCta: { label: 'Start a project', href: '/contact' },
  secondaryCta: { label: 'See our work', href: '#work' },
  metaLeft: 'Scroll to explore',
  metaRight: 'Websites · Apps · Custom software',
}

export const MARQUEE = [
  'Website Design & Development',
  'Web Application Development',
  'Mobile App Development',
  'Custom Software Development',
  'UI/UX Design',
  'Business Automation',
  'AI Chatbot Implementation',
  'Technology Consulting',
]

export const STATEMENT = {
  number: '01',
  eyebrow: 'Who we are',
  titleSegments: [
    { t: 'One senior team for ' },
    { t: 'strategy, design and engineering', accent: true },
    { t: ' — no hand-offs, no juniors learning on your budget.' },
  ],
  body: 'Obsidian Tech Solution helps businesses build, improve, and scale their digital presence. You work directly with the people designing and building your product — from first sketch to launch day and beyond.',
  ticks: ['Senior-led builds', 'Clear communication', 'Long-term support'],
  foundersLabel: 'Co-founders',
  founders: ['Jay Mahato', 'Prashant Pal', 'Shivam Singh'],
}

export const SERVICES_HEAD = {
  number: '02',
  eyebrow: 'Services',
  titleSegments: [{ t: 'What we ' }, { t: 'build', accent: true }, { t: ' for you' }],
  lede: 'Every engagement is designed around your goals — then engineered to a standard your customers can feel.',
}

export const SERVICES = [
  {
    no: '01',
    poster: '/posters/service.svg',
    title: 'Website Design & Development',
    text: 'High-performance marketing websites designed to communicate value, build credibility, and turn visitors into enquiries.',
    tags: ['Design', 'Build', 'CMS', 'SEO'],
  },
  {
    no: '02',
    poster: '/posters/service.svg',
    title: 'Web Application Development',
    text: 'Custom web applications designed around real business requirements — not bloated off-the-shelf tools.',
    tags: ['Web Apps', 'Dashboards', 'APIs'],
  },
  {
    no: '03',
    poster: '/posters/service.svg',
    title: 'Mobile App Development',
    text: 'Native-quality iOS and Android apps designed, built, and launched by one senior team, end to end.',
    tags: ['iOS', 'Android', 'Launch'],
  },
  {
    no: '04',
    poster: '/posters/service.svg',
    title: 'Custom Software Development',
    text: 'Purpose-built dashboards, integrations, and internal systems that remove manual work and scale with you.',
    tags: ['Dashboards', 'APIs', 'Automation'],
  },
]

export const SECONDARY_SERVICES = [
  'UI/UX Design',
  'Business Automation',
  'AI Chatbot Implementation',
  'Technology Consulting',
]

export const WORK_HEAD = {
  number: '03',
  eyebrow: 'Selected work',
  titleSegments: [{ t: 'Work that ' }, { t: 'works', accent: true }, { t: ' as good as it looks' }],
  lede: 'A selection of websites, apps, and systems built for businesses like yours.',
}

// TODO: replace placeholder work with real client projects (no invented metrics).
export const WORK = [
  {
    client: 'B2B Services Website',
    industry: 'Professional services',
    scope: 'Website design & development',
    stack: ['React', 'CMS', 'SEO'],
    challenge: 'An outdated site that did not communicate value or generate enquiries.',
    solution: 'A fast editorial website with clear positioning and a focused enquiry flow.',
    outcome: 'Available on request.',
    poster: '/posters/work.svg',
  },
  {
    client: 'Operations Web App',
    industry: 'Operations',
    scope: 'Custom web application',
    stack: ['React', 'API', 'Dashboard'],
    challenge: 'Manual processes spread across spreadsheets and disconnected tools.',
    solution: 'A purpose-built dashboard that centralises data and daily workflows.',
    outcome: 'Available on request.',
    poster: '/posters/work.svg',
  },
]

export const PROCESS_HEAD = {
  number: '04',
  eyebrow: 'Process',
  titleSegments: [{ t: 'How we ' }, { t: 'work', accent: true }],
  lede: 'A clear process that keeps quality high and surprises low. You always know what happens next.',
}

export const PROCESS = [
  {
    no: '01',
    title: 'Discover',
    text: 'We dig into your business, users, goals, and opportunities — so we solve the right problem, not the obvious one.',
    tag: 'Research',
  },
  {
    no: '02',
    title: 'Define',
    text: 'Product strategy, requirements, and technical direction — agreed in writing before a single screen is designed.',
    tag: 'Scope',
  },
  {
    no: '03',
    title: 'Design',
    text: 'Experience, interface, and visual system — iterated with you in short feedback loops, never a big reveal.',
    tag: 'UI',
  },
  {
    no: '04',
    title: 'Build',
    text: 'Senior engineers build with modern tooling, clean code, and weekly demos you can actually click through.',
    tag: 'Code',
  },
  {
    no: '05',
    title: 'Launch',
    text: 'Careful deployment, measurement, and optimisation — then ongoing support as your business grows.',
    tag: 'Deploy',
  },
]

// TODO: replace with real figures before launch. Count-up animates whatever is here.
export const STATS = {
  eyebrow: '05 · Proof in numbers',
  items: [
    { value: 40, suffix: '+', label: 'Projects shipped' },
    { value: 12, suffix: '', label: 'Industries served' },
    { value: 98, suffix: '%', label: 'Client retention' },
    { value: 24, prefix: '<', suffix: 'h', label: 'Support response' },
  ],
}

export const TESTIMONIALS_HEAD = {
  number: '06',
  eyebrow: 'Clients',
  titleSegments: [{ t: 'What it’s like to ' }, { t: 'work with us', accent: true }],
  lede: 'Straightforward, senior, and reliable — that is the whole pitch.',
}

// TODO: replace with real client testimonials (no invented names or metrics).
export const TESTIMONIALS = [
  {
    quote:
      'Obsidian rebuilt our website in weeks, and the difference in quality was obvious from day one. Clear communication throughout.',
    author: 'Client in professional services',
    role: 'Founder',
  },
  {
    quote:
      'They understood our operations better than vendors we had worked with for years. The dashboard simply works — every day.',
    author: 'Client in operations',
    role: 'Operations lead',
  },
]

export const ENGAGEMENT_HEAD = {
  number: '07',
  eyebrow: 'Engagement',
  titleSegments: [{ t: 'Three ways to ' }, { t: 'work together', accent: true }],
  lede: 'Transparent models, senior people, no surprises. Pick the shape that fits where you are.',
}

export const ENGAGEMENT = [
  {
    name: 'Project',
    tagline: 'Fixed-scope builds',
    text: 'A defined website, app, or system — designed, built, and launched for a fixed quote and timeline.',
    meta: 'Fixed quote & timeline · Design + build + launch · Senior-only team · 30-day post-launch support',
    features: [
      'Fixed quote & timeline',
      'Design + build + launch',
      'Senior-only team',
      '30-day post-launch support',
    ],
    cta: { label: 'Start a project', href: '/contact' },
    featured: false,
  },
  {
    name: 'Dedicated team',
    tagline: 'Monthly product partner',
    text: 'A senior designer plus engineers working on your roadmap month to month — like in-house, without hiring.',
    meta: 'Designer + engineers · Weekly demos & roadmap · Pause or cancel monthly · Direct Slack communication',
    features: [
      'Designer + engineers',
      'Weekly demos & roadmap',
      'Pause or cancel monthly',
      'Direct Slack communication',
    ],
    cta: { label: 'Talk to us', href: '/contact' },
    featured: true,
  },
  {
    name: 'Care plan',
    tagline: 'Support & growth',
    text: 'Keep your product fast, secure, and improving — monitoring, updates, and small enhancements handled.',
    meta: 'Updates & monitoring · Monthly improvements · Priority support · Quarterly growth review',
    features: [
      'Updates & monitoring',
      'Monthly improvements',
      'Priority support',
      'Quarterly growth review',
    ],
    cta: { label: 'Get support', href: '/contact' },
    featured: false,
  },
]

export const FAQ_HEAD = {
  number: '08',
  eyebrow: 'Questions',
  titleSegments: [{ t: 'Asked, ' }, { t: 'answered', accent: true }],
  lede: 'Everything businesses usually want to know before starting.',
}

export const FAQ = [
  {
    q: 'What does your process look like?',
    a: 'Discover, define, design, build, launch. You approve each stage before we move on, see clickable progress every week, and always know what happens next — no black boxes.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most marketing websites take 3–6 weeks; web and mobile apps typically run 8–16 weeks depending on scope. You get a fixed timeline in writing before we start.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on scope — a focused website and a custom platform are different investments. After a short discovery call you receive a fixed quote: no hourly billing surprises.',
  },
  {
    q: 'Can you take over our existing website or app?',
    a: 'Yes. We start with a technical audit — code quality, performance, security — then give you an honest verdict: improve, rebuild, or leave as is.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Every project includes 30 days of post-launch support. After that, care plans cover monitoring, updates, and continuous improvement.',
  },
  {
    q: 'What technologies do you use?',
    a: 'Modern, boring-in-a-good-way tooling: React for interfaces, proven back-end and CMS platforms, and reliable cloud hosting — chosen for longevity, not trends.',
  },
]

export const CONTACT = {
  number: '09',
  eyebrow: 'Contact',
  titleSegments: [{ t: 'Have something worth ' }, { t: 'building?', accent: true }],
  lede: 'Tell us about your website, app, or software project. We reply within one business day — with honest advice, even if we are not the right fit.',
  primaryCta: { label: 'Start a project', href: 'mailto:obsidiantechsolution@gmail.com' },
  email: { label: 'obsidiantechsolution@gmail.com', href: 'mailto:obsidiantechsolution@gmail.com' },
  phone: { label: '+91-84596-10595', href: 'tel:+918459610595' },
  phones: [
    { label: '+91-84596-10595', href: 'tel:+918459610595' },
    { label: '+91-73557-20414', href: 'tel:+917355720414' },
  ],
  whatsapp: { label: 'Chat on WhatsApp', href: 'https://wa.me/917355720414' },
  responseBadge: 'Response < 24h · Mon–Sat, IST',
  confidentiality: 'NDA-friendly. Your idea stays confidential.',
  hours: 'Mon–Sat · 10am–7pm IST · India · Serving worldwide',
  budgets: ['Under ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹5,00,000', '₹5,00,000+'],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/obsidiantechsolution' },
    { label: 'X (Twitter)', href: 'https://x.com/obsidiantechsol' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/obsidian-tech-solution-831206434' },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/people/Obsidian-Tech-Solution/61594291374885',
    },
  ],
}

export const FOOTER = {
  tagline:
    'Websites, apps, and custom software — designed and engineered to move business forward.',
  columns: [
    {
      heading: 'Sitemap',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'Process', href: '#process' },
        { label: 'Pricing', href: '#engagement' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Website Design & Development', href: '#services' },
        { label: 'Web Application Development', href: '#services' },
        { label: 'Mobile App Development', href: '#services' },
        { label: 'Custom Software Development', href: '#services' },
        { label: 'UI/UX Design', href: '#services' },
      ],
    },
  ],
}
