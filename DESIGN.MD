---
version: alpha
name: Jandi Nguyen — Quiet Signal
description: A service designer's working atlas, with indigo technical ink, cool paper, and tactile research artifacts.
colors:
  primary: '#4542D9'
  primary-dim: '#3431B0'
  canvas: '#F7F7FB'
  ink: '#24243F'
  muted: '#575A70'
  surface: '#ECECF5'
  paper: '#FFFFFF'
  outline: '#82869F'
  outline-variant: '#D8D9E6'
  on-dark: '#D2D3E6'
  sage: '#D9E4D3'
  blueprint: '#323B60'
  blueprint-paper: '#F5F5EF'
  ticket: '#E7EDB4'
  journey: '#E5DDF4'
  journey-ink: '#51436F'
  research: '#F0D5C6'
  research-paper: '#FFF7EC'
  research-back: '#D99E89'
  research-ink: '#50382F'
  prototype: '#DCE7F2'
  circular: '#DCE8D8'
  adaptation: '#A65B60'
typography:
  hero:
    fontFamily: Sora Variable
    fontSize: 88px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.065em
  accent:
    fontFamily: Instrument Serif
    fontSize: 95px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.035em
  page-title:
    fontFamily: Sora Variable
    fontSize: 112px
    fontWeight: 500
    lineHeight: 1.025
    letterSpacing: -0.068em
  section-title:
    fontFamily: Sora Variable
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.057em
  body:
    fontFamily: DM Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: DM Sans Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  detail: 3px
  action: 4px
  artwork: 5px
  panel: 6px
  control-group: 8px
  pill: 50px
spacing:
  mobile-gutter: 24px
  maximum-gutter: 64px
  content-maximum: 1568px
  project-column-gap: 30px
  project-row-gap: 66px
components:
  page:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    typography: '{typography.body}'
  secondary-copy:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.muted}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.canvas}'
    typography: '{typography.action}'
    rounded: '{rounded.action}'
    padding: 13px 19px
  button-primary-hover:
    backgroundColor: '{colors.primary-dim}'
    textColor: '{colors.canvas}'
  accent-text:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    typography: '{typography.accent}'
  contact-panel:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.panel}'
    padding: 35px
  footer:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.on-dark}'
  portrait-panel:
    backgroundColor: '{colors.sage}'
    textColor: '{colors.ink}'
  project-a:
    backgroundColor: '{colors.blueprint}'
    textColor: '{colors.canvas}'
    rounded: '{rounded.artwork}'
  blueprint-sheet:
    backgroundColor: '{colors.blueprint-paper}'
    textColor: '{colors.ink}'
  blueprint-node-highlight:
    backgroundColor: '{colors.ticket}'
  project-b:
    backgroundColor: '{colors.journey}'
    textColor: '{colors.journey-ink}'
    rounded: '{rounded.artwork}'
  pricing-annotation-stroke:
    backgroundColor: '{colors.adaptation}'
  project-c:
    backgroundColor: '{colors.research}'
    textColor: '{colors.research-ink}'
    rounded: '{rounded.artwork}'
  research-note:
    backgroundColor: '{colors.research-paper}'
    textColor: '{colors.research-ink}'
  research-note-back:
    backgroundColor: '{colors.research-back}'
    textColor: '{colors.research-ink}'
  project-d:
    backgroundColor: '{colors.prototype}'
    textColor: '{colors.ink}'
    rounded: '{rounded.artwork}'
  planner:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.panel}'
  project-e:
    backgroundColor: '{colors.circular}'
    textColor: '{colors.ink}'
    rounded: '{rounded.artwork}'
  project-e-description:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.muted}'
---

# Jandi Nguyen — Quiet Signal

## Overview

This portfolio should resemble a Helsinki design studio's working table: technical drawings in indigo ink, translucent route overlays, paper research notes, and a few material samples. It presents Jandi as a thoughtful Junior Service & UX Designer with experience inside an industrial enterprise. Its job is to help collaborators understand her thinking, inspect five studies, and start a conversation.

The connected service map carries the identity. The surrounding interface stays quiet so visitors can follow connections between people, systems, and possibilities. Color distinguishes the artifacts of practice; it never substitutes for labels or evidence.

This document follows the [Google Labs design.md specification](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md): exact tokens above, implementation rationale below. It is the visual source of truth for this repository. Validate with `npm run design:lint`.

**Current revision — 13 September 2026:** fill the desktop viewport with the hero and a quiet Jade Sky gradient built from the existing sage, success, systems, journey, and cloud tokens; retain the connected map on tablets, and hide it only on phones. Muted trails travel from both wings to the contact action. Compact portrait navigation blends with the canvas until scrolling adds its divider and shadow. Approach stages respond reversibly to scrolling; recommendations and About capabilities use neutral horizontal cards with accessible controls. Preserve other route content, stacked work motion, contact workflow, and the approved 250ms portrait transition.

