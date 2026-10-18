import type { Project } from './projects';
import { natureDialogueMedia } from './nature-dialogue-media';

export const natureDialogueProject: Project = {
  slug: 'the-nature-dialogue',
  letter: 'E',
  name: 'The Nature Dialogue',
  title: 'The Nature Dialogue',
  summary:
    'Making nature’s multiple values part of the conversation. A service design proposal for shared understanding in biodiversity policy work.',
  category: 'Service Design',
  year: '2024',
  client: 'Ministry of the Environment and Prime Minister’s Office',
  industry: '(Public sector)',
  duration: '4 months (2024)',
  role: 'Service designer (in a team of 4)',
  status: 'Concept and action plan proposed',
  color: 'sage',
  challenge: [
    'Our brief explored policy coherence for biodiversity: how decisions and actions across public organizations could support one another rather than pull in different directions. The Prime Minister’s Office wanted ministries to consider their interconnections and look beyond economic value when developing policy.',
    'Our team focused on the “vertical ecosystem”: the agencies, institutes, and service-providing organizations involved in putting policy into practice, and their relationships with the Ministry of the Environment. These relationships connected national ambitions with the work needed to carry them out.',
    'The challenge was not only organizational. People could share a commitment to biodiversity while understanding its value differently. We wanted to understand how those perspectives, motivations, and working relationships shaped collaboration—and where design could offer a practical starting point.',
  ],
  insight:
    'Shared commitment to nature does not automatically create a shared understanding of what to protect, why it matters, or how to act together.',
  metrics: [
    {
      value: '7',
      label: 'remote research interviews',
      note: 'Reported for the initial research; Ministry and Prime Minister’s Office perspectives were also included, without a combined participant count.',
    },
    {
      value: '4',
      label: 'expert refinement interviews',
      note: 'A later round of feedback on the proposal, not a field trial or impact evaluation.',
    },
    {
      value: '4',
      label: 'value archetypes',
      note: 'A tool for exploring different relationships with nature.',
    },
  ],
  stages: [
    {
      name: 'Discover',
      title: 'Connect the brief to the people implementing it.',
      text: [
        'We began with biodiversity strategies, policy-coherence frameworks, governance tools, and research. We also studied the organizations in our scope to understand their roles and relationships.',
        'This helped us distinguish the wider policy landscape from the part we could investigate within the course. Our focus became the connections between the Ministry and the organizations working on implementation: how information, collaboration, and differing priorities moved through that system.',
        'We conducted remote interviews with stakeholders whose work involved policy implementation, including perspectives from ELY centres, Metsähallitus, LUKE, Syke, Motiva, and Sitra. The research also included perspectives from the Ministry of the Environment and the Prime Minister’s Office.',
      ],
      output:
        'A desk-research foundation, an overview of the vertical ecosystem, and stakeholder interviews about policy implementation.',
      media: natureDialogueMedia.scope,
    },
    {
      name: 'Define',
      title: 'Find the patterns behind individual experiences.',
      text: [
        'Affinity mapping in Miro helped us refine the findings into four connected themes. The same word could carry different meanings: biodiversity was both an abstract policy concern and something understood through personal experience. Motivation could meet structural barriers: commitment did not always come with the conditions to act.',
        'Relationships could feel one-sided, with some participants questioning whether their perspectives reached decisions. Individuals also helped connect organizations: collaboration often depended on people willing to build relationships across boundaries.',
        'These findings shifted our attention toward the human experience of policy work. Personal commitment mattered, but it could weaken when the system did not support meaningful participation.',
      ],
      output:
        'An affinity map, four research themes, and a clearer account of tensions between commitment, collaboration, and organizational structures.',
      media: natureDialogueMedia.research,
    },
    {
      name: 'Design',
      title: 'Make the tensions visible, then narrow the intervention.',
      text: [
        'We translated the research into a systems map showing actors, relationships, feedback, and tensions. It was a snapshot of our understanding at that point in the project—not a complete or permanent account of the policy system.',
        'The synthesis suggested that structures alone could not create policy coherence. Differing interpretations of biodiversity, uneven communication, and personal values all influenced the relationships within those structures. We chose to explore an intervention that made people’s relationships with nature more visible as a starting point for dialogue.',
        'Four further expert interviews helped refine the idea. A Ministry specialist described the difficulty of translating work on nature’s multiple values into practice. The interviews also pointed to project teams as a practical setting for collaboration, while a discussion with an expert at Luke supported exploring role-play as a way to engage with different perspectives.',
      ],
      output:
        'A systems map, an intervention rationale, and a more focused concept grounded in project-based dialogue.',
      media: natureDialogueMedia.systems,
    },
    {
      name: 'Delivery',
      title: 'Give the proposal a practical starting point.',
      text: [
        'We brought the concept together as The Nature Dialogue: four value archetypes paired with a role-play and dialogue method. An action plan described how it could begin at a project kick-off, continue through reflection and decision-making, and potentially spread through wider organizational relationships.',
        'The final proposal was presented as the outcome of the course. It set out a way to make multiple values of nature discussable, together with a proposed path for using the method. Its intended benefits remained questions for further implementation and evaluation.',
      ],
      output:
        'Four archetypes, the dialogue concept, an action plan, and a final proposal presentation.',
    },
  ],
  solution: {
    heading: 'Make the values visible.',
    description:
      'The Nature Dialogue proposes a project-based space for people to explore how they and others value nature. It combines a tool—the four archetypes—with a method—role-play and dialogue—to bring different perspectives into the conversation before decisions are made.',
    features: [
      {
        title: 'Four archetypes. Four ways of relating to nature.',
        text: [
          'The archetypes make an abstract subject easier to approach through recognizable characters. They invite people to consider their own perspective and engage with others.',
          'The Sage sees nature as part of us: living as nature. The Shepherd sees nature as species and habitats: living with nature. The Explorer sees nature as landscape: living in nature. The Hunter sees nature as a resource: living from nature.',
          'The cards are prompts for reflection and dialogue, rather than a validated personality assessment.',
        ],
        media: natureDialogueMedia.archetypes,
      },
      {
        title: 'Role-play opens another point of view.',
        text: [
          'With an archetype as a starting point, participants can explore how a different relationship with nature might shape a conversation. Dialogue creates room to notice where perspectives meet, where they differ, and what those differences could mean for shared work.',
          'The intention is to recognize ecological, cultural, social, and economic perspectives, alongside different worldviews and forms of knowledge. Shared understanding begins with being able to recognize and discuss those differences. The method’s usefulness in real policy settings would need to be assessed through facilitated use.',
        ],
        media: natureDialogueMedia.dialogue,
      },
      {
        title: 'From a first conversation to everyday project work.',
        text: [
          'The action plan begins with an invitation: bring an external facilitator, project members, and stakeholders into The Nature Dialogue at the start of a project. Role-play then uses the archetypes to make different values visible and open a shared conversation.',
          'The next touchpoint connects values to practice. The project lead and partners reflect on how those perspectives could inform decisions. The final touchpoint carries the conversation through project teams, decision-makers, and personal connections, with wider organizational use as a longer-term ambition.',
          'The proposal was designed to complement existing project work. Adaptability across contexts and manageable adoption were design intentions; facilitation needs and the effort required to use it remain important to test.',
        ],
        media: natureDialogueMedia.actionPlan,
      },
    ],
    validation: {
      heading: 'A proposal ready for a first field trial.',
      text: 'A next step would be a facilitated trial with a project team, followed by reflection on whether the activity helped people understand one another and bring additional values into decisions. The clarity of the archetypes, quality of participation, facilitation effort, and follow-through into project work would be useful areas to examine. These are proposed next steps, not activities or results documented in the source.',
    },
    credits:
      'Character illustrations: Streamline Icons, Milano collection, as credited in the original case study.',
  },
  reflection: [
    'This project asked me to learn an unfamiliar policy landscape within four months. The research expanded into nearly twenty mind maps across frameworks, strategies, and reports. I learned to work toward a useful understanding within the time available, while keeping space to revisit it as new evidence emerged.',
    'Systems mapping was a new challenge for me. Moving from a rough sketch to a readable map meant making decisions about hierarchy, spacing, and what needed to remain visible. The Ministry’s visual identity gave the work a foundation; the relationships and feedback gave it its purpose.',
    'The project also reminded me that a response to complexity does not have to be equally complicated. We moved toward a tool and a conversation that could work within existing relationships. My own connection to nature kept the work meaningful, while the team’s different skills and perspectives made the final proposal possible.',
    'The lesson I would carry forward is to make shared understanding tangible early—and keep questioning whether a promising method can support people in practice.',
  ],
  caseStudy: {
    context: 'Design for Government course - Aalto University',
    tools: 'Miro & Figma',
    contribution:
      'I worked as a service designer in a four-person team. I took on the systems-mapping work, translating early sketches into a clearer view of actors, relationships, and feedback. I used the Ministry of the Environment’s visual identity and a nature-inspired composition to make a complex subject approachable. The research, synthesis, and final proposal were a team effort.',
    challengeHeading: 'A shared responsibility, understood in different ways.',
    designQuestions: [
      'What did policy coherence look like from the perspective of agencies, institutes, and service providers?',
      'Which structures helped or hindered collaboration between policy planning and implementation?',
    ],
    approachHeading: 'Understand the system. Find a human place to begin.',
    approachIntro:
      'We combined desk research and stakeholder interviews with visual synthesis, then used expert feedback to refine a focused intervention. The aim was to find a useful entry point within a complex system.',
    approachOutcome: {
      heading: '',
      text: '',
    },
    reflectionHeading: 'A small intervention can hold a complex question.',
    reflectionMedia: natureDialogueMedia.sketch,
  },
};
