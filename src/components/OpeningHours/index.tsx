import BookNowElliptic from "@/components/book-now-elliptic";
import Image from "next/image";
import React, { Fragment } from "react";

const OpeningHours: React.FC<any> = ({ Content: data }) => {
  return (
    <>
      <section className="bg-primary -mt-12 py-15 md:py-4">
        <Image
          src="/flukes/illustrations/separator.svg"
          alt="Flukes"
          width={341}
          height={22}
          className="mx-auto lg:mt-[15px] mb-[35px] md:hidden"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
          }}
        />
        <Image
          src="/flukes/illustrations/separator-desktop.svg"
          alt="Flukes"
          width={1518}
          height={43.57}
          className="mx-auto mt-[45px] mb-[30px] hidden md:block"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
          }}
        />
        <div className="relative font-['Salford_Sans'] bg-primary text-secondary text-[40px] leading-[1] flex flex-col pb-5 lg:pt-10 lg:pb-18 text-center min-[1400px]:flex-row justify-center items-center bg-no-repeat bg-[length:1000px] lg:bg-cover">
          <h1 className="uppercase font-black text-[70px] leading-[51px] min-[1400px]:text-[120px] min-[1400px]:leading-[80px] z-50 min-[1400px]:mr-8 min-[1400px]:ml-auto mt-0 mt-[10px]">
            Opening <br /> Hours
          </h1>

          <div className="grid grid-cols-[auto_1fr] mx-auto min-[1400px]:ml-0 min-[1400px]:mr-auto text-left text-[30px] leading-[25px] items-start min-[1400px]:items-center mr-auto my-[30px] min-[1400px]:mt-10 whitespace-nowrap leading-4 min-[1400px]:text-min-[1400px] z-20">
            {data?.hours?.map((el: any) => {
              return (
                <Fragment key={el.id}>
                  <p className="w-min ml-8 mr-4 mt-1">
                    <span className="min-[1400px]:text-[30px] min-[1400px]:leading-[25px] font-black uppercase">
                      {el.day?.includes("&") ? (
                        <>
                          {el.day.split("&")[0]} & <br /> {el.day.split("&")[1]}
                        </>
                      ) : (
                        el.day
                      )}
                      :
                    </span>
                  </p>
                  <p className="my-auto">
                    <span className="min-[1400px]:text-[30px] min-[1400px]:leading-[25px]">
                      {el.hours}
                    </span>
                  </p>
                </Fragment>
              );
            })}
          </div>
        </div>
        <Image
          src="/flukes/illustrations/separator.svg"
          alt="Flukes"
          width={341}
          height={22}
          className="mx-auto lg:mt-[15px] mb-[35px] md:hidden"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
          }}
        />
        <Image
          src="/flukes/illustrations/separator-desktop.svg"
          alt="Flukes"
          width={1518}
          height={43.57}
          className="mx-auto pb-18 hidden md:block"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
          }}
        />
      </section>
    </>
  );
};

export default OpeningHours;