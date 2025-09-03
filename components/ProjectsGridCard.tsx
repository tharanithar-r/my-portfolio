"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectsGridCardProps {
  project: Project;
}

export const ProjectsGridCard = ({ project }: ProjectsGridCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div
      className='group relative cursor-pointer transition-all duration-300 w-full border border-custom bg-card-bg-secondary'
      onClick={handleClick}
      style={{
        // Mobile: 318.4px width (full width), Desktop: 542px width
        height: "clamp(352.4px, 50vw, 490px)",
        borderRadius: "clamp(16px, 2vw, 24px)",
        padding:
          "clamp(8px, 1.5vw, 16px) clamp(8px, 1.5vw, 16px) clamp(16px, 2.5vw, 24px) clamp(8px, 1.5vw, 16px)",
      }}
    >
      {/* Project Image with Hover Effect */}
      <div
        className='relative overflow-hidden mb-3 transition-all duration-300'
        style={{
          height: "clamp(226px, 35vw, 380px)",
          borderRadius: "clamp(8px, 1.5vw, 16px)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
          sizes='(max-width: 768px) 318px, 542px'
        />
      </div>

      {/* Content Section */}
      <div
        className='flex flex-col justify-between'
        style={{ height: "calc(100% - clamp(216px, 35vw, 380px) - 12px)" }}
      >
        <div>
          <h3
            className='font-medium mb-2 line-clamp-1 text-text-primary'
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              fontWeight: "500",
            }}
          >
            {project.title}
          </h3>
          <p
            className='text-sm mb-3 line-clamp-1 text-text-secondary'
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
