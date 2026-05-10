# Photography Portfolio

Premium static portfolio website for a professional photographer, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and lucide-react. It is configured for static export and GitHub Pages deployment.

## What Is Included

- Full-screen visual hero using the profile image placeholder
- Sticky navigation with smooth scrolling
- Category-filtered portfolio masonry gallery
- Lightbox image preview with keyboard navigation
- About, services/pricing, testimonials, social links, and contact form
- SEO metadata and structured data
- shadcn-compatible project structure with `components.json`
- GitHub Pages workflow in `.github/workflows/deploy.yml`

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  demo.tsx
  portfolio-experience.tsx
  ui/
    portfolio-gallery.tsx
lib/
  portfolio.ts
  utils.ts
public/
  assets/
tests/
  portfolio.test.ts
```

The default component path is `components/ui`, matching the shadcn convention and the alias in `components.json`. Keeping shared UI in this folder matters because generated or copied shadcn components commonly import from `@/components/ui/*`, and moving it later can break aliases across the app.

The main stylesheet is `app/globals.css`. Tailwind CSS v4 is enabled through `postcss.config.mjs` and the shadcn style aliases are defined in `components.json`.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL that Next prints, usually `http://localhost:3000`.

## Verify

```bash
npm run test:run
npm run lint
npm run build
```

`npm run build` exports the static site to `out/`.

## Replace Dummy Data

Edit `lib/portfolio.ts` to update:

- Photographer name, tagline, bio, email, phone, and social links
- `profileImage` for the Hero section
- `heroImage` for the About section detail image
- Portfolio image URLs, alt text, categories, locations, and years
- Service packages and testimonials

For local assets, place files under `public/assets/portfolio/` and use paths like `/assets/portfolio/wedding-01.jpg` in `lib/portfolio.ts`. When deploying to a project GitHub Pages URL, remote Unsplash image URLs work without any extra path handling.

## GitHub Pages Deployment

This project includes `.github/workflows/deploy.yml`. After pushing to GitHub:

1. Open the repository settings on GitHub.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`.

The workflow runs tests, builds the static export, uploads `out/`, and publishes it to GitHub Pages. The Next config automatically adds the repository base path during GitHub Actions builds for project pages like `/photography-portfolio/`.

## If You Need To Recreate This Setup Elsewhere

If an existing codebase does not already support shadcn, Tailwind CSS, and TypeScript, initialize those pieces first:

```bash
npx shadcn@latest init
npm install tailwindcss @tailwindcss/postcss postcss
npm install -D typescript @types/react @types/node
```

Then keep reusable shadcn-style components in `components/ui`, keep utility helpers in `lib/utils.ts`, and point your global stylesheet to the app's main CSS file.