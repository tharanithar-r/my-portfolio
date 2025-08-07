'use client';

import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ArrowUpRight } from 'lucide-react';

export const AboutCard = () => {
  return (
    <Card variant="about" className="flex flex-col justify-center w-full h-full bg-bg-secondary relative p-8 border border-custom">
      <div className="space-y-3">
        <p className="text-xs font-medium text-[var(--color-text-heading)] uppercase tracking-wide">
          ABOUT
        </p>
        <h2 className="text-lg font-medium text-[var(--color-text-content)] leading-relaxed">
          Passionate about design and enjoy solving problems.
        </h2>
      </div>
      
      <div className="absolute bottom-6 right-6">
        <Button variant="arrow" className="text-text-secondary hover:text-text-primary w-8 h-8 rounded-full border border-text-secondary/20">
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};