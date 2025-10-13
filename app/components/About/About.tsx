'use client';
import { aboutData } from '@/app/data/aboutData';
import { SECTION_IDS } from '@/app/data/navigationData';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { AboutCard } from '../AboutCard/AboutCard';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { SectionSubHeading } from '../SectionSubHeading/SectionSubHeading';

export const About = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentWho = aboutData.find(
    (about) => about.id - 1 === currentSlideIndex,
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    adaptiveHeight: true,
    afterChange: (current: number) => {
      setTimeout(() => setCurrentSlideIndex(current), 20);
    },
  };

  return (
    <section id={SECTION_IDS.ABOUT} className="section-layout about-section">
      <SectionHeading heading="About" />
      <div className="h-[50px]">
        <SectionSubHeading
          subheading={`<About who={${currentWho?.title}} />`}
        />
      </div>
      <div className="pt-5 pb-15">
        <div className="bg-secondary rounded-4xl px-10 py-20">
          <Slider {...settings}>
            {aboutData.map((data) => (
              <React.Fragment key={data.id}>
                <AboutCard aboutDataElement={data} />
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
