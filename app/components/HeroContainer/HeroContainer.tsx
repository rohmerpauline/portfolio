import { SECTION_IDS } from '@/app/data/navigationData';
import Image from 'next/image';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export const HeroContainer = () => {
  const tags = [
    'React',
    'Next.js',
    'Redux',
    'Typescript',
    'Tailwind',
    'CSS Modules',
    'Storybook',
    'ECharts',
  ];

  return (
    <div
      id={SECTION_IDS.HOME}
      className="section-layout grid md:grid-cols-[57%_40%] justify-between align-baseline"
    >
      <div>
        <SectionHeading
          heading={
            <>
              Hello world,
              <br />
              I'm Pauline
            </>
          }
        />
        <div className="font-fira font-medium text-md lg:text-lg xl:text-xl leading-relaxed">
          I’m a frontend developer specialised in React, Next.js and Typescript,
          with a strong product mindset and a focus on user experience.
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-4 mt-3 sm:mt-7 mb-2 md:mb-10 w-full sm:w-[80%]">
          {tags.map((tag) => (
            <div
              key={tag}
              className="font-extrabold bg-accent w-max text-md lg:text-lg px-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-[8%] sm:mx-[15%] md:mx-auto flex flex-col justify-end">
        <Image
          src="/images/portrait.png"
          alt="Portrait Pauline"
          width={1000}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