## Colors

The six core paints are cool paper `#F7F7FB`, indigo ink `#24243F`, iris signal `#4542D9`, slate annotation `#575A70`, lavender mist `#ECECF5`, and mineral sage `#D9E4D3`. Indigo replaces the previous evergreen identity. Flat surfaces and small, purposeful signals keep it grounded in service mapping.

| Role                      | Implementation                | Use                                                    |
| ------------------------- | ----------------------------- | ------------------------------------------------------ |
| Canvas / ink              | `--cloud` / `--ink`           | Page background, headings, primary text                |
| Primary / primary-dim     | `--signal` / `--signal-hover` | Primary action, links, focus, reading progress         |
| Muted / surface           | `--muted` / `--mist`          | Supporting copy, ethos, contact panel, process outputs |
| Outline / outline-variant | `--border` / `--line`         | Input and button edges / quiet structural dividers     |
| On-dark                   | `--on-dark`                   | Supporting footer copy                                 |
| Research                  | `--apricot`                   | Project C and research-related editorial surface       |

Other frontmatter colors use the same CSS variable name. Keep foregrounds dark on pale surfaces; only dark surfaces and signal buttons reverse the text. All declared component text/background pairs must reach at least 4.5:1. Input edges use the stronger outline token; quiet separators do not carry interactive meaning. Focus on the dark footer uses sage for contrast.

Supporting illustration paints remain exact CSS tokens:

| Tokens                                              | Values                          | Purpose                                                                 |
| --------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| `--map-line`, `--map-flow`                          | `#B6B8C8`, `#7B7D98`            | Quiet hero routes and coordinated traveling trails                      |
| `--border-soft`, `--dark-line`                      | `#BCC0D1`, `#6F728E`            | Diagram separators and footer divider                                   |
| `--blueprint-step`, `--blueprint-stroke`            | `#D6DCEF`, `#858DB0`            | Blueprint nodes and connectors                                          |
| `--journey-path`, `--lens-systems`, `--lens-people` | `#B4A2D5`, `#BAC2E0`, `#D5B59E` | Journey ribbon and map perspectives; Possibilities shares journey color |
| `--research-muted`, `--prototype-step`              | `#54382E`, `#CEDDED`            | Note annotation and planner task bar                                    |
| `--circular-path`, `--circular-return`              | `#8BA892`, `#BFCEAF`            | Outbound and return portions of the service loop                        |
| `--success`                                         | `#3D6956`                       | Existing location/status dots and planner check                         |
| `--grid-line`, `--edge-faint`                       | `#D8D9E666`, `#24243F08`        | Technical grid and artwork edge                                         |

Do not use the pale diagram colors for body text. Preserve existing labels and checkmarks when color changes.

## Typography

Load the installed Latin WOFF2 files through `src/app/fonts.ts` and `next/font/local`. Preload Sora and DM Sans, use metric-adjusted fallbacks and `font-display: swap`, and load Instrument Serif on demand. Keep the original family names as CSS variable fallbacks for the Framer export. Add the appropriate font subset before introducing non-Latin page copy.

Keep the self-hosted Sora Variable display family and DM Sans Variable reading family. Use Instrument Serif Regular as the self-hosted accent family via `--accent`, limited to the word “designer” in the home headline. `.accent-text` uses 1.08em, weight 400, normal style, and -0.035em letter spacing; retain the surrounding heading’s color and line height. Its Latin font files use `font-display: swap`. Sora provides the connected, drawn quality of the headline; DM Sans keeps longer research narratives readable.

Frontmatter headline sizes record desktop maxima. The centered home headline uses `clamp(58px, 5.8vw, 88px)`, line-height `1.08`, and letter-spacing `-0.065em`. At 1100px and below it uses `clamp(58px, 7vw, 77px)`; at 760px and below it uses `clamp(43px, 8.5vw, 62px)`. Keep other page and section type scales unchanged. Hero reading copy is 18px on desktop and 16px on phone.

## Layout

The hero borrows the reference's centered introduction and oversized flanking artwork. Its identity comes from service blueprints: fine branching connections, open stops, and filled signal dots. One continuous route connects both sides beneath the introduction, leaving the headline and action clear. Keep the diagram and labels on tablets; at 760px and below, remove them and return the contact action to normal flow below the introduction.

