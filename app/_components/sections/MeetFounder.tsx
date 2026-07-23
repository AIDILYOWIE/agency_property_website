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
    title: "Marketing Integrity",
    description:
      "Chris upholds honest and transparent marketing standards. Every property is strictly curated — only quality assets deserve premium exposure.",
  },
  {
    icon: <FiStar size={20} className="text-primary" />,
    title: "High Asset Standards",
    description:
      "Only properties with genuine value and potential are processed. This isn't about quantity — it's about precise positioning in the eyes of the right buyers.",
  },
  {
    icon: <FiUsers size={20} className="text-primary" />,
    title: "Serious Buyer Network",
    description:
      "Built over many years, Chris's network includes serious buyers, property investors, and professionals in Bali with genuine financial capacity.",
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
          Albert Christofer, commonly known as Chris, built Chris Property
          Signature on a single conviction: premium properties don't need
          noise — they need the right stage. With a commitment to
          marketing integrity, high asset selection standards, and access to
          a network of <em>serious buyers</em> and trusted investors in Bali,
          Chris stands as a strategic partner for those who are serious about
          selling top-tier assets.
        </p>
      </div>
    </div>
  );
}
