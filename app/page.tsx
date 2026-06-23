import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PropertyCategories } from "@/components/sections/PropertyCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ScrollShowcase } from "@/components/sections/ScrollShowcase";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-[68px] ">
        <Hero />
        <PropertyCategories />
        <WhyChooseUs />
      </div>
      <ScrollShowcase />
      <div className="flex flex-col px-[68px] ">
        <Pricing />
      </div>
      {/* Future sections will go here */}
    </>
  );
}
