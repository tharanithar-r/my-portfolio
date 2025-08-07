'use client';

import { Card } from './ui/Card';
import { Button } from './ui/Button';

export const MyProjectsCard = () => {
  return (
    <Card className='flex flex-col justify-between w-full h-full border border-custom'>
      <div className='flex justify-between items-start'>
        <h2 className='text-lg font-medium text-[var(--color-text-heading)] leading-tight max-w-[200px]'>
          Explore all my projects
        </h2>
        <div className='w-8 h-8 rounded-full border border-text-secondary/20 flex items-center justify-center hover:bg-card-bg-alt transition-all cursor-pointer'>
          <span className='text-sm'>→</span>
        </div>
      </div>
      <div className='self-end text-xs font-medium text-text-secondary uppercase tracking-wide'>
        My Projects
      </div>
    </Card>
  );
};