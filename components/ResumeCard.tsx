"use client";

import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export const ResumeCard = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1SyoOej8HDBCv6RH453BtvFx_aKZjPTub/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Card className='w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between border border-custom bg-card-bg-secondary'>
      <div className='flex-1 mb-4'>
        <h3 className='text-sm sm:text-base mb-2 sm:mb-3 text-text-secondary font-semibold'>
          MY RESUME
        </h3>
        <p className='text-sm sm:text-sm mb-3 sm:mb-4 text-text-primary leading-relaxed'>
          Checkout my resume to learn about my experience and skills.
        </p>
      </div>
      <Button
        onClick={handleDownload}
        className='w-full !bg-[var(--color-border)] py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm lg:text-base text-text-primary hover:bg-card-bg-alt hover:cursor-pointer'
      >
        View Resume
      </Button>
    </Card>
  );
};
