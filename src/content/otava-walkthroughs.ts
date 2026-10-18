import type { CaseWalkthrough } from './projects';

export const otavaWalkthroughs: CaseWalkthrough[] = [
  {
    id: 'lessons',
    title: 'Plan a lesson',
    duration: '0:52',
    src: '/otava/walkthroughs/lessons.mp4',
    poster: '/otava/walkthroughs/lessons.jpg',
    description: 'Turn a book, a chapter and teaching preferences into a proposed lesson plan.',
    steps: [
      'Choose Create lesson plans and select Forum History 1 as the teaching material.',
      'Select a chapter, set one lesson with a 90-minute duration, and add preferences for the activities and previous material to review.',
      'Generate the plan. The response presents a lesson outline with timed activities and actions to regenerate, save, share or rate it.',
    ],
  },
  {
    id: 'exercises',
    title: 'Create exercises',
    duration: '0:37',
    src: '/otava/walkthroughs/exercises.mp4',
    poster: '/otava/walkthroughs/exercises.jpg',
    description: 'Follow the guided flow from teaching material to a set of practice questions.',
    steps: [
      'Choose Create exercises, select Fokus 1–2, and choose open questions for the food-related chapter.',
      'Set the difficulty to Easy, request five questions, and specify a translation exercise.',
      'Generate the response. Five English-to-Swedish translation questions appear with answers and actions for continuing to work with the result.',
    ],
  },
  {
    id: 'sharing',
    title: 'Work with a result',
    duration: '0:09',
    src: '/otava/walkthroughs/sharing.mp4',
    poster: '/otava/walkthroughs/sharing.jpg',
    description: 'Explore the follow-up actions and sharing destinations for a generated exercise.',
    steps: [
      'The generated exercise remains visible alongside Regenerate response, Save response, Share and rating controls.',
      'Open Share to reveal destinations including Google Classroom, Gmail, Drive, Teams, My groups and My materials.',
      'The dialog offers Share and Cancel. These are prototype destinations; the recording does not demonstrate a live integration.',
    ],
  },
];
