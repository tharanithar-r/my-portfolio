import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tharanithar R - Full-Stack Developer",
  description:
    "Full Stack Developer with expertise in building modern web applications using React and Next.js ecosystems. Currently studying CSE at IIITK.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "IIITK",
  ],
  authors: [{ name: "Tharanithar R" }],
  creator: "Tharanithar R",
  openGraph: {
    title: "Tharanithar R - Full-Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    url: "https://tharanithar.dev",
    siteName: "Tharanithar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharanithar R - Full-Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    creator: "@Tharanitha82201",
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
      <body className='antialiased bg-bg-primary rounded-[40px]'>
        <div className='border-2 border-custom rounded-[40px] m-4'>
          {children}
        </div>
      </body>
    </html>
  );
}
