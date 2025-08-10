import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Map from "@/components/google-maps";

const FindFlukes: React.FC<any> = ({ data }) => {
  return (
    <section className='font-["Salford_Sans"] overflow-x-hidden' id="find-us">
      <Marquee
        autoFill
        className='uppercase mt-14 min-[1400px]:mt-32 text-[25px] font-["Roc_Grotesk"] font-bold'
      >
        <span className="mr-2"></span> ● <span className="mr-2"></span> darts{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span> pool{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span> shuffle{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span> karaoke{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span>{" "}
        cocktails <span className="mr-2"></span> ●{" "}
        <span className="mr-2"></span> beers <span className="mr-2"></span> ●{" "}
        <span className="mr-2"></span> bites
      </Marquee>
      <div className="w-[325px] min-[1400px]:w-[84.33rem] outline-[3px] outline-[#D2451E] outline-offset-[-3px] mx-auto my-[40px] min-[1400px]:my-[60px] py-8 min-[1400px]:py-18 relative overflow-hidden">
        <span className="absolute bg-[#FBFBF8] border-[3px] border-[#D2451E] w-[18px] h-[18px] rounded-[50%] top-[-7px] left-[-7px]"></span>
        <span className="absolute bg-[#FBFBF8] border-[3px] border-[#D2451E] w-[18px] h-[18px] rounded-[50%] top-[-7px] right-[-7px]"></span>
        <span className="absolute bg-[#FBFBF8] border-[3px] border-[#D2451E] w-[18px] h-[18px] rounded-[50%] bottom-[-7px] right-[-7px]"></span>
        <span className="absolute bg-[#FBFBF8] border-[3px] border-[#D2451E] w-[18px] h-[18px] rounded-[50%] bottom-[-7px] left-[-5px]"></span>
        <h1 className="font-black uppercase mb-8 text-[70px] min-[1400px]:text-[180px] text-center leading-[51px] min-[1400px]:leading-[130px]">
          How to <br className="min-[1400px]:hidden" /> find flukes
        </h1>
        <div className="flex justify-center items-start gap-4 min-[1400px]:mt-15 min-[1400px]:items-center w-full">
          {/* Left Block */}
          <div className="bg-primary w-fit hidden min-[1400px]:block mr-8 mb-auto text-[25px] leading-[20px]">
            <Map width={500} height={500}></Map>
          </div>

          <div className="max-w-[450px] min-[1400px]:max-w-[550px] w-full gap-y-4 min-[1400px]:gap-x-6 px-6 grid grid-cols-2 items-start min-[1400px]:grid-cols-[1fr_2fr] ">
            <p className="font-black text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px] uppercase whitespace-nowrap">
              Our Address:
            </p>
            <address className="text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px]">
              {data.address}
            </address>

            <p className="font-black text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px] uppercase whitespace-nowrap">
              BY TUBE:
            </p>
            <p className="text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px]">
              {data.tube}
            </p>

            <p className="font-black text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px] uppercase whitespace-nowrap">
              BY BUS
            </p>
            <p className="text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px]">
              {data.bus}
            </p>
            <p className="font-black text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px] uppercase whitespace-nowrap">
              BY BIKE
            </p>
            <p className="text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px]">
              {data.bike}
            </p>
            <p className="font-black text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px] uppercase whitespace-nowrap">
              BY CAR
            </p>
            <p className="text-[25px] leading-[20px] min-[1400px]:text-[35px] min-[1400px]:leading-[35px]">
              {data.car}
            </p>

            <img
              src="/flukes/illustrations/separator-find-flukes.svg"
              alt="Flukes"
              width={687.85}
              height={41}
              className="mt-[30px] mb-[30px] min-[1400px]:mb-0 hidden min-[1400px]:block col-span-2 mx-auto"
            />
          </div>
        </div>

        {/* Mobile Separator */}
        <img
          src="/flukes/illustrations/separator.svg"
          alt="Flukes"
          width={291.97}
          height={22}
          className="my-[25px] min-[1400px]:hidden mx-auto"
        />
        <div className="bg-primary w-fit block min-[1400px]:hidden mx-auto">
          <Map width={250} height={250}></Map>
        </div>

        {/* <img src="/flukes/illustrations/separator.svg" alt='Flukes' width={291.97} height={22} className='mt-[25px] min-[1400px]:hidden ' /> */}
      </div>
      <Marquee
        autoFill
        className='uppercase mt-14 min-[1400px]:mt-32 text-[25px] font-["Roc_Grotesk"] font-bold mb-14'
      >
        <span className="mr-2"></span> ● <span className="mr-2"></span> darts{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span> pool{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span> shuffle{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span> karaoke{" "}
        <span className="mr-2"></span> ● <span className="mr-2"></span>{" "}
        cocktails <span className="mr-2"></span> ●{" "}
        <span className="mr-2"></span> beers <span className="mr-2"></span> ●{" "}
        <span className="mr-2"></span> bites
      </Marquee>
    </section>
  );
};

export default FindFlukes;
