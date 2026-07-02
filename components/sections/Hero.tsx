import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

interface HeroProps {
  headline?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  floatingButtonText?: string;
}

export function Hero({
  headline = (
    <>
      Good Properties <br className="hidden lg:block" />
      <span className="text-primary">Don't Need to Shout</span>
    </>
  ),
  description = "Premium property promotion untuk Vila, Rumah Mewah, Tanah Strategis & Aset Komersial di Bali. Dua model kolaborasi. Satu standar kualitas.",
  primaryButtonText = "Mulai Kolaborasi",
  secondaryButtonText = "lihat portofolio",
  imageSrc = "/hero.png",
  imageAlt = "Modern Architectural House",
  floatingButtonText = "See All Listings",
}: HeroProps) {
  return (
    <section className="w-full py-section">
      {/* Top Row: Headline and Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
        {/* Left: Headline */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-background leading-tight tracking-tight">
            {headline}
          </h1>
        </div>

        {/* Right: Description & Buttons */}
        <div className="flex flex-col justify-center gap-6 lg:pl-8">
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            {description}
          </p>
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap items-center gap-4">
              {primaryButtonText && <Button variant="primary">{primaryButtonText}</Button>}
              {secondaryButtonText && <Button variant="outline">{secondaryButtonText}</Button>}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row: Large Image */}
      {imageSrc && (
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden shadow-card group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            priority
          />

        </div>
      )}
    </section>
  );
}
