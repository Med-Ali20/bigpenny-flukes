import React from "react";
import Image from "next/image";
import BookNowRectangular from "@/components/book-now-rectaungular";


const UpNext: React.FC<any> = ({ Content: data }) => {
    console.log(data)
  return (
    <section className='pt-[3rem] pb-[6rem] bg-primary text-secondary text-center mx-auto font-["Salford_Sans"]'>
      <Image
        src="/flukes/illustrations/separator.svg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(95%) sepia(8%) saturate(433%) hue-rotate(18deg) brightness(98%) contrast(93%)",
        }}
        alt="Flukes"
        width={341}
        height={22}
        className="mx-auto mb-[3rem] md:hidden"
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
        className="mx-auto mb-[3rem] hidden md:block"
      />
      <div className="flex uppercase mx-auto items-center justify-around text-center lg:w-[80%] w-[90%]">
        <h2 className="text-[4rem] lg:text-[6.4rem] font-bold max-w-[50%] leading-[3.2rem] lg:leading-[4.5rem] text-center">
          {data.text? data.text : 'your new old games hall'}
        </h2>
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
        className="mx-auto my-[3rem] md:hidden"
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
        className="mx-auto mt-[3rem] mb-[3rem] hidden md:block"
      />
      <div
        className={`w-[80%] mx-auto px-[1.2rem] bg-primary text-[#ebe9db] relative flex items-center justify-center`}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image.data.attributes.url}`}
          className="w-full mx-auto"
          alt=""
        //   fill
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
