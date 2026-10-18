import type { Project } from './projects';
import { abbOfferMatrix } from './abb-offer-matrix';
import { abbToolsMap } from './abb-tools-map';

export const abbDriveProject: Project = {
  slug: 'service-concept-creation',
  letter: 'A',
  name: 'Creating new service concept for a drive product',
  title: 'Creating new service concept for a drive product',
  summary:
    'Exploring a point-of-sale service package for an industrial drive, with research into market potential, customer needs, and opportunities for continued service use.',
  category: 'Service Design',
  year: '2026',
  client: 'ABB Motion Services',
  industry: '(Electrification & automation)',
  duration: '3 months (15 hours/week)',
  role: 'Service Designer',
  status: 'Presented to key stakeholders',
  showPlaceholderNotice: false,
  color: 'green',
  challenge: [
    'The proposed package would let customers purchase additional services alongside an industrial drive at a lower cost than buying them reactively. It aimed to make it easier to try services, experience their value, and potentially continue using them in the future.',
    'For the business, the concept aimed to capture cash flow earlier and increase service sales revenue at the point of sale. The challenge was to find a package customers would consider worth purchasing upfront, while accounting for differences in market needs, service demand, and pricing expectations.',
  ],
  metrics: [],
  stages: [
    {
      name: 'Discover',
      title: 'Understand the opportunity at the point of sale.',
      text: [
        'We explored whether the drive purchase could become an entry point into a longer service relationship. A lower-cost package could encourage customers to try additional services before an urgent need arose, with the possibility of continuing those services later.',
        'The pre-study considered product applicability, market potential, and customer-valued service items alongside the commercial aims of earlier cash flow and additional service revenue. These goals framed the investigation into whether the concept made sense for this drive product and its customers.',
      ],
    },
    {
      name: 'Define',
      title: 'Understand service needs through local sales experience.',
      text: [
        'We interviewed 7 local sales unit representatives, mostly based in Europe, to understand drive service needs in their markets. The conversations explored which services were already offered, which were favored, and what customers sought when purchasing services.',
        'We also asked when customers approached local sales units and how those conversations led to service purchases. This perspective helped us examine the package in the context of existing buying behavior, rather than assuming that a lower upfront price would be enough to create demand.',
      ],
    },
    {
      name: 'Design',
      title: 'Map demand and the conditions a package needs to meet.',
      text: [
        'We mapped the common services offered across the researched markets and the demand for them. This comparison helped us consider which service items could be relevant to a package and where local needs might call for a different approach.',
        'Alongside the service mapping, the interviews highlighted three considerations for developing the concept further:',
      ],
      findings: [
        {
          title: 'Leave room for local customization',
          text: 'Local sales units wanted flexibility to adapt the package to their market needs. A shared concept would need to allow space for relevant local choices.',
        },
        {
          title: 'Investigate digital-service adoption case by case',
          text: 'Digital services were considered valuable, but their adoption could not be assumed. Their fit and the conditions for uptake would need investigation in each context.',
        },
        {
          title: 'Justify pricing through customer value',
          text: 'Pricing was highly sensitive. The package price needed a clear justification within the customer value proposition, beyond the appeal of a lower upfront cost.',
        },
      ],
    },
    {
      name: 'Delivery',
      title: 'Support a decision on further concept development.',
      text: [
        'The pre-study was presented to key stakeholders, bringing together local sales perspectives, the service-demand mapping, and the considerations around customization, digital services, and pricing.',
        'The presentation provided a basis for discussing the concept’s applicability, potential markets, and service items to explore further. It also made visible the questions that required further expert validation before the package could be developed.',
      ],
      disclaimer:
        'My involvement ended with the presentation of this pre-study. I do not have visibility into the decisions or next steps that followed.',
    },
  ],
  reflection: [
    'Working across two divisions within one business area taught me how much a service concept depends on collaboration. The project required communication between different perspectives and input from many experts to assess its viability. I learned to identify where specialist knowledge was needed and bring those perspectives into the discussion.',
    'The project broadened my understanding of service concept creation, from market demand and existing offerings to pricing and digital-service adoption. I also developed my ability to interpret quantitative data and use it to justify a proposal alongside qualitative insights.',
    'I learned to make the project’s scope and purpose explicit in stakeholder conversations. Clear, transparent communication helped maintain a shared understanding of what the pre-study was intended to establish, what remained open, and where further expert validation was needed.',
  ],
  caseStudy: {
    context: 'B2B industrial service offering',
    tools: 'Mural, Power BI, PowerPoint, Figma',
    contribution:
      'We investigated the concept through local sales unit interviews and service-demand mapping, working across two divisions within the same business area. Our service design contribution was to connect market perspectives with expert input and help stakeholders assess the opportunity.',
    challengeHeading: 'How could a drive purchase open the door to services?',
    designQuestions: [
      'Is a service package offered at the point of sale applicable to this industrial drive product?',
      'Which markets offer potential for the new service package?',
      'Which service items would customers value enough to purchase alongside the drive?',
    ],
    confidentialityNote:
      'The product name and specific service details are not disclosed in this case study due to a non-disclosure agreement (NDA).',
    approachHeading: 'Explore the fit before defining the package.',
    approachIntro:
      'We explored product applicability and market potential through local sales unit interviews and service-demand mapping. The concept aimed to lower the barrier to trying services, create opportunities for continued use, and bring forward cash flow and service sales at the point of sale.',
    reflectionHeading: 'A service concept needs shared understanding.',
  },
};

