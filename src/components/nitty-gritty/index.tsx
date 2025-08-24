"use client";

import React, { useState, useEffect } from "react";
import EventCard from "@/components/event-card";
import BookNowRectangular from "@/components/book-now-rectaungular";

const NittyGritty: React.FC<any> = ({ Content: data }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateCircles = () => {
      const circleWidth = 80; // 5rem = 80px (assuming 1rem = 16px)
      const screenWidth = window.innerWidth;
      const numberOfCircles = Math.ceil(screenWidth / circleWidth) + 20; // +20 for safety margin

      const newCircles = [];
      for (let i = 0; i < numberOfCircles; i++) {
        newCircles.push(i);
      }
      //@ts-ignore
      setCircles(newCircles);
    };

    generateCircles();

    // Regenerate on window resize
    window.addEventListener("resize", generateCircles);
    return () => window.removeEventListener("resize", generateCircles);
  }, []);

  return (
    <section
      className="-mt-[4rem] pt-[7rem] text-center font-['Salford_Sans'] overflow-x-hidden relative z-[20]"
      id="about"
    >
      {circles.map((index) => (
        <span
          key={index}
          className="absolute top-5 rounded-full bg-secondary w-[5rem] h-[5rem]"
          style={{ left: `${index * 5}rem` }}
        />
      ))}
      
      <h1 className="text-[40px] font-black leading-[5rem] lg:leading-[2rem] uppercase lg:text-[70px] 2xl:text-[80px]">
        {data?.title}
      </h1>
      
      <p className="mt-[2rem] md:mt-[1rem] lg:mt-[40px] mb-[75px] md:mb-[100px] lg:mb-[172px] 2xl:mb-[200px] mx-auto text-[18px] leading-[20px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] max-w-[75%] font-['Roc_Grotesk']">
        {data?.description}
      </p>

      {/* Dynamic Card Display */}
      <div className="w-full lg:flex lg:justify-center items-center relative gap-4">
        {data?.card?.map((cardData: any, index: number) => (
          <EventCard
            key={cardData.id}
            className={`bg-secondary ${
              index === 0 
                ? "min-[1000px]:-mr-6 min-[1400px]:-mr-5 lg:-mt-18 lg:ml-auto"
                : index === 1 
                ? "min-[1000px]:-ml-6 min-[1400px]:-ml-5 lg:mt-18 lg:mr-auto"
                : ""
            }`}
            rotation={index % 2 === 0 ? 2.17 : -2.17} // Alternate rotation
            image={`${process.env.NEXT_PUBLIC_BASE_URL}${cardData.image?.data?.attributes?.url}`}
            title={cardData.title}
            description={cardData.frontsideDescription}
            players={cardData.players}
            price={cardData.price}
            space={cardData.space}
            backsideTitle={cardData.title}
            backsideDescription={cardData.backsideDescription}
            backsideClassName="relative z-90"
            widthMobile={217.04}
            heightMobile={161.7}
            widthDesktop={260}
            heightDesktop={190}
            tabToFlip={true}
          />
        ))}
      </div>

      <BookNowRectangular
        className="w-[160px] h-[55px] text-[20px] lg:w-[286.85px] lg:h-[86.53px] lg:text-[40px] mx-auto mt-20 lg:mt-30"
        text="book your game"
      />

      <div className="bg-primary relative h-[5rem] mt-15">
        {circles.map((index) => (
          <span
            key={index}
            className="absolute -top-10 rounded-full bg-secondary w-[5rem] h-[5rem] z-[9999]"
            style={{ left: `${index * 5}rem` }}
          />
        ))}
      </div>
    </section>
  );
};

export default NittyGritty;