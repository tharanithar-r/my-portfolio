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
            problems. I love to build products that make a difference. What
            started as curiosity about web technologies has evolved into
            expertise in creating complete digital solutions that serve actual
            business needs.
          </p>
          <div className='pt-4'>
            <h2 className='caption-text font-semibold text-text-primary mb-2'>
              MY STORY
            </h2>
            <p className='body-text'>
              Today I&apos;m a Full Stack Developer, building scalable web
              applications that bridge the gap between user needs and business
              objectives.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
