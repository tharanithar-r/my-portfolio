"use client";

import { Project } from "@/lib/projects";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="mb-12 animate-slideUp" style={{ animationDelay: "0.1s" }}>
      <div className="mb-6">
        <h1 className="heading-primary text-text-primary mb-2">
          {project.title}
        </h1>
        <p className="body-text text-text-secondary">
          {project.category}
        </p>
      </div>
    </div>
  );
};
