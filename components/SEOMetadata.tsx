import { Metadata } from 'next'
import { Project } from '@/lib/projects'

interface SEOMetadataProps {
  project?: Project;
  page?: 'home' | 'projects' | 'project-detail';
}

export function generateMetadata({ project, page = 'home' }: SEOMetadataProps): Metadata {
  const baseUrl = 'https://tharanithar.dev'
  
  if (page === 'project-detail' && project) {
    return {
      title: `${project.title} - Tharanithar Portfolio | ${project.category} Project`,
      description: `${project.description} - A ${project.category.toLowerCase()} project by Tharanithar R, Full Stack Developer and IIITK alumni. Built with ${project.technologies.slice(0, 3).join(', ')}.`,
      keywords: [
        'Tharanithar',
        'Tharanithar R',
        project.title,
        project.category,
        'Full Stack Developer',
        'IIITK alumni',
        ...project.technologies,
        'Portfolio Project',
        'Web Development'
      ],
      openGraph: {
        title: `${project.title} - Tharanithar Portfolio`,
        description: project.description,
        url: `${baseUrl}/projects/${project.id}`,
        siteName: 'Tharanithar Portfolio',
        type: 'article',
        images: [
          {
            url: project.image.startsWith('http') ? project.image : `${baseUrl}${project.image}`,
            width: 1200,
            height: 630,
            alt: `${project.title} - Project by Tharanithar`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${project.title} - Tharanithar Portfolio`,
        description: project.description,
        images: [project.image.startsWith('http') ? project.image : `${baseUrl}${project.image}`],
      },
      alternates: {
        canonical: `${baseUrl}/projects/${project.id}`,
      },
    }
  }

  if (page === 'projects') {
    return {
      title: 'Projects - Tharanithar Portfolio | Full Stack Developer IIITK Alumni',
      description: 'Explore projects by Tharanithar R - Full Stack Developer and IIITK alumni. Featuring React, Next.js, TypeScript, and modern web applications with innovative solutions.',
      keywords: [
        'Tharanithar projects',
        'Tharanithar portfolio',
        'Full Stack Developer projects',
        'React projects',
        'Next.js projects',
        'IIITK alumni projects',
        'Web development portfolio',
        'TypeScript projects'
      ],
      openGraph: {
        title: 'Projects - Tharanithar Portfolio',
        description: 'Explore innovative web development projects by Tharanithar R, Full Stack Developer and IIITK alumni.',
        url: `${baseUrl}/projects`,
        siteName: 'Tharanithar Portfolio',
        type: 'website',
        images: [
          {
            url: `${baseUrl}/images/projects-og.jpg`,
            width: 1200,
            height: 630,
            alt: 'Tharanithar Projects Portfolio',
          },
        ],
      },
      alternates: {
        canonical: `${baseUrl}/projects`,
      },
    }
  }

  // Default home page metadata (already handled in layout.tsx)
  return {}
}
