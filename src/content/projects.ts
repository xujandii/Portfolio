import { pauseProject } from './pause-project';
import { abbDriveProject, abbOfferProject } from './abb-projects';
import { natureDialogueProject } from './nature-dialogue-project';
import { otavaMedia } from './otava-media';
import { otavaWalkthroughs } from './otava-walkthroughs';

export type CaseWalkthrough = {
  id: string;
  title: string;
  duration: string;
  width?: number;
  height?: number;
  src: string;
  poster: string;
  description: string;
  steps: string[];
};

export type CaseMediaGroup = {
  title: string;
  layout?: 'single' | 'half' | 'pair' | 'portraits' | 'detail' | 'screens';
  disclosure?: boolean;
  items: {
    src: string;
    unoptimized?: boolean;
    width: number;
    height: number;
    title: string;
    alt: string;
    caption: string;
  }[];
};

export type Project = {
  slug: string;
  letter: string;
  name: string;
  title: string;
  summary: string;
  category: string;
  year?: string;
  client: string;
  clientLabel?: string;
  industry: string;
  duration: string;
  role: string;
  status?: string;
  showPlaceholderNotice?: boolean;
  color: string;
  challenge: string | string[];
  insight?: string;
  metrics: { value: string; label: string; note?: string }[];
  stages: {
    name: string;
    title: string;
    text: string | string[];
    output?: string;
    disclaimer?: string;
    findings?: { title: string; text: string }[];
    matrix?: CaseResearchMatrixData;
    toolsMap?: CaseToolsMapData;
    media?: CaseMediaGroup[];
  }[];
  solution?: {
    kind?: 'solution' | 'proposal';
    heading: string;
    description?: string;
    features?: {
      title: string;
      text: string | string[];
      icon?: CaseFeatureIconName;
      media?: CaseMediaGroup[];
    }[];
    note?: string;
    validation?: { heading: string; text: string; icon?: CaseFeatureIconName };
    media?: CaseMediaGroup[];
    walkthroughs?: CaseWalkthrough[];
    walkthroughIntro?: string;
    walkthroughLayout?: 'stacked' | 'portrait';
    showWalkthroughTranscript?: boolean;
    walkthroughsAfterFeatures?: boolean;
    supplementalMedia?: CaseMediaGroup[];
    prototypeLink?: { href: string; label: string };
    credits?: string;
  };
  potentialImpact?: { heading: string; text: string | string[] };
  reflection: string | string[];
  caseStudy?: {
    context: string;
    tools: string;
    contribution: string;
    challengeHeading: string;
    insightLabel?: string;
    designQuestions?: string[];
    confidentialityNote?: string;
    lessons?: { title: string; text: string; nextSteps: string[] }[];
    closingNote?: string;
    approachHeading: string;
    approachIntro: string;
    approachOutcome?: { heading: string; text: string };
    reflectionHeading: string;
    reflectionMedia?: CaseMediaGroup[];
  };
};

export type CaseMatrixRating = 'simple' | 'complex' | 'unknown';

export type CaseFeatureIconName = 'research' | 'pricing' | 'connections' | 'ideas' | 'information';

export type CaseToolsMapData = {
  id: string;
  title: string;
  description: string;
  stages: string[];
  tools: { label: string; from: number; to: number }[];
  note: string;
};

export type CaseResearchMatrixData = {
  id: string;
  title: string;
  description: string;
  rowHeading: string;
  columns: string[];
  columnNote?: { column: string; text: string };
  rows: { label: string; ratings: CaseMatrixRating[] }[];
  note: string;
};

