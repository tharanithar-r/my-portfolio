"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero" | "project" | "about" | "contact" | "github";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card = ({
  children,
  className,
  variant = "default",
  onClick,
  style,
}: CardProps) => {
  const baseClasses =
    "bentox-card bg-card-bg-secondary p-0 shadow-sm lg:rounded-[32px] rounded-[24px]";

  const variantClasses = {
    default: "h-auto",
    hero: "h-full md:h-full", // Fill grid cell, mobile height handled by parent
    project: "h-full md:h-full", // Fill grid cell, mobile height handled by parent
    about: "h-full md:h-full", // Fill grid cell, mobile height handled by parent
    contact: "h-full md:h-full", // Fill grid cell, mobile height handled by parent
    github: "h-full md:h-full", // Fill grid cell, mobile height handled by parent
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className || "")}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
