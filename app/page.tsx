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
import { ResumeCard } from "@/components/ResumeCard";

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <main className='min-h-screen font-display' role='main'>
      {/* Desktop Layout - BentoX Reference Grid Exact Match */}
      <div className='hidden lg:block w-full h-screen overflow-hidden p-4'>
        {/* Main Container - Adjusted proportions matching reference design */}
        <div className='w-full h-full grid grid-cols-5 grid-rows-[1fr_1fr_1fr] gap-4'>
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
            <ResumeCard />
          </div>

          {/* Row 3 */}
          <div className='col-span-2'>
            <TechStackCard />
          </div>
          <div>
            <div className='bg-bg-secondary rounded-[32px] p-6 h-full flex items-center justify-center border border-custom'>
              <ThemeToggle />
            </div>
          </div>
          <div>
            <MyProjectsCard />
          </div>
          <div>
            <ContactCard />
          </div>
        </div>
      </div>

      {/* Mobile Layout - BentoX Reference Design */}
      <div className='block lg:hidden w-full min-h-screen p-3'>
        <div className='flex flex-col gap-4 w-full mx-auto'>
          {/* Hero Card */}
          <div className='h-[220px]'>
            <HeroCard />
          </div>

          {/* About Card - Right after Hero */}
          <div className='h-[220px]'>
            <AboutCard />
          </div>

          {/* Profile Card */}
          <div className='h-[220px]'>
            <ProfileCard />
          </div>

          {/* Tech Stack + Theme Toggle Row */}
          <div className='flex gap-4 w-full h-[220px]'>
            <div className='w-3/5'>
              <ResumeCard />
            </div>
            <div className='w-2/5 h-full'>
              <div className='bg-bg-secondary rounded-[24px] h-full flex items-center justify-center border border-custom'>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Project Cards - Three consecutive cards */}
          {featuredProjects.map((project) => (
            <div key={project.id} className='h-[220px]'>
              <ProjectCard project={project} />
            </div>
          ))}

          {/* My Projects Card - Newsletter equivalent */}
          <div className='h-[220px]'>
            <MyProjectsCard />
          </div>

          {/* GitHub Stats Card - Resources */}
          <div className='h-[220px]'>
            <div className='h-full'>
              <TechStackCard />
            </div>{" "}
          </div>

          {/* Contact Card */}
          <div className='h-[250px]'>
            <ContactCard />
          </div>

          {/* Social Links - Desktop style for mobile */}
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}
