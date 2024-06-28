import Banner from "./components/Home/Banner/Banner";
import FeaturedProperties from "./components/Home/FeaturedProperties/FeaturedProperties";
import WhyUsSection from "./components/Home/WhyUsSection/WhyUsSection";



export default function Home() {
  return (
  <main>
    <Banner/>
    <WhyUsSection/>
    <FeaturedProperties/>
  </main>
  );
}
