import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const base = (process.env.TEST_BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const baseUrl = new URL(base);
const mount = baseUrl.pathname.replace(/\/$/, '');
const imageManifest = JSON.parse(
  await readFile(new URL('../src/generated/image-manifest.json', import.meta.url), 'utf8'),
);
function originalImage(src) {
  const url = new URL(src.replaceAll('&amp;', '&'), base);
  const original = url.searchParams.get('url');
  if (original) return original;
  const variant = url.pathname.match(/\/_images\/([a-f0-9]{12})-\d+\.webp$/)?.[1];
  if (variant) return Object.entries(imageManifest).find(([, image]) => image.id === variant)?.[0];
  return url.pathname.slice(mount.length);
}
const routes = [
  '/',
  '/about',
  '/contact',
  '/work/service-concept-creation',
  '/work/investigating-service-offer-creation-process',
  '/work/pause-journaling-application',
  '/work/otava-learning-redesigning-the-teaching-experience',
  '/work/the-nature-dialogue',
];

test('Every page renders accessible landmarks, one primary heading, and valid local navigation', async () => {
  const targets = new Set();
  for (const route of routes) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} needs one h1`);
    assert.match(html, /<main id="main"/);
    assert.match(html, /<html lang="en"/);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const target = new URL(href, base + route);
      targets.add(target.pathname + target.hash);
    }
  }
  for (const target of targets) {
    const response = await fetch(baseUrl.origin + target);
    assert.equal(response.status, 200, `Broken link: ${target}`);
    const hash = new URL(baseUrl.origin + target).hash.slice(1);
    if (hash)
      assert.ok((await response.text()).includes(`id="${hash}"`), `Missing anchor: ${target}`);
  }
});

test('ABB case studies use the supplied narratives and respect research and delivery scope', async () => {
  for (const route of routes.filter(
    (path) =>
      path.startsWith('/work/') &&
      !path.includes('/otava-') &&
      !path.includes('/pause-') &&
      !path.includes('/the-nature-dialogue'),
  )) {
    const html = await (await fetch(base + route)).text();
    const isProposal = route.endsWith('/investigating-service-offer-creation-process');
    assert.doesNotMatch(html, /Not a completed client project/);
    assert.match(html, /<dt>Status<\/dt><dd>Presented to key stakeholders<\/dd>/);
    assert.doesNotMatch(
      html,
      /fictional figures|Illustrative metric|Placeholder solution|12-week example/,
    );
    for (const chapter of [
      'contribution',
      'challenge',
      'approach',
      ...(isProposal ? ['proposal', 'impact'] : []),
      'reflection',
    ]) {
      assert.ok(html.includes(`id="${chapter}"`), `${route}: missing section ${chapter}`);
      assert.ok(html.includes(`href="#${chapter}"`), `${route}: missing chapter ${chapter}`);
    }
    const impact = html.match(/<section id="impact">([\s\S]*?)<\/section>/)?.[1] ?? '';
    if (isProposal) {
      assert.match(impact, /Potential impact/);
      assert.match(impact, /proposed changes/);
      assert.match(impact, /next-phase evaluation/);
    } else {
      assert.equal(impact, '');
      assert.doesNotMatch(html, /id="(?:impact|solution)"|href="#(?:impact|solution)"/);
    }
    for (const stage of ['Discover', 'Define', 'Design', 'Delivery'])
      assert.ok(html.includes(stage), `${route}: ${stage}`);
    if (route.endsWith('/service-concept-creation')) {
      assert.match(html, /3 months \(15 hours\/week\)/);
      assert.match(html, /point of sale/);
      assert.match(html, /pre-study/);
      assert.match(html, /market potential/);
      assert.match(html, /service items/);
      assert.match(html, /lower.*cost/);
      assert.match(html, /7 local sales unit representatives, mostly based in Europe/);
      assert.match(html, /cash flow/);
      assert.match(html, /continued use/);
      assert.match(html, /two divisions/);
      assert.match(html, /quantitative data/);
      assert.match(html, /non-disclosure agreement \(NDA\)/);
      const delivery =
        html.match(
          /<article class="case-stage">(?:(?!<\/article>)[\s\S])*?>Delivery<[\s\S]*?<\/article>/,
        )?.[0] ?? '';
      assert.match(delivery, /Disclaimer/);
      assert.match(delivery, /My involvement ended with the presentation of this pre-study/);
      assert.match(
        delivery,
        /I do not have visibility into the decisions or next steps that followed/,
      );
      assert.doesNotMatch(
        html,
        /proxy users|predictive maintenance service concept|clickable prototype/,
      );
      assert.doesNotMatch(html, /32%|24%|4\.6\/5/);
    } else {
      assert.match(html, /href="#proposal"[^>]*>[\s\S]*?The proposal/);
      assert.doesNotMatch(html, /The solution|id="solution"|href="#solution"/);
      const proposal = html.match(/<section id="proposal">([\s\S]*?)<\/section>/)?.[1] ?? '';
      assert.match(proposal, /Disclaimer/);
      assert.match(
        proposal,
        /My involvement concluded with the presentation of (?:these )?research findings and recommendations to key stakeholders\. Subsequent decisions and implementation were outside the scope of my role\./,
      );
      assert.doesNotMatch(proposal, /Recommendations for further work/);
      assert.equal((proposal.match(/class="case-icon-heading"/g) ?? []).length, 5);
      assert.equal((proposal.match(/<svg\b/g) ?? []).length, 5);
      assert.match(html, /generalized here to protect confidential business information/);
      assert.doesNotMatch(html, /\.pptx|9 LSU|Created by|Reference countries/);
      assert.doesNotMatch(html, /Guiding principle|class="insight-quote"|class="stage-output"/);
      const define =
        html.match(
          /<article class="case-stage">(?:(?!<\/article>)[\s\S])*?Define[\s\S]*?<\/article>/,
        )?.[0] ?? '';
      assert.equal((define.match(/class="case-research-insight"/g) ?? []).length, 4);
      assert.doesNotMatch(define, /Interview quote to be added|research-quote-placeholder/);
      const findings = define.match(/<ul class="case-research-insights"[\s\S]*?<\/ul>/)?.[0] ?? '';
      assert.equal((findings.match(/<li\b/g) ?? []).length, 4);
      for (const title of [
        'Team structure &amp; coordination',
        'Quotation complexity',
        'Multiple tools &amp; information systems',
        'Local practices',
      ]) {
        assert.ok(findings.includes(title), `Missing insight group: ${title}`);
      }
      const design =
        html.match(
          /<article class="case-stage">(?:(?!<\/article>)[\s\S])*?>Design<[\s\S]*?<\/article>/,
        )?.[0] ?? '';
      const toolsMap = design.match(/<figure class="case-tools-map"[\s\S]*?<\/figure>/)?.[0] ?? '';
      assert.ok(toolsMap.length > 0, 'Tools map belongs in Design');
      assert.ok(!define.includes(toolsMap), 'Tools map no longer belongs in Define');
      assert.match(toolsMap, /role="region" tabindex="0"/);
      assert.equal((toolsMap.match(/scope="row"/g) ?? []).length, 7);
      assert.equal((toolsMap.match(/scope="col"/g) ?? []).length, 11);
      assert.equal((toolsMap.match(/<td>/g) ?? []).length, 70);
      assert.equal(
        (toolsMap.match(/<th scope="row">(?:Tool|System) [A-G]<\/th>/g) ?? []).length,
        7,
      );
      assert.match(toolsMap, /do not imply automatic integration/);
      assert.doesNotMatch(toolsMap, /\.pptx|<img\b|Reference countries/i);
      const matrix =
        html.match(/<figure class="case-research-matrix"[\s\S]*?<\/figure>/)?.[0] ?? '';
      assert.ok(design.includes(matrix) && matrix.length > 0, 'Matrix belongs in Design');
      assert.ok(!define.includes(matrix), 'Matrix no longer belongs in Define');
      assert.ok(design.indexOf(toolsMap) < design.indexOf(matrix), 'Tools map precedes matrix');
      assert.match(matrix, /<th scope="col">Product type<\/th>/);
      assert.doesNotMatch(matrix, /Quotation scenario/);
      assert.match(matrix, /role="region"[^>]*tabindex="0"/);
      assert.equal((matrix.match(/scope="row"/g) ?? []).length, 5);
      assert.equal((matrix.match(/scope="col"/g) ?? []).length, 6);
      assert.equal((matrix.match(/<td>/g) ?? []).length, 25);
      assert.equal(
        (
          matrix.match(
            /role="img" aria-label="(?:Simple to moderate|Moderate to complex|Insufficient evidence)"/g,
          ) ?? []
        ).length,
        25,
      );
      assert.match(matrix, /Product types are anonymized/);
      assert.doesNotMatch(matrix, /Service category|pptx|<img\b/i);
      assert.match(html, /2 months \(15 hours\/week\)/);
      assert.match(html, /stakeholder interviews/);
      assert.match(html, /tools\/systems mapping/);
      assert.match(html, /workstream bottlenecks/);
      assert.match(html, /proposed next steps/);
      assert.match(html, /Mural, Powerpoint/);
      assert.doesNotMatch(
        html,
        /pilot simulation|co-creation workshops|unified service creation framework/,
      );
      assert.doesNotMatch(html, /28%|41%|18 pts/);
    }
  }
});

test('Otava presents the documented concept, research evidence, and navigable story', async () => {
  const response = await fetch(base + '/work/otava-learning-redesigning-the-teaching-experience');
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Service concept and prototype delivered/);
  assert.match(html, /UX Designer \(in a team of 4\)/);
  assert.match(html, /AINA/);
  assert.match(html, /<strong>8<\/strong><span>teacher interviews<\/span>/);
  assert.match(html, /<strong>9<\/strong><span>survey responses<\/span>/);
  assert.match(html, /<strong>3<\/strong><span>concepts explored<\/span>/);
  for (const chapter of ['contribution', 'challenge', 'approach', 'solution', 'reflection']) {
    assert.ok(html.includes(`id="${chapter}"`), `Missing section: ${chapter}`);
    assert.ok(html.includes(`href="#${chapter}"`), `Missing chapter link: ${chapter}`);
  }
  assert.doesNotMatch(html, /id="impact"|href="#impact"|Outcomes and evidence/);
  const approach = html.match(/<section id="approach">([\s\S]*?)<\/section>/)?.[1] ?? '';
  const solution = html.match(/<section id="solution">([\s\S]*?)<\/section>/)?.[1] ?? '';
  assert.match(approach, /teacher interviews/);
  assert.match(approach, /survey responses/);
  assert.match(approach, /concepts explored/);
  assert.match(approach, /A clearer service direction, made tangible through design/);
  assert.match(approach, /The first journey map/);
  assert.match(approach, /From conversations to patterns/);
  assert.match(approach, /Before testing: six starting choices/);
  assert.match(approach, /After testing: a clearer starting point/);
  assert.match(solution, /Revised AINA dashboard with four main task options/);
  assert.match(solution, /AINA prototype showing generated English-to-Swedish exercises/);
  assert.match(solution, /case-media-grid--pair/);
  assert.match(solution, /See the prototype in use\./);
  assert.match(solution, /<video\b[^>]*controls=""[^>]*preload="none"/);
  assert.doesNotMatch(solution, /<video\b[^>]*(?:autoplay|loop)=/);
  assert.match(solution, /Read the walkthrough/);
  for (const title of ['Plan a lesson', 'Create exercises', 'Work with a result']) {
    assert.ok(solution.includes(title), `Missing walkthrough: ${title}`);
  }
  assert.doesNotMatch(html, /View full size|Download full size/);
  const mediaImages = new Set(
    [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
      .map((match) => originalImage(match[1]))
      .filter((src) => src?.startsWith('/otava/')),
  );
  assert.equal(mediaImages.size, 16, 'All active artifacts and supporting images should render');
  assert.ok(!mediaImages.has('/otava/evidence/navigation-menu.webp'));
  const manifest = JSON.parse(
    await readFile(new URL('./fixtures/otava-media-manifest.json', import.meta.url), 'utf8'),
  );
  for (const { src, name } of manifest) {
    if (name === 'navigation-menu') continue;
    assert.ok(mediaImages.has(src), `Missing media: ${src}`);
    const media = await fetch(base + src);
    assert.equal(media.status, 200, src);
    assert.match(media.headers.get('content-type') ?? '', /image\/webp/, src);
  }
  const videos = JSON.parse(
    await readFile(new URL('./fixtures/otava-video-manifest.json', import.meta.url), 'utf8'),
  );
  assert.equal(videos.length, 3);
  for (const { src, poster, bytes } of videos) {
    const video = await fetch(base + src, { headers: { Range: 'bytes=0-1023' } });
    assert.equal(video.status, 206, `Seeking requires byte-range support: ${src}`);
    assert.match(video.headers.get('content-type') ?? '', /video\/mp4/, src);
    assert.equal(video.headers.get('content-range'), `bytes 0-1023/${bytes}`, src);
    assert.equal((await video.arrayBuffer()).byteLength, 1024, src);
    const cover = await fetch(base + poster);
    assert.equal(cover.status, 200, poster);
    assert.match(cover.headers.get('content-type') ?? '', /image\/jpeg/, poster);
  }
  assert.match(solution, /A foundation for further validation\./);
  assert.match(solution, /Measured time savings, learning outcomes, adoption/);
  assert.doesNotMatch(
    html,
    /Illustrative metric|Proposed output|38%|92%|4\.4\/5|Operations planners/,
  );
  assert.doesNotMatch(html, /Editorial checks|Optional details to add|confirm the duration/);
});

test('Contact page exposes the authorized recipient without pretending to send messages', async () => {
  const html = await (await fetch(base + '/contact')).text();
  assert.match(html, /mailto:ntpthaofin\.0901@gmail\.com/);
  const form = html.match(/<form\b[^>]*>[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, 'Contact form must render');
  assert.match(form, /aria-labelledby="contact-form-heading"/);
  assert.match(form, /aria-describedby="contact-form-help"/);
  assert.match(form, /Review your brief, then open it in your email app/);
  assert.match(form, /Nothing is\s+sent from this website/);
  for (const name of ['name', 'email', 'interest', 'message']) {
    const field = form.match(
      new RegExp(`<(?:input|select|textarea)\\b[^>]*\\bname="${name}"[^>]*>`),
    )?.[0];
    assert.ok(field, `Missing field: ${name}`);
    assert.match(field, /\brequired=""/, `${name} must be required`);
    if (name === 'email') assert.match(field, /\btype="email"/);
  }
  assert.match(form, /<button\b[^>]*type="submit"[^>]*>Submit/);
  assert.doesNotMatch(
    html,
    /class="brief-preview"/,
    'No draft should exist before form submission',
  );
});

test('Missing pages return an actionable 404 and both optimized portraits are served', async () => {
  const missing = await fetch(base + '/this-page-does-not-exist');
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /Back to the portfolio/);
  for (const mood of ['neutral', 'smile']) {
    const image = await fetch(`${base}/jandi-${mood}.webp`);
    assert.equal(image.status, 200);
    assert.ok((await image.arrayBuffer()).byteLength < 100_000);
  }
});

test('Pause replaces Project C with a documented course prototype and complete evidence', async () => {
  const route = '/work/pause-journaling-application';
  const response = await fetch(base + route);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Pause: Journaling mobile application/);
  assert.match(html, /UX Design/);
  assert.match(html, /1 week \(2023\)/);
  assert.match(html, /Aalto University/);
  assert.match(html, /conceptual personas/);
  assert.match(html, /Research and testing were limited/);
  assert.doesNotMatch(
    html,
    /35%|frontline routines|Manufacturing|live AI service|Illustrative metric/,
  );
  for (const chapter of ['contribution', 'challenge', 'approach', 'solution', 'reflection']) {
    assert.ok(html.includes(`id="${chapter}"`));
    assert.ok(html.includes(`href="#${chapter}"`));
  }
  for (const text of [
    'Emma',
    'Lauri',
    'Design questions',
    'Simplicity is a decision',
    'A design system shapes trust',
    'Emotional design needs evidence',
    'Hexorial Studio',
    'TreeTop',
    'Pablo Stanley',
  ]) {
    assert.ok(html.includes(text), text);
  }
  assert.match(html, /href="https:\/\/www.figma.com\/proto\//);
  const solution = html.match(/<section id="solution">([\s\S]*?)<\/section>/)?.[1] ?? '';
  assert.match(solution, /case-walkthroughs--portrait/);
  assert.match(solution, /width="528" height="984"/);
  assert.doesNotMatch(
    solution,
    /Pause brings three ideas together|Find people to reflect alongside|Read the walkthrough|View the interface presentation studies|case-solution-features/,
  );
  const solutionImage = solution.match(/<img\b[^>]*src="([^"]+)"/)?.[1];
  assert.ok(solutionImage, 'The solution montage must render');
  assert.match(originalImage(solutionImage), /solution-[a-f0-9]{10}\.webp/);

  assert.match(html, /<video\b[^>]*controls=""[^>]*preload="none"/);
  assert.doesNotMatch(html, /<video\b[^>]*(?:autoplay|loop)=/);
  const images = new Set(
    [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
      .map((match) => originalImage(match[1]))
      .filter((src) => src?.startsWith('/pause/')),
  );
  const manifest = JSON.parse(
    await readFile(new URL('./fixtures/pause-media-manifest.json', import.meta.url), 'utf8'),
  );
  assert.equal(images.size, 9);
  const replacements = ['wireframes', 'user-flow', 'typography', 'colors', 'solution'];
  for (const replacement of replacements) {
    const item = manifest.find(({ name }) => name === replacement);
    assert.ok(item?.source.endsWith('.png'), `PNG source required: ${replacement}`);
    assert.equal(item.hasAlpha, true, `Transparency required: ${replacement}`);
  }
  for (const { src } of manifest) {
    assert.ok(images.has(src), `Missing image: ${src}`);
    const result = await fetch(base + src);
    assert.equal(result.status, 200, src);
    assert.match(result.headers.get('content-type'), /image\/webp/);
  }
  const videos = JSON.parse(
    await readFile(new URL('./fixtures/pause-video-manifest.json', import.meta.url), 'utf8'),
  );
  assert.equal(videos.length, 3);
  for (const { src, poster, bytes, width, height } of videos) {
    assert.equal(width, 528);
    assert.equal(height, 984);
    assert.match(src, /-portrait\.mp4$/);
    const result = await fetch(base + src, { headers: { Range: 'bytes=0-1023' } });
    assert.equal(result.status, 206, src);
    assert.equal(result.headers.get('content-range'), `bytes 0-1023/${bytes}`);
    assert.equal((await fetch(base + poster)).status, 200, poster);
  }
  const previous = await fetch(base + '/work/listening-to-the-floor', { redirect: 'manual' });
  assert.equal(previous.status, 308);
  assert.equal(
    new URL(previous.headers.get('location'), base).pathname.replace(/\/$/, ''),
    mount + route,
  );
  const home = await (await fetch(base)).text();
  assert.match(home, /Pause: Journaling mobile application/);
  assert.doesNotMatch(home, /Listening to the floor/);
});

test('Nature Dialogue replaces Project E with a documented proposal and transparent evidence', async () => {
  const route = '/work/the-nature-dialogue';
  const response = await fetch(base + route);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const text of [
    'The Nature Dialogue',
    'Ministry of the Environment',
    'Prime Minister',
    '4 months (2024)',
    'team of 4',
    'The Sage',
    'The Shepherd',
    'The Explorer',
    'The Hunter',
    'Streamline Icons',
  ]) {
    assert.ok(html.includes(text), `Missing content: ${text}`);
  }
  for (const chapter of ['contribution', 'challenge', 'approach', 'solution', 'reflection']) {
    assert.ok(html.includes(`id="${chapter}"`), `Missing section: ${chapter}`);
    assert.ok(html.includes(`href="#${chapter}"`), `Missing chapter link: ${chapter}`);
  }
  assert.match(html, /<strong>7<\/strong><span>remote research interviews<\/span>/);
  assert.match(html, /<strong>4<\/strong><span>expert refinement interviews<\/span>/);
  assert.match(html, /<strong>4<\/strong><span>value archetypes<\/span>/);
  assert.match(
    html,
    /Its intended benefits remained questions for further implementation and evaluation/,
  );
  assert.match(html, /proposed next steps, not activities or results documented/);
  assert.doesNotMatch(
    html,
    /27%|2.1×|19%|equipment returned|repair consideration|Illustrative metric|id="impact"|href="#impact"|<video|blob:/,
  );
  const images = new Set(
    [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
      .map((match) => originalImage(match[1]))
      .filter((src) => src?.startsWith('/nature-dialogue/')),
  );
  const manifest = JSON.parse(
    await readFile(
      new URL('./fixtures/nature-dialogue-media-manifest.json', import.meta.url),
      'utf8',
    ),
  );
  assert.equal(images.size, 10);
  for (const { src, name, transparent } of manifest) {
    assert.ok(images.has(src), `Missing artifact: ${src}`);
    const image = await fetch(base + src);
    assert.equal(image.status, 200, src);
    assert.match(image.headers.get('content-type'), /image\/webp/);
    if (
      ['overview', 'vertical-ecosystem', 'systems-map', 'archetypes', 'dialogue'].includes(name)
    ) {
      assert.equal(transparent, true, `Transparency required: ${name}`);
    }
  }
  const old = await fetch(base + '/work/a-second-life-by-design', { redirect: 'manual' });
  assert.equal(old.status, 308);
  assert.equal(
    new URL(old.headers.get('location'), base).pathname.replace(/\/$/, ''),
    mount + route,
  );
  const home = await (await fetch(base)).text();
  assert.match(home, /Explore Project E: The Nature Dialogue/);
  assert.ok(home.includes(`href="${mount}/work/the-nature-dialogue/"`));
  assert.doesNotMatch(home, /A second life, by design|Designed to come full circle/);
});
