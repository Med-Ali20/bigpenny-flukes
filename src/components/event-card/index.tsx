"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Undo } from "lucide-react";
import BookNowRectangular from "../book-now-rectaungular";

interface Props {
  image: string;
  title: string;
  description: string;
  players: string;
  price: string;
  space: string;
  backsideTitle: string;
  backsideDescription: string;
  rotation: number;
  widthMobile: number;
  widthDesktop: number;
  heightMobile: number;
  heightDesktop: number;
  className?: string;
  backsideClassName?: string;
  tabToFlip?: boolean;
}

const EventCard: React.FC<Props> = ({
  image,
  title,
  description,
  players,
  price,
  space,
  backsideTitle,
  backsideDescription,
  rotation,
  className,
  backsideClassName,
  tabToFlip,
  widthMobile,
  widthDesktop,
  heightMobile,
  heightDesktop,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState("1");
  console.log(image);

  return (
    <div
      className={`group [perspective:1000px] z-${cardIndex} bg-transparent w-fit mx-auto relative ${className}`}
      onClick={() => setIsFlipped((prev) => !prev)}
      style={{ transform: `rotate(${-rotation}deg)` }}
      onMouseEnter={() => {
        setTimeout(() => {
          setCardIndex("50");
        }, 150);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setCardIndex("1");
        }, 150);
      }}
    >
      {tabToFlip && (
        <span className="lg:hidden absolute -top-10 left-5 flex items-start ">
          <Undo className="rotate-270 opacity-70" />
          <p className="text-[24px] -rotate-14 -mt-10 opacity-90 -ml-1">
            Tap to flip
          </p>
        </span>
      )}
      <div
        className={`relative w-[327.72px] h-[486.81px] will-change-transform  transition-transform duration-500 [transform-style:preserve-3d] [transform-style: preserve-3d] group-hover:[transform:rotateY(180deg)] min-[1400px]:w-[365.28px] min-[1400px]:h-[566.31px] ${
          isFlipped ? "[transform:rotateY(179.99deg)]" : ""
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`bg-[#FBFBF8] absolute w-full h-full border-[3px] mx-auto rounded-2xl p-[12px] flex flex-col inset-0 backface-hidden min-[1400px]:p-[20px]`}
        >
          <div className="flex items-center justify-center w-[295.72px] h-[223.95px] mx-auto relative z-1 min-[1400px]:w-[322px] min-[1400px]:h-[259px] overflow-hidden">
            {/* Replace background image with Next.js Image */}
            <Image
              src={image}
              alt="Event Image"
              fill
              className="object-cover"
              sizes="(min-width: 1400px) 322px, 295.72px"
            />
            
            {/* Logo overlay */}
            <Image
              src="/illustrations/logo.svg"
              alt="Flukes"
              width={107.22}
              height={41.51}
              className="absolute -bottom-[27px] left-[100px] z-50"
            />
            
            {/* Corner decorations */}
            <span className="absolute bg-[#FBFBF8] w-[18px] h-[18px] rounded-[50%] top-[-7px] left-[-7px] z-10"></span>
            <span className="absolute bg-[#FBFBF8] w-[18px] h-[18px] rounded-[50%] top-[-7px] right-[-7px] z-10"></span>
            <span className="absolute bg-[#FBFBF8] w-[18px] h-[18px] rounded-[50%] bottom-[-7px] right-[-7px] z-10"></span>
            <span className="absolute bg-[#FBFBF8] w-[18px] h-[18px] rounded-[50%] bottom-[-7px] left-[-5px] z-10"></span>
          </div>
          <h3 className="mt-8 text-left font-black text-[40px] leading-[35px] mb-2 uppercase">
            {title}
          </h3>
          <p className="text-left text-[25px] min-[1400px]:text-[30px] leading-[25px] min-[1400px]:leading-[30px]">
            {description}
          </p>
          <p className="text-left text-[25px] min-[1400px]:text-[30px] leading-[25px] min-[1400px]:leading-[30px] mt-auto min-[1400px]:text-xl">
            <span className="font-black text-left uppercase mr-2">
              players:{" "}
            </span>{" "}
            <span>{players}</span>
          </p>
          <p className="text-left text-[25px] min-[1400px]:text-[30px] leading-[25px] min-[1400px]:leading-[30px] min-[1400px]:text-xl">
            <span className="font-black text-left uppercase mr-2">price: </span>{" "}
            <span>{price}</span>
          </p>
          <p className="text-left text-[25px] min-[1400px]:text-[30px] leading-[25px] min-[1400px]:leading-[30px] min-[1400px]:text-xl mb-3">
            <span className="font-black text-left uppercase mr-2">space: </span>{" "}
            <span>{space}</span>
          </p>
        </div>
        <div
          className={`bg-[#FBFBF8] w-full h-full p-[16px] border-[3px] mx-auto rounded-2xl p-[12px] flex flex-col -rotate-[2.17deg] absolute inset-0 h-full w-full backface-hidden rotate-y-180 ${backsideClassName}`}
        >
          <h3 className="text-left font-black text-[40px] lg:text-[40px] uppercase">
            {backsideTitle}
          </h3>
          <p className="text-left text-[25px] leading-[30px]">
            {backsideDescription}
          </p>
          <BookNowRectangular
            className="mr-auto text-left mt-7 !text-[25px] !w-[185.08px] !h-[53.58px] leading-[25px]"
            text="book now"
            spanColor="#FBFBF8"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;