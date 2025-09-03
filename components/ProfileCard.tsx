"use client";

import Image from "next/image";
import { Card } from "./ui/Card";

export const ProfileCard = () => {
  return (
    <Card className='w-full h-full p-0 overflow-hidden border border-custom bg-card-bg-secondary'>
      <Image
        src='/images/tharani_profile.jpg'
        alt='Tharanithar R - Full Stack Developer and IIITK Alumni'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        className='absolute'
        priority={true}
      />
    </Card>
  );
};