```text
       Works       [portrait] Jandi Nguyen       About
                          Hi, I’m Jandi.
                             A Service
Human perspective ●      & UX designer.       ● Systems thinking
                           Introduction
───────────────      [Let’s connect]      ───────────────────────
                     Follow the connections
Recent works (sticky) → Stacked project cards
My approach (sticky) → Connected stages → Recommendations → Footer
```

The sticky header is transparent at the top of the landing page, with the hero's gradient extending behind it. Offset the hero by the header height and restore that space as internal top padding so the navigation, hero copy, and next section keep their positions. After scrolling exceeds 8px, reveal the opaque canvas background, divider, and shadow over 200ms; reverse when returning to the top. Other pages retain the opaque canvas header. Keep its height fixed at 85px on desktop/tablet and 69px on phone. Center the content-width navigation with 24–40px gaps, reduced to 14px on phones. The portrait and name form one home link; Works targets `/#work`, About targets `/about`. All three stay visible on phone with minimum 44px link heights. Keep 110px scroll padding so anchored sections and keyboard focus remain below the header.

Use the existing 1568px content maximum and `clamp(24px, 4.15vw, 64px)` gutters. Sticky section headings sit below the 85px desktop / 69px phone header, using opaque 100px / 80px heading bands. They release at their own section boundaries. Stacked cards reserve room for this band and reduce their fan spacing in shorter windows; their scale animation and reduced-motion fallback remain intact. The desktop and tablet hero fills at least the remaining viewport below the header using `100svh`; shorter windows can scroll naturally. Contact, case studies, and 404 retain their content layouts.

## Elevation & Depth

Use two shared elevation values with the existing indigo shadow tints:

- **Pill:** `--elevation-pill: 0 1px 2px var(--shadow-soft), 0 4px 10px var(--shadow-faint)`. Apply to diagram annotations, the hero CTA, and placeholder pills.
- **Card:** `--elevation-card: 0 2px 4px var(--shadow-faint), 0 12px 28px var(--shadow-soft)`. Apply to project artwork, the contact panel, brief preview, process outputs, note cards, recommendation cards, and capability cards. Stacked projects receive the shadow on the outer card, without doubling it on their artwork.

Keep `--shadow-strong: #24243F30`, `--shadow-medium: #24243F1A`, `--shadow-soft: #24243F10`, and `--shadow-faint: #24243F0A`. Existing paper-artifact shadows, rotations, and perspective remain unchanged. Elevation should suggest a slight lift, never a floating glass panel.

## Shapes

Use the existing radius hierarchy: 3px for artifact details and fields, 4px for actions, 5px for artwork, 6px for panels, and 8px for grouped controls. These are descriptive tokens; do not normalize existing exceptions. Use 50px pill radii for the hero action and route annotations. Retain the About portrait arch. The hero uses rounded branching connections and visible stops; every stop sits on a connected route.

## Components

**Service map:** a connected 1440 × 560 network with 1.5px `--map-line` strokes and circular iris stops. Place “Human perspective” beside the left signal at (252, 246), and “Systems thinking” beside the right signal at (1218, 246). The single “Let’s connect” action replaces the (720, 528) stop. Two normalized path overlays use `--map-flow`, traveling inward together in a single 4.8-second sweep when the hero enters view; their endpoints meet behind the action. Do not loop continuously. Remove the animation offscreen and hide the trails for reduced motion. Keep the map at 761px and above, wrapping tablet annotations beside their stops. At 760px and below, hide the network and annotations without a spacer; keep the action in normal flow. Center “Follow the connections” below with no top divider. Decorative geometry is hidden from assistive technology. The zero-dependency `GradientBackground` in `src/components/ui/jade-sky.tsx` sits behind the map at 48% opacity with a cloud base and soft radial washes from sage, success, systems, and journey tokens.

**Approach timeline:** use Discover → Define → Design → Delivery. Keep discovery before problem definition in every case study; Pause retains Design → Prototype as its final stages. Research and initial exploration belong to Discover; synthesis and framing belong to Define. Preserve each project’s documented facts and research limitations. Four desktop stages share a continuous horizontal track across the column gaps. At 760px and below, connect the vertical sequence using each item's actual height; end the line at Delivery. Keep the heading sticky below the site header. Reveal a 2px primary-ink SVG stroke along the 1px muted track as the visitor scrolls; reverse the same stroke when scrolling back. Use stroke offsets without scaling the line or adding a moving endpoint. Each fixed 9px circular stop fills when the drawing reaches it. Highlights accumulate: reached stages retain primary-ink icons and copy, including after the viewer leaves the section; unreached stages use muted text at full opacity. All four stages are emphasized when the line completes. Keep stage labels at weight 600 throughout and transition colors over 240ms. Omit icon discs, outlines, halos, status labels, background blocks, bottom stripes, and layout translation. On desktop/tablet, finish with the whole row visible below the heading and reserve at least 120px of scrolling before recommendations enter. Section bottom spacing is `clamp(280px, calc(36svh + 96px), 640px)`. On phone, use `max(160px, 28svh)` bottom spacing and a 70% reading point capped to leave room for Delivery's full description plus 64px; retain the readable vertical sequence. Reduced motion shows the complete stroke and all stage highlights immediately. Use regular-weight, 24px Phosphor icons beside the stage numbers: MagnifyingGlass for Discover, Target for Define, PencilRuler for Design, and FlagCheckered for Delivery. Import them directly from `@phosphor-icons/react` in the client component. Icons remain decorative and add no focus stops. Icon/number rows use prefixed Tailwind utilities generated from `ApproachTimeline.tsx` and `CapabilityIcon.tsx`; omit Tailwind Preflight to preserve the established site styles.

