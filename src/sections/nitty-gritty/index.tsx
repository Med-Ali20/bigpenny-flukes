"use client";

import React, { useState, useEffect } from "react";
import EventCard from "@/components/event-card";
import BookNowRectangular from "@/components/book-now-rectaungular";

const NittyGritty: React.FC<any> = ({ data }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateCircles = () => {
      const circleWidth = 80; // 5rem = 80px (assuming 1rem = 16px)
      const screenWidth = window.innerWidth;
      const numberOfCircles = Math.ceil(screenWidth / circleWidth) + 20; // +1 for safety margin

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
        {data.title}
      </h1>
      <p className="mt-[2rem] md:mt-[1rem] lg:mt-[40px] mb-[75px] md:mb-[100px] lg:mb-[172px] 2xl:mb-[200px] mx-auto text-[16px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] max-w-[75%] font-['Roc_Grotesk']">
        {data.description}
      </p>
      <div className="w-full lg:flex lg:justify-center items-center relative">
        <EventCard
          className="bg-secondary min-[1000px]:-mr-6 min-[1400px]:-mr-5 lg:-mt-18 lg:ml-auto"
          rotation={2.17}
          image={`${process.env.NEXT_PUBLIC_BASE_URL}${data.card[0].image.data.attributes.url}`}
          title={data.card[0].title}
          description={data.card[0].frontsideDescription}
          players={data.card[0].players}
          price={data.card[0].price}
          space={data.card[0].space}
          backsideTitle={data.card[0].title}
          backsideDescription={data.card[0].backsideDescription}
          backsideClassName="relative z-90"
          widthMobile={217.04}
          heightMobile={161.7}
          widthDesktop={260}
          heightDesktop={190}
          tabToFlip={true}
        />
        <EventCard
          className="bg-secondary lg:-mr-10 lg:-mb-18 lg:ml-0"
          rotation={-1.78}
          image={`${process.env.NEXT_PUBLIC_BASE_URL}${data.card[1].image.data.attributes.url}`}
          title={data.card[1].title}
          description={data.card[1].frontsideDescription}
          players={data.card[1].players}
          price={data.card[1].price}
          space={data.card[1].space}
          backsideTitle={data.card[1].title}
          backsideDescription={data.card[1].backsideDescription}
          backsideClassName="relative z-90"
          widthDesktop={205}
          heightDesktop={197}
          widthMobile={190}
          heightMobile={178}
        />
        <EventCard
          className="bg-secondary lg:-mt-24 lg:-ml-2 lg:mr-0"
          rotation={1.29}
          image={`${process.env.NEXT_PUBLIC_BASE_URL}${data.card[2].image.data.attributes.url}`}
          title={data.card[2].title}
          description={data.card[2].frontsideDescription}
          players={data.card[2].players}
          price={data.card[2].price}
          space={data.card[2].space}
          backsideTitle={data.card[2].title}
          backsideDescription={data.card[2].backsideDescription}
          backsideClassName="relative z-90"
          widthDesktop={220}
          heightDesktop={134}
          widthMobile={200.15}
          heightMobile={90.21}
        />
        <EventCard
          className="bg-secondary min-[1000px]:-ml-5 min-[1400px]:-ml-5 lg:-mb-18 lg:mr-auto"
          rotation={-1.53}
          image={`${process.env.NEXT_PUBLIC_BASE_URL}${data.card[3].image.data.attributes.url}`}
          title={data.card[3].title}
          description={data.card[3].frontsideDescription}
          players={data.card[3].players}
          price={data.card[3].price}
          space={data.card[3].space}
          backsideTitle={data.card[3].title}
          backsideDescription={data.card[3].backsideDescription}
          backsideClassName="relative z-90"
          widthDesktop={301}
          heightDesktop={182}
          widthMobile={240.15}
          heightMobile={145.21}
        />
      </div>
      <BookNowRectangular
        className="!w-[286.85px] !h-[86.53px] !text-[40px] mx-auto mt-20 lg:mt-30"
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
