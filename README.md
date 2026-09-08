# Obsidian Tech Solution

The marketing site for **Obsidian Tech Solution** — a dark, editorial-style React site for websites, apps, and custom software.

## What’s included

- Cinematic fixed background video with poster fallback
- Responsive navigation, mobile menu, preloader, scroll progress, and grain overlay
- Sections for services, selected work, process, stats, testimonials, engagement models, FAQ, and contact
- Reduced-motion and Save-Data fallbacks for the background video and animations
- Minimal hash routes for the legal pages: `#/privacy` and `#/terms`
- Contact enquiry form with a Vercel serverless endpoint and Resend email delivery
- Accessible focus states, skip link, semantic sections, metadata, Open Graph tags, and JSON-LD

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3 with PostCSS and Autoprefixer
- Framer Motion for reveal and transition animations
- Lucide React for icons
- Helvetica Now Var for UI text and Instrument Serif for display accents

## Project structure

```text
.
├── api/contact.js          # Vercel serverless contact-form handler
├── public/                 # Favicon and poster assets
├── index.html              # Document metadata, fonts, and JSON-LD
├── src/
│   ├── components/         # Page sections and shared UI
│   ├── data/content.js     # Brand, navigation, copy, contact, and footer data
│   ├── hooks/              # Scroll, video, and count-up hooks
│   ├── App.jsx             # App composition and hash routing
│   ├── index.css           # Design tokens and global styles
│   └── main.jsx            # React entry point
├── package.json
└── vite.config.js
```

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Other available scripts:

```bash
npm run build    # Create the production bundle in dist/
npm run preview  # Preview the production bundle locally
npm run format   # Format the project with Prettier
```

## Editing site content

Most visible copy, links, contact details, service options, FAQs, and project data live in [`src/data/content.js`](src/data/content.js). Update that file before changing individual components.

The background video and poster are configured there as well:

- `BG_VIDEO` — desktop video URL
- `BG_VIDEO_MOBILE` — mobile video URL; currently uses the desktop URL
- `BG_POSTER` — poster/fallback image

The current work, stats, and testimonial entries are explicitly marked as placeholders and should be replaced with verified project data before launch.

## Contact form

The form submits a `POST` request to `/api/contact`. The endpoint sends enquiries through [Resend](https://resend.com/).

For local frontend work, `npm run dev` only serves the Vite app; it does not run the serverless function. If `/api/contact` is unavailable or delivery fails, the form preserves the entered details and offers a pre-addressed email fallback.

For a deployed Vercel project, configure these environment variables:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=your_inbox@example.com
CONTACT_FROM=Obsidian Tech Solution <hello@your-verified-domain.com>
```

`RESEND_API_KEY` is required. `CONTACT_TO` and `CONTACT_FROM` are optional; see [`.env.example`](.env.example) for defaults and setup notes. Do not commit real credentials or a local `.env` file.

## Deployment

The project is ready for Vercel:

1. Import the repository into Vercel.
2. Keep the default Vite build settings, or use `npm run build` with `dist` as the output directory.
3. Add the Resend environment variables above.
4. Deploy and verify the homepage, `#/privacy`, `#/terms`, and contact form.

The `api/contact.js` file is picked up automatically as a Vercel serverless function. If deploying to another platform, adapt that handler to the platform’s function format.

## Before launch

- Replace the placeholder background footage and poster artwork with production assets.
- Add a compressed mobile video rendition and point `BG_VIDEO_MOBILE` to it.
- Replace placeholder work, stats, and testimonials with approved content.
- Verify the contact sender domain in Resend and set `CONTACT_FROM`.
- Test the contact form, legal routes, reduced-motion behavior, and mobile layout on the production domain.
