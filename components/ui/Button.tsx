'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'ghost' | 'arrow';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  children, 
  className, 
  variant = 'default', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-[12px]';
  
  const variantClasses = {
    default: 'bg-text-primary text-bg-primary hover:opacity-90',
    ghost: 'bg-transparent hover:bg-card-bg-alt',
    arrow: 'w-10 h-10 rounded-full bg-card-bg-secondary hover:bg-card-bg-alt'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className || '')}
      {...props}
    >
      {children}
    </button>
  );
};