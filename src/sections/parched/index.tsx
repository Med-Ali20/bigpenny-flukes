"use client";

import React, { Fragment } from "react";
//@ts-ignore
import { decode } from "he";
import Image from "next/image";
import BookNowElliptic from "@/components/book-now-elliptic";

const Parched: React.FC<any> = ({ data }) => {
  console.log(data.image_1.data.attributes.url);

  const stripHtmlTagsAndDecode = (html: string): string => {
    const text = html.replace(/<[^>]*>/g, "").trim();
    return decode(text);
  };

  const allowOnlyLinks = (html: string): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    let lastIndex = 0;

    // Match <a> tags with any nested content inside
    const linkRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(html)) !== null) {
      const [fullMatch, href, innerHtml] = match;

      // Get text before <a> and strip other HTML
      const before = html.slice(lastIndex, match.index).replace(/<[^>]*>/g, "");
      if (before.trim()) result.push(decode(before));

      // Strip all tags inside <a>, but keep decoded text
      const linkText = decode(innerHtml.replace(/<[^>]*>/g, "").trim());

      result.push(
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-orange-600 transition-colors"
        >
          {linkText}
        </a>
      );

      lastIndex = match.index + fullMatch.length;
    }

    // Handle trailing text
    const after = html.slice(lastIndex).replace(/<[^>]*>/g, "");
    if (after.trim()) result.push(decode(after));

    return result;
  };

  return (
    <section className="font-[var(--font-salford-sans)] bg-primary text-secondary flex flex-col xl:block items-center justify-center pb-[4.5rem]">
      <div className='font-["Salford_Sans"] xl:flex text-center xl:w-full xl:justify-center'>
        <div className="px-8">
          {/* <Image src="/flukes/illustrations/drink.jpg" alt='drink' className='rotate-[2.8]  lg:hidden mx-auto mt-[65px]' width={258.28} height={350.65} /> */}
          <h3 className="font-black font-[var(--font-salford-sans)] text-[60px] lg:text-[90px] uppercase lg:leading-[65px] leading-[46px] my-[35px]">
            {data.parchedTitle === "parched? peckish?" ? (
              <Fragment>
                parched? <br /> <span className="-ml-12">peckish?</span>
              </Fragment>
            ) : (
              data.parchedTitle
            )}
          </h3>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-12">
            <div
              dangerouslySetInnerHTML={{ __html: data.parchedDescription }}
              className="font-['Roc_Grotesk'] text-[16px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] lg:max-w-[428px] text-center   w-[80%] mt-8 lg:mt-0  text-secondary font-semibold"
            ></div>
            <div className="w-[60%] lg:w-[32%] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image_1.data.attributes.url}`}
                className=" aspect-[1/1] object-cover w-[250px] h-[250px] lg:w-[580px] lg:h-[580px]"
                alt=""
              />
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] top-[-5px] left-[-5px] md:top-[-30px] md:left-[-30px]`}
              ></span>
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] top-[-5px] right-[-5px] md:top-[-30px] md:right-[-30px]`}
              ></span>
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] bottom-[-5px] right-[-5px] md:bottom-[-30px] md:right-[-30px]`}
              ></span>
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] bottom-[-5px] left-[-5px] md:bottom-[-30px] md:left-[-30px]`}
              ></span>
            </div>
          </div>
        </div>
        {/* <Image src="/flukes/illustrations/drink.jpg" alt='drink' className='rotate-[2.8] lg:mx-auto lg:mt-7 xl:mx-0 mt-0 hidden lg:block' width={503.53} height={683.61} /> */}
      </div>
      <div className="flex font-salford text-center lg:justify-center">
        {/* <Image src="/flukes/illustrations/bigpenny.jpg" alt='drink' className='rotate-[2.8] hidden lg:block' width={503.53} height={683.61} /> */}
        <div className="lg:mt-12 px-10 lg:flex lg:flex-col items-center mt-8">
          {/* <Image src="/flukes/illustrations/bigpenny.jpg" alt='drink' className='rotate-[2.8] lg:hidden mx-auto mt-[65px]' width={258.28} height={350.65} /> */}
          <h3 className="font-black font-[var(--font-salford-sans)] text-[60px] lg:text-[90px] uppercase lg:leading-[65px] leading-[46px] font-['Salford_Sans']">
            {data.bigpennyDownstairs ===
            "And Big Penny Social’s Just Downstairs..." ? (
              <Fragment>
                Big Penny Social
                <br /> Is Downstairs!
              </Fragment>
            ) : (
              data.bigpennyDownstairs
            )}
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-around mt-12">
            <div className="w-[60%] lg:w-[32%] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image_2.data.attributes.url}`}
                className=" aspect-[1/1] object-cover w-[250px] h-[250px] lg:w-[580px] lg:h-[580px]"
                alt=""
              />
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] top-[-5px] left-[-5px] md:top-[-30px] md:left-[-30px]`}
              ></span>
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] top-[-5px] right-[-5px] md:top-[-30px] md:right-[-30px]`}
              ></span>
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] bottom-[-5px] right-[-5px] md:bottom-[-30px] md:right-[-30px]`}
              ></span>
              <span
                className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] bottom-[-5px] left-[-5px] md:bottom-[-30px] md:left-[-30px]`}
              ></span>
            </div>
            <div className="font-['Roc_Grotesk'] text-[16px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] lg:max-w-[428px] text-center   w-[80%] mt-8 lg:mt-0 lg:w-[30%] text-secondary  font-semibold flex flex-col gap-10">
              <div
                dangerouslySetInnerHTML={{ __html: data.bigpennyDescription }}
              ></div>
              <BookNowElliptic className="my-7" orangeBackground />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 font-['Salford_Sans']">
        {/* <Image src="/flukes/illustrations/drink.jpg" alt='drink' className='rotate-[2.8]  lg:hidden mx-auto mt-[65px]' width={258.28} height={350.65} /> */}
        <h3 className="font-black font-[var(--font-salford-sans)] text-[60px] text-center lg:text-[90px] uppercase lg:leading-[65px] leading-[46px] my-[35px]">
          {data.about === "parched? peckish?" ? (
            <Fragment>
              parched? <br /> <span className="-ml-12">peckish?</span>
            </Fragment>
          ) : (
            data.about
          )}
        </h3>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-12">
          <div
            dangerouslySetInnerHTML={{ __html: data.aboutDescription }}
            className="font-['Roc_Grotesk'] text-[16px] leading-[22px] min-[1400px]:text-[22px] min-[1400px]:leading-[27px] lg:max-w-[428px] text-center  mb-12 md:mb-0  w-[80%] mt-8 lg:mt-0 lg:w-[30%] text-secondary font-semibold"
          ></div>
          <div className="w-[60%] lg:w-[32%] relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image_3.data.attributes.url}`}
              className=" aspect-[1/1] object-cover w-[250px] h-[250px] lg:w-[580px] lg:h-[580px]"
              alt=""
            />
            <span
              className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] top-[-5px] left-[-5px] md:top-[-30px] md:left-[-30px]`}
            ></span>
            <span
              className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] top-[-5px] right-[-5px] md:top-[-30px] md:right-[-30px]`}
            ></span>
            <span
              className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] bottom-[-5px] right-[-5px] md:bottom-[-30px] md:right-[-30px]`}
            ></span>
            <span
              className={`absolute bg-primary w-[15px] md:w-[50px] h-[15px] md:h-[50px] rounded-[50%] bottom-[-5px] left-[-5px] md:bottom-[-30px] md:left-[-30px]`}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parched;


//                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image_2.data.attributes.url}`}

//  dangerouslySetInnerHTML={{ __html: data.bigpennyDescription }}

              // <BookNowElliptic className="my-7" orangeBackground />