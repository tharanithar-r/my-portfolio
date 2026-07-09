"use client";

import Script from "next/script";

export const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tharanithar R",
    alternateName: "Tharanithar",
    description: "Full Stack Developer at HireZapp specializing in React, Next.js, TypeScript, Node.js, automation, and modern web applications",
    url: "https://tharanithar-r.dev",
    image: "https://tharanithar-r.dev/images/profile.jpg",
    sameAs: [
      "https://github.com/tharanithar-r",
      "https://linkedin.com/in/tharanithar-r",
      "https://twitter.com/Tharanitha82201"
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "HireZapp"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Indian Institute of Information Technology Kottayam",
      alternateName: "IIITK",
      url: "https://www.iiitkottayam.ac.in/"
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Node.js",
      "Express.js",
      "Full Stack Development",
      "Web Development",
      "Software Engineering",
      "PostgreSQL",
      "DynamoDB",
      "Prisma",
      "Tailwind CSS",
      "n8n",
      "AWS",
      "VPS",
      "Nginx",
      "PM2",
      "Git",
      "MSSQL",
      "C#",
      "C++",
      "ASP.NET"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India"
      },
      skills: [
        "React Development",
        "Next.js Development",
        "TypeScript Programming",
        "Python Programming",
        "Full Stack Development",
        "Database Design",
        "API Development",
        "Automation Workflows",
        "Responsive Web Design"
      ]
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://tharanithar-r.dev",
    name: "Tharanithar Portfolio",
    description: "Portfolio website showcasing full stack development projects and technical expertise",
    url: "https://tharanithar-r.dev",
    author: {
      "@type": "Person",
      name: "Tharanithar R",
      url: "https://tharanithar-r.dev"
    },
    creator: {
      "@type": "Person",
      name: "Tharanithar R"
    },
    dateCreated: "2024",
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: "en-US",
    keywords: [
      "Portfolio",
      "Full Stack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Web Development",
      "IIIT Kottayam"
    ],
    mainEntity: {
      "@type": "Person",
      name: "Tharanithar R"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tharanithar-r.dev/#website",
    url: "https://tharanithar-r.dev",
    name: "Tharanithar Portfolio",
    description: "Full Stack Developer Portfolio - Tharanithar R",
    publisher: {
      "@type": "Person",
      name: "Tharanithar R"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://tharanithar-r.dev/projects?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tharanithar-r.dev"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://tharanithar-r.dev/projects"
      }
    ]
  };

  const schemas = [personSchema, portfolioSchema, websiteSchema, breadcrumbSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
};
