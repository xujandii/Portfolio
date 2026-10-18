# Jandi Nguyen — Portfolio

A Next.js portfolio for a Service & UX Designer in Helsinki. The site exports to ordinary HTML, CSS, JavaScript, and media for GitHub Pages. Its service map, portraits, case studies, image dialogs, horizontal cards, and contact-brief workflow remain interactive.

## Local development

Use Node.js 24 or newer:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open [the development site](http://127.0.0.1:3000). Run commands from the folder containing `package.json`.

## Build and preview

```sh
npm run build
npm start
```

The deployable site is in `out/`. The [static preview](http://127.0.0.1:4173) serves that exact output, including deep links, a custom 404, and video seeking. Builds also work when this local folder’s name contains `#` or `?`; the build script uses a temporary workspace in that case.

Responsive WebP variants are generated before development/builds. Sora, DM Sans, and Instrument Serif are self-hosted from installed font packages. Production builds need no Google Fonts connection or running image API. Original public assets are preserved; unused copies are omitted from `out/`.

## GitHub Pages

Read [deployment instructions](docs/deployment.md). `npm run repo:prepare` creates `dist/github-repository/`, containing the public source and required assets. Use that folder for a new GitHub repository. Original research, confidential material, local progress notes, dependencies, and Framer exports are excluded.

Validation runs on pushes to `main` and pull requests. **Publishing is manual:** enable Pages → GitHub Actions in the repository, then run **Deploy portfolio to GitHub Pages**. Its build detects whether the site needs a repository subpath or a root URL.

## Content and configuration

- Case studies: `src/content/`, with shared types and ordering in `projects.ts`.
- Page copy: `src/app/`; shared components: `src/components/`.
- Visual rules: [DESIGN.MD](DESIGN.MD); paint tokens: `src/app/globals.css`.
- Contact email: public `NEXT_PUBLIC_CONTACT_EMAIL`; repository variable `CONTACT_EMAIL` can override the approved address.
- Images and videos: `public/`. Run `npm run assets:prepare` after changing images during development.

The contact form opens email drafts and does not send or store enquiries. Preserve NDA notices, the distinction between findings and intentions, and labels on illustrative artwork. Search indexing remains disabled until content is approved for indexing. Existing local Framer tooling remains separate and does not upload automatically.

## Checks

```sh
npm run check          # Lint, types, formatting, design document, unit checks
npm run build
npm run test:export    # Verify static files and referenced paths
npm start             # Keep running in another terminal
TEST_BASE_URL=http://127.0.0.1:4173 npm test
```

Acceptance tests also run under a repository subpath in CI. See [performance notes](docs/performance.md) for measurements and dependency-audit limitations.
