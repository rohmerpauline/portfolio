'use client';
import { navigationData } from '@/app/data/navigationData';
import { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa6';

export const Header = () => {
  const [activeNav, setActiveNav] = useState(navigationData[0].label);
  const [scrolled, setScrolled] = useState(false);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedItem = navigationData.find(
              (item) => item.id === entry.target.id,
            );
            if (matchedItem) setActiveNav(matchedItem.label);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    navigationData.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveNav]);

  return (
    <div className="sticky top-3 z-[9999] w-screen">
      <div className="md:hidden px-6 py-4">
        <FaCode
          size={50}
          className={`p-2 rounded-2xl ml-auto cursor-pointer hover:text-primary ${scrolled ? 'bg-neutral-100' : ''}`}
          onClick={() => setDropDownVisible(true)}
        />
      </div>
      <div
        className={`hidden md:visible px-6 py-4 w-max mx-auto rounded-2xl md:flex items-center justify-center overflow-auto ${scrolled ? 'bg-neutral-100' : ''}`}
      >
        <nav>
          <ul className="font-fira flex gap-8 text-lg w-max">
            {navigationData.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                <li
                  className={`text-lg font-medium ${activeNav == item.label ? 'text-primary' : ''}`}
                  onClick={() => setActiveNav(item.label)}
                >
                  <span
                    className={`${activeNav == item.label ? 'visible' : 'invisible'}`}
                  >
                    &lt;
                  </span>
                  {item.label}
                  <span
                    className={`${activeNav == item.label ? 'visible' : 'invisible'}`}
                  >
                    /&gt;
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-neutral-200 z-[10000]
      transition-transform duration-500 ease-in-out
      ${dropDownVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <ul className="text-center py-5">
          {navigationData.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setDropDownVisible(false)}
            >
              <li className="py-2 hover:text-neutral-900">
                &lt;{item.label} /&gt;
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};
