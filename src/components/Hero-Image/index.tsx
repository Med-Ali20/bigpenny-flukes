// HeroImageComponent.tsx
"use client";
import { HeroImage } from "@/types";
import Image from "next/image";


const HeroImageComponent: React.FC<HeroImage> = ({ Image: image, MobileImage }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${image.data?.attributes.url}`;
  const mobileImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${MobileImage.data?.attributes.url}`;

  return (
    <div className="w-full mb-5">
      {/* Desktop Image */}
      <div className="hidden md:block w-full h-[70vh] relative overflow-hidden">
        <Image
          src={imageUrl}
          alt="Hero image"
          className="w-full h-full object-cover object-center"
          loading="eager" // Hero images should load immediately
          sizes="100vw"
        />
      </div>
      
      {/* Mobile Image */}
      <div className="block md:hidden w-full relative overflow-hidden">
        <Image
          src={mobileImageUrl || imageUrl}
          alt="Hero image mobile"
          className="w-full h-full object-cover object-center"
          loading="eager"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default HeroImageComponent;