import React from "react";
import BookNowElliptic from "@/components/book-now-elliptic";
import Image from "next/image";

const Footer: React.FC<any> = ({ data }) => {
  const stripHtmlTags = (html: string): string => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  return (
    <footer
      className="bg-[url('/flukes/illustrations/union-orange.svg')] font-salford flex flex-col lg:py-28 text-center justify-center items-center lg:bg-cover bg-[length:250%] relative lg:pb-8 bg-no-repeat py-[80px] lg:-mt-14 text-[#FBFBF8] lg:mt-[18px]
                            after:content-[''] after:absolute after:w-full after:h-1/2 after:bottom-0 after:bg-[#D2451E] after:-z-10 font-['Salford_Sans']"
    >
      <h2 className="font-black uppercase text-[80px] leading-[70px] mb-[15px] lg:mb-6 lg:text-[150px] lg:leading-36">
        <span className="">
          <img
            src={`${data.logo.data.attributes.url}`}
            className="mx-auto mt-6 lg:hidden"
            alt="trophy"
            width={332}
            height={64}
          />
          <img
            src={`${data.logo.data.attributes.url}`}
            className="hidden lg:block"
            alt="Flukes_Logo"
            width={600}
            height={200}
          />
          <BookNowElliptic
            className="font-salford text-[#D2451E] hidden lg:block -mt-7 ml-auto mr-6"
            orangeBackground={true}
          />
        </span>
      </h2>
      <BookNowElliptic
        className="text-[#D2451E] my-13 mx-auto lg:hidden uppercase"
        orangeBackground={true}
      />
      <div className="lg:flex lg:items-center text-[25px] leading-[20px] lg:justify-center lg:w-fit mx-auto">
        <div className="uppercase mx-auto mt-4 lg:my-0 lg:mr-auto">
          {data.links.map((link: any) => {
            return (
              <a
                href={link.url}
                className="mx-[5px]"
                target="_blank"
                key={link.id}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