**Horizontal cards:** recommendations and About capabilities use horizontal scrolling with a partial next card and only a “Scroll to explore” hint above the track; omit Previous/Next buttons and hide the native scrollbar. While a fine pointer is over the card track, a vertical wheel gesture moves it horizontally with smooth scrolling. Release scrolling back to the page at either end; preserve pinch zoom, modified wheel gestures, native horizontal trackpad movement, and touch swiping. Tracks support Left/Right and Home/End keys with visible focus. Avoid scroll snapping so wheel movement stays direct and does not spring back. Both card types share a 400px maximum width and 300px minimum height, with identical responsive widths and padding. At 360px and below, both use a 324px minimum height to accommodate narrow text wrapping. Recommendation cards fill the available reading area with the original quote at 16px, ending on a complete line with an ellipsis only when needed. Recalculate the visible line count after font loading and when the card resizes. Keep a visible “Read more” button beside the user icon and attribution on every recommendation card, including when the complete quote fits. The unchanged full quote opens in a native modal with a 44px close control, Escape dismissal, focus return, and contained vertical scrolling. Place the decorative opening quotation mark on its own line before the recommendation text. Use 32px accent typography with a normal 1 line height, a 24px reserved row, and an 8px gap before the sentences. Keep it outside the clipped text and hide it from assistive technology; retain the shared card dimensions. Keep the rail scrollable horizontally without overflowing the page, and let wheel gestures inside the modal scroll its content. Capability cards have a leading 26px regular-weight Phosphor icon: TreeStructure for systems thinking, CursorClick for prototyping, Path for journeys, MagnifyingGlass for research, and Lightbulb for concepts. The small client icon component imports directly from `@phosphor-icons/react`; icons inherit primary text color, remain decorative beside the capability names, and preserve the existing heading spacing. Both card types use the neutral cloud surface, ink headings, readable slate supporting text, 6px corners, a quiet ink-tinted border, and the shared card shadow. On fine-pointer hover, scale only that card to 1.04 over 360ms using `--ease`; anchor the first/last cards inward to avoid edge clipping. Disable zoom and smooth scrolling for reduced motion and touch. Cards adapt to phone width. Preserve explicit placeholder disclosure above recommendations.

**Works order and dates:** keep the shared project sequence A, B, Nature Dialogue (E), Pause (C), then Otava Learning (D). The same sequence drives next-project navigation. Preserve project letters, route slugs, artwork, and the existing stacking motion. Show a quiet 14px, medium-weight ink year with tabular numerals directly below the discipline and before the title on each Works card. Left-align the category and year, separated by 4px; allow the category to wrap naturally. Repeat this category-then-year hierarchy in every case-study header, above the title, using the same shared year value and 14px tabular styling. Use the documented dates: Nature Dialogue 2024, Pause 2023, and Otava 2022–2023. Projects A/B display 2026, as supplied by Jandi. Use “Concept” only for projects without a supplied year.

**Case-study narrative:** Projects A and B display “Presented to key stakeholders” as requested; omit their “Not a completed client project” header notice and use the supplied ABB briefs together with Jandi’s subsequent scope clarifications for their narratives. Project B focuses on investigating in-use tools/systems capabilities and workstream bottlenecks through stakeholder interviews, mapping, and process analysis, then proposing next steps. Its Approach onward uses only generalized findings from the confidential study. Keep internal tool names, locations, participant identities, commercial details, and source slides out of the website and exports. Do not present recommendations as implementation or measured results. Place “The proposal” immediately after “The approach” for Project B, with a matching `#proposal` sidebar link; Pause, Otava, and Nature Dialogue retain “The solution”; Project A proceeds directly from approach to reflection. Store the content in the shared solution field with optional `kind: 'proposal'`. Projects A and B use src/content/abb-projects.ts and retain Discover → Define → Design → Delivery and reflection. Project A has four chapters: contribution, challenge, approach, and reflection, with no Solution or Potential impact section or sidebar link. Project B retains Potential impact after the proposal and in its sidebar. Use the supplied three-month drive-concept timeline and two-month offer-process timeline, both at 15 hours/week. Preserve 2026, roles, titles, routes, and artwork. Remove the previous fictional metrics; do not portray projected benefits as measured outcomes. Pause, Otava, and The Nature Dialogue keep their documented narratives and existing chapter structures.

