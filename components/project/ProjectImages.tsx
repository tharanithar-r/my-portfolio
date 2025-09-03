"use client";

import { Project } from "@/lib/projects";
import Image from "next/image";

interface ProjectImagesProps {
  project: Project;
}

export const ProjectImages = ({ project }: ProjectImagesProps) => {
  return (
    <div className='mb-16 animate-slideUp' style={{ animationDelay: "0.7s" }}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {project.images.map((image, index) => (
          <div
            key={index}
            className='rounded-[32px] overflow-hidden bg-card-bg-secondary border border-custom'
          >
            <Image
              src={image}
              alt={`${project.title} screenshot ${index + 2}`}
              width={600}
              height={400}
              className='w-full h-auto object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
