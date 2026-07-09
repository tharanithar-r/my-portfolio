"use client";

import { Card } from "./ui/Card";

export const AboutStoryCard = () => {
  return (
    <Card variant='default' className=''>
      <div className='flex flex-col h-full p-8 bg-card-bg-secondary rounded-[32px]'>
        <div className='mb-6'>
          <h1 className='heading-primary text-text-primary mb-2'>
            What I&apos;m about?
          </h1>
        </div>
        <div className='space-y-4 text-text-secondary'>
          <p className='body-text'>
            I&apos;m a passionate Full Stack Developer from India. Since
            discovering programming during my studies at IIIT Kottayam,
            I&apos;ve been fascinated by the power of code to solve real-world
            problems. I build complete digital systems across frontend,
            backend, databases, automation, and deployment.
          </p>
          <div className='pt-4'>
            <h2 className='caption-text font-semibold text-text-primary mb-2'>
              WHAT I DO NOW
            </h2>
            <p className='body-text'>
              Today I&apos;m a Full Stack Developer at{" "}
              <span className='underline underline-offset-4 decoration-text-secondary'>
                HireZapp
              </span>
              , an AI recruitment platform backed by AWS and NVIDIA.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
