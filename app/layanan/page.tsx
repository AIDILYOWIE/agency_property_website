import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/app/_components/layout/Navbar";
import { Hero } from "@/app/_components/sections/Hero";
import { HowWeWork } from "@/app/_components/sections/HowWeWork";
import { BsLightning, BsCamera, BsTag } from "react-icons/bs";
import { ScrollShowcase } from "@/app/_components/sections/ScrollShowcase";
import { WhyChooseUs } from "@/app/_components/sections/WhyChooseUs";
import { Testimonials } from "@/app/_components/sections/Testimonials";
import { CallToAction } from "@/app/_components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Our Services | Agency Property",
  description: "Exclusive and premium property marketing services for you.",
};

const problemItems = [
  {
    title: "Tired of Random Leads?",
    description: "Dealing with hundreds of messages from prospects without the financial qualifications.",
    icon: <BsLightning />,
  },
  {
    title: "Underwhelming Presentation?",
    description:
      "A multi-billion Rupiah property loses value because of substandard phone photos.",
    icon: <BsCamera />,
  },
  {
    title: "Lost in the Marketplace?",
    description:
      "Competing with thousands of low-value property listings without any differentiation.",
    icon: <BsTag />,
  },
];

export default function LayananPage() {
  const WHATSAPP_MSG_CONSULT = `Hello Chris Property Signature Team,

I would like to schedule an Exclusive Consultation regarding your property services.

Focus of discussion needed:

Name: [Insert your name]

Consultation Topic: [Property Marketing / Property Search / Investment]

Brief Details: [Briefly describe your specific needs]

When are you available for a discussion?`;

  const createWaLink = (msg: string) =>
    `https://wa.me/6285183117165?text=${encodeURIComponent(msg)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col px-page">
        <Hero
          headline={
            <>
              Premium Properties Shouldn't Get Lost
            </>
          }
          description="We help property owners and developers in Bali position their assets to the highest standards. Not mere mass-posting, but exclusive curation."
          primaryButtonText="Consult Now"
          primaryButtonHref={createWaLink(WHATSAPP_MSG_CONSULT)}
          secondaryButtonText="Our Services"
          secondaryButtonHref="#layanan-section"
        // We can reuse the same image or leave it blank to show without image, but we'll reuse the default for now
        />

        {/* Problem & Agitation */}
        <WhyChooseUs label="Problem & Agitation" title="Positioning matters more than noise" items={problemItems} />

        <WhyChooseUs id="layanan-section" label="Services" title="Our Services" />            
      </div>


      <div className="flex flex-col px-page">
        {/* Trust social proof */}
        <Testimonials />
      </div>

      {/* CTA */}
      <CallToAction variant="default" title="Good Properties Don't Need to Shout" description="They just need the right stage. Let your asset speak at the level it deserves." buttons={
        [
          { label: 'Start Collaboration', variant: "primary", href: "/pricing#partnership-model" },
          { label: 'Consult Now', variant: "outlineWhite", href: createWaLink(WHATSAPP_MSG_CONSULT) },
        ]
      } />
    </div>
  );
}

