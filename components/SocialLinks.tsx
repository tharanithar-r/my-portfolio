'use client';

import { Twitter, Linkedin, Github, Dribbble, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://x.com/Tharanitha82201',
    icon: Twitter,
    available: true
  },
  {
    name: 'Dribbble',
    url: '#',
    icon: Dribbble,
    available: false
  },
  {
    name: 'Instagram',
    url: '#',
    icon: Instagram,
    available: false
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tharanithar-ravikumar-5a3135297/',
    icon: Linkedin,
    available: true
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Tharanithar',
    icon: Github,
    available: true
  },
  {
    name: 'Email',
    url: 'mailto:rtharanithar@gmail.com',
    icon: Mail,
    available: true
  }
];

export const SocialLinks = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.available ? social.url : '#'}
            target={social.available ? '_blank' : '_self'}
            rel={social.available ? 'noopener noreferrer' : ''}
            className={`aspect-square bg-bg-secondary rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-custom ${
              !social.available ? 'opacity-50 cursor-not-allowed' : 'hover:bg-card-bg-alt'
            }`}
            aria-label={social.name}
            onClick={!social.available ? (e) => e.preventDefault() : undefined}
          >
            <Icon className="w-5 h-5 text-[var(--color-text-content)]" />
          </a>
        );
      })}
    </div>
  );
};