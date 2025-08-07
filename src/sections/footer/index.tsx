"use client";

import React, { useState, useEffect } from "react";
import BookNowRectangular from "@/components/book-now-rectaungular";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  data: any;
};

const Footer: React.FC<Props> = ({ data }) => {
  const [circles, setCircles] = useState([]);
  const path = usePathname();

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
    <footer
      className={`${
        path === "/"
          ? "lg:-mt-14"
          : "mt-6"
      }bg-secondary text-primary font-salford flex flex-col text-center justify-center items-center  relative pb-[60px] lg:pb-8 pt-[40px] lg:pt-[80px] text-[#FBFBF8] font-['Salford_Sans'] relative`}
    >
      {circles.map((index) => (
        <span
          key={index}
          className={`bg-secondary absolute -top-10 rounded-full w-[5rem] h-[5rem]`}
          style={{ left: `${index * 5}rem` }}
        />
      ))}
      <h2 className="font-black uppercase text-[80px] leading-[70px] mb-[15px] lg:mb-6 lg:text-[150px] lg:leading-36">
        <span className="">
          <Image
            src="/flukes/illustrations/logo-horizontal.png"
            className="mx-auto mt-6 lg:hidden"
            alt="trophy"
            width={332}
            height={64}
          />
          <Image
            src="/flukes/illustrations/logo-horizontal.png"
            className="hidden lg:block"
            alt="Flukes_Logo"
            width={400}
            height={120}
          />
          <BookNowRectangular
            className={`bg-primary text-secondary text-[2rem] mt-8 mb-4 w-fit mx-auto h-auto leading-0 py-[2rem] px-[2rem]`}
          />
        </span>
      </h2>
      <div className="lg:flex lg:items-center text-[25px] leading-[20px] lg:justify-center lg:w-fit mx-auto">
        <div className="uppercase mx-auto mt-4 lg:my-0 lg:mr-auto">
          {data.links.map((link: any) => {
            return (
              <a
                href={link.url}
                className="mx-[5px]"
                target="_blank"
                key={link.id}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
