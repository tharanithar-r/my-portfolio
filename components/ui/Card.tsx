"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero" | "project" | "about" | "contact";
  onClick?: () => void;
}

export const Card = ({
  children,
  className,
  variant = "default",
  onClick,
}: CardProps) => {
  const baseClasses =
    "bentox-card bg-bg-secondary p-8 shadow-sm lg:rounded-[32px] rounded-[24px]";

  const variantClasses = {
    default: "h-auto",
    hero: "h-[248px]", // Updated to BentoX specs
    project: "h-[248px]", // Updated to BentoX specs
    about: "h-[248px]", // Updated to BentoX specs
    contact: "h-[200px]", // Updated to BentoX specs
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className || "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