**Case-study evidence media:** Use the supplied Otava artifacts alongside the matching process stage: initial journey map in Discover, thematic synthesis in Define, workshop and information architecture in Design, and dashboard comparison in Delivery. Show the refined dashboard, generated-exercise response, and navigation detail in the solution. Preserve aspect ratios, transparent PNG edges, and the images’ own shadows; do not flatten mockups onto white or add a card surface around them. Keep photographic scenes and opaque research-board content intact. Use 14px explanatory captions. Make each image a keyboard-accessible button opening a native modal, without a visible “View full size” strip. The modal uses a cloud surface, ink backdrop, regular Phosphor icons, 44px controls, fit-to-screen and full-resolution zoom, contained scrolling, Escape/close/backdrop dismissal, and focus restoration. No motion is required. Native disclosures group six wireframes, persona illustrations, and navigation detail. Comparisons and persona groups stack below 760px. Serve dimensioned responsive WebP images lazily; load the larger popup image only when opened. Preserve originals in `Project content/Otava/` and record extraction metadata. For the navigation detail, use a left-aligned image capped at 180px beside its title and caption; on phones use a 28% image column so the explanation stays on the right. Show the new framed dashboard after testing and in the solution, with the earlier six-choice dashboard before testing.

**Prototype walkthroughs:** Place one 16:9 player in the solution with three scenario selectors. Use neutral surfaces, 8px corners, ink for the selected button, and visible keyboard focus. Selectors form three columns on desktop and full-width rows below 760px, with durations aligned to the right. Native video controls support play/pause, seeking, and fullscreen; switching scenarios resets playback without autoplay. Keep original footage, including any embedded borders, intact. Serve 1080p H.264 MP4s with poster images and `preload="none"`; never embed source editing files. Label silent recordings and provide an equivalent written walkthrough in a native disclosure below the player. Do not substitute empty players for unavailable recordings.

**Otava case-study content:** Project D presents the documented AINA concept from the supplied Otava source. Use optional story fields for contribution, research-led headings, four process stages, the approach outcome, and reflection. Render long copy as separate paragraphs with 24px spacing. Its five chapters are contribution, challenge, approach, solution, and reflection. The approach opens with research evidence: 8 teacher interviews, 9 survey responses, and 3 concepts explored. Use 12px explanatory notes and stack the evidence cards below 760px. Close the approach with the service-direction outcome summary, separated from Delivery by 44px. Place “A foundation for further validation.” in the solution's existing mist note treatment. Do not render a separate outcomes section or sidebar link for Otava. Label its insight “Research insight” and stage deliverables “Outputs.” Status is “Service concept and prototype delivered”; intended benefits are not measured business outcomes. Preserve the six-month 2022–2023 timeline from the source overview, student role, four-person team, tools, peach artwork, and neutral evidence styling. Editorial review notes stay in the content draft rather than the page.

**Case-study sidebar:** on desktop and tablet, center the chapter links vertically within the available viewport below the header. The sticky frame starts 24px below `--site-header-height` and reserves another 24px at the bottom; its height follows `100svh`. Use 18px links, a 1.5 line height, 16px vertical padding, and the existing iris active indicator. Keep an 8px inset for visible focus rings. Short windows allow internal scrolling with safe start alignment when the links cannot fit. Reserve at least 190px for the tablet column. On phones, retain the non-sticky two-column chapter grid with 16px text and 48px minimum targets.

