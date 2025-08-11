"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper's type
import "swiper/css";
import { useEffect, useState } from "react";
import { DraggableCards, DraggableCard } from "@/types";
import Image from "next/image";



const DraggableCardsComponent: React.FC<DraggableCards> = ({ cards }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null); // Explicit type for the state


  useEffect(() => {
    if (swiperInstance) {
      const swiperContainer = document.querySelector(".swiper-container");
      if (swiperContainer) {
        const handleTouchStart = () =>
          swiperContainer.classList.add("swiper-grabbing");
        const handleTouchEnd = () =>
          swiperContainer.classList.remove("swiper-grabbing");

        swiperInstance.on("touchStart", handleTouchStart);
        swiperInstance.on("touchEnd", handleTouchEnd);

        return () => {
          swiperInstance.off("touchStart", handleTouchStart);
          swiperInstance.off("touchEnd", handleTouchEnd);
        };
      }
    }
  }, [swiperInstance]);

  const slides = cards.map((card: DraggableCard, i: number) => {
    return (
      <SwiperSlide key={i} className="swiper-slide swiper-slide-small-screen">
        <a
          href={card.link}
          target="_blank"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${card.image.data.attributes.url}`}
            alt="Card 1"
            className="w-full object-cover max-h-[300px] cursor-grab"
          />
          <div 
          className="font-black font-['Salford_Sans'] text-[30px] lg:text-[40px] uppercase lg:leading-[32px] leading-[25px] my-[5px]">
          {card.title}</div>
        </a>
      </SwiperSlide>
    )
  })

  return (
    <section className="draggable-cards px-4">
      <Swiper
        className="swiper-container "
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          300: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Set the Swiper instance
      >
        {slides}
      </Swiper>
    </section>
  );
};

export default DraggableCardsComponent;
