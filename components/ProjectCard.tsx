"use client";

import { useRouter } from "next/navigation";
import { Card } from "./ui/Card";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <Card
      variant='project'
      className='group cursor-pointer overflow-hidden p-0 w-full h-full relative border border-custom bg-card-bg-secondary'
      onClick={handleClick}
    >
      {/* Project Image Background */}
      <div className='absolute inset-0 rounded-[32px] overflow-hidden'>
        <Image
          src={project.image}
          alt={`${project.title} - ${project.description} by Tharanithar R`}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          priority={false}
        />
        {/* Dark overlay on hover */}
        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Arrow Icon - Bottom right corner with shadow */}
      <div className='absolute bottom-4 right-4 w-8 h-8 rounded-full border border-black dark:border-white flex items-center justify-center hover:bg-accent transition-all z-20 shadow-lg'>
        <ArrowUpRight className='w-4 h-4 text-black dark:text-white  group-hover:text-white transition-colors' />
      </div>

      {/* Project Info Overlay - Bottom positioned on hover */}
      <div className='absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='flex items-end justify-between'>
          <h3 className='heading-secondary text-white'>{project.title}</h3>
        </div>
      </div>
    </Card>
  );
};
