// components/MobileHeader.tsx
"use client";

import { useState, useEffect } from "react";

export default function MobileHeader({ headerData }: { headerData: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation, sidebarLogo } = headerData;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  const logo = `${sidebarLogo.data.attributes.url}`;

  return (
    <>
      <div className="w-12 flex flex-col justify-between cursor-pointer ml-[25px] -mt-[5px]"
        onClick={() => setIsOpen(!isOpen)}
      
      >
        <span className="w-full h-2 bg-primary "></span>
        <span className="w-full h-2 bg-primary my-2"></span>
        <span className="w-full h-2 bg-primary "></span>  
      </div>

      <nav
        className={`fixed z-90 top-0 left-0 bottom-0 right-0 text-[#FBFBF8]  bg-primary font-bold text-4xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span className="text-white ml-2 mt-4 cursor-pointer" onClick={() => setIsOpen(false)}>
          &larr;
        </span>
        <a href="/flukes/" className="mx-auto mt-30 block w-fit">
          <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo}`} alt="Logoo" width={200} height={60} />
        </a>

        <ul className="w-full flex flex-col items-center justify-center py-18 font-['Salford_Sans'] text-[45px]">
          <li className="my-1">
            <a href="/flukes/book-now">Book Now</a>
          </li>
          {navigation.map((el: any) => (
            <li className="my-1" key={el.id}>
              <a href={el.url} onClick={() => setIsOpen(false)}>
                {el.name}
              </a>
            </li>
          ))}
          {/* <li className="my-1">
            <a href="/flukes/#find-us" onClick={() => setIsOpen(false)}>
              Find us
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
