"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { ProjectsGridCard } from "@/components/ProjectsGridCard";
import { getAllProjects } from "@/lib/projects";
import { Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [projects] = useState<Project[]>(getAllProjects());
  const router = useRouter();

  useEffect(() => {
    // Handle ESC key to close
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/");
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [router]);

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className='min-h-screen animate-slideUp'>
      {/* Close Button - Centered */}
      <div className='flex justify-center p-16'>
        <button
          onClick={handleClose}
          className='w-12 h-12 rounded-full bg-card-bg-secondary border border-custom flex items-center justify-center hover:bg-card-bg-alt transition-colors'
        >
          <X className='w-6 h-6 text-text-primary' />
        </button>
      </div>

      {/* BentoX-style Grid Layout - Responsive */}
      <div className='flex justify-center px-3 pb-20'>
        <div className='w-full max-w-[1100px]'>
          {/* Desktop: 2 columns, Mobile: 1 column */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
            {projects.map((project) => (
              <ProjectsGridCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
