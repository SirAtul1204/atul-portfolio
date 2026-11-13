# Atul Singh — Portfolio

Next.js App Router, TypeScript, and Qevryn UI (Prism Satin). Content is transcribed from the supplied resume. Project illustrations are labeled interface concepts, not screenshots.

## Run

Requires Node.js 20.9+.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`. Verify TypeScript with `npm run typecheck`.

## Update your information

Edit **`content/portfolio.json`**. It contains your profile, social links, stats, projects, experience, skills, and education. The Zod schema in `lib/portfolio.ts` validates content and duplicate project slugs at build time. Rebuild and redeploy after changes. No database, credentials, or public edit endpoint is required. Whoever has repository access can update the content.

To add a project, copy an entry in `projects`, give it a unique lowercase hyphenated `slug`, and update its text, technologies, features, and GitHub URL (empty string for private work). `visual` accepts `restaurant` or `booking`; customize `components/project-visual.tsx` for a different illustration. Case-study routes and category filters follow the JSON automatically.

Replace `public/resume.pdf` when updating your original downloadable resume. The `/resume` web page always uses the JSON and offers print / save PDF. The PDF and JSON are separate files: keep both current.

## Rendering

- `/`: statically generated at build time (SSG).
- `/projects/[slug]`: generated at build time with `generateStaticParams`; unknown slugs return 404.
- `/resume`: rendered on every request (`force-dynamic`, SSR). JSON is bundled with the application, so content changes still require a deployment.
- Only filters, clipboard, and printing need client-side state. The initial portfolio content is present in the server-generated HTML.

## Deployment

Deploy to a Next.js-compatible Node.js host, such as Vercel, or run `npm run build && npm start` on your own server. This project is not configured as a static export because it includes SSR. Nothing is published automatically.

Google Fonts supplies DM Sans and Manrope, with local sans-serif fallbacks if unavailable. All contact links, project links, and resume downloads are real; there is no contact-form backend or admin UI. JSON editing is the chosen update workflow.
