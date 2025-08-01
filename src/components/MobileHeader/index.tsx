// components/MobileHeader.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MobileHeader({headerData}: {headerData: any}) {
  const [isOpen, setIsOpen] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const {navigation, sidebarLogo} = headerData

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setIsOpen(false);
    }
  };

  const logo = `${sidebarLogo.data.attributes.url}`

  return (
    <>
      <img
        src="/flukes/illustrations/burger-icon.svg"
        alt="Navigation"
        width={29}
        height={18}
        className="mr-[25px] -mt-[5px] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav
        className={`fixed z-90 top-0 left-0 bottom-0 right-0 text-[#FBFBF8]  bg-[#D2451E] font-bold text-4xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <span className="text-white ml-2 mt-4" onClick={() => setIsOpen(false)}>
          &larr;
        </span>
        <a href="/flukes/" className="mx-auto mt-30 block w-fit">
          <img src={logo} alt="Logo" width={200} height={60} />
        </a>

        <ul className="w-full flex flex-col items-center justify-center py-18 font-['Salford_Sans'] text-[45px]">
          <li className="my-1">
            <a href="/flukes/book-now">Book Now</a>
          </li>
          {navigation.map((el: any) => 
            <li className="my-1" key={el.id}>
              <a href={el.url} onClick={() => setIsOpen(false)}>
                {el.name}
              </a>
          </li>
          )}
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
