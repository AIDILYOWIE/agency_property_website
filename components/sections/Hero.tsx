import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="w-full pt-16 pb-section">
      {/* Top Row: Headline and Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
        {/* Left: Headline */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-background leading-tight tracking-tight">
            Good Properties <br className="hidden lg:block" />
            <span className="text-primary">Don't Need to Shout</span>
          </h1>
        </div>

        {/* Right: Description & Buttons */}
        <div className="flex flex-col justify-center gap-6 lg:pl-8">
          <p className="text-body-lg text-on-surface-variant max-w-lg">
            Premium property promotion untuk Vila, Rumah Mewah,
            Tanah Strategis & Aset Komersial di Bali.
            Dua model kolaborasi. Satu standar kualitas.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Mulai Kolaborasi</Button>
            <Button variant="outline">lihat portofolio</Button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Large Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden shadow-card group">
        <Image
          src="/hero.png"
          alt="Modern Architectural House"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          priority
        />

        {/* Floating Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <Button variant="primary" className="shadow-lg backdrop-blur-sm bg-primary/90">
            See All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
