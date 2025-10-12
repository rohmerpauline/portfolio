export interface About {
  id: number;
  text: string;
  title: string;
  tags: string[];
}

export const aboutData: About[] = [
  {
    id: 1,
    title: 'The front-end developer',
    text: 'I build clear and accessible interfaces with React and Next.js — combining structure, simplicity, and attention to detail.',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux',
      'Tailwind',
      'CSS Modules',
      'ECharts',
    ],
  },
  {
    id: 2,
    title: 'The product-minded developer',
    text: 'I think beyond features. My marketing background helps me design interfaces that make sense for real users and real goals.',
    tags: [
      'UX Thinking',
      'User-centric design',
      'Product vision',
      'Marketing strategy',
      'Communication',
    ],
  },
  {
    id: 3,
    title: 'The person',
    text: 'I’m curious and creative — I love hiking, exploring new places, and learning new things. That constant curiosity is what first drew me to web development.',
    tags: ['Creativity', 'Curiosity', 'Exploration', 'Travel', 'Nature'],
  },
  {
    id: 4,
    title: 'The collaborator',
    text: 'I value clarity, empathy, and collaboration. I like projects where people and ideas flow as smoothly as the code.',
    tags: [
      'Organisation',
      'Autonomy',
      'Communication',
      'Team Spirit',
      'Foresight',
      'Productivity',
    ],
  },
];
