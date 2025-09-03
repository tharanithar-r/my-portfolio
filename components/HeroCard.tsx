import { Card } from "./ui/Card";

export const HeroCard = () => {
  return (
    <Card
      variant='hero'
      className='flex flex-col justify-center w-full h-full p-8 border border-custom'
    >
      <div className='space-y-3'>
        <h1 className='heading-primary text-[var(--color-text-content)]'>
          Hi, I&apos;m Tharanithar ⎯
        </h1>
        <p className='body-text text-[var(--color-text-heading)]'>
          Full Stack Developer || IIITK CSE Learner
        </p>
      </div>
    </Card>
  );
};
