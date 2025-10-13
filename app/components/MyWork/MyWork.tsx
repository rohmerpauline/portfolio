'use client';
import { SECTION_IDS } from '@/app/data/navigationData';
import { projectsData } from '@/app/data/projectsData';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { SectionSubHeading } from '../SectionSubHeading/SectionSubHeading';

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGElement>;
};

export const MyWork = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [visibleDots, setVisibleDots] = useState(false);

  const currentProject = projectsData.find(
    (project) => project.id - 1 === currentSlideIndex,
  );

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1300) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1300 && window.innerWidth > 1000) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    const updateDotsVisibility = () => {
      if (window.innerWidth <= 768) {
        setVisibleDots(true);
      } else {
        setVisibleDots(false);
      }
    };

    updateSlides();
    updateDotsVisibility();
    window.addEventListener('resize', updateSlides);

    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        className={className}
        style={{
          ...style,
          color: 'black',
          opacity: '0.5',
          width: '30px',
          height: '30px',
          left: '-40px',
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props: ArrowProps) {
    const { className, onClick } = props;
    return (
      <IoIosArrowForward
        className={className}
        style={{
          color: 'black',
          opacity: '0.5',
          width: '30px',
          height: '30px',
          right: '-40px',
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: visibleDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
    afterChange: (current: number) => {
      setTimeout(() => setCurrentSlideIndex(current), 20);
    },
  };

  return (
    <div
      id={SECTION_IDS.MY_WORK}
      className="bg-secondary section-layout mx-2 sm:mx-5 mywork-section"
    >
      <SectionHeading heading="My work" />

      <div className="h-[50px]">
        <SectionSubHeading
          subheading={`<MyWork project={${currentProject?.title}} />`}
        />
      </div>
      <div className="pt-5 pb-15">
        <Slider {...settings}>
          {projectsData.map((project) => (
            <div className="slick-slide mb-3" key={project.id}>
              <ProjectCard projectData={project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
