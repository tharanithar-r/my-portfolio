"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { getProjectById, Project } from "@/lib/projects";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectInfo } from "@/components/project/ProjectInfo";
import { ProjectHeroImage } from "@/components/project/ProjectHeroImage";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectImages } from "@/components/project/ProjectImages";
import { ProjectArchitecture } from "@/components/project/ProjectArchitecture";
import { ProjectKeyFeatures } from "@/components/project/ProjectKeyFeatures";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectId = params.id as string;
    const foundProject = getProjectById(projectId);

    if (foundProject) {
      setProject(foundProject);
    }

    setLoading(false);
  }, [params.id]);

  console.log(project);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [router]);

  const handleClose = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-text-primary'></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-text-primary mb-4'>
            Project Not Found
          </h1>
          <button
            onClick={handleClose}
            className='px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors'
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background animate-slideUp'>
      {/* Close Button - Centered */}
      <div className='flex justify-center p-16'>
        <button
          onClick={handleClose}
          className='w-12 h-12 rounded-full bg-card-bg-secondary border border-custom flex items-center justify-center hover:bg-card-bg-alt transition-colors'
        >
          <X className='w-6 h-6 text-text-primary' />
        </button>
      </div>

      {/* Project Content */}
      <div className='max-w-6xl mx-auto px-6 pb-16'>
        {/* Header Section */}
        <ProjectHeader project={project} />

        {/* Info Cards Section */}
        <ProjectInfo project={project} />

        {/* Architecture Section */}
        <ProjectArchitecture project={project} />

        {/* Hero Image */}
        <ProjectHeroImage project={project} />

        {/* Content Sections */}
        <ProjectContent project={project} />

        {/* Additional Images */}
        <ProjectImages project={project} />

        <ProjectKeyFeatures project={project} />
      </div>
    </div>
  );
}
