import React from "react";

const HeroImage: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div>
      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.data.attributes.url}`} alt="hero-image" className="w-full" />
    </div>
  );
};

export default HeroImage;
