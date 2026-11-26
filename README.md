# Bilal Ranjha — Full-Stack Developer & AI Solutions Developer

A local-first Next.js portfolio with a black and emerald visual system, an animated canvas particle landscape, sequential case studies and direct browser-side Web3Forms inquiry delivery.

## Local development

Requires Node.js 22.13 or newer and npm. Run commands from the repository root.

```powershell
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open http://127.0.0.1:3000. No production deployment is required.

## Checks

```powershell
npm run typecheck
npm run lint
npm test
npm run build
```

The automated tests cover content preservation, browser submission protections, full and compact form validation, pending/success/failure states, and particle lifecycle behavior. Tests use mocked transports and never send messages. Type checks disable incremental output.

## Content and structure

- data/portfolio.ts: navigation, services, project narratives, technology stack and process.
- sections/: the seven main content sections, composed with the header and footer in components/PortfolioApp.tsx.
- components/ParticleWave.tsx: perspective-projected flowing emerald wave, 30 fps cap, bounded pixel ratio, offscreen and hidden-tab pausing, reduced-motion fallback and manual pause.
- components/InquiryForm.tsx and hooks/useContactForm.ts: shared full and compact inquiry form behavior.
- Both forms submit directly to Web3Forms; there is no contact API proxy.
- app/robots.ts and app/sitemap.ts: search engine routes.
- scripts/generate-branding.mjs: regenerates local icons and the 1200×630 Open Graph image using the existing Next.js sharp dependency.

The unused timeline component and typing hook were removed after checking imports. The existing authentication helper is retained but is not connected to the public portfolio.

## Email configuration

Both forms POST JSON directly from the browser to https://api.web3forms.com/submit using NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. This is the public form access key intended for browser use, not a private API credential. No other credential is exposed. See the [official browser integration](https://docs.web3forms.com/how-to-guides/html-and-javascript).

In the existing Vercel project bilalranjha, set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your Web3Forms form access key for both Production and Preview. Set NEXT_PUBLIC_SITE_URL to https://bilalranjha.vercel.app for canonical metadata. The old WEB3FORMS_ACCESS_KEY and Resend variables are unused and can be removed from this project. Do not rename any unrelated secret with a NEXT_PUBLIC_ prefix. Public variables are embedded at build time: a new approved build/deployment is required after changes. No deployment was performed during this task.

Both forms use the free-plan hCaptcha site key documented by Web3Forms, through @hcaptcha/react-hcaptcha, with compact dark styling. Enable hCaptcha under the form's Block Spam settings in the Web3Forms dashboard so verification is enforced by the provider. No separate hCaptcha secret or environment variable is needed. See [official hCaptcha setup](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha). The existing honeypot is retained alongside the supported botcheck checkbox. Client validation is not a security boundary; provider-side captcha enforcement and spam filtering protect the public endpoint.

Missing public configuration, uncompleted/expired captcha, or filled honeypots prevent sending. Success requires a successful HTTP response and explicit JSON success: true. HTTP errors, rejection, malformed JSON, redirects, network errors and the 15-second timeout show the existing generic error and preserve entered values. Captcha tokens are cleared and widgets reset after each attempt. A synchronous submission lock blocks duplicate events even before React re-renders. There are no automatic retries; after an uncertain network failure, delivery may already have occurred. Requests omit cookies and page query strings. The removed API's in-memory rate limiter is replaced by Web3Forms' provider-side protections.

All verification uses mocked fetch responses and captcha tokens, never real submissions. Live captcha loading/challenges and inbox delivery remain to be verified after owner approval. For local configuration, use an ignored .env.local; tests and builds need no real key. Without the public key, forms safely show the existing error when submitted.

## Project evidence

- TaskFlow AI: owner-provided dashboard screenshot with the account footer cropped out for privacy, from https://taskflowai-bilal.vercel.app/, replacing the previous login and registration captures. Public login, registration and password-reset pages were reviewed. Registration offers a workspace name and optional sample projects/tasks. Authenticated workflows, AI behavior and email delivery were not exercised. Technical stack remains owner-supplied rather than independently verified.
- Tax Wiser: existing real homepage screenshot, live link and source link retained.
- MediBook AI: existing real homepage screenshot retained. Copy reflects an application foundation; completed booking/authentication are not asserted.
- BR Chat AI: existing SVG illustration clearly labeled as an illustration.

To replace project imagery, update screenshot, screenshotAlt and imageLabel in data/portfolio.ts. Do not publish unverified metrics, clients or feature claims.

## Accessibility and layout

Native modal dialogs with explicit Tab/Shift+Tab wrapping provide focus containment, Escape dismissal and focus return for the mobile menu and quick inquiry form. Fields have labels, associated errors, first-error focus and accessible status messages. All original section anchors are retained, including #skills and #experience. Existing email, LinkedIn, Fiverr, project links and back-to-top navigation remain available.

The hero headline and page content remain visible without waiting for entrance animations. The design supports keyboard navigation, reduced motion and responsive layouts from 360px through large desktop widths.

## Deployment preparation

This redesign is prepared on the local portfolio-redesign branch of the existing Bilal-Ranjha/muhammad-bilal-portfolio repository. Existing commit history is preserved. Backups and local review artifacts stay outside the repository.

The existing Vercel project is bilalranjha, with production domain https://bilalranjha.vercel.app/. The Next.js application lives at the repository root. Use npm ci to install the lockfile and npm run build to build. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Production and Preview before building, and enable hCaptcha in Web3Forms form settings. Browser delivery does not require the paid server-side plan or server IP allowlisting. Keep NEXT_PUBLIC_SITE_URL set to the production origin. No credentials belong in the repository.

Do not commit, push, merge or deploy without the owner's explicit approval. A push to a Vercel-connected repository can trigger a preview or production deployment depending on its settings.

The dev and build scripts use the supported Webpack compiler because Turbopack encountered a child-process failure in this Windows sandbox. Next.js remains the application framework.