export const projects: Project[] = [
  abbDriveProject,
  abbOfferProject,
  natureDialogueProject,
  pauseProject,
  {
    slug: 'otava-learning-redesigning-the-teaching-experience',
    letter: 'D',
    name: 'Otava Learning: Redesigning the teaching experience',
    title: 'Redesigning the teaching experience',
    summary:
      'Designing AINA, an AI-powered service concept that helps high school teachers plan lessons and adapt learning materials around their students’ needs.',
    category: 'UX & Service Design',
    year: '2022–2023',
    client: 'Otava Learning',
    industry: '(Ed-tech)',
    duration: '6 months (2022–2023)',
    role: 'UX Designer (in a team of 4)',
    status: 'Service concept and prototype delivered',
    color: 'peach',
    challenge: [
      'As digital learning became more established in high schools, Otava Learning wanted to explore services that could create value beyond its existing educational materials. Our brief was to understand where a publisher could better support teachers throughout their working day.',
      'The opportunity became clearer through research. Teachers were adapting materials for students with different skill levels, looking for ways to make lessons more engaging, and creating additional content when textbooks did not meet their needs. For early career teachers, planning courses and lessons also brought uncertainty.',
      'We reframed the challenge around the work that happens after a school chooses its learning materials: how could Otava help teachers turn those resources into lessons that work for their students?',
    ],
    insight:
      'The most significant recurring frustrations appeared during the use of learning materials, rather than the purchasing decision.',
    metrics: [
      {
        value: '8',
        label: 'teacher interviews',
        note: 'Qualitative research, mostly with teachers in Uusimaa',
      },
      {
        value: '9',
        label: 'survey responses',
        note: 'Additional perspectives from an open-ended survey',
      },
      {
        value: '3',
        label: 'concepts explored',
        note: 'Directions compared before selecting AINA',
      },
    ],
    stages: [
      {
        name: 'Discover',
        title: 'Look beyond the purchase',
        text: [
          'We began by exploring how Otava Learning could become more service-oriented at the high school level. Teachers were central to the brief: they both use educational materials and influence which publisher their school chooses.',
          'We benchmarked Studeo, Sanoma Pro, and E-Oppi to understand the existing landscape. An initial journey map made our assumptions visible across awareness, consideration, decision, use, and satisfaction, giving us a starting point for research.',
          'Our team interviewed eight high school teachers, mostly based in Uusimaa, and gathered nine responses to an open-ended survey. We used the journey map to explore teachers’ experiences with Otava.',
        ],
        output:
          'Competitor benchmarking, an initial journey map, teacher interviews, and survey responses.',
        media: otavaMedia.discover,
      },
      {
        name: 'Define',
        title: 'Find the needs behind the teaching tasks',
        text: [
          'We applied thematic analysis to the interview and survey findings to understand where teachers needed support.',
          'Three recurring challenges shaped our direction: materials did not always accommodate different skill levels, teachers wanted more engaging content, and early career teachers needed support with planning. The journey map helped us locate these needs within everyday use of the materials.',
          'We developed three personas to make those needs concrete: Aamu, an early career teacher planning a course; Ilta, a language teacher supporting mixed ability levels; and Kuura, an experienced teacher looking for fresh ways to engage a class.',
        ],
        output:
          'Research-informed journey map, three priority challenges, and personas connecting teacher needs to potential service scenarios.',
        media: otavaMedia.define,
      },
      {
        name: 'Design',
        title: 'Turn existing materials into a flexible starting point',
        text: [
          'Research informed three main concepts. We compared their potential value, innovation, feasibility, and competitive advantage before choosing the direction that became AINA.',
          'AINA was conceived as an additional service within Otava’s existing teacher platform. The proposal was to use AI with Otava’s educational content to help teachers generate materials based on books their school had licensed.',
          'I focused on the information architecture, wireframes, and prototype: how a teacher would enter the service, express a need, and work with the result. The experience offered a guided route for teachers who needed structure and free-form prompts for those who knew what they wanted to create.',
        ],
        output:
          'AINA service concept, information architecture, wireframes, and a prototype covering key teaching scenarios.',
        media: otavaMedia.design,
      },
      {
        name: 'Delivery',
        title: 'Let teacher feedback shape the interface',
        text: [
          'User testing showed that the first dashboard’s six features were confusing. We revised the dashboard around teachers’ needs when creating teaching materials.',
          'We also added an AINA menu to make movement between tasks clearer. Conversation history and saved documents supported returning to previous work, while calendar or schedule access was considered relevant to planning.',
          'We delivered a service concept and refined prototype, bringing together our research, design exploration, and usability learning. The project outcome was a tested design direction rather than a production launch.',
        ],
        output: 'Revised dashboard, improved navigation, and a refined AINA prototype.',
        media: otavaMedia.delivery,
      },
    ],
    solution: {
      heading: 'A teaching assistant within a familiar workspace',
      media: otavaMedia.solution,
      walkthroughs: otavaWalkthroughs,
      features: [
        {
          title: 'Plan a course, then shape each lesson.',
          text: 'Teachers could start with a high-level course schedule based on a licensed book, then develop individual lesson plans with topics, timings, summaries, and activities.',
        },
        {
          title: 'Adapt exercises to different skill levels.',
          text: 'The concept allowed teachers to request simpler or more advanced exercises from the same material, supporting classes whose students were at different stages of learning.',
        },
        {
          title: 'Find a fresh way into a topic.',
          text: 'Teachers could explore ideas for engaging activities and connect subject material with relevant current topics.',
        },
        {
          title: 'Keep working with the result.',
          text: 'A chat-style interface placed Regenerate, Save, Share, and Rate alongside generated content, supporting continued refinement and reuse.',
        },
      ],
      note: 'These capabilities were demonstrated or proposed in the AINA concept. They describe the design direction, rather than a deployed AI service.',
      validation: {
        heading: 'A foundation for further validation.',
        text: 'The intended value was to ease preparation work, support differentiated teaching, and help teachers develop engaging content. The research counts in the approach describe the research and concept exploration. Measured time savings, learning outcomes, adoption, and commercial results are not reported in this case study.',
      },
    },
    reflection: [
      'This project strengthened my ability to move from an unfamiliar industry and a broad service challenge into a tangible UX concept. Leading the UX design work for AINA helped me develop my prototyping skills and become more comfortable making ideas visible before they were fully resolved.',
      'My strongest lesson was to start wireframing earlier and test low-fidelity prototypes sooner. The dashboard feedback showed how quickly an interface that felt clear to the design team could become confusing for teachers.',
      'I also learned that a promising interface is only one part of introducing a new service. AINA’s adoption would depend on the surrounding organization and circumstances. The value of the project lay in the understanding, direction, and learning we developed alongside the prototype.',
    ],
    caseStudy: {
      context: 'IDBM Industry Project - Aalto University',
      tools: 'Figma & Adobe Illustrator',
      contribution:
        'I was responsible for the UX design of AINA within a four-person project team. My focus was making the service concept tangible through information architecture, wireframes, and prototyping, then refining the experience through user testing. The research and concept development described below reflect our team’s work.',
      challengeHeading: 'A textbook is a starting point. Teaching takes more.',
      approachHeading: 'Follow the teaching journey. Find where support matters.',
      approachIntro:
        'We moved from an initial, assumption-based journey map to teacher research, concept selection, and a prototype refined through user feedback.',
      approachOutcome: {
        heading: 'A clearer service direction, made tangible through design',
        text: 'The project identified where Otava could support teachers beyond supplying textbooks: helping them prepare and adapt materials during everyday teaching. AINA brought that opportunity into a concrete service concept, while user testing informed changes to its dashboard and navigation.',
      },
      reflectionHeading: 'Make ideas tangible early enough to question them.',
    },
  },
];

export const recommendations = [
  {
    role: 'Service Design Manager',
    quote:
      'Jandi has demonstrated excellent working skills and professional behaviour. She has shown strong maturity in applying Human-Centered Design approach and Service Design thinking and methods in global research and development projects. Her core strengths are in understanding and visualizing complex systems in B2B environment and in constantly thinking what would be valuable output for the project stakeholders and finally for the end-customers and -users.',
  },
  {
    role: 'Senior UX/UI Designer',
    quote:
      'We had amazing working time together and I really enjoyed working with Jandi. She brings the enthusiasm, collaboration and understanding in the projects and the team.',
  },
];
