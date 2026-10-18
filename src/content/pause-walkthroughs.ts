import type { CaseWalkthrough } from './projects';

export const pauseWalkthroughs: CaseWalkthrough[] = [
  {
    id: 'onboarding',
    title: 'Begin with Pause',
    duration: '31 seconds',
    width: 528,
    height: 984,
    src: '/pause/walkthroughs/onboarding-portrait.mp4',
    poster: '/pause/walkthroughs/onboarding-portrait.jpg',
    description:
      'The opening sequence introduces Pause, moves through account sign-in, and offers an illustrated invitation to slow down.',
    steps: [
      'The welcome animation introduces the idea of taking a break.',
      'The prototype moves into an account sign-in screen with example details.',
      'Introductory mindfulness screens invite a moment of pause before journaling. These are designed transitions within a Figma prototype; no account is created.',
    ],
  },
  {
    id: 'explore',
    title: 'Explore a practice',
    duration: '10 seconds',
    width: 528,
    height: 984,
    src: '/pause/walkthroughs/explore-portrait.mp4',
    poster: '/pause/walkthroughs/explore-portrait.jpg',
    description:
      'A scroll through suggested practices shows how discovery could sit alongside daily writing.',
    steps: [
      'Open Explore to browse suggestions for a mindful break.',
      'Scroll through podcasts, meditation, physical activities, food, music, and sleep-related suggestions.',
      'The recording demonstrates the browsing layout. It does not demonstrate playback, recommendations based on personal data, or external services.',
    ],
  },
  {
    id: 'community',
    title: 'Find a connection',
    duration: '15 seconds',
    width: 528,
    height: 984,
    src: '/pause/walkthroughs/community-portrait.mp4',
    poster: '/pause/walkthroughs/community-portrait.jpg',
    description: 'The community concept places shared reflections and moods in a browsable feed.',
    steps: [
      'Open Community to see example reflections and mood posts.',
      'Scroll through the feed and its topic categories.',
      'A sharing audience selector appears in the concept. Privacy, moderation, and consent would need further design and testing before a live community could be considered.',
    ],
  },
];
