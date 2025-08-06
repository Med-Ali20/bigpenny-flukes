import React from "react";
import Image from "next/image";
import BookNowRectangular from "@/components/book-now-rectaungular";


const UpNext: React.FC<any> = ({ data }) => {
  return (
    <section className='py-[60px] bg-primary text-secondary text-center mx-auto pb-[7rem] font-["Salford_Sans"]'>
      <Image
        src="/flukes/illustrations/separator.svg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
        }}
        alt="Flukes"
        width={341}
        height={22}
        className="mx-auto mb-[3rem] lg:hidden"
      />
      <Image
        src="/flukes/illustrations/separator-desktop.svg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
        }}
        alt="Flukes"
        width={1518}
        height={43.57}
        className="mx-auto mb-[3rem] hidden lg:block"
      />
      <div className="flex uppercase mx-auto items-center justify-around text-center lg:w-[80%] w-[90%]">
        <div className="text-[1.4rem] lg:text-[2.4rem] font-bold leading-[1.4rem] mt-2 lg:mt-0 lg:leading-[2.2rem] font-['Roc_Grotesk']">
          <p>darts</p>
          <p>shuffle</p>
          <p>karaoke</p>
          <p>pool</p>
        </div>
        <h2 className="text-[4rem] lg:text-[6.4rem] font-bold leading-[3.2rem] lg:leading-[5rem] text-center">
          your new old <br /> games hall
        </h2>
        <div className="text-[1.4rem] lg:text-[2.4rem] font-bold leading-[1.4rem] mt-2 lg:mt-0 lg:leading-[2.2rem] font-['Roc_Grotesk']">
          <p>cocktails</p>
          <p>beers</p>
          <p>bites</p>
          <p>good times</p>
        </div>
      </div>
      <div className="mt-[2rem] lg:mt-[3rem] w-fit pr-4 lg:pr-11 mx-auto">
        <BookNowRectangular
          className="bg-secondary text-[2.5rem] text-primary w-fit "
          text="book your game"
        />
      </div>
      <Image
        src="/flukes/illustrations/separator.svg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
        }}
        alt="Flukes"
        width={341}
        height={22}
        className="mx-auto my-[3rem] lg:hidden"
      />
      <Image
        src="/flukes/illustrations/separator-desktop.svg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
        }}
        alt="Flukes"
        width={1518}
        height={43.57}
        className="mx-auto mt-[3rem] mb-[3rem] hidden lg:block"
      />
      <div
        className={`w-[80%] mx-auto px-[1.2rem] bg-primary text-[#ebe9db] relative flex items-center justify-center`}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image.data.attributes.url}`}
          className="w-full mx-auto"
          alt=""
        />
        <span
          className={`absolute bg-primary w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%] top-[-15px] left-[0px]`}
        ></span>
        <span
          className={`absolute bg-primary w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%] top-[-15px] right-[0px]`}
        ></span>
        <span
          className={`absolute bg-primary w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%] bottom-[-15px] right-[0px]`}
        ></span>
        <span
          className={`absolute bg-primary w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%] bottom-[-15px] left-[0px]`}
        ></span>
      </div>
    </section>
  );
};

export default UpNext;
