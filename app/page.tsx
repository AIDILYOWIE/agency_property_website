import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PropertyCategories } from "@/components/sections/PropertyCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-[68px] ">
        <Hero />
        <PropertyCategories />
        <WhyChooseUs />
        {/* Future sections will go here */}
      </div>
    </>
  );
}
