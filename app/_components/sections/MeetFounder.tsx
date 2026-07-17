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
    <div className="flex justify-center gap-[36px] items-center py-section">
      {/* Left Column — Founder Photo */}

        <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden justify-self-end">
          <Image
            src="/profile/profile_chris.jpg"
            alt="Albert Christofer (Chris) — Founder Chris Property Signature"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

      {/* Right Column — Content */}
        <div className="flex w-[40%]  flex-col gap-8">
          {/* Section Label */}
          <span className="text-label-md text-on-background uppercase tracking-wider">
            Meet The Founder
          </span>

          {/* Main Quote */}
          <blockquote className="text-3xl md:text-4xl font-semibold text-on-background leading-tight tracking-tight">
            &ldquo;Positioning matters more than noise.&rdquo;
            <footer className="mt-3 text-base font-normal text-on-surface-variant not-italic">
              — Chris, Founder Chris Property Signature
            </footer>
          </blockquote>

          {/* Description */}
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
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
