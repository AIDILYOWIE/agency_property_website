import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export interface CtaButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "primary" | "outline";
}

const DEFAULT_TITLE = "Let Your Property Speak at the Right Level";

const DEFAULT_DESCRIPTION =
  "Setiap bulan properti premium Anda dibiarkan kosong, Anda sedang menelan kerugian. Berhenti membuang waktu meladeni ratusan pesan dari calon pembeli yang tidak serius, atau strategi promosi usang yang mengharuskan Anda banting harga. Properti Anda tidak butuh diskon—ia hanya butuh dilihat oleh mata yang tepat. Serahkan kerumitannya pada kami, dan mari buat properti Anda bernilai sebagaimana mestinya.";

const defaultButtons: CtaButtonProps[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    icon: <FaWhatsapp size={20} />,
    variant: "primary",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/chrisproperty",
    icon: <FaInstagram size={20} />,
    variant: "outline",
  },
];

export interface CallToActionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttons?: CtaButtonProps[];
  imageSrc?: string;
  imageAlt?: string;
  variant?: "default" | "center";
}

export function CallToAction({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  buttons = defaultButtons,
  imageSrc = "/cta-bg.png",
  imageAlt = "Premium property background",
  variant = "default"
}: CallToActionProps) {
  const renderButtons = (justifyClass = "justify-start") => {
    if (!buttons || buttons.length === 0) return null;
    return (
      <div className={`flex flex-wrap items-center gap-4 ${justifyClass}`}>
        {buttons.map((btn, index) => {
          const isPrimary = btn.variant === "primary";
          
          const primaryClasses = "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container";
          const outlineClasses = "border-2 border-white text-white hover:bg-white hover:text-on-background";
          
          const className = `inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 ease-in-out hover:-translate-y-[2px] active:translate-y-0 ${
            isPrimary ? primaryClasses : outlineClasses
          }`;

          return (
            <a
              key={index}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {btn.icon && btn.icon}
              {btn.label}
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-on-background/40" />

      {/* Content */}
      {variant === "default" ? (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-[68px] py-section">
          {/* Left — Title */}
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              {title}
            </h2>
          </div>

          {/* Right — Description & Actions */}
          <div className="flex flex-col justify-center gap-8">
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              {description}
            </p>
            {renderButtons("justify-start")}
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-[68px] py-section max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>

          {/* Sub heading (description) */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-2">
            {renderButtons("justify-center")}
          </div>
        </div>
      )}
    </section>
  );
}
