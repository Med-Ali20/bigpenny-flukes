import React from "react";
import Image from "next/image";

const HeroImage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div>
      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.data.attributes.url}`} alt="hero-image" className="w-full" />
    </div>
  );
};

export default HeroImage;
