import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { BsLightning, BsCamera, BsTag } from "react-icons/bs";
import { ScrollShowcase } from "@/components/sections/ScrollShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

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
    icon: <BsTag /> ,
  },
];

export default function LayananPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col px-[68px]">
        <Hero
          headline={
            <>
              Properti Premium Anda Tak Seharusnya <span className="text-primary">Tenggelam</span>
            </>
          }
          description="Kami membantu pemilik properti dan developer di Bali memposisikan aset mereka dengan standar tertinggi. Bukan sekadar mass-posting, melainkan kurasi eksklusif."
          primaryButtonText="Konsultasi Sekarang"
          secondaryButtonText="Layanan Kami"
        // We can reuse the same image or leave it blank to show without image, but we'll reuse the default for now
        />

        {/* Problem & Agitation */}
          <WhyChooseUs label="Problem & Agitation" title="Positioning matters more than noise" items={problemItems} />
      </div>

      {/* Solution */}
      <ScrollShowcase label="THE SOLUTIONS" />

      <div className="flex flex-col px-[68px]">
          {/* Trust social proof */}
          <Testimonials/>
      </div>

      {/* CTA */}
          <CallToAction title="Properti yang Baik Tidak Perlu Berteriak" description="Mereka hanya butuh panggung yang tepat. Biarkan aset Anda berbicara di level yang seharusnya." buttons={
          [
            {label: 'Mulai Kolaboras', variant: "primary", href: "/contact"},
            {label: 'Konsultasi Sekarang', variant: "outline", href: "/contact"},
          ]
          }  />
    </div>
  );
}

