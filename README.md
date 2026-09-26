# Obsidian Tech Solution

The marketing site for **Obsidian Tech Solution** — a dark, editorial-style React site for websites, apps, and custom software.

Live site: [https://www.obsidiantechsolution.in](https://www.obsidiantechsolution.in)

## What’s included

- Cinematic fixed background video with poster fallback
- Responsive navigation, mobile menu, preloader, scroll progress, and grain overlay
- Sections for services, selected work, process, stats, testimonials, engagement models, FAQ, and contact
- Reduced-motion and Save-Data fallbacks for the background video and animations
- Clean path routing (`/contact`, `/privacy`, `/terms`) with hash fallbacks (`#/privacy`, `#/terms`, `#contact`)
- Contact enquiry form with a Vercel serverless endpoint and Resend email delivery
- Complete SEO suite: canonical URL, Open Graph, Twitter Cards, `robots.txt`, XML `sitemap.xml`, and JSON-LD structured data (WebSite & Organization with ContactPoint)

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
├── api/
│   └── contact.js          # Vercel serverless contact-form handler (Resend)
├── public/
│   ├── _redirects          # SPA redirect rules for static hosting (Netlify/Cloudflare)
│   ├── favicon.svg         # Site favicon
│   ├── posters/            # Video poster fallbacks and graphics
│   ├── robots.txt          # Crawler instructions pointing to sitemap.xml
│   └── sitemap.xml         # XML sitemap with canonical indexable URLs
├── src/
│   ├── components/         # Page sections and shared UI components
│   ├── data/
│   │   └── content.js      # Central copy, links, contact details, and site data
│   ├── hooks/              # Scroll, video, and count-up custom hooks
│   ├── App.jsx             # Root composition, routing, and title sync
│   ├── index.css           # Design tokens, typography, and global styles
│   └── main.jsx            # React entry point
├── index.html              # Meta tags, canonical links, fonts, and JSON-LD schemas
├── package.json            # Scripts and dependencies
├── tailwind.config.js      # Tailwind theme configuration
├── vercel.json             # Vercel deployment and clean route rewrite rules
└── vite.config.js          # Vite build configuration
```

## Requirements

- Node.js 18 or newer (tested with Node 24.x)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (`http://localhost:5173`).

Other available scripts:

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

## Contact form

The form submits a `POST` request to `/api/contact`. The endpoint validates input and sends enquiries via [Resend](https://resend.com/).

For local frontend work, `npm run dev` only serves the Vite app; it does not run the serverless function. If `/api/contact` is unavailable or delivery fails, the form preserves the entered details and offers a pre-addressed email fallback.

For deployment on Vercel, configure these environment variables in your project settings:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=your_inbox@example.com
CONTACT_FROM=Obsidian Tech Solution <hello@your-verified-domain.com>
```

- `RESEND_API_KEY` is required.
- `CONTACT_TO` defaults to `obsidiantechsolution@gmail.com` if omitted.
- `CONTACT_FROM` defaults to Resend's onboarding address until your custom domain is verified.

## Search engine optimization (SEO)

- **Sitemap**: Located at [`https://www.obsidiantechsolution.in/sitemap.xml`](https://www.obsidiantechsolution.in/sitemap.xml).
- **Robots.txt**: Located at [`https://www.obsidiantechsolution.in/robots.txt`](https://www.obsidiantechsolution.in/robots.txt).
- **Google Search Console**:
  - Submit `sitemap.xml` directly in Search Console under **Sitemaps**.
  - When inspecting and indexing URLs, use clean paths like `https://www.obsidiantechsolution.in/` and `https://www.obsidiantechsolution.in/contact` (never submit `#` fragment anchors like `/#contact`).

## Deployment

### Vercel (Production)

The project is preconfigured for Vercel with [`vercel.json`](vercel.json):

1. **Via Vercel CLI**:
   ```bash
   npx vercel --prod
   ```

2. **Via Git Integration / Dashboard**:
   - Connect the repository on [vercel.com](https://vercel.com).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: `Vite`
   - The `/api/contact.js` file is automatically detected and deployed as a serverless function.

> **Note for Collaborators on Vercel Hobby Plan**:
> Vercel's free Hobby plan restricts deployments on private repos to the account owner. To avoid blocked deployments, either:
> 1. Set the repository visibility to **Public** in GitHub Settings, or
> 2. Set up a **Deploy Hook** in Vercel Settings → Git, or
> 3. Deploy directly via CLI with `npx vercel --prod`.

## Before launch checklist

- [ ] Replace placeholder work, stats, and testimonials in `src/data/content.js`.
- [ ] Replace placeholder background footage and poster artwork with graded assets.
- [ ] Verify sender domain in Resend and set `CONTACT_FROM`.
- [ ] Test the contact form delivery on production.
- [ ] Submit `sitemap.xml` in Google Search Console.
