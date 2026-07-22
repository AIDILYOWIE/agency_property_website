import React from "react";
import Image from "next/image";
import { FiShield, FiUsers, FiStar } from "react-icons/fi";

interface FounderHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlights: FounderHighlight[] = [
  {
    icon: <FiShield size={20} className="text-primary" />,
    title: "Integritas Pemasaran",
    description:
      "Chris menjaga standar pemasaran yang jujur dan transparan. Setiap properti dikurasi ketat—hanya aset berkualitas yang layak mendapatkan eksposur premium.",
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    title: "Standar Aset Tinggi",
    description:
      "Hanya properti dengan nilai dan potensi yang benar-benar mumpuni yang kami proses. Ini bukan soal kuantitas—ini soal positioning yang tepat di mata buyer yang tepat.",
  },
  {
    icon: <FiUsers size={20} className="text-primary" />,
    title: "Jaringan Serious Buyers",
    description:
      "Dibangun selama bertahun-tahun, jaringan Chris mencakup serious buyers, investor properti, dan kalangan profesional di Bali yang benar-benar memiliki kapasitas finansial.",
  },
];

export function MeetFounder() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-[36px] items-center py-section">
      {/* Founder Photo — full width on mobile, fixed size on desktop */}
      <div className="relative w-full md:w-[340px] lg:w-[400px] aspect-[3/4] md:h-[480px] lg:h-[520px] md:aspect-auto rounded-2xl overflow-hidden flex-shrink-0">
        <Image
          src="/profile/profile_chris_2.png"
          alt="Albert Christofer (Chris) — Founder Chris Property Signature"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Bottom gradient fade — menutupi potongan kaki gambar */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#f8f8f8] via-[#f8f8f8]/60 to-transparent pointer-events-none" />
      </div>

      {/* Right Column — Content */}
      <div className="flex w-full md:w-[50%] lg:w-[40%] flex-col gap-6 md:gap-8">
        {/* Section Label */}
        <span className="text-label-md text-on-background uppercase tracking-wider">
          Meet The Founder
        </span>

        {/* Main Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-on-background leading-tight tracking-tight">
          &ldquo;Positioning matters more than noise.&rdquo;
          <footer className="mt-3 text-sm md:text-base font-normal text-on-surface-variant not-italic">
            — Chris, Founder Chris Property Signature
          </footer>
        </blockquote>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg text-on-surface-variant leading-relaxed">
          Albert Christofer, atau akrab disapa Chris, membangun Chris Property
          Signature atas satu keyakinan: properti premium tidak butuh
          kebisingan—ia butuh panggung yang tepat. Dengan komitmen pada
          integritas pemasaran, standar seleksi aset yang tinggi, dan akses ke
          jaringan <em>serious buyers</em> serta investor terpercaya di Bali,
          Chris hadir sebagai mitra strategis bagi mereka yang serius menjual
          aset kelas atas.
        </p>
      </div>
    </div>
  );
}
