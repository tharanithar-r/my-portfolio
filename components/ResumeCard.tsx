"use client";

import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export const ResumeCard = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1JE75HHB-c0OweACF536Th9h0LQ3t3naB/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Card className='w-full h-full p-8 flex flex-col justify-between border border-custom bg-card-bg-secondary'>
      <div>
        <h3 className='text-base mb-3 text-text-secondary font-semibold'>
          MY RESUME
        </h3>
        <p className='text-sm mb-3 text-text-primary'>
          Checkout my resume to learn about my experience and skills.
        </p>
      </div>
      <Button
        onClick={handleDownload}
        className='w-full !bg-[var(--color-border)] py-3 px-4 text-text-primary hover:bg-card-bg-alt hover:cursor-pointer'
      >
        View Resume
      </Button>
    </Card>
  );
};
