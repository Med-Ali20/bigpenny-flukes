"use client";

import React, { Fragment } from "react";
//@ts-ignore
import { decode } from "he";
import Image from "next/image";
import BookNowElliptic from "@/components/book-now-elliptic";

const Parched: React.FC<any> = ({ data }) => {
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


  console.log(data.parchedDescription)

  return (
    <section className="font-[var(--font-salford-sans)] flex flex-col xl:block items-center justify-center">
      <div className='font-["Salford_Sans"] xl:flex text-center xl:w-full xl:justify-center'>
        <div className="px-8">
          {/* <Image src="/flukes/illustrations/drink.jpg" alt='drink' className='rotate-[2.8]  lg:hidden mx-auto mt-[65px]' width={258.28} height={350.65} /> */}
          <h3 className="font-black lg:text-[65px] font-[var(--font-salford-sans)] text-[70px] lg:text-[111px] uppercase lg:leading-[85px] leading-[51px] my-[35px]">
            {data.parchedTitle === "parched? peckish?" ? (
              <Fragment>
                parched? <br /> peckish?
              </Fragment>
            ) : (
              data.parchedTitle
            )}
          </h3>
          <div dangerouslySetInnerHTML={{__html: data.parchedDescription}} className="lg:max-w-[728px] text-center text-[25px] md:[text-30px] leading-[32px] min-[1400px]:leading-[50px] min-[1400px]:text-[45px] lg:mt-4">
            {/* {allowOnlyLinks(data.parchedDescription)} */}

            {/* It’s fate. We’ve got you completely covered with moreish cocktails &
            mocktails, craft beers and wonderful wines, plus 48hr proved
            sourdough pizzas baked on-site, alongside all sorts of sharing
            plates & platters (GF, V, VG, OMG, ETC). */}
          </div>
        </div>
        {/* <Image src="/flukes/illustrations/drink.jpg" alt='drink' className='rotate-[2.8] lg:mx-auto lg:mt-7 xl:mx-0 mt-0 hidden lg:block' width={503.53} height={683.61} /> */}
      </div>
      <div className="flex font-salford text-center lg:justify-center lg:mt-24">
        {/* <Image src="/flukes/illustrations/bigpenny.jpg" alt='drink' className='rotate-[2.8] hidden lg:block' width={503.53} height={683.61} /> */}
        <div className="lg:mt-12 px-10 lg:flex lg:flex-col items-center">
          {/* <Image src="/flukes/illustrations/bigpenny.jpg" alt='drink' className='rotate-[2.8] lg:hidden mx-auto mt-[65px]' width={258.28} height={350.65} /> */}
          <h3 className='font-["Salford_Sans"] font-black text-[60px] lg:text-[100px] uppercase lg:leading-[85px] leading-[51px] my-[35px]'>
            {data.bigpennyDownstairs ===
            "And Big Penny Social’s Just Downstairs..." ? (
              <Fragment>
                And Big Penny <br /> Social’s Just
                <br className="min-[1400px]:hidden" /> Downstairs...
              </Fragment>
            ) : (
              data.bigpennyDownstairs
            )}
          </h3>
          <div dangerouslySetInnerHTML={{__html: data.bigpennyDescription}} className='font-["Salford_Sans"] lg:max-w-[728px]  text-[25px] md:[text-30px] leading-[32px] min-[1400px]:leading-[50px] min-[1400px]:text-[45px] lg:mt-4 text-center'>
            {/* {data.bigpennyDescription ===
            "<p>The home of Flukes – Big Penny Social – is full of laughter, dance, music, revelry, deliciousness and good times of pretty much every stripe. We’re the UK’s largest <strong>BEER HALL</strong> with a dizzying array of events and a huge sunny beer garden, so you’re in a great spot – before and after your Flukes sesh.</p>" ? (
              <Fragment>The home of Flukes – Big Penny Social – is full of laughter, dance, music, revelry, deliciousness and good times of pretty much every stripe. We’re the UK’s largest <strong>BEER HALL</strong> with a dizzying array of events and a huge sunny beer garden, so you’re in a great spot – before and after your Flukes sesh.</Fragment>
            ) : (
              stripHtmlTagsAndDecode(data.bigpennyDescription)
            )} */}
            {/* The home of Flukes – Big Penny Social – is full of laughter, dance,
            music, revelry, deliciousness and good times of pretty much every
            stripe. We’re the UK’s largest
            <strong className="uppercase">beer hall</strong> with a dizzying
            array of events and a huge sunny beer garden, so you’re in a great
            spot – before and after your Flukes sesh. */}
          </div>
          <BookNowElliptic className="uppercase mt-18 !lg:mt[77px] mb-6 w-fit mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Parched;
