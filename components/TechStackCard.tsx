'use client';

import { Card } from './ui/Card';
import Image from 'next/image';

// Tech stack data with actual SVG icons
const techStack = [
  { name: 'React', icon: '/icons/react-original.svg' },
  { name: 'Next.js', icon: '/icons/nextjs-original.svg' },
  { name: 'TypeScript', icon: '/icons/typescript-original.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql-original.svg' },
  { name: 'React', icon: '/icons/react-original.svg' },
  { name: 'Next.js', icon: '/icons/nextjs-original.svg' }
];

const TechIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div 
      className="w-10 h-10 rounded-xl bg-bg-secondary border border-text-secondary/20 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm flex-shrink-0"
      title={name}
    >
      <Image src={icon} alt={name} width={24} height={24} className="w-6 h-6" />
    </div>
  );
};

export const TechStackCard = () => {
  return (
    <Card className="flex flex-col justify-center w-full h-full p-4 overflow-hidden border border-custom">
      <div className="space-y-4">
        <h3 className="text-xs font-medium text-[var(--color-text-heading)] uppercase tracking-wide">
          Stack I use
        </h3>
        <div className="relative">
          <div className="flex gap-3 animate-scroll">
            {[...techStack, ...techStack].map((tech, index) => (
              <TechIcon key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};