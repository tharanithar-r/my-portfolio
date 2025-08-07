'use client';

import { Card } from './ui/Card';
import { Project } from '@/lib/projects';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card variant="project" className="group cursor-pointer overflow-hidden p-0 w-full h-full relative border border-custom">
      {/* Project Image Background */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      {/* Project Info Overlay */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <div className="text-[var(--color-text-content)]">
          <h3 className="text-sm font-medium mb-1 leading-tight text-[var(--color-text-heading)]">
            {project.title}
          </h3>
          <p className="text-xs opacity-90 leading-relaxed text-[var(--color-text-content)]">
            {project.description.slice(0, 50)}...
          </p>
        </div>
      </div>
    </Card>
  );
};