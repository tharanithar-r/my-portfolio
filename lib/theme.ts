'use client';

export const initTheme = () => {
  if (typeof window === 'undefined') return;
  
  // Get saved theme or default to dark (BentoX default)
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || 'dark'; // Default to dark theme like BentoX
  
  // Apply theme
  document.body.classList.toggle('dark-mode', theme === 'dark');
  
  return theme;
};

export const toggleTheme = () => {
  if (typeof window === 'undefined') return;
  
  const isDark = document.body.classList.contains('dark-mode');
  const newTheme = isDark ? 'light' : 'dark';
  
  document.body.classList.toggle('dark-mode', newTheme === 'dark');
  localStorage.setItem('theme', newTheme);
  
  return newTheme;
};

export const getTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
};