"use client";

import Image from "next/image";
import { Card } from "./ui/Card";

export const ProfileCard = () => {
  return (
    <Card className="w-full h-full p-0 overflow-hidden border border-custom">
      <Image
        src="/images/tharani_profile.jpg"
        alt="Tharanitharan"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
    </Card>
  );
};
