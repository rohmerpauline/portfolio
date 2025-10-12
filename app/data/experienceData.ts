export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  localisation: string;
  date: string;
  jobDescription: string;
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    jobTitle:
      'Frontend developer (React / Next.js / Typescript / Python / Streamlit)',
    company: 'Climact',
    localisation: 'Brussels',
    date: 'June 2021 - Now',
    jobDescription:
      'Front-end Developer at Climact – I build interactive dashboards and climate tools that help public authorities and internal teams make sense of complex data. I work with React, Next.js, TypeScript, Redux, and Echarts, and I love creating reusable components, clean architecture, and data-driven experiences. My work includes developing low-carbon scenario calculators, embedding interactive graphs, and contributing to backend Python APIs to streamline data flow.',
  },
  {
    id: 2,
    jobTitle: 'Web development training - Career transition',
    company: 'BeCode',
    localisation: 'Brussels',
    date: 'January 2021 - June 2021',
    jobDescription:
      'Completed a 7-month full-time web development program, mastering JavaScript, React, Next.js, HTML/CSS, and Python. My training included a Climact internship that became a permanent developer role.',
  },
  {
    id: 3,
    jobTitle: 'Digital communication product manager',
    company: 'Audiolib',
    localisation: 'Paris',
    date: 'November 2016 - May 2020',
    jobDescription:
      'I worked on improving the website and online content to make it easier for users to discover and enjoy Audiolib’s audiobooks. This role gave me experience in understanding user needs, shaping digital solutions, and collaborating closely with technical and creative teams.',
  },
];
