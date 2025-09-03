"use client";

import { Card } from "./ui/Card";

export const AboutExperienceCard = () => {
  return (
    <Card variant='default'>
      <div className='flex flex-col h-full p-8 bg-card-bg-secondary rounded-[32px]'>
        <div className='mb-6'>
          <h3 className='caption-text font-semibold text-text-tertiary mb-2'>
            EXPERIENCE
          </h3>
        </div>

        <div className='space-y-6 flex-1'>
          <div className='flex justify-between items-start'>
            <div>
              <h4 className='body-text font-medium text-text-primary'>
                Freelance FullStack Engineer
              </h4>
            </div>
            <span className='body-text text-text-secondary'>
              2024 - Current
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
