export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean; // Controls main page display
  category: 'Full-Stack' | 'Backend' | 'Frontend';
  completedDate: string;
  order: number;
}

export const projects: Project[] = [
  {
    id: 'dinemanager',
    title: 'DineManager',
    description: 'Restaurant Operations Management System',
    longDescription: 'A comprehensive web application streamlining restaurant operations from order taking to billing with real-time kitchen communication, featuring dual deployment options for flexible access.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'NextUI', 'Redux', 'Node.js', 'Express', 'Prisma', 'MSSQL', 'JWT'],
    image: '/images/dinemanager.jpg',
    demoUrl: '',
    githubUrl: '',
    featured: true,
    category: 'Full-Stack',
    completedDate: '2024-10',
    order: 1
  },
  {
    id: 'rahmaniya',
    title: 'Rahmaniya',
    description: 'District Fund Management System',
    longDescription: 'A centralized platform built with ASP.NET that streamlines charitable fund collection through role-based management, enabling Heads and SubHeads to efficiently track donations and generate detailed financial reports across multiple districts.',
    technologies: ['ASP.NET', 'C#', 'JavaScript', 'Bootstrap', 'jQuery', 'MSSQL', 'IIS Server'],
    image: '/images/rahmaniya.jpg',
    demoUrl: '',
    githubUrl: '',
    featured: true,
    category: 'Full-Stack',
    completedDate: '2024-08',
    order: 2
  },
  {
    id: 'shopsense',
    title: 'ShopSense',
    description: 'Retail Inventory Management System',
    longDescription: 'A streamlined point-of-sale and inventory tracking system designed for local shop operations with integrated barcode scanning capabilities.',
    technologies: ['ASP.NET', 'C#', 'JavaScript', 'Bootstrap', 'QR Code Scanner Library', 'MSSQL', 'IIS'],
    image: '/images/shopsense.jpg',
    demoUrl: '',
    githubUrl: '',
    featured: true,
    category: 'Full-Stack',
    completedDate: '2024-06',
    order: 3
  }
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).sort((a, b) => a.order - b.order).slice(0, 3);
};

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => a.order - b.order);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};