**Project artifacts:** A uses two equally sized pale paper canvases on slate indigo: the blueprint on the left, a regular-weight Phosphor arrow in the gap, and a service-package checklist on the right. Keep both canvases upright and centered as one composition. Let their shared grid row grow to the taller canvas’s content rather than imposing a fixed aspect ratio; keep equal canvas heights without clipping at intermediate widths. At 560px of artwork width and below, stack equal canvases and turn the arrow downward so tier headings keep adequate space; allow the phone artwork to grow to fit. Its Awareness, Select services, and Close the deal headings share the same four-column grid and responsive gap as every blueprint row, with phase labels centered above their nodes. Back-end team nodes use the apricot token to distinguish them from the customer’s blueprint-colored nodes. The package canvas is titled “Service package for industrial drive” and contains Basic, Standard, and Premium columns with regular Phosphor Check/X icons. Five editable service ideas in `src/content/drive-package-art.ts` give Basic two inclusions, Standard four, and Premium all five. Label these visibly as illustrative placeholders, not validated ABB package contents; give all three package columns the same paper background and keep all check/cross states explicit. B uses a lilac journey ribbon with five connected stops and journey chips in sequence: Harvest opportunity, Gather customer needs, Formulate quote price, Negotiate with the customer, and Finalize the offer. Center the complete B illustration and scale the ribbon and labels together to 75%, preserving the outer card dimensions. Keep the five paper tags left-aligned and subtly tilted: −8°, −6°, +6°, −4°, and +4°. Anchor tags from the edge of their matching circular stop using a 14px journey-tag gap before the 75% scaling. Harvest and Gather use a responsive 8–11px anchor gap to compensate for their tilted, offset edges, keeping the visible circle-to-tag spacing comparable to the other steps. Place Harvest opportunity and Negotiate with the customer below their stops; place the other three above. Center Formulate quote price, Negotiate with the customer, and Finalize the offer on their stops. Keep Negotiate with the customer on one line at every width; allow other labels to wrap without changing the 75% scale; C presents Pause’s supplied four-phone montage on the cool blue prototype surface; D uses the supplied `otava-thumbnail.png` laptop-and-tablet mockup on the peach apricot surface; E presents The Nature Dialogue’s supplied tree-and-people illustration on mineral green. Keep artwork composition, labels, hover transforms, and links intact. For C, D, and E, show the complete image with `object-fit: contain` and 6% padding in both its work card and case-study banner; preserve the original aspect ratio and existing container dimensions. Serve responsive, lazy-loaded Next.js image variants. Preserve supplied sources in `Project content/`; Pause uses optimized transparent WebP derivatives and Otava retains its public PNG copy. The local Framer export embeds an optimized WebP fallback until a hosted asset URL is available.

**Empathy and sustainability artwork:** a small, unframed sprout illustration sits directly beneath the heading in the About story’s left column. Use sage leaves, a soft mineral-green wash, fine ink stems, and a looping route with iris dots to connect care and regeneration. Keep it static, with an accessible image title and no visible labels. Limit the illustration to 340px wide on desktop/tablet and 270px on phone, aligned with the heading’s left edge; the phone layout places heading and art before the body copy. Do not create a separate artwork section, card, or cropped diagram.

**Portrait:** keep the supplied neutral expression fully visible as the base layer. On hover, fade only the smile overlay to opacity 1 over the approved 250ms using `cubic-bezier(0.4, 0, 0.2, 1)`; fade it back to 0 on pointer exit. Never fade both layers together, which exposes the background through the face. This applies to Home and About, preserves image dimensions, and adds no tab stop or JavaScript. Both expressions are optimized WebP assets; expose one descriptive alternative text. Touch devices retain the neutral image, and reduced-motion preferences remove the fade.

**Navigation and actions:** show Works, the supplied portrait with Jandi Nguyen, and About in that order. Use semantic links, visible focus, and underlines for hover/current pages. Primary actions use iris with a darker hover state. Preserve native form validation and the explicit email-draft workflow.

**Communication links:** Contact and the shared footer show LinkedIn, WhatsApp, and Email in that order, with a leading 20px regular-weight Phosphor icon (LinkedinLogo, WhatsappLogo, EnvelopeSimple). Use inherited text colors, 8px icon/text gaps, 44px minimum targets, and the existing focus styles. Keep the desktop footer's brand, location, About link, communication options, and copyright vertically centered in one horizontal row; allow grouped rows on tablet and wrapping on phone. Store social URL placeholders in `src/components/ContactLinks.tsx`; empty destinations remain non-navigating and announce “link coming soon.” Email uses the existing public contact configuration. Do not substitute dummy profiles or page-jumping `#` links.

**Brand portrait:** Header and Footer use the supplied `jandi-neutral.png` and `jandi-smile.png`, served through Next.js image optimization with 38px / 30px / 27px responsive sizes. Preserve the originals and home-link labels. The neutral image remains opaque while the smile overlay fades over 250ms on fine-pointer hover. Touch stays neutral and reduced motion switches instantly. Both images are decorative within named home links. The Framer export uses their existing optimized portrait equivalents.

