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
        <Faq
          faqs={[
            {
              question: "How To See Property?",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
            {
              question: "What are the payment options?",
              answer:
                "We accept various payment methods including bank transfers, credit cards, and specialized mortgage financing options.",
            },
            {
              question: "Are there any hidden fees?",
              answer:
                "No, we believe in full transparency. All costs, including taxes and administrative fees, will be clearly outlined before you make any commitment.",
            },
            {
              question: "How long does the buying process take?",
              answer:
                "Typically, the property buying process takes between 30 to 45 days from signing the initial agreement to final handover, depending on the payment method.",
            },
          ]}
        />
      </div>
      <CallToAction />
    </>
  );
}
