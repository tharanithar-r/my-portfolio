"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { X } from "lucide-react";
import { AboutStoryCard } from "@/components/AboutStoryCard";
import { AboutExperienceCard } from "@/components/AboutExperienceCard";
import { AboutSkillsCard } from "@/components/AboutSkillsCard";
import { TechStackCard } from "@/components/TechStackCard";
import { ResumeCard } from "@/components/ResumeCard";
import { ContactCard } from "@/components/ContactCard";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Handle ESC key to close
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/");
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [router]);

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className='min-h-screen font-display animate-slideUp bg-background'>
      {/* Close Button - Centered */}
      <div className='flex justify-center p-16'>
        <button
          onClick={handleClose}
          className='w-12 h-12 rounded-full bg-card-bg-secondary border border-custom flex items-center justify-center hover:bg-card-bg-alt transition-colors'
        >
          <X className='w-6 h-6 text-text-primary' />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className='hidden lg:block w-full px-16 pb-8'>
        <div className='grid grid-cols-12 gap-3 max-w-6xl mx-auto'>
          {/* Left Column: Story -> Experience */}
          <div className='col-span-12 lg:col-span-6 flex flex-col gap-3'>
            <AboutStoryCard />
            <AboutExperienceCard />
          </div>
          {/* Right Column: Skills -> Tech Stack -> Resume -> Contact */}
          <div className='col-span-12 lg:col-span-6 flex flex-col gap-3'>
            <AboutSkillsCard />
            <TechStackCard />
            <ResumeCard />
            <ContactCard />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='block lg:hidden w-full p-4'>
        <div className='flex flex-col gap-3 max-w-md mx-auto'>
          <div>
            <AboutStoryCard />
          </div>
          <div>
            <AboutExperienceCard />
          </div>
          <div>
            <div className='p-1'>
              <AboutSkillsCard />
            </div>
          </div>
          <div>
            <div className='p-1'>
              <TechStackCard />
            </div>
          </div>
          <div>
            <div className='p-1'>
              <ResumeCard />
            </div>
          </div>
          <div>
            <div className='p-1'>
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
