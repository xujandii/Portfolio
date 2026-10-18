import type { Project } from './projects';
import { pauseMedia } from './pause-media';
import { pauseWalkthroughs } from './pause-walkthroughs';

export const pauseProject: Project = {
  slug: 'pause-journaling-application',
  letter: 'C',
  name: 'Pause: Journaling mobile application',
  title: 'Pause: Journaling mobile application',
  summary:
    'A small space to reflect, notice how you feel, and find connection. Exploring a gentler beginning to a journaling habit.',
  category: 'UX Design',
  year: '2023',
  client: 'Aalto University — UX course project',
  clientLabel: 'Project / Context',
  industry: 'Wellness and mindfulness',
  duration: '1 week (2023)',
  role: 'UX Designer',
  status: 'Concept and interactive prototype',
  color: 'blue',
  challenge: [
    'Making time to reflect can feel like another task in a busy day. For this one-week User Experience Design course project at Aalto University, I explored how a mobile journal could make that first moment feel approachable: a place to capture thoughts, track emotions, and discover a sense of connection.',
    'The goal was to support mindfulness and a consistent journaling practice through a simple, intuitive experience. The challenge was to offer enough structure to help someone begin without filling a reflective space with too many choices.',
    'The course focused on digital prototyping. Research and testing were limited, so I treated the personas, journey map, and proposed needs as design hypotheses. This case study documents the concept and my learning; it does not claim validated wellbeing or habit-building outcomes.',
  ],
  insight: 'Give someone a way to begin, and enough freedom to make the reflection their own.',
  metrics: [],
  stages: [
    {
      name: 'Discover',
      title: 'Make the assumptions visible.',
      text: [
        'I drafted two personas in Figma to explore different practical, emotional, and behavioral needs. Emma, a busy marketing manager in Helsinki, represents someone who might value a short, accessible prompt. Lauri, a freelance designer in Espoo, represents someone who might prefer a flexible space for ideas and deeper reflection.',
        'Their contrast gave the design a useful question: how could Pause offer guidance without making journaling feel like a rigid exercise? These profiles helped frame the prototype, but they were not substitutes for speaking with potential users.',
      ],
      output:
        'Two conceptual personas and hypotheses about guidance, flexibility, reminders, and inspiration.',
      media: pauseMedia.personas,
    },
    {
      name: 'Define',
      title: 'Think beyond a single journal entry.',
      text: [
        'I mapped a possible journey from awareness and consideration through acquisition, everyday use, and loyalty. Alongside actions and goals, I considered possible feelings, frustrations, and opportunities at each stage.',
        'This broadened the design from the writing screen to the surrounding experience: understanding the app, finding a starting point, and having a reason to return. Because the journey was assumption-based, its next role would be to guide research questions rather than prove how people behave.',
      ],
      output: 'An assumed end-to-end journey and opportunities to investigate through research.',
      media: pauseMedia.journey,
    },
    {
      name: 'Design',
      title: 'Connect the flow before polishing the screens.',
      text: [
        'Wireframes made the main areas tangible: introduction, account access, the dashboard, journal entries, Explore, and Community. A user flow then connected those screens so the experience could be followed as a sequence, not just viewed as a collection of layouts.',
        'Moving into higher fidelity exposed the cost of adding too many ideas at once. I worked toward a balance between guided prompts and free expression, while recognizing that this balance still needed testing with people who journal in different ways.',
      ],
      output: 'Low-fidelity wireframes and a connected flow for the interactive prototype.',
      media: pauseMedia.structure,
    },
    {
      name: 'Prototype',
      title: 'Give the experience a feeling, not only a function.',
      text: [
        'I brought the screens together in Figma with typography, color styles, components, and illustrations.',
        'The opening sequence invites a break before moving into the application. Daily entries connect mood and context with writing, while Explore and Community extend the concept into practices and shared experiences. The supplied recordings show those interactions within the prototype.',
        'The exercise strengthened my digital prototyping skills. It also showed me why accessibility, emotional response, and the usefulness of each feature need to be evaluated earlier.',
      ],
      output:
        'A Figma prototype, an initial design system, final screens, and three recorded walkthroughs.',
      media: pauseMedia.system,
    },
  ],
  solution: {
    heading: 'A moment to yourself. A way to begin.',
    media: pauseMedia.entry,
    walkthroughs: pauseWalkthroughs,
    walkthroughIntro: 'Choose a path through the Figma prototype.',
    walkthroughLayout: 'portrait',
    showWalkthroughTranscript: false,
    prototypeLink: {
      label: 'Explore the Figma prototype',
      href: 'https://www.figma.com/proto/xmnKWu05ttYKenburJf7wt/take-a-break%2C-will-you%3F?page-id=0%3A1&node-id=353-14328&viewport=2445%2C-5240%2C0.51&t=ye69W8VSM8umaEvy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=472%3A9346&show-proto-sidebar=1',
    },
    credits:
      'Illustrations: Hexorial Studio; Teal Doodle by TreeTop; Open Doodles by Pablo Stanley.',
    validation: {
      heading: 'A prototype to learn from, not a claim of impact.',
      text: 'The one-week outcome was my first substantial digital prototype. The source documents iteration and reflection but no testing sample or measured changes in wellbeing, journaling consistency, or retention. Before a live product, the core flow, accessibility, handling of sensitive journal content, and community safeguards would need research, testing, and implementation work.',
    },
  },
  reflection: [
    'This speed-run project taught me that a polished prototype can make an idea tangible while still leaving its most important questions open. Limited early research meant I had to revisit assumptions later. Stronger discovery and earlier low-fidelity testing would have given those decisions a firmer basis.',
    'I am proud of what I learned within one week. Mindfulness is close to my heart, and this first substantial digital prototype helped me connect that interest with a more confident prototyping practice. I would like to continue exploring how design can support reflection and resilience.',
  ],
  caseStudy: {
    context: 'User Experience Design course — Aalto University ',
    tools: 'Figma',
    contribution:
      'I developed the Pause concept and UX prototype, from conceptual personas and a journey map to wireframes, user flows, visual styles, and interactive screens. The project prioritized learning digital prototyping within one week, with limited time for research, testing, and iteration.',
    challengeHeading: 'How do you make room for reflection?',
    insightLabel: 'Design intent',
    designQuestions: [
      'How might journaling feel effortless and accessible at different levels of experience?',
      'What could encourage a consistent practice without adding pressure or overwhelm?',
      'How could onboarding lead naturally into a first entry and a daily practice?',
    ],
    approachHeading: 'From an assumed need to something you can try.',
    approachIntro:
      'A short prototyping exercise connecting conceptual users, the wider journey, interface structure, and visual expression. The artifacts make the design reasoning visible, alongside its limits.',
    approachOutcome: {
      heading: 'A connected concept, and clearer questions for the next iteration.',
      text: 'The process produced a tangible journaling experience and improved my ability to communicate an interaction through Figma. It also made the remaining work clearer: validate the need for each feature, test the path into writing, and evaluate whether the visual and interaction choices feel supportive in use.',
    },
    reflectionHeading: 'A calmer interface starts with better questions.',
    lessons: [
      {
        title: 'Simplicity is a decision to keep testing.',
        text: 'My early ideas included too many features and too much structure. Iterating the concept helped me see the value of balancing guidance with free expression. That is a direction to validate, not a conclusion I can attribute to a representative user study.',
        nextSteps: [
          'Research core motivations and barriers before committing to a feature set.',
          'Test low-fidelity interaction models for both short entries and open-ended writing.',
        ],
      },
      {
        title: 'A design system shapes trust.',
        text: 'Components and typography do more than make screens consistent: they shape personality, clarity, and expectations. The exercise brought attention to accessibility considerations that I had overlooked early on. A visual system still needs to be checked in its real usage context.',
        nextSteps: [
          'Evaluate text contrast, type size, and icon legibility earlier.',
          'Work with developers and accessibility specialists to test implementation as well as design intent.',
        ],
      },
      {
        title: 'Emotional design needs evidence.',
        text: 'A person may arrive at a journal feeling curious, distracted, or stressed. A soft palette alone cannot account for those differences. Grounding techniques and mood-responsive cues could be explored, but should not be assumed to feel calming or helpful.',
        nextSteps: [
          'Explore supportive grounding and mood-responsive options with potential users.',
          'Test reactions to transitions and animations, including reduced-motion preferences.',
        ],
      },
    ],
    closingNote:
      'Thank you for taking a moment with Pause. Remember to take a break and give yourself a biiiiiiiig stretch :).',
  },
};
