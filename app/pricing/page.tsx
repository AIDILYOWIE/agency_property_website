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
          description="Dapatkan eksposur maksimal ke serious buyers dengan visual premium. Pilih jalur kemitraan yang paling sesuai dengan target dan nilai aset Anda di Bali."
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
              question: "Apakah ada jaminan properti pasti laku?",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
            {
              question:
                "Bagaimana proses Free Property Visit untuk paket 3 Slot? ",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
            {
              question:
                "Apakah saya masih bisa menjual sendiri jika pakai Open Slot? ",
              answer:
                "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you.",
            },
          ]}
        />
      </div>
      <CallToAction
        variant="center"
        title="Still unsure which path is right for your property?"
        description="Diskusikan aset Anda dengan tim kami, dan kami akan merekomendasikan strategi penempatan terbaik."
        buttons={[
          {
            label: "Konsultasi Sekarang",
            variant: "primary",
            href: createWaLink(WHATSAPP_MSG_CONSULT),
          },
        ]}
      />
    </div>
  );
}
