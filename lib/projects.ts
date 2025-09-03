export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "Full-Stack" | "Backend" | "Frontend";
  completedDate: string;
  order: number;

  // Enhanced fields for project detail pages
  client: string;
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: string[];
  solution: string;
  images: string[];
  architecture: {
    frontend: string[];
    backend: string[];
    database?: string;
    deployment: string;
  };
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    id: "data-alchemist-export",
    title: "Data Alchemist Export System",
    description: "Production-Ready Data Export System for Allocation Systems",
    longDescription:
      "A comprehensive export system designed to generate production-ready data files and configuration for downstream allocation systems. Provides multiple export options including individual CSV files, rules configuration JSON, and a comprehensive bulk ZIP package.",
    technologies: ["TypeScript", "React", "Next.js", "Gemini API"],
    image: "/images/projects/data-alchemist/data-alchemist.png",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    category: "Full-Stack",
    completedDate: "2025-09",
    order: 4,
    client: "Internal Project",
    role: "Full-Stack Developer & System Architect",
    timeline: "2025-08 — 2025-09",
    context:
      "Developed a robust export system for the Data Alchemist platform to generate production-ready data files and configuration for downstream allocation systems with multiple export options.",
    problem:
      "The need for a standardized, reliable export system that can generate clean, normalized data files and configuration for consumption by downstream allocation systems while providing flexibility in export options.",
    process: [
      "Designed modular export architecture with separate components for CSV export, rules JSON generation, and bulk download functionality.",
      "Implemented data validation pipeline to ensure export quality and consistency.",
      "Developed data normalization features to standardize formats for production use.",
      "Created bulk download functionality to package all export files into a single ZIP archive.",
      "Built export preview functionality for visual verification before generation.",
      "Implemented comprehensive error handling and progress tracking.",
    ],
    solution:
      "Built a comprehensive export system with multiple export options, data validation, normalization capabilities, and bulk download functionality. The system provides clean, standardized data files for downstream consumption.",
    images: [
      "/images/projects/data-alchemist/home.png",
      "/images/projects/data-alchemist/search.png",
      "/images/projects/data-alchemist/workers.png",
      "/images/projects/data-alchemist/rules.png",
      "/images/projects/data-alchemist/validations.png",
      "/images/projects/data-alchemist/weights.png",
      "/images/projects/data-alchemist/export.png",
    ],
    architecture: {
      frontend: ["React", "TypeScript", "Next.js"],
      backend: ["TypeScript", "Node.js"],
      deployment: "Vercel",
    },
    keyFeatures: [
      "Multiple export options (CSV files, rules JSON, bulk ZIP)",
      "Data validation and normalization",
      "Export preview functionality",
      "Bulk download with progress tracking",
      "Configurable export options",
      "Production-ready data formats",
    ],
  },
  {
    id: "dinemanager",
    title: "DineManager",
    description: "Restaurant Operations Management System",
    longDescription:
      "A comprehensive web application streamlining restaurant operations from order taking to billing with real-time kitchen communication, featuring dual deployment options for flexible access.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "Redux",
      "Node.js",
      "Express",
      "Prisma",
      "MSSQL",
      "JWT",
    ],
    image: "/images/projects/dinemanager/dinemanager.png",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full-Stack",
    completedDate: "2024-10",
    order: 2,
    client: "Local Restaurant Chain",
    role: "Full-Stack Developer & System Architect",
    timeline: "2024-08 — 2024-10",
    context:
      "A growing restaurant chain needed a comprehensive digital solution to streamline their operations, reduce manual errors, and improve customer service efficiency across multiple locations.",
    problem:
      "Restaurant operations were heavily manual, leading to order errors, slow service, inefficient kitchen communication, and difficulty tracking sales and inventory across multiple locations.",
    process: [
      "Conducted stakeholder interviews with restaurant owners, managers, and staff to understand pain points and workflow requirements.",
      "Designed system architecture with separate modules for order management, kitchen operations, billing, and reporting.",
      "Developed responsive web application with real-time updates using WebSocket connections for kitchen communication.",
      "Implemented role-based access control and comprehensive testing across different user scenarios.",
      "Deployed with dual hosting options (cloud and on-premise) for flexibility and data security.",
    ],
    solution:
      "Built a comprehensive restaurant management system with real-time order tracking, automated kitchen notifications, integrated billing, and detailed analytics. The system reduced order processing time by 40% and eliminated manual errors.",
    images: [
      "/images/projects/dinemanager/login.png",
      "/images/projects/dinemanager/tables.png",
      "/images/projects/dinemanager/menu.png",
      "/images/projects/dinemanager/cart_order.png",
      "/images/projects/dinemanager/kitchen.png",
    ],
    architecture: {
      frontend: ["React.js", "TypeScript", "Tailwind CSS", "NextUI", "Redux"],
      backend: ["Node.js", "Express.js", "Prisma ORM", "JWT Authentication"],
      database: "Microsoft SQL Server",
      deployment: "Docker containers with dual hosting (AWS & On-premise)",
    },
    keyFeatures: [
      "Real-time order management and kitchen communication",
      "Automated billing and payment processing",
      "Multi-location inventory tracking",
      "Role-based user management",
      "Comprehensive sales and performance analytics",
      "Mobile-responsive design for all devices",
    ],
  },
  {
    id: "rahmaniya",
    title: "Rahmaniya",
    description: "District Fund Management System",
    longDescription:
      "A centralized platform built with ASP.NET that streamlines charitable fund collection through role-based management, enabling Heads and SubHeads to efficiently track donations and generate detailed financial reports across multiple districts.",
    technologies: [
      "ASP.NET",
      "C#",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "MSSQL",
      "IIS Server",
    ],
    image: "/images/projects/rahmaniya/rahmaniya.png",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full-Stack",
    completedDate: "2024-08",
    order: 3,
    client: "Charitable Organization",
    role: "Full-Stack Developer & Database Architect",
    timeline: "2024-06 — 2024-08",
    context:
      "A charitable organization managing fund collection across multiple districts needed a centralized system to track donations, manage contributors, and generate comprehensive financial reports for transparency and accountability.",
    problem:
      "Manual fund collection tracking led to data inconsistencies, difficulty in generating reports, lack of transparency in fund allocation, and challenges in managing role-based access across different district levels.",
    process: [
      "Analyzed existing manual processes and identified key stakeholders including district heads, sub-heads, and administrators.",
      "Designed hierarchical role-based system architecture with secure authentication and authorization layers.",
      "Developed comprehensive database schema to handle multi-district fund tracking and reporting requirements.",
      "Built responsive web interface with role-specific dashboards and real-time data visualization.",
      "Implemented automated report generation and deployed on IIS server with backup and security protocols.",
    ],
    solution:
      "Created a centralized fund management platform with role-based access control, automated reporting, and real-time tracking. The system improved transparency by 90% and reduced report generation time from days to minutes.",
    images: [
      "/images/projects/rahmaniya/login_home.png",
      "/images/projects/rahmaniya/register_users.png",
      "/images/projects/rahmaniya/users_payments.png",
      "/images/projects/rahmaniya/reports.png",
    ],
    architecture: {
      frontend: ["ASP.NET Web Forms", "Bootstrap", "JavaScript", "jQuery"],
      backend: ["ASP.NET Framework", "C#", "Entity Framework"],
      database: "Microsoft SQL Server",
      deployment: "IIS Server with SSL certificates and automated backups",
    },
    keyFeatures: [
      "Hierarchical role-based access control",
      "Multi-district fund tracking and management",
      "Automated financial report generation",
      "Real-time donation tracking and analytics",
      "Secure user authentication and authorization",
      "Responsive design for desktop and mobile access",
    ],
  },
  {
    id: "shopsense",
    title: "ShopSense",
    description: "Retail Inventory Management System",
    longDescription:
      "A streamlined point-of-sale and inventory tracking system designed for local shop operations with integrated barcode scanning capabilities.",
    technologies: [
      "ASP.NET",
      "C#",
      "JavaScript",
      "Bootstrap",
      "QR Code Scanner Library",
      "MSSQL",
      "IIS",
    ],
    image: "/images/projects/shopsense/shopsense.png",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full-Stack",
    completedDate: "2024-06",
    order: 5,
    client: "Local Retail Store",
    role: "Full-Stack Developer & System Designer",
    timeline: "2024-04 — 2024-06",
    context:
      "A local retail store needed a modern point-of-sale system to replace their manual inventory tracking, reduce checkout time, and provide real-time stock management with barcode scanning capabilities.",
    problem:
      "Manual inventory management led to stock discrepancies, slow checkout processes, difficulty tracking sales trends, and challenges in managing supplier relationships and reorder points.",
    process: [
      "Conducted on-site analysis of current retail operations and identified key pain points in inventory and sales processes.",
      "Designed integrated POS system with real-time inventory tracking and barcode scanning functionality.",
      "Developed responsive web application with offline capabilities for uninterrupted operations during network issues.",
      "Implemented automated low-stock alerts and supplier management features with comprehensive reporting.",
      "Deployed on local IIS server with regular database backups and trained staff on system usage.",
    ],
    solution:
      "Built a comprehensive retail management system with integrated POS, real-time inventory tracking, and barcode scanning. The system reduced checkout time by 60% and eliminated stock discrepancies.",
    images: [
      "/images/projects/shopsense/home_search.png",
      "/images/projects/shopsense/scan_sales.png",
    ],
    architecture: {
      frontend: [
        "ASP.NET Web Forms",
        "Bootstrap",
        "JavaScript",
        "QR Scanner Library",
      ],
      backend: ["ASP.NET Framework", "C#"],
      database: "Microsoft SQL Server",
      deployment: "Local IIS Server with automated backup system",
    },
    keyFeatures: [
      "Integrated barcode/QR code scanning for products",
      "Real-time inventory tracking and management",
      "Point-of-sale system with receipt generation",
      "Automated low-stock alerts and reorder notifications",
      "Comprehensive sales and inventory reporting",
      "Offline mode for uninterrupted operations",
    ],
  },
  {
    id: "digitaldepot",
    title: "DigitalDepot",
    description:
      "Full-featured e-commerce app with admin review workflow and Razorpay payments.",
    longDescription:
      "A modern e-commerce platform for a hardware retailer built with Next.js 15 and React 19, featuring secure JWT auth, catalog browsing, intelligent cart, a staged order workflow with admin review before payment, and robust Razorpay integration with webhooks and fee calculations.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Razorpay",
      "@heroui/react",
    ],
    image: "/images/projects/kamatchihw/kamatchihw.png",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    category: "Full-Stack",
    completedDate: "2025-08",
    order: 1,
    client: "Local Hardware Retailer",
    role: "Full-Stack Developer & System Architect",
    timeline: "2025-06 — 2025-08",
    context:
      "A hardware retailer needed a robust online store enabling accurate order review and approval before payment, with secure authentication, responsive UI, and scalable backend.",
    problem:
      "The business required a digital storefront with strict order accuracy and a controlled payment workflow. Existing processes lacked admin review, secure payments, and reliable status tracking.",
    process: [
      "Designed Next.js app architecture with protected routes and JWT session handling.",
      "Implemented product catalog with categories, search, and details.",
      "Built cart with quantity edits, delivery type selection, and GST-calculated totals.",
      "Implemented multi-stage order workflow with admin review and modification tracking.",
      "Integrated Razorpay with fee calculation, webhook verification, and retry logic.",
      "Developed admin APIs, notifications, and status analytics.",
      "Hardened security with middleware, input validation, and rate limiting.",
    ],
    solution:
      "Delivered a secure, responsive e‑commerce platform with staged order review, reliable payments via Razorpay, and clear status tracking—reducing payment disputes and improving operational accuracy.",
    images: [
      "/images/projects/kamatchihw/login&profile.png",
      "/images/projects/kamatchihw/home.png",
      "/images/projects/kamatchihw/cart.png",
      "/images/projects/kamatchihw/orders.png",
    ],
    architecture: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "HeroUI",
      ],
      backend: [
        "Next.js API routes",
        "Prisma ORM",
        "JWT Authentication",
        "Razorpay SDK/Webhooks",
      ],
      database: "PostgreSQL",
      deployment: "Vercel",
    },
    keyFeatures: [
      "JWT-based authentication with protected routes",
      "Category-driven catalog with search and product details",
      "Cart with GST and delivery options (Home Delivery/Shop Collection)",
      "Order workflow: PENDING_REVIEW → READY_FOR_PAYMENT → PAYMENT_PAID → BILLED",
      "Razorpay integration with fee breakdown and webhook verification",
      "Admin review/modification with change logging and notifications",
      "Responsive layout optimized for desktop and mobile",
    ],
  },
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);
};

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => a.order - b.order);
};

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
