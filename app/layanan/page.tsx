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
  title: "Layanan Kami | Agency Property",
  description: "Layanan pemasaran properti eksklusif dan premium untuk Anda.",
};

const problemItems = [
  {
    title: "Lelah dengan Random Leads?",
    description: "Menghadapi ratusan pesan dari prospek yang tidak memiliki kualifikasi finansial.",
    icon: <BsLightning />,
  },
  {
    title: "Presentasi Kurang Menarik?",
    description:
      "Nilai properti miliaran rupiah jatuh karena foto ponsel seadanya.",
    icon: <BsCamera />,
  },
  {
    title: "Tenggelam di Marketplace? ",
    description:
      "Bersaing dengan ribuan listing properti murah tanpa diferensiasi.",
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
              Properti Premium Anda Tak Seharusnya Tenggelam
            </>
          }
          description="Kami membantu pemilik properti dan developer di Bali memposisikan aset mereka dengan standar tertinggi. Bukan sekadar mass-posting, melainkan kurasi eksklusif."
          primaryButtonText="Konsultasi Sekarang"
          primaryButtonHref={createWaLink(WHATSAPP_MSG_CONSULT)}
          secondaryButtonText="Layanan Kami"
          secondaryButtonHref="#layanan-section"
        // We can reuse the same image or leave it blank to show without image, but we'll reuse the default for now
        />

        {/* Problem & Agitation */}
        <WhyChooseUs label="Problem & Agitation" title="Positioning matters more than noise" items={problemItems} />

        <WhyChooseUs id="layanan-section" label="Layanan" title="Layanan Kami" />            
      </div>


      <div className="flex flex-col px-page">
        {/* Trust social proof */}
        <Testimonials />
      </div>

      {/* CTA */}
      <CallToAction variant="center" title="Properti yang Baik Tidak Perlu Berteriak" description="Mereka hanya butuh panggung yang tepat. Biarkan aset Anda berbicara di level yang seharusnya." buttons={
        [
          { label: 'Mulai Kolaborasi', variant: "primary", href: "/pricing#partnership-model" },
          { label: 'Konsultasi Sekarang', variant: "outlineWhite", href: createWaLink(WHATSAPP_MSG_CONSULT) },
        ]
      } />
    </div>
  );
}

