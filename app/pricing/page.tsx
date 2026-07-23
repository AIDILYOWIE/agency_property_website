import { Tenor_Sans } from "next/font/google";
import { Navbar } from "../_components/layout/Navbar";
import { Hero } from "../_components/sections/Hero";
import { Pricing } from "../_components/sections/Pricing";
import { Testimonials } from "../_components/sections/Testimonials";
import { Faq } from "../_components/sections/Faq";
import { CallToAction } from "../_components/sections/CallToAction";
import { ScrollShowcase } from "../_components/sections/ScrollShowcase";

export default function PricingPage() {
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
              Positioning matters more than noice
            </>
          }
          description="Get maximum exposure to serious buyers with premium visuals. Choose the partnership model that best suits your target and asset value in Bali."
          isCtaButton={false}
        />
      </div>
      <ScrollShowcase />
      <div className="flex flex-col px-page">
        <Pricing />
        <Testimonials />
        <Faq
          faqs={[
            {
              question: "Is there a guarantee the property will sell?",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
            {
              question:
                "How does the Free Property Visit work for the 3-Slot package?",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
            {
              question:
                "Can I still sell independently if I use an Open Slot?",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
          ]}
        />
      </div>
      <CallToAction
        variant="center"
        title="Still unsure which path is right for your property?"
        description="Discuss your assets with our team, and we will recommend the best placement strategy."
        buttons={[
          {
            label: "Consult Now",
            variant: "primary",
            href: createWaLink(WHATSAPP_MSG_CONSULT),
          },
        ]}
      />
    </div>
  );
}
