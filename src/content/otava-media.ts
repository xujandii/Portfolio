import type { CaseMediaGroup } from './projects';

export const otavaMedia: Record<string, CaseMediaGroup[]> = {
  discover: [
    {
      title: 'Initial journey map',
      items: [
        {
          src: '/otava/evidence/initial-journey-map-enhanced.webp',
          width: 1418,
          height: 1109,
          title: 'The first journey map',
          alt: 'Initial teacher journey map with jobs, touchpoints, gains and pains across choosing and using Otava materials.',
          caption:
            'An assumption-based map of the teaching-material journey, used to frame questions before interviews.',
        },
      ],
    },
  ],
  define: [
    {
      title: 'Research synthesis',
      items: [
        {
          src: '/otava/evidence/research-synthesis.webp',
          width: 4000,
          height: 3170,
          title: 'From conversations to patterns',
          alt: 'Thematic analysis board grouping teacher research into themes including material selection, preparation time, student engagement, differentiation and support.',
          caption:
            'The team clustered research observations around teachers as supporters of learning, customers of Otava, and users of its products. These themes helped narrow the opportunity to everyday teaching needs.',
        },
      ],
    },
    {
      title: 'Explore the personas',
      disclosure: true,
      layout: 'portraits',
      items: [
        {
          src: '/otava/evidence/persona-aamu.webp',
          width: 480,
          height: 480,
          title: 'Aamu: planning a first course',
          alt: 'Illustrated portrait representing the Aamu teacher persona.',
          caption:
            'An early career teacher seeking structure for course schedules and lesson plans.',
        },
        {
          src: '/otava/evidence/persona-ilta.webp',
          width: 480,
          height: 480,
          title: 'Ilta: teaching mixed abilities',
          alt: 'Illustrated portrait representing the Ilta teacher persona.',
          caption: 'A language teacher adapting exercises for students at different skill levels.',
        },
        {
          src: '/otava/evidence/persona-kuura.webp',
          width: 480,
          height: 480,
          title: 'Kuura: keeping learning engaging',
          alt: 'Illustrated portrait representing the Kuura teacher persona.',
          caption: 'An experienced teacher looking for fresh ways to engage a class.',
        },
      ],
    },
  ],
  design: [
    {
      title: 'Concept workshop',
      items: [
        {
          src: '/otava/evidence/concept-workshop.webp',
          width: 2000,
          height: 1414,
          title: 'Making possible directions visible',
          alt: 'Project team members discussing notes and sketches on a workshop wall.',
          caption:
            'A working session from concept development. The team explored three directions before selecting the idea that became AINA.',
        },
      ],
    },
    {
      title: 'Information architecture',
      items: [
        {
          src: '/otava/evidence/information-architecture.webp',
          width: 4000,
          height: 3457,
          title: 'The structure behind the prototype',
          alt: 'AINA information architecture showing guided paths for exercises, lesson plans and summaries, alongside free-form prompts and actions for generated content.',
          caption:
            'Guided inputs and free-form prompts converge on generating content. The response can then be regenerated, exported, shared or rated. This map connects teaching needs with the proposed interaction flow.',
        },
      ],
    },
    {
      title: 'Explore six original wireframes',
      disclosure: true,
      layout: 'pair',
      items: [
        {
          src: '/otava/evidence/wireframe-start.webp',
          width: 3000,
          height: 1586,
          title: 'Starting screen',
          alt: 'Low-fidelity starting screen with task choices and a prompt field.',
          caption: 'A first view of task entry and the open prompt route.',
        },
        {
          src: '/otava/evidence/wireframe-book-selection.webp',
          width: 3000,
          height: 1593,
          title: 'Guided selection',
          alt: 'Low-fidelity screen with dropdown choices and a prompt field.',
          caption:
            'A guided selection pattern for collecting the context needed to create materials.',
        },
        {
          src: '/otava/evidence/wireframe-preferences.webp',
          width: 3000,
          height: 1593,
          title: 'Preference inputs',
          alt: 'Low-fidelity screen with option buttons and preference controls.',
          caption: 'Exploration of structured options alongside more specific preferences.',
        },
        {
          src: '/otava/evidence/wireframe-generated-content.webp',
          width: 3000,
          height: 1593,
          title: 'Generated response',
          alt: 'Low-fidelity content response screen with follow-up action buttons.',
          caption: 'The proposed response area and actions for continuing to work with a result.',
        },
        {
          src: '/otava/evidence/wireframe-sharing.webp',
          width: 3000,
          height: 1593,
          title: 'Sharing dialog',
          alt: 'Low-fidelity sharing dialog over a generated response.',
          caption: 'A dialog concept for choosing how to share the generated material.',
        },
        {
          src: '/otava/evidence/wireframe-prompt-options.webp',
          width: 3000,
          height: 1593,
          title: 'Prompt options',
          alt: 'Low-fidelity screen combining prompt fields, selection controls and a dropdown list.',
          caption: 'An exploration of how detailed inputs could support a guided task.',
        },
      ],
    },
  ],
  delivery: [
    {
      title: 'Dashboard iteration',
      layout: 'pair',
      items: [
        {
          src: '/otava/evidence/aina-dashboard-before.webp',
          width: 3000,
          height: 2049,
          title: 'Before testing: six starting choices',
          alt: 'First AINA dashboard prototype with six feature buttons above a free-form prompt.',
          caption:
            'Teachers found the six feature choices confusing during testing. This screen records the earlier starting point.',
        },
        {
          src: '/otava/evidence/aina-dashboard-refined.webp',
          width: 3000,
          height: 2049,
          title: 'After testing: a clearer starting point',
          alt: 'Revised AINA dashboard with four main task options and a free-form prompt field.',
          caption:
            'Teacher feedback informed a simpler dashboard organized around creating teaching materials. This is the revised prototype, not a production interface.',
        },
      ],
    },
  ],
  solution: [
    {
      title: 'AINA in the teacher workspace',
      layout: 'pair',
      items: [
        {
          src: '/otava/evidence/aina-dashboard-refined.webp',
          width: 3000,
          height: 2049,
          title: '',
          alt: 'Revised AINA dashboard with four main task options and a free-form prompt field.',
          caption: '',
        },
        {
          src: '/otava/evidence/aina-result-20261003.webp',
          width: 3000,
          height: 2065,
          title: '',
          alt: 'AINA prototype showing generated English-to-Swedish exercises, answers, and actions to regenerate, save, share and rate the response.',
          caption: '',
        },
      ],
    },
  ],
};
