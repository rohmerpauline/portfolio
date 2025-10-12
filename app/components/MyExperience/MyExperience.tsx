'use client';
import { experiencesData } from '@/app/data/experienceData';
import { SECTION_IDS } from '@/app/data/navigationData';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export const MyExperience = () => {
  return (
    <div id={SECTION_IDS.MY_EXPERIENCES} className="section-layout">
      <SectionHeading heading="My experiences" />
      <div className="my-10 !z-0">
        <VerticalTimeline layout="1-column-left">
          {experiencesData.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.id}
              className=""
              contentStyle={{
                boxShadow: 'none',
                padding: 0,
                zIndex: 1,
              }}
              iconStyle={{
                border: 'none',
                boxShadow: 'none',
              }}
              intersectionObserverProps={{
                triggerOnce: false,
              }}
              icon={
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dotted border-grey bg-white"></div>
                  <div
                    className={`absolute inset-[5px] ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'} rounded-full`}
                  ></div>
                </div>
              }
            >
              <article className="px-10">
                <h3 className="text-2xl font-bold uppercase text-highlight">
                  {experience.jobTitle}
                </h3>
                <h4 className="italic text-xl">
                  <span className="uppercase text-primary font-semibold">
                    {experience.company}
                  </span>{' '}
                  | <span className="font-extralight">{experience.date}</span>
                </h4>
                <p className="!font-light pb-5">{experience.jobDescription}</p>
              </article>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
