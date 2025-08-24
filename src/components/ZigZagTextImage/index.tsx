"use client";

import React, { Fragment } from "react";
//@ts-ignore
import { decode } from "he";
import Image from "next/image";
import BookNowElliptic from "@/components/book-now-elliptic";
import BookNowRectangular from "@/components/book-now-rectaungular";

const Parched: React.FC<any> = ({ Content: data }) => {
  const { ZigZagContent } = data;

  return (
    <section className="font-[var(--font-salford-sans)] bg-primary text-secondary flex flex-col -mt-9 justify-center pb-[4.5rem]">
      {/* Main Title */}
      <div className="px-8 font-['Salford_Sans'] w-full">
        <div className="px-8">
          <h3 className="font-black text-left mx-auto w-fit font-[var(--font-salford-sans)] text-center text-[45px] lg:text-[90px] uppercase lg:leading-[65px] leading-[32px] my-[45px]">
            {data?.parchedTitle === "parched? peckish?" ? (
              <Fragment>
                parched? <br /> peckish?
              </Fragment>
            ) : (
              data?.parchedTitle
            )}
          </h3>
        </div>
      </div>

      {/* Dynamic ZigZag Sections */}
      {ZigZagContent?.map((item: any, index: number) => {
        const isEven = index % 2 === 0;
        const isImageLeft = !isEven; // First section (index 0) has image on right, second has image on left, etc.

        return (
          <div key={item.id} className="px-8 font-['Salford_Sans'] w-full mb-16">
            <div className="px-8">
              {/* Section Header */}
              {item.Header && (
                <h4 className="font-black text-center text-[32px] lg:text-[60px] uppercase lg:leading-[50px] leading-[28px] mb-8">
                  {item.Header}
                </h4>
              )}
              
              {/* Content Layout */}
              <div className={`flex flex-col-reverse lg:flex-row items-center justify-around w-full mt-12 lg:max-w-[1200px] lg:mx-auto ${
                isImageLeft ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div
                  dangerouslySetInnerHTML={{ __html: item.Text }}
                  className="font-['Roc_Grotesk'] text-[18px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] lg:max-w-[428px] text-center w-[80%] mt-8 lg:mt-0 text-secondary mb-8"
                />
                
                {/* Image with Decorative Circles */}
                <div className="relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.Image?.data?.attributes?.url}`}
                    width={450}
                    height={450}
                    className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] object-cover"
                    alt={item.Header || ""}
                  />
                  {/* Decorative circles */}
                  <span className="absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-full top-[-5px] left-[-5px] md:top-[-30px] md:left-[-30px]"></span>
                  <span className="absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-full top-[-5px] right-[-5px] md:top-[-30px] md:right-[-30px]"></span>
                  <span className="absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-full bottom-[-5px] right-[-5px] md:bottom-[-30px] md:right-[-30px]"></span>
                  <span className="absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-full bottom-[-5px] left-[-5px] md:bottom-[-30px] md:left-[-30px]"></span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Parched;