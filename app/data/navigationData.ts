export interface Navigation {
  label: string;
  id: string;
}

export const SECTION_IDS = {
  HOME: 'home',
  MY_WORK: 'mywork',
  MY_EXPERIENCES: 'myexperiences',
  ABOUT: 'about',
} as const;

export const navigationData = [
  { label: 'Home', id: SECTION_IDS.HOME },
  { label: 'MyWork', id: SECTION_IDS.MY_WORK },
  { label: 'MyExperiences', id: SECTION_IDS.MY_EXPERIENCES },
  { label: 'About', id: SECTION_IDS.ABOUT },
];
