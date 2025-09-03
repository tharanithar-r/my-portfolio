import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Tharanithar - Full Stack Developer | IIITK Alumni | React & Next.js Expert",
  description:
    "Tharanithar R - Full Stack Developer and IIITK alumni specializing in React, Next.js, TypeScript, and modern web applications. Portfolio showcasing innovative projects and technical expertise.",
  keywords: [
    "Tharanithar",
    "Tharanithar R",
    "Tharanithar full stack developer",
    "Tharanithar IIITK",
    "IIITK alumni",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Web Development",
    "IIITK",
    "Computer Science",
    "Software Engineer",
    "Portfolio",
    "JavaScript Developer",
  ],
  authors: [{ name: "Tharanithar R", url: "https://tharanithar-r.dev" }],
  creator: "Tharanithar R",
  publisher: "Tharanithar R",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tharanithar-r.dev"),
  alternates: {
    canonical: "https://tharanithar-r.dev",
  },
  openGraph: {
    title: "Tharanithar R - Full-Stack Developer",
    description:
      "Tharanithar R - Full Stack Developer and IIITK alumni. Explore my portfolio featuring innovative web applications built with React, Next.js, and modern technologies.",
    url: "https://tharanithar-r.dev",
    siteName: "Tharanithar Portfolio",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tharanithar - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharanithar - Full Stack Developer | IIITK Alumni",
    description:
      "Full Stack Developer and IIITK alumni specializing in React, Next.js, and modern web technologies. Check out my portfolio!",
    creator: "@Tharanitha82201",
    images: ["/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this after setting up Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </head>
      <body className='antialiased bg-bg-primary rounded-[40px] relative'>
        <StructuredData />
        {/* Background pattern layer */}
        <div
          className='fixed inset-0 pointer-events-none z-4'
          style={{
            backgroundImage:
              'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
            backgroundSize: "64px",
            backgroundRepeat: "repeat",
            opacity: 0.08,
          }}
        />
        <div className='border-2 border-custom rounded-[40px] m-4 relative'>
          {children}
        </div>
      </body>
    </html>
  );
}
