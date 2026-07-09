"use client";

import { Card } from "./ui/Card";

const experiences = [
  {
    role: "Full Stack Developer at HireZapp",
    period: "Dec 2025 - Current",
  },
  {
    role: "Full Stack Developer at Freelance",
    period: "Feb 2024 - Nov 2025",
  },
];

export const AboutExperienceCard = () => {
  return (
    <Card variant='default'>
      <div className='flex flex-col h-full p-8 bg-card-bg-secondary rounded-[32px]'>
        <div className='mb-6'>
          <h3 className='caption-text font-semibold text-text-tertiary mb-2'>
            EXPERIENCE
          </h3>
        </div>

        <div className='space-y-5 flex-1'>
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className='grid grid-cols-[minmax(0,1fr)_auto_minmax(92px,auto)] items-center gap-4'
            >
              <h4 className='body-text font-medium text-text-primary leading-snug'>
                {experience.role}
              </h4>
              <div className='hidden sm:block h-px min-w-16 bg-border' />
              <span className='body-text text-text-secondary text-right whitespace-nowrap'>
                {experience.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
