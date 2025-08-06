'use client'

import React from "react";
import Image from "next/image";
import BookNowRectangular from "../../components/book-now-rectaungular";

const GetLucky:React.FC<any> = ({ data }) => {
  const insertLineBreaks = (
    text: string,
    maxChars: number = 15
  ): (any)[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      if ((currentLine + " " + word).trim().length <= maxChars) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);

    // Convert lines into an array of JSX elements and <br />
    return lines
      .flatMap((line, i) => [
        line,
        i < lines.length - 1 ? <br key={i} /> : null,
      ])
      .filter(Boolean);
  };

  return (
    <section className='font-["Salford_Sans"] pt-[25px] lg:pt-[15px] 2xl:pt-[25px] lg:flex px-4 lg:flex-col lg:items-center'>
      <div className="lg:flex lg:justify-center lg:pt-[30px] 2xl:pt-[51px]">
        <div className="lg:mt-4">
          <h1 className="font-black text-[70px] text-center leading-13 uppercase font-salford lg:text-[100px] lg:leading-[70px] xl:text-[130px] xl:leading-[90px] xl:text-[130px] xl:leading-[90px] 2xl:text-[162px] 2xl:leading-[108px] mb-2">
            {insertLineBreaks(data.heroText, 10)}
          </h1>
          <div className="relative w-[317px] h-[150px] lg:w-[300px] lg:h-[140px] xl:w-[400px] xl:h-[190px] mx-auto xl:mt-[18px] lg:mt-[30px] 2xl:hidden">
            <Image
              src={`${data.logo.data.attributes.url}`}
              alt="Flukes"
              className=""
            />
          </div>
          <Image
            src={`${data.logo.data.attributes.url}`}
            alt="Flukes"
            width={556}
            height={263.09}
            className="hidden 2xl:block mx-auto my-[40px] mb-[82px]"
          />
          <BookNowRectangular className="lg:hidden text-[45px] mx-auto my-[31px] !text-[45px]" />
          {/* <h3 className='font-black text-[55px] text-center leading-10 uppercase font-salford lg:text-[85px] lg:leading-[60px] xl:text-[130px] xl:leading-[90px] xl:text-[130px] xl:leading-[90px] 2xl:text-[162px] 2xl:leading-[108px] lg:hidden text-["#D2451E"] my-8'>opening <br /> 8 may</h3> */}
          <div className='hidden mx-auto font-["Roc_Grotesk"] lg:grid grid-cols-3 auto-rows-fr lg:mt-[-40px] xl:mt-[-100px] 2xl:mt-[-180px] gap-y-0'>
            <p className="col-start-1 col-end-2 row-start-1 row-end-2 text-center font-bold xl:text-[22px] xl:leading-[27px] 2xl:text-[30px] uppercase mt-[30px] mr-12 2xl:leading-[36px] -mb-9 2xl:-mb-12 xl:block lg:hidden">
              Darts <br /> Shuffle <br /> Karaoke <br /> Pool
            </p>
            <p className="col-start-3 col-end-4 row-start-1 row-end-2 text-center font-bold xl:text-[22px] xl:leading-[27px] 2xl:text-[30px] uppercase mt-[30px] ml-8 2xl:leading-[36px] -mb-9 2xl:-mb-12 xl:block lg:hidden">
              Cocktails <br /> Beer <br /> Bites <br /> & More
            </p>
            <p className='col-start-1 col-end-2 row-start-2 text-center my-auto ml-auto mr-4 before:block before:content-[""] before:bg-primary lg:before:w-[150px] 2xl:before:w-[200px] before:h-[2px] lg:hidden xl:flex items-center before:mr-2'>
              LDN
            </p>
            <p className='col-start-3 col-end-4 row-start-2 text-center my-auto mr-auto ml-[14px] after:block after:content-[""] after:bg-primary lg:after:w-[150px] 2xl:after:w-[200px] after:h-[2px] lg:hidden xl:flex items-center after:ml-2'>
              E17
            </p>
            <BookNowRectangular className="col-start-2 col-end-3 row-start-2 row-end-3 xl-w-[200px] xl:h-[70px] 2xl:w-full 2xl:h-[86.53px] !text-[50px] !2xl:text-[65px] lg:my-auto" />
          </div>
        </div>
        <div
          className="bg-primary w-[351px] h-[383px] flex items-center justify-center mx-auto relative 2xl:hidden 
                lg:w-[450px] lg:h-[490px] xl:w-[550px] xl:h-[600px]"
        >
          <div
            className="relative w-[314.17px] h-[271.02px] 
                    lg:w-[400px] lg:h-[345px] xl:w-[490px] xl:h-[420px]"
          >
            <Image
              src={`${data.image.data.attributes.url}`}
              alt="Flukes"
              fill
              className="mx-auto my-auto"
            />
          </div>
          <span className="absolute bg-secondary w-[12px] h-[12px] rounded-[50%] top-[-5px] left-[-5px]"></span>
          <span className="absolute bg-secondary w-[12px] h-[12px] rounded-[50%] top-[-5px] right-[-5px]"></span>
          <span className="absolute bg-secondary w-[12px] h-[12px] rounded-[50%] bottom-[-5px] right-[-5px]"></span>
          <span className="absolute bg-secondary w-[12px] h-[12px] rounded-[50%] bottom-[-5px] left-[-5px]"></span>
        </div>

        <div className="hidden 2xl:block bg-primary w-[713px] h-[800px] flex items-center justify-center relative ml-[75px]">
          <Image
            src={`${data.image.data.attributes.url}`}
            alt="Flukes"
            width={637}
            height={550}
            className="mx-auto my-32"
          />
          <span className="absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] top-[-5px] left-[-5px]"></span>
          <span className="absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] top-[-5px] right-[-5px]"></span>
          <span className="absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] bottom-[-5px] right-[-5px]"></span>
          <span className="absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] bottom-[-5px] left-[-5px]"></span>
        </div>
        <h2 className='text-center mt-[25px] mb-[35px] font-bold uppercase leading-[25px] text-2xl font-["Roc_Grotesk"] lg:hidden'>
          Darts • Shuffle • <br />
          Karaoke • Pool • <br />
          cocktails • beers • bites
        </h2>
      </div>
      {/* <h3 className='font-black text-[70px] text-center leading-13 uppercase font-salford lg:text-[80px] lg:leading-[60px] xl:text-[100px] xl:leading-[75px] 2xl:text-[110px] 2xl:leading-[90px] hidden lg:block text-["#D2451E"] my-9'>opening 8 may</h3> */}
      {/* <Image src="/flukes/illustrations/separator.svg" alt='Flukes' width={341} height={22} className='mx-auto mt-[15px] lg:hidden' />
            <Image src="/flukes/illustrations/separator-desktop.svg" alt='Flukes' width={1518} height={43.57} className='mx-auto mt-[105px] mb-[30px] hidden lg:block' /> */}
    </section>
  );
};

export default GetLucky;
