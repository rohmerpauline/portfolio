'use client';
import { About } from '@/app/data/aboutData';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface AboutCardProps {
  aboutDataElement: About;
}

export const AboutCard = ({ aboutDataElement }: AboutCardProps) => {
  return (
    <section aria-labelledby="about-section-card">
      <h2 id="about-title" className="text-primary text-2xl md:text-4xl">
        {aboutDataElement.text}
      </h2>
      <div className="flex flex-wrap gap-3 mt-5">
        {aboutDataElement.tags.map((tag) => (
          <div
            key={tag}
            className="bg-primary text-secondary font-fira font-extrabold text-lg px-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
};
