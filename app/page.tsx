import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PropertyCategories } from "@/components/sections/PropertyCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ScrollShowcase } from "@/components/sections/ScrollShowcase";
import { Pricing } from "@/components/sections/Pricing";
import { Portofolio } from "@/components/sections/Portofolio";
import { HowWeWork } from "@/components/sections/HowWeWork";

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
        <Portofolio />
        <HowWeWork />
      </div>
      {/* Future sections will go here */}
    </>
  );
}
