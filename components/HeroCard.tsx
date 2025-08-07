import { Card } from './ui/Card';

export const HeroCard = () => {
  return (
    <Card variant="hero" className="flex flex-col justify-center w-full h-full p-8 border border-custom">
      <div className="space-y-3">
        <h1 className="text-3xl font-medium text-[var(--color-text-heading)] leading-tight">
          Hi, I'm Tharanithar ⎯
        </h1>
        <p className="text-lg text-[var(--color-text-content)] leading-relaxed">
          Lead product designer, currently working at{' '}
          <span className="underline">mano</span> based in Cairo
        </p>
      </div>
    </Card>
  );
};