import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Button } from "../ui/Button";

export interface CtaButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outlineWhite" | "outline";
}

const DEFAULT_TITLE = "Let Your Property Speak at the Right Level";

const DEFAULT_DESCRIPTION =
  "Serahkan kerumitannya pada kami, dan mari buat properti Anda bernilai sebagaimana mestinya.";

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
    variant: "outlineWhite",
  },
];

export interface CallToActionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttons?: CtaButtonProps[];
  imageSrc?: string;
  imageAlt?: string;
  variant?: "default" | "center"
}

export function CallToAction({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  buttons = defaultButtons,
  imageSrc = "/cta-bg.png",
  imageAlt = "Premium property background",
  variant ,
}: CallToActionProps) {
  const renderButtons = (justifyClass = "justify-start") => {
    if (!buttons || buttons.length === 0) return null;
    return (
      <div className={`flex flex-wrap items-center gap-4 ${justifyClass}`}>
        {buttons.map((btn, index) => {
          
          // Use !important to override the default Button styles and preserve the exact original design

          const isExternal = btn.href.startsWith("http");

          return (
            <Button
              key={index}
              href={btn.href}
              variant={btn.variant}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-block"
            >
              {btn.icon && btn.icon}
              {btn.label}
            </Button>
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
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 px-page py-section">
          {/* Left — Title */}
          <div className="flex items-center">
            <h2 className="text-2xl font-cinzel md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              {title}
            </h2>
          </div>

          {/* Right — Description & Actions */}
          <div className="flex flex-col justify-center gap-6 md:gap-6">
            <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-row flex-wrap items-center gap-4">
              {buttons?.map((btn, index) => {
                const isExternal = btn.href.startsWith("http");
                return (
                  <Button
                    key={index}
                    href={btn.href}
                    variant={btn.variant}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-block"
                  >
                    {btn.icon && btn.icon}
                    {btn.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-page py-section max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-cinzel lg:text-5xl font-semibold text-white leading-tight tracking-tight">
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
