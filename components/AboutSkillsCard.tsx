"use client";

import { useState } from "react";
import { Card } from "./ui/Card";

const skills = [
  {
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications using modern technologies like Next.js, React, Node.js, and ASP.NET, delivering complete solutions from database design to user interface.",
  },
  {
    title: "API Development & Integration",
    description:
      "Creating secure, scalable RESTful APIs with proper authentication systems, database optimization, and third-party integrations like payment gateways for seamless user experiences.",
  },
  {
    title: "Database Architecture",
    description:
      "Designing and implementing efficient database solutions across PostgreSQL, MSSQL, and MongoDB, with expertise in ORM tools like Prisma for type-safe data operations.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Managing application deployments across various platforms including AWS, Vercel, and VPS servers, with containerization using Docker and process management for 99% uptime reliability.",
  },
];

export const AboutSkillsCard = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  const handleSkillChange = (newIndex: number) => {
    setCurrentSkill(newIndex);
  };

  return (
    <Card variant='default' className='h-full'>
      <div className='flex flex-col h-full p-8 bg-card-bg-secondary rounded-[32px]'>
        <div className='mb-6'>
          <h3 className='caption-text font-semibold text-text-tertiary mb-2'>
            WHAT I DO BEST
          </h3>
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div className='min-h-[130px] overflow-hidden'>
            <div className='relative h-[120px]'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
                    index === currentSkill
                      ? "translate-x-0"
                      : index > currentSkill
                      ? "translate-x-full"
                      : "-translate-x-full"
                  }`}
                >
                  <h4 className='body-text font-medium text-text-primary mb-2'>
                    {skill.title}
                  </h4>
                  <p className='body-text text-text-secondary'>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className='flex justify-center'>
            <div className='flex justify-center gap-2 mt-6 p-2 rounded-full bg-[rgb(31,31,31)]'>
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSkillChange(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 bg-[rgb(204,204,204)] ${
                    index === currentSkill ? "" : "opacity-30"
                  }`}
                  aria-label={`View skill ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
