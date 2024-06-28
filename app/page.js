import Banner from "./components/Home/Banner/Banner";
import BestPropertySection from "./components/Home/BestProperty/BestPropertySection";
import FeaturedProperties from "./components/Home/FeaturedProperties/FeaturedProperties";
import FindProperties from "./components/Home/FindProperties/FindProperties";
import HowItWorkSection from "./components/Home/HowItWorkSection/HowItWorkSection";
import WhatOurCustomerSaySection from "./components/Home/WhatOurCustomerSay/WhatOurCustomerSay";
import WhyUsSection from "./components/Home/WhyUsSection/WhyUsSection";
import Footer from "./components/shared/Footer/Footer";



export default function Home() {
  return (
  <main>
   <Banner/>
    <WhyUsSection/>
    <FeaturedProperties/>
    <FindProperties/>
    <HowItWorkSection/>
    <WhatOurCustomerSaySection/> 
    <BestPropertySection/>
    <Footer/>
  </main>
  );
}
