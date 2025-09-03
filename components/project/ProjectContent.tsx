"use client";

import { Project } from "@/lib/projects";

interface ProjectContentProps {
  project: Project;
}

export const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className='space-y-16 mb-16'>
      {/* Problem Section */}
      <div className='animate-slideUp' style={{ animationDelay: "0.4s" }}>
        <h2 className='heading-primary text-text-primary mb-6'>Problem</h2>
        <p className='body-text text-text-primary leading-relaxed max-w-4xl'>
          {project.problem}
        </p>
      </div>

      {/* Process Section */}
      <div className='animate-slideUp' style={{ animationDelay: "0.5s" }}>
        <h2 className='heading-primary text-text-primary mb-6'>Process</h2>
        <p className='body-text text-text-primary mb-8 leading-relaxed max-w-4xl'>
          We adopted a systematic approach to full-stack development, ensuring
          scalable architecture, robust backend systems, and intuitive user
          interfaces that meet modern web application standards.
        </p>

        <div className='space-y-6'>
          {project.process.map((step, index) => (
            <div key={index} className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='w-8 h-8 rounded-full text-primary flex items-center justify-center text-sm font-medium'>
                  {index + 1}.
                </div>
              </div>
              <div className='flex-1'>
                <p className='body-text text-text-primary leading-relaxed'>
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className='animate-slideUp' style={{ animationDelay: "0.6s" }}>
        <h2 className='heading-primary text-text-primary mb-6'>Solution</h2>
        <p className='body-text text-text-primary leading-relaxed max-w-4xl'>
          {project.solution}
        </p>
      </div>
    </div>
  );
};
