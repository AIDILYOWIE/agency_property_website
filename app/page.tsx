import { Navbar } from "@/app/_components/layout/Navbar";
import { Hero } from "@/app/_components/sections/Hero";
import { PropertyCategories } from "@/app/_components/sections/PropertyCategories";
import { WhyChooseUs } from "@/app/_components/sections/WhyChooseUs";
import { ScrollShowcase } from "@/app/_components/sections/ScrollShowcase";
import { Pricing } from "@/app/_components/sections/Pricing";
import { Portofolio } from "@/app/_components/sections/Portofolio";
import { HowWeWork } from "@/app/_components/sections/HowWeWork";
import { StatsBar } from "@/app/_components/sections/StatsBar";
import { Testimonials } from "@/app/_components/sections/Testimonials";
import { Faq } from "@/app/_components/sections/Faq";
import { CallToAction } from "@/app/_components/sections/CallToAction";

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
        <StatsBar />
        <Testimonials />
        <Faq />
      </div>
      <CallToAction />
    </>
  );
}
