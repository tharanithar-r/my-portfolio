"use client";

import { Card } from "./ui/Card";
import Image from "next/image";

// Tech stack data with actual SVG icons
const techStack = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-icon.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
];

const TechIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div
      className='w-[72px] h-[72px] rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer flex-shrink-0'
      style={{
        backgroundColor: "var(--color-border)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
      }}
      title={name}
    >
      <Image src={icon} alt={name} width={36} height={36} className='w-9 h-9' />
    </div>
  );
};

export const TechStackCard = () => {
  return (
    <Card className='flex flex-col justify-center w-full h-full p-9 overflow-hidden border border-custom bg-card-bg-secondary'>
      <div className='space-y-6'>
        <h3 className='text-base font-medium text-text-primary tracking-wide'>
          Stack I use
        </h3>
        <div
          className='relative overflow-hidden'
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className='flex gap-3 animate-scroll'>
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <TechIcon
                key={`${tech.name}-${index}`}
                name={tech.name}
                icon={tech.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
