import Image from "next/image";
import GetLucky from "@/sections/get-lucky";
import UpNext from "@/sections/up-next";
import NittyGritty from "@/sections/nitty-gritty";
import OpeningHours from "@/sections/opening-hours";
import FreeCocktail from "@/sections/free-cocktail";
import Testimonial from "@/sections/testimonial";
import Parched from "@/sections/parched";
import FindFlukes from "@/sections/find-flukes";
import HeroImage from "@/sections/hero-image";


export default async function Home() {

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes?populate[nittyGritty][populate][card][populate]=*&populate[testimonial][populate]=*&populate[findUs][populate]=*&populate[openingHours][populate]=*&populate[parched][populate][image_1]=*&populate[parched][populate][image_2]=*&populate[parched][populate][image_3]=*&populate[gameForce][populate]=*&populate[getLucky][populate][logo]=*&populate[getLucky][populate][image]=*&populate[HeroImage][populate]=*&populate[games_hall][populate][image]=*`)
  const data = await res.json()

  return (
    <main>
      {/* <GetLucky data={data.data.attributes.getLucky} /> */}
      {/* <FreeCocktail /> */}
      <HeroImage data={data.data.attributes.HeroImage}/>
      <UpNext data={data.data.attributes.games_hall}/>
      <NittyGritty data={data.data.attributes.nittyGritty} />
      {/* <Testimonial data={data.data.attributes.testimonial}/> */}
      <Parched data={data.data.attributes.parched}/>
      {/* <FindFlukes data={data.data.attributes.findUs} /> */}
      <OpeningHours data={data.data.attributes.openingHours}/>
    </main>
  );
}
