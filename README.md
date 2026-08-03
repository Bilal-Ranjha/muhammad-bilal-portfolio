# Muhammad Bilal Portfolio

A professional developer portfolio for Muhammad Bilal, built to attract Fiverr clients, freelance clients, and job opportunities.

## Tech Stack

- React
- Vite-powered Sites/Vinext app
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React icons

## Sections Included

- Responsive navbar with mobile menu
- Hero section with technology badges
- About section
- Skills grouped by category
- Project showcase with feature lists and technology tags
- Services
- Experience and education timeline
- Contact form with client-side validation
- Footer with quick links and social placeholders

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Add Future Projects

Project content lives in `data/portfolio.ts`. To add a new project, add another object to the `projects` array with:

- `title`
- `type`
- `description`
- `features`
- `technologies`
- `liveLabel`
- `codeHref`
- `icon`

The project section will render it automatically.

## Update Contact Details

Replace the clearly labeled placeholders in `data/portfolio.ts`:

- Fiverr profile URL
- LinkedIn profile URL
- Email address
- Resume PDF path

Place the final resume PDF in `public/` and update the navbar link if the filename changes.

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default build command: `npm run build`.
4. Deploy after the build succeeds.

## Files Created or Updated

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/Reveal.tsx`
- `components/Ui.tsx`
- `sections/HeroSection.tsx`
- `sections/AboutSection.tsx`
- `sections/SkillsSection.tsx`
- `sections/ProjectsSection.tsx`
- `sections/ServicesSection.tsx`
- `sections/TimelineSection.tsx`
- `sections/ContactSection.tsx`
- `data/portfolio.ts`
- `hooks/useContactForm.ts`
- `components/PortfolioApp.tsx`
- `assets/`
- `public/favicon.svg`
- `public/resume-placeholder.pdf`
