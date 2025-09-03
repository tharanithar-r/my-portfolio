"use client";

import { Project } from "@/lib/projects";
import Image from "next/image";

interface ProjectHeroImageProps {
  project: Project;
}

export const ProjectHeroImage = ({ project }: ProjectHeroImageProps) => {
  return (
    <div
      className='mt-6 mb-12 animate-slideUp'
      style={{ animationDelay: "0.3s" }}
    >
      <div className='rounded-[32px] overflow-hidden bg-card-bg-secondary border border-custom'>
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className='w-full h-auto object-cover'
          priority
        />
      </div>
    </div>
  );
};
