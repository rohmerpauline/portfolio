'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const Footer = () => {
  return (
    <footer className="section-layout bg-primary text-white grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-10 pt-15 pb-15 align-top">
      <div className="md:col-span-2">
        <div className="text-3xl">
          Feel free to reach out if my experience matches your need!
        </div>
      </div>
      <div className="flex gap-2 justify-center md:justify-start">
        <a href="https://www.linkedin.com/in/paulinerohmer/" target="_blank">
          <FaLinkedin size={40} color="white" />
        </a>
        <a href="https://github.com/rohmerpauline" target="_blank">
          <FaGithub size={40} color="white" />
        </a>
      </div>
    </footer>
  );
};
