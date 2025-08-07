"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { toggleTheme, initTheme } from "@/lib/theme";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme = initTheme();
    setTheme(currentTheme as "light" | "dark");
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme as "light" | "dark");
  };

  if (!mounted) {
    return (
      <div className="w-[90px] h-[54px] bg-border rounded-full p-1">
        <div className="w-12 h-12 bg-text-primary rounded-full"></div>
      </div>
    );
  }

  return (
    <div
      onClick={handleToggle}
      className={`w-[90px] h-[54px] rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 border border-custom bg-border`}
    >
      <div
        className={`w-12 h-12 rounded-full transition-transform duration-300 flex items-center justify-center ${
          theme === "dark"
            ? "translate-x-[34px] bg-bg-primary text-text-primary"
            : "translate-x-0 bg-text-primary text-bg-primary"
        }`}
      >
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </div>
    </div>
  );
};
