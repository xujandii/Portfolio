# Repository Guidelines

## Project Structure & Module Organization

Jandi Nguyen’s Next.js portfolio presents a Junior Service & UX Designer based in Helsinki.

- `src/app/`: App Router pages, self-hosted fonts, and global styles. Case studies use `work/[slug]/`.
- `src/components/`: shared navigation, artwork, galleries, timelines, and contact interactions.
- `src/content/`: project narratives, media, and recommendations. Keep intentions distinct from measured results.
- `src/lib/`: public-file/base-path helpers and the static image loader.
- `config/`: responsive image settings and legacy route mappings.
- `public/`: supplied media. Preserve originals, including the portrait PNGs; `public/_images/` is generated.
- `scripts/`: asset preparation, static build/preview, and repository/export checks.
- `tests/`: HTTP acceptance checks, public-only fixtures, and unit tests.
- `DESIGN.MD`: visual source of truth; read before UI changes. `docs/deployment.md` describes GitHub Pages.

## Build, Test, and Development Commands

Use Node.js 24+ from the repository root:

- `npm ci`: install the locked dependencies.
- `npm run dev`: prepare images and start development at `http://127.0.0.1:3000`.
- `npm run build`: generate responsive images and a static website in `out/`.
- `npm start`: preview `out/` at `http://127.0.0.1:4173`.
- `npm run check`: lint, types, formatting, design lint, and unit tests.
- `npm run test:export`: verify exported pages and referenced files.
- `TEST_BASE_URL=http://127.0.0.1:4173 npm test`: check the running static site.
- `npm run assets:prepare`: refresh image variants after adding assets.
- `npm run repo:prepare`: create the public-only upload folder in `dist/github-repository/`.

## Coding & Testing Conventions

Use TypeScript, two-space indentation, single quotes, PascalCase components, and kebab-case routes. Separate content from rendering. Prefer Server Components; reserve client components for browser interaction. Static Phosphor icons use the SSR entry point; interactive approach/capability icons retain direct imports and regular weight. Reuse CSS tokens and preserve semantic HTML, visible focus, reduced motion, and the approved portrait transition.

Use `assetPath` for public files; Next Link handles route prefixes. Test root and repository URLs, direct refreshes, mobile/tablet/desktop layouts, image dialogs, video seeking, forms, and navigation. No coverage threshold is configured. Record meaningful checks in `docs/validation.md` locally.

## Repository & Content Rules

No Git history establishes commit conventions. Use focused imperative subjects; PRs describe purpose, checks, and visual evidence.

Keep `Project content/`, Framer exports, private progress notes, `.env.local`, and dependencies out of Git. Do not publish or upload without authorization. Preserve NDA notices, junior role, Helsinki location, and placeholder disclosures. Keep indexing disabled until approved. Contact configuration is public; enquiries open email drafts and are not sent or stored by the site. Local Framer regeneration remains separate from GitHub deployment.
