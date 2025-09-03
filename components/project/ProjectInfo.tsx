"use client";

import { Project } from "@/lib/projects";
import { Card } from "../ui/Card";

interface ProjectInfoProps {
  project: Project;
}

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div
      className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 animate-slideUp'
      style={{ animationDelay: "0.2s" }}
    >
      {/* Left Column */}
      <div className='space-y-6'>
        <Card className='p-8 bg-card-bg-secondary rounded-[32px] border border-custom'>
          <div className='space-y-6'>
            <div>
              <h3 className='caption-text font-semibold text-text-secondary mb-2 uppercase tracking-wide'>
                CLIENT
              </h3>
              <p className='body-text text-text-primary'>{project.client}</p>
            </div>

            <div>
              <h3 className='caption-text font-semibold text-text-secondary mb-2 uppercase tracking-wide'>
                MY ROLE
              </h3>
              <p className='body-text text-text-primary'>{project.role}</p>
            </div>

            <div>
              <h3 className='caption-text font-semibold text-text-secondary mb-2 uppercase tracking-wide'>
                TIMELINE
              </h3>
              <p className='body-text text-text-primary'>{project.timeline}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Column */}
      <div className='space-y-6'>
        <Card className='p-8 bg-card-bg-secondary rounded-[32px] border border-custom'>
          <div className='space-y-6'>
            <div>
              <h3 className='caption-text font-semibold text-text-secondary mb-2 uppercase tracking-wide'>
                DESCRIPTION
              </h3>
              <p className='body-text text-text-primary'>
                {project.description}
              </p>
            </div>

            <div>
              <h3 className='caption-text font-semibold text-text-secondary mb-2 uppercase tracking-wide'>
                CONTEXT
              </h3>
              <p className='body-text text-text-primary'>{project.context}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
