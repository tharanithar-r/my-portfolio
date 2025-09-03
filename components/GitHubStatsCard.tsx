"use client";

import { Card } from "./ui/Card";
import Image from "next/image";

export const GitHubStatsCard = () => {
  return (
    <Card
      variant='github'
      className='p-0 overflow-hidden relative flex flex-col h-full border border-custom bg-card-bg-secondary'
    >
      {/* GitHub Stats Image covering the entire card */}
      <div className='absolute inset-0 lg:rounded-[32px] rounded-[24px] overflow-hidden flex items-center justify-center'>
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=tharanithar-r&show_icons=true&theme=dark&hide_border=true&bg_color=00000000`}
          alt='GitHub Stats'
          fill
          unoptimized
          className='object-contain'
        />
      </div>
    </Card>
  );
};
