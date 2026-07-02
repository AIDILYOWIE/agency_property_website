import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const CTA_TITLE = "Let Your Property Speak at the Right Level";

const CTA_DESCRIPTION =
  "Setiap bulan properti premium Anda dibiarkan kosong, Anda sedang menelan kerugian. Berhenti membuang waktu meladeni ratusan pesan dari calon pembeli yang tidak serius, atau strategi promosi usang yang mengharuskan Anda banting harga. Properti Anda tidak butuh diskon—ia hanya butuh dilihat oleh mata yang tepat. Serahkan kerumitannya pada kami, dan mari buat properti Anda bernilai sebagaimana mestinya.";

const CTA_LINKS = {
  whatsapp: "https://wa.me/6281234567890",
  instagram: "https://instagram.com/chrisproperty",
} as const;

export function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/cta-bg.png"
        alt="Premium property background"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-on-background/40" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-[68px] py-section">
        {/* Left — Title */}
        <div className="flex items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            {CTA_TITLE}
          </h2>
        </div>

        {/* Right — Description & Actions */}
        <div className="flex flex-col justify-center gap-8">
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            {CTA_DESCRIPTION}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CTA_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-semibold text-base transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-primary-container hover:text-on-primary-container active:translate-y-0"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>

            <a
              href={CTA_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-semibold text-base transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-white hover:text-on-background active:translate-y-0"
            >
              <FaInstagram size={20} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
