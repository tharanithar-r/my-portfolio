"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      <div className='w-[90px] h-[54px] rounded-full p-1 bg-theme-toggle-bg'>
        <div className='w-12 h-12 bg-card-bg-secondary rounded-full'></div>
      </div>
    );
  }

  return (
    <div
      onClick={handleToggle}
      className={`w-[90px] h-[54px] rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 border border-custom bg-[var(--theme-toggle-bg)]`}
    >
      <div
        className={`w-12 h-12 rounded-full transition-transform duration-300 flex items-center justify-center bg-black ${
          theme === "dark" ? "translate-x-[34px] " : "translate-x-0 "
        }`}
      >
        {theme === "dark" ? (
          <Image src={"/icons/sun.svg"} alt='Sun' width={24} height={24} />
        ) : (
          <Image src='/icons/moon.svg' alt='Moon' width={24} height={24} />
        )}
      </div>
    </div>
  );
};