export const abbOfferProject: Project = {
  slug: 'investigating-service-offer-creation-process',
  letter: 'B',
  name: 'Investigating the service offer creation process at ABB',
  title: 'Investigating the service offer creation process at ABB',
  summary:
    'Investigating service offer creation process to understand in-use tools & systems capabilities, identify workstream bottlenecks, and propose next steps for improvement.',
  category: 'Service Design',
  year: '2026',
  client: 'ABB Motion Services',
  industry: '(Electrification & automation)',
  duration: '2 months (15 hours/week)',
  role: 'Service Designer',
  status: 'Presented to key stakeholders',
  showPlaceholderNotice: false,
  color: 'lilac',
  challenge: [
    'Creating service offers requires tight collaboration across stakeholders, integration of tools & systems, and coherent processes. ABB Motion Services wanted to evaluate workflow efficiency to pin down first-hand issues. As a service designer, I examined how the in-use tools & systems support the offer lifecycle and where friction occurs.',
    'The challenge was to connect local sales unit (LSU) experience with an understanding of in-use tools and systems capabilities, identify bottlenecks, and establish a clear basis for proposing improvement opportunities.',
  ],
  metrics: [],
  stages: [
    {
      name: 'Discover',
      title: 'Follow the work behind an offer.',
      text: [
        'We reviewed existing internal material to form initial assumptions about where offer creation required time and effort. I used stakeholder interviews to explore those assumptions through the everyday experience of sales teams.',
        'The conversations followed the offer journey, from understanding a customer’s needs to preparing, revising, and finalizing a quotation. They explored which information people needed, how they used available tools, and when they depended on input from colleagues.',
      ],
    },
    {
      name: 'Define',
      title: 'Locate the effort between steps.',
      text: [
        'I combined tools/systems mapping with process analysis to connect reported difficulties to particular tasks and handoffs. Four groups of insights helped explain how team coordination, quotation complexity, information systems, and local practices shaped the work.',
        'The findings describe participants’ experiences. Where the interviews provided an incomplete view of tool use or capability, we marked the gap for further validation.',
      ],
      findings: [
        {
          title: 'Team structure & coordination',
          text: 'Offer creation responsibilities varied across teams. Preparing a quotation required manual reporting, input from multiple colleagues, and gathering information from different sources.',
        },
        {
          title: 'Quotation complexity',
          text: 'Simple quotes followed a standard process, while complex ones required extra technical reviews and manual calculations. Without reusable information, custom quotes took significantly more effort to build.',
        },
        {
          title: 'Multiple tools & information systems',
          text: 'Local sales units relied on multiple tools and systems to gather, check, and input data, driving up manual verification overhead and the risk of human error.',
        },
        {
          title: 'Local practices',
          text: 'Local full cost model was adapted for preparing quotations, particularly for complex service offerings that cannot be fully supported by standardized pricing tools.',
        },
      ],
    },
    {
      name: 'Design',
      title: 'Connect each finding to a next question.',
      text: [
        'Drawing on the four groups of findings, we focused the proposed next steps on quotation complexity, multiple tools & systems, and local practices. These themes raised questions about the effort involved in complex quotations, repeated information transfer between tools, and local requirements that standardized tools did not fully support.',
        'Team structure and coordination remained relevant to understanding the workflow, but changes in this area were outside the key stakeholders’ scope. The tools/systems map and quote evaluation matrix helped make the three focal points tangible and identify what needed further investigation before deciding whether to enhance current tools or develop something new.',
      ],
      toolsMap: abbToolsMap,
      matrix: abbOfferMatrix,
    },
    {
      name: 'Delivery',
      title: 'Make the findings useful for planning.',
      text: [
        'I helped bring the interview findings, process comparisons, and tools landscape into a presentation for key stakeholders. The synthesis connected individual pain points with broader opportunities for improving offer creation.',
        'The handover included recommendations for follow-up research and improvement planning. It kept the limits of the available evidence visible, so stakeholders could see which questions still needed answers before implementation decisions.',
      ],
    },
  ],
  solution: {
    kind: 'proposal',
    heading: 'A proposal for the next phase of improvement.',
    description:
      'The study informed a follow-up proposal: validate the remaining gaps, understand where existing tools could better support the work, and investigate the information handoffs that create avoidable effort.',
    features: [
      {
        title: 'Validate tool use and capability.',
        icon: 'research',
        text: 'Extend the research with a broader survey and targeted follow-up interviews. Compare reported needs with existing capabilities to assess where wider use or adaptation of current tools could address the difficulties identified.',
      },
      {
        title: 'Understand the work behind pricing.',
        icon: 'pricing',
        text: 'Break pricing into its supporting activities to understand where time and effort accumulate. Examine information gathering, calculations, and review separately, while accounting for legitimate differences in local requirements and quotation complexity.',
      },
      {
        title: 'Improve information flow between tools.',
        icon: 'connections',
        text: 'Identify the information people repeatedly transfer or check, then investigate opportunities to make it available across the workflow. Potential integrations should reduce duplicate entry while retaining the checks and approvals the work requires.',
      },
      {
        title: 'Assess ideas against the problem they address.',
        icon: 'ideas',
        text: 'Compare suggestions from the interviews with what existing tools already support. Use the findings to judge which ideas warrant further exploration and whether each addresses a remaining user need.',
      },
    ],
    validation: {
      heading: 'Disclaimer',
      icon: 'information',
      text: 'My involvement concluded with the presentation of these research findings and recommendations to key stakeholders. Subsequent decisions and implementation were outside the scope of my role.',
    },
  },
  potentialImpact: {
    heading: 'Less repeated effort, with clearer decisions.',
    text: [
      'This study provided stakeholders with a research-backed roadmap to prioritize future platform investments and streamline quotation workflows.',
      'By minimizing redundant data entry and manual cross-system verification, the proposed changes accelerate decision speed and sales turnaround times for complex offer preparation. Beyond immediate operational efficiency, the research gives leadership clear criteria to evaluate technical improvements and establishes a framework for a next-phase evaluation to benchmark key performance indicators—such as task completion time, rework frequency, and user satisfaction—against operational baselines.',
    ],
  },
  reflection: [
    'The investigation showed me how much effort can sit between the visible steps of a process. Looking for information, moving it between tools, and checking it with colleagues all shape the experience of creating an offer. Mapping those connections helped me make that work visible.',
    'Local ways of working also deserved careful interpretation. A workaround may compensate for a gap in a shared tool or support a requirement that the wider process does not yet accommodate. Understanding its purpose is essential before recommending a change.',
    'I also learned not to treat user feedback as absolute technical truth. Interviews showed us where the frustration was, but I made sure to separate user perceptions from actual tool capabilities. This gave the team a clear handoff so they knew what to fix immediately versus what needed further testing.',
  ],
  caseStudy: {
    context: 'B2B industrial service offering',
    tools: 'Mural, Powerpoint, stakeholder interviews, affinity mapping, process mapping',
    contribution:
      'I investigated the internal service offer creation lifecycle to understand any friction points related to in-use tools & systems and their impact on workflow efficiency. My work combined stakeholder interviews, tools/systems mapping and process analysis to identify improvement opportunities.',
    challengeHeading: 'Understanding the tools behind the workflow.',
    designQuestions: [
      'How do in-use tools & systems support local sales units (LSUs) in the service offer creation process?',
      'Where do friction points create workstream bottlenecks or affect workflow efficiency?',
    ],
    approachHeading: 'Making the work between tools visible.',
    approachIntro:
      'I connected people’s accounts of offer creation with the process and tools supporting it, then helped translate the findings into questions and recommendations for the next phase. Findings are generalized here to protect confidential business information.',
    reflectionHeading: 'The connections deserve as much attention as the steps.',
  },
};