**Performance:** work-card transforms update directly in one animation frame, preserving the existing scale curve without React rerenders during scrolling. Pause work-card and approach scroll updates offscreen, and disable work-card animation on phones, short windows, and reduced-motion preferences. Keep all content server-rendered. About portrait `sizes` must match its CSS widths: 390px desktop, 320px tablet, 330px phone, and 280px below 371px. The image optimizer includes a 480px candidate to avoid oversized downloads while retaining higher-resolution variants.

**Motion:** preserve `--ease: cubic-bezier(0.22, 1, 0.36, 1)`, existing 0.2–0.6-second interaction transitions, scroll behavior, reading progress, and chapter tracking. Allow the explicitly requested coordinated map trails and reversible approach highlights. Avoid unrelated reveals, parallax, or stagger. Preserve reduced-motion fallbacks; horizontal keyboard navigation uses instant movement for reduced motion.

## Do's and Don'ts

- Do change shared paint tokens before introducing a local color; keep this file and CSS in sync.
- Do preserve unrelated page content and layouts when revising shared components.
- Do verify contrast, keyboard focus, sticky-heading clearance, portrait hover, and mobile layout after visual changes.
- Do retain Jandi's junior title, Helsinki location, and clearly labeled fictional case studies, metrics, recommendations, and speaking concepts.
- Don't turn decorative artifact captions into essential instructions or use color as the only state indicator.
- Don't introduce unrelated sections, rearrange the work, or change the contact workflow. Keep the hero trails to one coordinated sweep per entry; remove them offscreen and for reduced motion.
- Don't publish placeholder claims as verified experience. Keep search indexing disabled until the portfolio content is confirmed.

**Pause case study:** generate the solution montage from the latest `pause-solution.png`, retaining transparency and a content-versioned URL for replacements. Retain the shared five-chapter layout and blue artwork surface. Present source-app colors only inside supplied artifacts. Use the supplied transparent PNG replacements for wireframes, user flow, typography, colors, and the five-phone solution montage; preserve alpha in optimized WebPs and image dialogs. The solution proceeds from the montage directly to the prototype player, with no individual-screen galleries, presentation studies, or expandable walkthrough text. On desktop/tablet, stack path choices on the left and show the portrait video on the right (maximum 320px wide); below 760px, stack choices above the centered player. Crop the supplied recordings to the complete phone frame with a small margin (528×984), preserve native playback/fullscreen controls, and use matching posters, descriptive captions, `preload="none"`, and no autoplay. Keep conceptual personas and detailed flows in native disclosures. Keep the one-week course scope and limited research explicit; do not imply measured wellbeing or retention outcomes.

**Nature Dialogue case study:** Project E uses the five-chapter narrative at `/work/the-nature-dialogue`, with a permanent redirect from `/work/a-second-life-by-design`. Preserve the mineral-green artwork surface, page layout, and existing motion. Use the supplied transparent tree illustration in the work card and opening banner. Use the same Works-card layout as Projects A–D: shared card width, 1.2:1 artwork/text columns while stacking, and full-width artwork above the copy in phone, short-window, and reduced-motion layouts. Do not add Project E-specific grid, aspect-ratio, or spacing overrides. Shared artwork uses `width: 100%` and both artwork and descriptions use `min-width: 0` to stay within their columns. Load the case-study opening image eagerly with high fetch priority; keep work-card and evidence images lazy. Place the vertical ecosystem, affinity map, and systems map beside their research stages; group supporting desk research and intervention rationale in disclosures. Display “Where policy becomes practice” at 50% of the evidence column on desktop/tablet, left-aligned, and full width on phones for legibility. Use `archetypes-horizontal.png` for the four archetypes and `action-plan.png` for the action plan; retain the dialogue illustration. Serve the already-optimized systems-map WebP directly in the evidence gallery, bypassing the Next.js image-processing cache; retain lazy loading, its dimensions, transparency, and image dialog. Give optimized Nature Dialogue assets content-versioned filenames so replacements cannot reuse a stale browser or image-optimizer cache entry. Add the early map sketch in a reflection disclosure. Keep source aspect ratios and alpha in optimized WebPs, lazy loading, explanatory captions, and the shared keyboard-accessible image dialog. Present seven initial remote interviews, four later expert interviews, and four archetypes as research and output evidence; do not combine counts into a participant total. Retain the four-month 2024 course scope and four-person team. Label benefits as intentions and evaluation as future work; do not imply deployment or measured impact. Omit the unavailable presentation video.

