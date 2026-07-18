import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export interface ShowcaseItemData {
  /** Optional badge label (e.g., "EXCLUSIVE") */
  badge?: string;
  /** Main heading */
  title: string;
  /** Secondary description text */
  subtitle: string;
  /** Optional label above the points list (e.g., "Channels:") */
  pointsLabel?: string;
  /** Array of bullet-point strings (key points or channels) */
  points: string[];
  /** CTA button text */
  cta: string;
  /** Optional CTA link href */
  ctaHref?: string;
  /** Optional suitability / category text (e.g., "Vila · Premium Houses") */
  suitable?: string;
  /** Image path for the sticky panel (desktop) and inline display (mobile) */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Background color for the full-section background layer */
  bgColor: string;
}

interface ScrollShowcaseItemProps {
  data: ShowcaseItemData;
  index: number;
  isActive: boolean;
  /** Whether this item uses the dark (primary) background */
  isDark: boolean;
  /** Ref callback for IntersectionObserver registration */
  itemRef: (el: HTMLDivElement | null) => void;
}

export function ScrollShowcaseItem({
  data,
  index,
  isActive,
  isDark,
  itemRef,
}: ScrollShowcaseItemProps) {
  const textColor = isDark ? "text-white" : "text-on-background";
  const subtitleColor = isDark ? "text-white/70" : "text-on-surface-variant";
  const pointColor = "text-on-surface-variant";
  const bulletColor = "bg-on-surface-variant";
  const borderColor = isDark
    ? "border-white/20"
    : "border-outline-variant/40";

  return (
    <div
      ref={itemRef}
      data-index={index}
      className={`
        min-h-[80vh] flex items-center
        transition-opacity duration-500 ease-out  
        ${isActive ? "opacity-100" : "opacity-40"}
      `}
    >
      <div className="w-full py-12 lg:py-16">
        {/* Badge */}
        {data.badge && (
          <span
            className={`
              inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5
              ${isDark
                ? "bg-white/15 text-white border border-white/25"
                : "bg-primary/10 text-primary border border-primary/20"
              }
            `}
          >
            {data.badge}
          </span>
        )}

        {/* Title */}
        <h3
          className={`text-2xl lg:text-3xl font-bold leading-tight mb-3 ${textColor}`}
        >
          {data.title}
        </h3>

        {/* Subtitle */}
        <p className={`text-base lg:text-lg mb-6 ${subtitleColor}`}>
          {data.subtitle}
        </p>

        {/* Points Label */}
        {data.pointsLabel && (
          <p
            className={`text-sm font-semibold uppercase tracking-wider mb-3 text-on-surface-variant`}
          >
            {data.pointsLabel}
          </p>
        )}

        {/* Points List */}
        <ul className="space-y-3 mb-8">
          {data.points.map((point, i) => (
            <li key={i} className={`flex items-start gap-3`}>
              <span
                className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${bulletColor}`}
              />
              <span className="text-sm lg:text-base leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={isDark ? "secondary" : "primary"}
          className={
            isDark
              ? "bg-white text-primary hover:bg-white/90 hover:text-primary-container"
              : ""
          }
          {...(data.ctaHref
            ? { href: data.ctaHref, target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {data.cta}
        </Button>

        {/* Suitable */}
        {data.suitable && (
          <p
            className={`mt-5 text-xs font-medium tracking-wide ${
              isDark ? "text-white/50" : "text-outline"
            }`}
          >
            {data.suitable}
          </p>
        )}

        {/* Mobile Image — visible only on small screens */}
        <div
          className={`
            mt-8 lg:hidden relative w-full aspect-[4/3] rounded-xl overflow-hidden
            border ${borderColor}
          `}
        >
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw"
          />
        </div>
      </div>
    </div>
  );
}
