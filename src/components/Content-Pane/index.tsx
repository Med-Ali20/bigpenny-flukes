"use client";

import React from "react";
import { ContentPane } from "@/types";
import BookNowRectangular from "@/components/book-now-rectaungular";

const ContentPaneComponent: React.FC<ContentPane> = ({
  title,
  content,
  image,
  mobileImage,
  cta,
}) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${image?.data?.attributes?.url}`;
  const imageName = image?.data?.attributes?.name || "Content image";
  const mobileImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${mobileImage?.data?.attributes?.url}`;
  const mobileImageName =
    mobileImage?.data?.attributes?.name || "Content image mobile";

  return (
    <section className="section-4">
      {/* Desktop Image */}
      <div className="hidden lg:block w-full h-[60vh] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={imageName}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          sizes="100vw"
        />
      </div>

      {/* Mobile Image */}
      <div className="block lg:hidden w-full h-[35vh] relative overflow-hidden">
        <img
          src={mobileImageUrl || imageUrl}
          alt={mobileImageName}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          sizes="100vw"
        />
      </div>

      <div className="">
        <div className="flex flex-col items-center">
          <h1 
          className="font-black font-['Salford_Sans'] text-[35px] text-center lg:text-[60px] text-center uppercase lg:leading-[50px] leading-[30px] lg:mb-8 lg:mt-12 mt-8">
            {title}
          </h1>
          <div
            className="font-['Roc_Grotesk'] text-[16px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] mx-auto text-center mb-6 lg:mb-0 w-[80%] mt-8 lg:mt-0 bg-secondary font-semibold"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="">
            <BookNowRectangular
              className={`bg-primary text-secondary text-[2rem] mt-8 mb-4 w-fit mx-auto h-auto leading-0 py-[2rem] px-[2rem]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPaneComponent;
