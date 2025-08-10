import React from "react";
import Image from "next/image";

const Testimonial: React.FC<any> = ({ data }) => {
  return (
    <>
      <img
        src="/flukes/illustrations/separator.svg"
        alt="Flukes"
        width={341}
        height={22}
        className="mx-auto mb-[15px] mt-[75px] lg:hidden"
      />
      <img
        src="/flukes/illustrations/separator-desktop.svg"
        alt="Flukes"
        width={1518}
        height={43.57}
        className="mx-auto mb-[35px] mt-[30px] hidden lg:block"
      />
      <section className='font-["Salford_Sans"] flex flex-col items-center pt-[65px] px-4 lg:py-24'>
        <img
          src={`${data.image.data.attributes.url}`}
          alt="cake"
          width={302}
          height={296}
          className="mb-4"
        />
        <h1 className="font-black leading-[50px] text-[65px] text-center py-7 uppercase font-salford  min-[1400px]:text-[220px] min-[1400px]:leading-[150px]  lg:px-[100px] ">
          {data.testimonial}
        </h1>
        <p className="lg:mt-8 mt-4 text-[40px] leading-[32px] lg:text-[65px] mb-[35px]">
          {data.name}
        </p>
        <img
          src="/flukes/illustrations/separator.svg"
          alt="Flukes"
          width={341}
          height={22}
          className="mx-auto my-[15px] lg:hidden"
        />
        <img
          src="/flukes/illustrations/separator-desktop.svg"
          alt="Flukes"
          width={1518}
          height={43.57}
          className="mx-auto mt-[105px] mb-[30px] hidden lg:block"
        />
      </section>
    </>
  );
};

export default Testimonial;
