import type { CaseMediaGroup } from './projects';
import { natureDialogueAssets } from './nature-dialogue-assets';

function natureFigure(
  key: keyof typeof natureDialogueAssets,
  title: string,
  alt: string,
  caption: string,
) {
  return { ...natureDialogueAssets[key], title, alt, caption };
}

export const natureDialogueMedia = {
  scope: [
    {
      title: 'The vertical ecosystem',
      layout: 'half',
      items: [
        natureFigure(
          'vertical-ecosystem',
          'Where policy becomes practice',
          'Nested levels from global policy to local services, highlighting the sub-regional and local vertical ecosystem.',
          'Our research focused on the agencies, institutes, and service providers connected to policy implementation, and their relationships with the Ministry.',
        ),
      ],
    },
    {
      title: 'Explore the desk-research foundation',
      disclosure: true,
      items: [
        natureFigure(
          'desk-research',
          'Build an understanding of the policy landscape',
          'A collage of biodiversity strategies, policy-coherence publications, and reports on nature’s values.',
          'Selected frameworks, strategies, and reports that informed the research scope and interview questions.',
        ),
      ],
    },
  ],
  research: [
    {
      title: 'Finding patterns in the research',
      items: [
        natureFigure(
          'affinity-map',
          'From individual perspectives to shared themes',
          'Research notes grouped into clusters about policy coherence, collaboration, structures, and motivations.',
          'Affinity mapping in Miro connected interview findings with emerging themes about collaboration, structures, and values.',
        ),
      ],
    },
  ],
  systems: [
    {
      title: 'The system and its relationships',
      items: [
        {
          ...natureFigure(
            'systems-map',
            'A snapshot of the systems map',
            'Ministries, agencies, and project partners connected by lines for collaboration, trust, funding, and tensions.',
            'Our research-informed interpretation of actors, relationships, and tensions. The map describes our understanding at this point in the project, rather than a complete or permanent picture.',
          ),
          unoptimized: true,
        },
      ],
    },
    {
      title: 'Explore the intervention rationale',
      disclosure: true,
      items: [
        natureFigure(
          'intervention',
          'Create a shared space for nature’s multiple values',
          'Two diagrams compare fragmented communication with an intended shared space linking civil servants, experts, policy planners, and decision-makers.',
          'The proposed shift from fragmented communication toward dialogue. This is an intervention hypothesis, not a measured before-and-after result.',
        ),
      ],
    },
  ],
  archetypes: [
    {
      title: 'Four relationships with nature',
      items: [
        natureFigure(
          'archetypes',
          'The Sage, Shepherd, Explorer, and Hunter',
          'Four illustrated archetype cards: the Sage lives as nature, the Shepherd with nature, the Explorer in nature, and the Hunter from nature.',
          'The archetypes make different relationships with nature tangible. They are prompts for reflection and dialogue, not a personality assessment.',
        ),
      ],
    },
  ],
  dialogue: [
    {
      title: 'The dialogue method',
      items: [
        natureFigure(
          'dialogue',
          'A conversation from another point of view',
          'An illustrated group in conversation identifies with the Sage, Explorer, and Shepherd archetypes.',
          'An illustration of the proposed dialogue. Participants explore how different relationships with nature might shape a shared conversation.',
        ),
      ],
    },
  ],
  actionPlan: [
    {
      title: 'The Nature Dialogue action plan',
      items: [
        natureFigure(
          'action-plan',
          'From invitation to wider project practice',
          'An action plan connects invitation, role-play, reflection, and wider organizational use with their stakeholders, context, and intended goals.',
          'The proposed sequence begins at a project kick-off. Wider organizational use and changes in decision-making are ambitions to evaluate, not documented results.',
        ),
      ],
    },
  ],
  sketch: [
    {
      title: 'Explore the first systems-map sketch',
      disclosure: true,
      items: [
        natureFigure(
          'map-sketch',
          'Start with the relationships, then find the structure',
          'A hand-drawn sketch of actors and relationships around the Ministry of the Environment.',
          'The early sketch shows the mapping work before visual refinement. I translated these relationships into the structured systems map shown above.',
        ),
      ],
    },
  ],
} satisfies Record<string, CaseMediaGroup[]>;
