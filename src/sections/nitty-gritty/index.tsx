import React from "react";
import EventCard from "@/components/event-card";
import BookNowRectangular from "@/components/book-now-rectaungular";

const NittyGritty: React.FC<any> = ({ data }) => {
  return (
    <section
      className='pb-[86px] pt-[86px] min-[1400px]:pt-[200px] text-center  font-["Salford_Sans"] overflow-x-hidden'
      id="about"
    >
      <h1 className="text-[70px] font-black leading-[51px] uppercase min-[1400px]:text-[180px]">
        {data.title}
      </h1>
      <p className="max-w-[325px] lg:max-w-[1265px] mt-[30px] mb-[112px] mx-auto text-[25px] leading-[32px] min-[1400px]:text-[45px] min-[1400px]:leading-[48px] min-[1400px]:py-[55px]">
        {data.description}
      </p>
      <div className="w-full lg:flex lg:justify-center items-center relative">
        <EventCard
          className="bg-[#FBFBF8] min-[1000px]:-mr-6 min-[1400px]:-mr-5 lg:-mt-18 lg:ml-auto"
          rotation={2.17}
          image={`${data.card[0].image.data.attributes.url}`}
          title={data.card[0].title}
          description={data.card[0].frontsideDescription}
          players={data.card[0].players}
          price={data.card[0].price}
          space={data.card[0].space}
          backsideTitle={data.card[0].title}
          backsideDescription={data.card[0].backsideDescription}
          backsideClassName="relative z-90"
          widthMobile={217.04}
          heightMobile={161.7}
          widthDesktop={260}
          heightDesktop={190}
          tabToFlip={true}
        />
        <EventCard
          className="bg-[#FBFBF8] lg:-mr-10 lg:-mb-18 lg:ml-0"
          rotation={-1.78}
          image={`${data.card[1].image.data.attributes.url}`}
          title={data.card[1].title}
          description={data.card[1].frontsideDescription}
          players={data.card[1].players}
          price={data.card[1].price}
          space={data.card[1].space}
          backsideTitle={data.card[1].title}
          backsideDescription={data.card[1].backsideDescription}
          backsideClassName="relative z-90"
          widthDesktop={205}
          heightDesktop={197}
          widthMobile={190}
          heightMobile={178}
        />
        <EventCard
          className="bg-[#FBFBF8] lg:-mt-24 lg:-ml-2 lg:mr-0"
          rotation={1.29}
          image={`${data.card[2].image.data.attributes.url}`}
          title={data.card[2].title}
          description={data.card[2].frontsideDescription}
          players={data.card[2].players}
          price={data.card[2].price}
          space={data.card[2].space}
          backsideTitle={data.card[2].title}
          backsideDescription={data.card[2].backsideDescription}
          backsideClassName="relative z-90"
          widthDesktop={220}
          heightDesktop={134}
          widthMobile={200.15}
          heightMobile={90.21}
        />
        <EventCard
          className="bg-[#FBFBF8] min-[1000px]:-ml-5 min-[1400px]:-ml-5 lg:-mb-18 lg:mr-auto"
          rotation={-1.53}
          image={`${data.card[3].image.data.attributes.url}`}
          title={data.card[3].title}
          description={data.card[3].frontsideDescription}
          players={data.card[3].players}
          price={data.card[3].price}
          space={data.card[3].space}
          backsideTitle={data.card[3].title}
          backsideDescription={data.card[3].backsideDescription}
          backsideClassName="relative z-90"
          widthDesktop={301}
          heightDesktop={182}
          widthMobile={240.15}
          heightMobile={145.21}
        />
      </div>
      <BookNowRectangular
        className="!w-[286.85px] !h-[86.53px] !text-[45px] mx-auto mt-20 lg:mt-30"
        text="book now"
      />
    </section>
  );
};

export default NittyGritty;
