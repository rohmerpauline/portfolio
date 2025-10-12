export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  githubUrl: string | null;
  image: string;
  tags?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Pathways Explorer',
    description:
      'Tool to explore energy transition scenarios worldwide. I worked as the sole front-end developer on adding new features, improving layout, and code modernisation.',
    url: 'https://pathwaysexplorer.climact.com/',
    githubUrl: null,
    image: '/images/patex.png',
    tags: [],
  },
  {
    id: 2,
    title: 'EuCityCalc',
    description:
      'A tool allowing users to explore energy transition scenarios with concrete city-level measures. Implemented key features, created the layout and integrated user feedback to improve the interface.',
    url: 'https://eucitycalc.climact.com/',
    githubUrl: null,
    image: '/images/eucitycalc.png',
    tags: [],
  },
  {
    id: 3,
    title: 'European Climate Neutrality Observatory (ECNO)',
    description:
      'Developed interactive graphs for ECNO visualizing key climate indicators that were embedded in the ECNO tool.',
    url: 'https://climateobservatory.eu/building-block/industry',
    githubUrl: null,
    image: '/images/ecno.png',
    tags: [],
  },
  {
    id: 4,
    title: 'Weather app',
    description:
      'Front-end development of a weather app following a Frontend Mentor challenge, implementing Figma designs and displaying real-time forecasts from the OpenMeteo API.',
    url: 'https://weather-app-seven-mu-33.vercel.app/',
    githubUrl: 'string',
    image: '/images/weatherapp.png',
    tags: [],
  },
  {
    id: 5,
    title: 'Portfolio',
    description:
      'A personal portfolio presenting my work, combining custom design and front-end development.',
    url: 'string',
    githubUrl: 'string',
    image: '/images/portfolio.png',
    tags: [],
  },
];
