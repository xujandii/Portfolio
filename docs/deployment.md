# GitHub Pages deployment

## Upload-ready source

Run `npm run repo:prepare` from the project root. Use the contents of `dist/github-repository/` as the root of your new GitHub repository, rather than uploading the working folder. The prepared folder contains the application, lockfile, workflows, public assets, and public-only test fixtures. Private research and original project-content folders are excluded by an explicit allowlist and `.gitignore`.

If using Git, name the branch `main` so validation runs automatically. Run `npm run repo:check` before your first push. Ignore rules do not remove already tracked files; the check fails if local/private files are tracked. The preparation command does not create a repository or deployment. Include the hidden `.github/` folder and other dotfiles when uploading; on macOS, press Command–Shift–Period in Finder to show them.

## Enable and deploy

1. Open **Settings → Pages** in the GitHub repository.
2. Choose **GitHub Actions** as the build source.
3. Optionally set **Settings → Secrets and variables → Actions → Variables → CONTACT_EMAIL**. The workflow otherwise uses the approved public address in `.env.example`.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
5. After the build, checks, and deployment finish, open GitHub’s deployment URL.

Pushes and pull requests validate the site and upload a preview artifact. They do not publish it. The separate deployment workflow runs only when manually requested. A custom domain can be configured in Pages settings; the workflow reads the resulting base URL and path from GitHub.

## Root and repository URLs

For `https://username.github.io`, leave `NEXT_PUBLIC_BASE_PATH` empty. For `https://username.github.io/portfolio`, build with `/portfolio`. Links, images, full-resolution dialogs, videos/posters, favicon, and navigation states handle this prefix. The deployment workflow configures it automatically.

To reproduce a project site locally:

```sh
NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://username.github.io/portfolio npm run build
npm start
TEST_BASE_URL=http://127.0.0.1:4173/portfolio npm test
```

Open `http://127.0.0.1:4173/portfolio/`. The built `deployment.json` records the prefix for the preview. Rebuild after changing the deployment URL or other public configuration.

## Static-host behavior

- All five case studies have generated HTML; direct visits and refreshes work without a Node.js server.
- `trailingSlash` emits route directories with `index.html` files.
- Responsive images are generated locally with Sharp. No paid image service is required.
- Legacy Pause and Nature Dialogue URLs have redirect documents. GitHub Pages follows these in the browser; the local preview also provides HTTP redirects.
- `404.html` preserves the missing-page experience. `.nojekyll` keeps `_next` assets available.
- Videos use native controls, byte ranges, and `preload="none"`.
- Contact enquiries open reviewable email drafts without a server or delivery API.
- Indexing remains disabled. Keep metadata and `robots.txt` aligned when later approving indexing.

Configuration follows the [Next.js static-export guide](https://nextjs.org/docs/app/guides/static-exports), [basePath reference](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), and [GitHub Pages custom-workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
