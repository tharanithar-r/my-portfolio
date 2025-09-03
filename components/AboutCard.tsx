"use client";

import { useRouter } from "next/navigation";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { ArrowUpRight } from "lucide-react";

export const AboutCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <Card
      variant='about'
      className='group cursor-pointer hover:bg-card-bg-alt transition-colors p-8'
      onClick={handleClick}
    >
      <div className='flex flex-col justify-between h-full'>
        <div>
          <h2 className='caption-text font-semibold text-text-secondary uppercase tracking-wide mb-6'>
            ABOUT
          </h2>
          <p className='body-text text-text-primary max-w-[260px]'>
            Love to build products and enjoy solving problems.
          </p>
        </div>
        <div className='flex justify-end mt-5'>
          <Button
            variant='ghost'
            size='sm'
            className='p-2 hover:bg-bg-secondary transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <div className='w-8 h-8 rounded-full border border-custom flex items-center justify-center hover:bg-accent transition-all'>
              <ArrowUpRight className='w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors' />
            </div>
          </Button>
        </div>
      </div>
    </Card>
  );
};
