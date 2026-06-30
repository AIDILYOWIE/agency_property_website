import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Layanan Kami | Agency Property",
  description: "Layanan pemasaran properti eksklusif dan premium untuk Anda.",
};

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

          

      </div>

    </div>
  );
}

