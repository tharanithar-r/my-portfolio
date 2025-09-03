"use client";

import { useRouter } from "next/navigation";
import { Card } from "./ui/Card";
import { ArrowUpRight } from "lucide-react";

export const MyProjectsCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <Card
      className='flex flex-col w-full h-full border border-custom bg-card-bg-secondary p-8 cursor-pointer hover:bg-card-bg-alt transition-all'
      onClick={handleClick}
    >
      <div className='mb-6'>
        <p className='text-sm font-medium text-text-secondary uppercase tracking-wide'>
          My Projects
        </p>
      </div>
      <div className='flex flex-col justify-center flex-grow'>
        <h2 className='text-lg font-medium text-text-primary leading-tight'>
          Explore all my projects
        </h2>
      </div>
      <div className='flex justify-end mt-8'>
        <div className='w-8 h-8 rounded-full border border-custom flex items-center justify-center hover:bg-accent transition-all'>
          <ArrowUpRight className='w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors' />
        </div>
      </div>
    </Card>
  );
};
