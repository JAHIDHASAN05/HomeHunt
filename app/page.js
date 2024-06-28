import Banner from "./components/Home/Banner/Banner";
import FeaturedProperties from "./components/Home/FeaturedProperties/FeaturedProperties";
import FindProperties from "./components/Home/FindProperties/FindProperties";
import HowItWorkSection from "./components/Home/HowItWorkSection/HowItWorkSection";
import WhyUsSection from "./components/Home/WhyUsSection/WhyUsSection";



export default function Home() {
  return (
  <main>
    <Banner/>
    <WhyUsSection/>
    <FeaturedProperties/>
    <FindProperties/>
    <HowItWorkSection/>
  </main>
  );
}
