"use client";

import { Project } from "@/lib/projects";
import { Card } from "../ui/Card";

interface ProjectArchitectureProps {
  project: Project;
}

export const ProjectArchitecture = ({ project }: ProjectArchitectureProps) => {
  return (
    <div
      className='space-y-12 animate-slideUp'
      style={{ animationDelay: "0.8s" }}
    >
      {/* Technical Architecture */}
      <div>
        <h2 className='heading-primary text-text-primary mb-6'>
          Technical Architecture
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <Card className='p-8 bg-card-bg-secondary rounded-[32px] border border-custom'>
            <div className='space-y-6'>
              <div>
                <h3 className='caption-text font-semibold text-text-secondary mb-3 uppercase tracking-wide'>
                  FRONTEND
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.architecture.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-tech-icon-bg text-text-primary text-sm rounded-full border border-custom'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='caption-text font-semibold text-text-secondary mb-3 uppercase tracking-wide'>
                  BACKEND
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.architecture.backend.map((tech, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-tech-icon-bg text-text-primary text-sm rounded-full border border-custom'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className='p-8 bg-card-bg-secondary rounded-[32px] border border-custom'>
            <div className='space-y-6'>
              <div>
                <h3 className='caption-text font-semibold text-text-secondary mb-3 uppercase tracking-wide'>
                  DATABASE
                </h3>
                <p className='body-text text-text-primary'>
                  {project.architecture.database}
                </p>
              </div>

              <div>
                <h3 className='caption-text font-semibold text-text-secondary mb-3 uppercase tracking-wide'>
                  DEPLOYMENT
                </h3>
                <p className='body-text text-text-primary'>
                  {project.architecture.deployment}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      {(project.demoUrl || project.githubUrl) && (
        <div className='text-center pt-8'>
          <div className='flex justify-center gap-4'>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors body-text font-medium'
              >
                View Live Demo →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-card-bg-secondary text-text-primary rounded-full hover:bg-card-bg-alt transition-colors body-text font-medium border border-custom'
              >
                View Code →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
