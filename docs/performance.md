# Performance and release preparation

## Changes

- Exported pages instead of requiring a production Next.js server.
- Added content-versioned, responsive WebP variants, generated with bounded concurrency and reused between builds. Transparency is retained; full-resolution evidence images load when requested in dialogs.
- Kept video loading deferred until playback, and excluded unused recordings and stale image copies from the export. Original local files remain intact.
- Self-hosted the current Sora, DM Sans, and Instrument Serif fonts; removed unused Manrope and the Google Fonts build-time connection.
- Rendered static contact and artwork/feature icons as Server Components. Interactive controls retain client components.
- Removed obsolete artwork styles and an unused contact configuration object. Preserved layout, motion, focus states, and the approved 250ms portrait effect.
- Fixed the unlabeled hero scroll link and missing descriptive-text target for walkthrough videos.
- Added root/subpath file checks, video-range tests, existing content acceptance checks, a public-only repository package, and manually triggered deployment.

## Dependency status

Next.js and its ESLint configuration were updated within major version 16; Sharp was updated within 0.35. Compatible transitive fixes were applied. The production dependency audit reports zero vulnerabilities.

The full npm audit still reports five high-severity development-tool alerts cascading from the upstream `braces` advisory ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)). npm’s suggested automatic fix downgrades the Next.js ESLint configuration to a different major version. That downgrade was not applied. These build/lint dependencies are absent from the static site. CI validation has read-only permissions and a 15-minute timeout. Review the upstream fix before a future dependency update; this is not a claim that every development dependency is free of advisories.

## Measurements

The original public folder contained 88 files and approximately 74 MB, including unused recordings and older derivatives. The export excludes 33 unused files (21.1 MB), preserving the originals. Responsive variants add storage but reduce the image bytes a visitor downloads at the displayed size. Deferred video and conditional dialog loading keep total artifact size separate from initial page transfer.

## Verified release observations

- 46 image inputs produce 385 content-versioned WebP variants; all variants exist in the export. Transparency was verified on the portraits, Pause solution montage, and Nature Dialogue artwork.
- The static website is 66.8 MB across 519 files, including full-resolution evidence and videos. Thirteen HTML files cover pages, the missing-page routes, and legacy aliases.
- The Otava thumbnail’s 960px variant is 42,676 bytes compared with its 3,203,199-byte source PNG. The neutral brand portrait’s 96px variant is 4,398 bytes compared with its 1,112,233-byte input. These comparisons describe generated variants versus source files, not a benchmark against the former runtime image API.
- Home HTML is 68,532 bytes (11,773 gzipped); its nine initial JavaScript resources total 190,557 gzipped bytes. The earlier build used 188,436 gzipped JavaScript bytes. The approximately 2.1 kB increase accompanies the patched framework and self-contained image loader; no overall JavaScript-size reduction is claimed.
- Lint, TypeScript, formatting, design lint, three unit tests, and all seven acceptance tests pass. Acceptance checks pass at both `/` and `/portfolio/`.
- A clean copy of the upload-ready folder passes `npm ci`, the full quality suite, production build, and static-resource verification without private sources or local build caches.
- Browser checks covered eight pages at 1440, 810, 548, 390, and 320px widths, with no page overflow or broken visible images. Checked header navigation/transparency, loaded local fonts/portraits, horizontal keyboard scrolling, recommendation dialogs, image enlargement/focus return, the systems map, walkthrough switching, and the reviewable contact draft. No enquiry was sent.

These are file/network and functional observations, not a Lighthouse score or a promise about all devices and connections.
