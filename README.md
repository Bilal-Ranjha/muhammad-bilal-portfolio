# Muhammad Bilal Portfolio

A production-ready developer portfolio for Muhammad Bilal, focused on freelance clients, Fiverr leads, and frontend or AI chatbot opportunities. The site uses a premium dark SaaS style with responsive layouts, animated interactions, project previews, and honest placeholder contact details where final profile links are still missing.

## Features

- Premium dark SaaS portfolio design
- Standard Next.js App Router project structure
- Responsive navbar with mobile menu
- Hero section with animated typing roles
- Professional profile photo placeholder
- Animated CTA buttons and section reveals
- Project cards with optimized lazy-loaded screenshots
- Technology badges and feature lists
- Disabled live demo buttons for undeployed projects
- GitHub buttons for project source links
- Skills section with animated progress bars
- Improved experience and education timeline
- Premium contact form with client-side validation
- Fiverr, GitHub, LinkedIn, and email contact links
- Open Graph image, favicon, title, and meta description
- Mobile-first spacing and touch-friendly controls
- Back to Top button and freelance availability badge

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Lucide React icons
- TypeScript

## Installation

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Next.js defaults to:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is now a standard Next.js project and deploys to Vercel with default settings.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use the default install command: `npm install`.
5. Use the default build command: `npm run build`.
6. Deploy.

The `engines.node` field requests Node.js 22.13 or newer for compatibility with the installed Next.js and build tooling.

## Screenshots

Project preview assets are stored in `public/projects/`:

- `br-chat-ai.svg`
- `medibook-ai.svg`
- `react-business-website.svg`

Replace these with real exported screenshots from the deployed applications when final production screenshots are available. Keep the same filenames or update `data/portfolio.ts`.

## Updating Projects

Project content lives in `data/portfolio.ts`. Add or edit objects in the `projects` array to update:

- Title
- Type
- Description
- Features
- Technologies
- Screenshot path
- Live demo URL
- GitHub URL

Leave `liveHref` empty when a project has not been deployed; the site will show a disabled live demo button.

## Updating Contact Details

Replace the clearly labeled placeholders in `data/portfolio.ts`:

- Fiverr profile URL
- LinkedIn profile URL
- Email address
- Resume PDF path if needed

Place the final resume PDF in `public/` and update the navbar link if the filename changes.
