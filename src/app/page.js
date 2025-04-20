import GridCarouselComponent from "@/components/GridLayoutSwiper";
import HomeAbout from "@/components/HomePage/HomeAbout";
import LogoCompanies from "@/components/HomePage/LogoCompanies";
import BPcomponent from "@/components/SwipercomponenBP";
import Scomponent from "@/components/SwipercomponentH";
import HCScomponent from "@/components/SwipercomponentHC";
import OASComponent from "@/components/SwipercomponentOA";

export default function Home() {
  return (
    <>
      <Scomponent />
      <HomeAbout />
      <HCScomponent />
      <LogoCompanies />
      <OASComponent />
      <GridCarouselComponent />
      <BPcomponent />
    </>
  );
}
