import { Project } from '@/app/data/projectsData';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  projectData: Project;
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <article className="bg-primary mx-3 rounded-4xl p-6 shadow-card flex flex-col justify-between">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={projectData.image}
          alt={`${projectData.title} screenshot`}
          width={500}
          height={500}
          className="w-full"
        />
      </div>

      <div className="md:h-[320px] lg:h-[270px]">
        <div className="font-fira text-2xl font-bold my-5 text-white ">
          {projectData.title}
        </div>
        <div className="font-light text-lg text-white mb-5 ">
          {projectData.description}
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        {projectData.githubUrl ? (
          <a
            href={projectData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View the code on Github"
          >
            <FaGithub
              color="white"
              size={30}
              className="cursor-pointer hover:scale-[1.1] transition-transform duration-200"
            />
          </a>
        ) : (
          <div className="relative group">
            <FaGithub
              color="white"
              size={30}
              className="opacity-60 cursor-pointer"
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-md rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Privately owned
            </span>
          </div>
        )}
        <a
          href={projectData.url}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit the website"
        >
          <FiExternalLink
            color="white"
            size={30}
            className="cursor-pointer hover:scale-[1.1]"
          />
        </a>
      </div>
    </article>
  );
};
