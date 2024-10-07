import TopPackages from "../components/TopPackages";
import HeroSection from "../components/HeroSection"
import GetInTouch from "../components/GetInTouch";
import PopularDestination from "../components/PopularDestination";
import DealAndOffers from "../components/DealAndOffers";
import WhyChooseUs from "../components/WhyChooseUs";
import PopupForm from "../components/PopupForm";

export default function Home() {
  return (
   <>
    <PopupForm/>
      <HeroSection/>
      <div className="get-in-touch-mob-version">
        <GetInTouch/>
      </div>
      
      <TopPackages/>
      <WhyChooseUs/>
      <PopularDestination/>
      <DealAndOffers/>
   </>
  );
}
