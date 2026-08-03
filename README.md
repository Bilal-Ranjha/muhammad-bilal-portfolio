# Muhammad Bilal Portfolio

A production-ready developer portfolio for Muhammad Bilal, focused on freelance clients, Fiverr leads, and frontend or AI chatbot opportunities. The site keeps a premium dark SaaS look with responsive layouts, animated interactions, project previews, and honest placeholder contact details where final profile links are still missing.

## Features

- Premium dark SaaS portfolio design
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

- React
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React icons
- Vite-powered Sites/Vinext app

## Installation

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. In this workspace the current preview has been running on:

```text
http://127.0.0.1:5173
```

## Production Build

```bash
npm run build
```

## Deployment

### Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the build command as `npm run build`.
4. Deploy after the build succeeds.

### Sites

This project includes `.openai/hosting.json` for Sites deployment. Build first, then publish through the Sites deployment flow.

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
