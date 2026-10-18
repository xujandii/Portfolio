import type { CaseMediaGroup } from './projects';
import { pauseAssets } from './pause-assets';

function pauseFigure(key: keyof typeof pauseAssets, title: string, alt: string, caption: string) {
  return { ...pauseAssets[key], title, alt, caption };
}

export const pauseMedia = {
  personas: [
    {
      title: 'Explore the two conceptual personas',
      layout: 'single',
      disclosure: true,
      items: [
        pauseFigure(
          'persona-emma',
          'Emma: a small moment in a busy day',
          'Conceptual persona board for Emma Suomalainen, a Helsinki marketing manager, showing her goals, frustrations, and needs.',
          'Emma represents a busy professional who might abandon a complex journaling app. Short prompts, a clear starting point, and gentle reminders became design hypotheses. This is a conceptual persona, not an interviewed participant.',
        ),
        pauseFigure(
          'persona-lauri',
          'Lauri: room for a less structured reflection',
          'Conceptual persona board for Lauri Tenhunen, a freelance graphic designer in Espoo.',
          'Lauri represents a creative person seeking flexibility, organization, and inspiration. The contrast with Emma helped me explore guidance without making every entry rigid. This is a conceptual persona, not a research finding.',
        ),
      ],
    },
  ],
  journey: [
    {
      title: 'The assumed journaling journey',
      items: [
        pauseFigure(
          'journey-map',
          'From first encounter to a possible habit',
          'Journey map covering awareness, consideration, acquisition, service, and loyalty, with actions, goals, feelings, pain points, and opportunities.',
          'The map connects the first encounter with Pause to onboarding, use, and a possible return. Its emotional curve and opportunities are assumptions to investigate, not measured experiences.',
        ),
      ],
    },
  ],
  structure: [
    {
      title: 'Wireframes before visual polish',
      items: [
        pauseFigure(
          'wireframes',
          'Find the shape of the experience',
          'A board of low-fidelity mobile wireframes for the Pause application.',
          'Early screens explore the welcome, account, journaling, discovery, and community experience before the final visual treatment.',
        ),
      ],
    },
    {
      title: 'Explore the complete user flow',
      disclosure: true,
      items: [
        pauseFigure(
          'user-flow',
          'Connect the screens into a journey',
          'A user flow connecting onboarding, account access, the dashboard, journal entries, community, and profile screens.',
          'The flow makes the transitions between screens explicit. It became the structure for linking the Figma prototype and reviewing where a person might need a clearer next step.',
        ),
      ],
    },
  ],
  system: [
    {
      title: 'The Pause visual language',
      items: [
        pauseFigure(
          'typography',
          'An expressive typographic starting point',
          'The original Pause typography specimen featuring Playfair Display.',
          'Playfair Display brings an editorial, reflective character to the app. This is the original project specimen; the portfolio retains its own type system.',
        ),
        pauseFigure(
          'colors',
          'A quiet palette, with moments of warmth',
          'Original Pause palette showing violet, lavender and cyan, light neutrals, and yellow accents.',
          'Dark violet grounds the interface, a lavender-to-cyan gradient softens transitions, and yellow accents add warmth. Contrast and icon legibility remain explicit areas for further validation.',
        ),
      ],
    },
  ],
  entry: [
    {
      title: 'The Pause solution',
      items: [
        pauseFigure(
          'solution',
          'A space to begin, reflect, and connect',
          'Five Pause phone mockups showing the welcome, journal entry, dashboard, Community, and Explore screens, on a transparent background.',
          'The final concept brings onboarding, guided reflection, mood check-ins, shared experiences, and suggested practices into one connected experience.',
        ),
      ],
    },
  ],
} satisfies Record<string, CaseMediaGroup[]>;
