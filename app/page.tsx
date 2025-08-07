"use client";

import { HeroCard } from "@/components/HeroCard";
import { AboutCard } from "@/components/AboutCard";
import { ProfileCard } from "@/components/ProfileCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TechStackCard } from "@/components/TechStackCard";
import { MyProjectsCard } from "@/components/MyProjectsCard";
import { ContactCard } from "@/components/ContactCard";
import { SocialLinks } from "@/components/SocialLinks";
import { getFeaturedProjects } from "@/lib/projects";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className='min-h-screen font-display'>
      {/* Desktop Layout - BentoX Reference Grid Exact Match */}
      <div className='hidden lg:block w-full h-screen overflow-hidden p-4'>
        {/* Main Container - Adjusted proportions matching reference design */}
        <div className='w-full h-full grid grid-cols-5 grid-rows-3 gap-4'>
          {/* Row 1 */}
          <div className='col-span-2'>
            <HeroCard />
          </div>
          <div>
            <ProjectCard project={featuredProjects[0]} />
          </div>
          <div>
            <ProjectCard project={featuredProjects[1]} />
          </div>
          <div>
            <SocialLinks />
          </div>

          {/* Row 2 */}
          <div>
            <ProfileCard />
          </div>
          <div className='col-span-2'>
            <AboutCard />
          </div>
          <div>
            <ProjectCard project={featuredProjects[2]} />
          </div>
          <div>
            {/* Resource Card */}
            <div className='bg-bg-secondary rounded-[32px] p-6 h-full flex flex-col justify-between border border-custom'>
              <div>
                <p className='text-xs font-medium text-[var(--color-text-heading)] uppercase tracking-wide mb-2'>
                  RESOURCES
                </p>
                <h3 className='text-base font-medium text-[var(--color-text-content)] leading-tight'>
                  Resources to speed up your workflow
                </h3>
              </div>
              <div className='flex justify-end'>
                <button className='w-8 h-8 rounded-full border border-custom flex items-center justify-center hover:bg-card-bg-alt transition-all'>
                  <span className='text-sm'>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className='col-span-2'>
            <MyProjectsCard />
          </div>
          <div>
            <TechStackCard />
          </div>
          <div>
            <div className='bg-bg-secondary rounded-[32px] p-6 h-full flex items-center justify-center border border-custom'>
              <ThemeToggle />
            </div>
          </div>
          <div>
            <ContactCard />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Fixed BentoX Mobile Stack */}
      <div className='block lg:hidden w-full min-h-screen bg-bg-primary py-5'>
        <div className='flex flex-col gap-4 w-full px-5 max-w-sm mx-auto'>
          {/* Hero Card */}
          <HeroCard />

          {/* Profile Card */}
          <ProfileCard />

          {/* About Card */}
          <AboutCard />

          {/* Project Cards */}
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Tools Section */}
          <TechStackCard />

          {/* Resources Card */}
          <div className='bg-bg-secondary rounded-[24px] p-6 h-[200px] flex flex-col justify-between transition-all active:scale-[0.98] border border-custom'>
            <div>
              <p className='text-xs font-medium text-[var(--color-text-heading)] uppercase tracking-wide mb-2'>
                RESOURCES
              </p>
              <h3 className='text-base font-medium text-[var(--color-text-content)] leading-tight'>
                Resources to speed your workflow
              </h3>
            </div>
            <div className='flex justify-end'>
              <button className='w-8 h-8 rounded-full border border-custom flex items-center justify-center hover:bg-card-bg-alt transition-all'>
                <span className='text-sm'>→</span>
              </button>
            </div>
          </div>

          {/* Newsletter Card */}
          <MyProjectsCard />

          {/* Contact Card */}
          <ContactCard />

          {/* Mobile Theme Toggle & Social */}
          <div className='flex justify-between items-center mt-4 w-full'>
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