**ABB research evidence:** Project B omits the challenge’s guiding-principle block and the four stage output boxes. Define presents four generalized finding groups: team coordination, quotation complexity, information systems, and local practices. Place the four groups in the shared research-insight containers: mist surfaces with a 2px iris left rule, 24px padding, and a two-column grid with a 20px gap. Stack the containers on phones with 20px padding and a 16px gap. Use descriptive headings and the documented finding summaries; remove the former empty interview-quote placeholders. Design focuses the next steps on quotation complexity, multiple tools/information systems, and local practices; team structure and coordination remains contextual because changes in that area fall outside the key stakeholders’ scope. Place the tools/systems map in Design immediately before the quote evaluation matrix. The map uses anonymous Tool/System labels and continuous lilac bands across ten workflow stages. Place a wrapping legend above the map with matching 48px samples: “Used” for the lilac band with dark endpoints and “No use shown” for the thin gray line. The latter preserves the distinction between an unmapped stage and confirmed non-use. Preserve the source’s reported usage spans, with scoped table headers, text alternatives, a sticky label column, and keyboard-accessible horizontal scrolling. Bands describe reported use, not automatic integrations or a complete architecture.

Design contains the public-only quotation matrix from `src/content/abb-offer-matrix.ts`: five generalized workflow columns and five anonymous product rows, with the first column labeled “Product type” as requested. Retain the source’s qualitative rating patterns while omitting actual product identities, country names, internal tools, and the original row order. Do not store an identification key or raw slide in the public content or export. Use a semantic table with scoped headers and three distinct marks: sage circle for simple-to-moderate, lilac diamond for moderate-to-complex, and slate dash for insufficient evidence. Mark the “Formulate the price” header with a pale muted-red surface and a cell-edge outline using the adaptation token (#A65B60): 4px dashes separated by 6px gaps, at 1px thickness. Use an empty matching outline sample in the legend, without asterisks or additional labels, to explain that this step is highly locally adapted to country regulations or long-standing local practices; associate the header with that text through aria-describedby. Keep all four matrix legend entries on a single non-wrapping row, with keyboard-accessible horizontal scrolling when they exceed the available width. This annotation is separate from the three difficulty ratings. Keep the “Product type” and “Tool / system” header labels left-aligned and vertically centered within their cells; keep body row labels left-aligned. Keep row labels visible while horizontally scrolling within its own focusable region; show the matrix scroll hint only in narrow containers. Label the visualization as anonymized qualitative evidence, not measured processing time.

Proposal subheadings use leading 24px regular-weight Phosphor icons with a 12px gap and inherited heading alignment. The Disclaimer follows the proposal features with 32px of space. Keep its heading and supporting copy left-aligned, align the icon vertically with the heading’s center, and let supporting copy use the full container width within its 25px padding. Its wording explains that Jandi’s involvement concluded with presenting the findings and recommendations, while subsequent decisions and implementation were outside her role. Preserve the surrounding case-study layout and all other projects’ content and treatments.

**Drive-product case-study scope:** Project A is a pre-study for a service package offered with an industrial drive at the point of sale. Frame the narrative around product applicability, potential markets, and customer-valued service items. The concept combines a lower point-of-sale cost than reactive purchasing with opportunities for customers to try services and potentially continue using them. Earlier cash flow and additional service sales are intended business goals. Define documents seven local sales unit interviews, mostly based in Europe. Design maps service offerings and demand and presents three findings: local customization, contextual investigation of digital-service adoption, and pricing justified through customer value. Delivery ends with a disclaimer that Jandi’s involvement concluded with the pre-study presentation and later decisions are unknown. Reuse the existing disclaimer panel, with 24px top spacing and a vertically centered regular information icon. Reflection covers collaboration across two divisions in one business area, expert validation, quantitative evidence, and clear stakeholder communication. Avoid restoring the superseded predictive-maintenance dashboard, field-shadowing, augmented-reality, or proxy-testing narrative. Do not invent selected markets, validated package contents, methods, or results. The artwork may show the five illustrative package ideas requested by Jandi, clearly labeled as placeholders and kept separate from the documented case-study narrative. Retain the existing route, metadata, artwork, and four-chapter layout, moving directly from approach to reflection.

## Static hosting and performance

Build a static export for GitHub Pages with directory routes and a configurable repository base path. Preserve the current composition, 250ms portrait fade, map/timeline animations, card behavior, responsive breakpoints, and all content disclosures. Generate responsive, transparent WebP variants locally with content-versioned URLs; retain original evidence files for full-resolution dialogs and omit unused media only from generated exports. Self-host Sora, DM Sans, and Instrument Serif from installed Latin WOFF2 files without a Google Fonts build request. Static contact/artwork icons may render on the server using Phosphor’s SSR entry point; interactive approach and capability components retain their direct imports. Every public image/video/poster/favicon must support the repository prefix. Keep the static 404, legacy project redirects, semantic labels, video text equivalents, focus restoration, and reduced-motion behavior. Publishing remains a separate, manually triggered GitHub workflow.
