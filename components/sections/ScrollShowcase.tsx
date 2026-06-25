"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  ScrollShowcaseItem,
  type ShowcaseItemData,
} from "../ui/ScrollShowcaseItem";

/* ─── Content Data ─────────────────────────────────────────────── */

const SHOWCASE_ITEMS: ShowcaseItemData[] = [
  {
    badge: "EXCLUSIVE",
    title: "Selective Promotion Program",
    subtitle: "Untuk properti di atas IDR 1 Miliar",
    points: [
      "Curated listings — no mass posting",
      "Professional property positioning",
      "Akses ke serious buyers & agent network",
      "Hands-on handling sampai transaksi",
      '"Not every property makes the list"',
    ],
    cta: "Kolaborasi",
    suitable: "Vila · Premium Houses · Strategic Land · Commercial",
    imageSrc: "/showcase/showcase-1.png",
    imageAlt: "Luxury Balinese villa with infinity pool — curated property listing",
    bgColor: "transparent",
  },
  {
    title: "Fixed Fee · No Commission · Maximum Exposure",
    subtitle: "Promosi terstruktur di platform premium",
    pointsLabel: "Channels:",
    points: [
      "OLX Premium Account",
      "Rumah123 Premium Profile",
      "Instagram @chrisproperty.signature",
      "Social media & internal distribution",
    ],
    cta: "Secure Slot",
    imageSrc: "/showcase/showcase-2.png",
    imageAlt: "Multi-platform property promotion across OLX, Rumah123, and social media",
    bgColor: "#002a81",
  },
];

/* ─── Component ────────────────────────────────────────────────── */

export function ScrollShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * Register item refs for IntersectionObserver.
   * Uses a stable callback via useCallback + closure over index.
   */
  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index ?? 0,
            );
            setActiveIndex(index);
          }
        }
      },
      {
        /* Item is "active" when its center crosses the viewport center */
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const isDark = (index: number) => index % 2 !== 0;

  return (
    <section
      ref={sectionRef}
      id="partnership-model"
      className="relative w-full"
    >
      {/* ── Background Layers ──────────────────────────────────── */}
      {SHOWCASE_ITEMS.map((item, index) => (
        <div
          key={`bg-${index}`}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none"
          style={{
            backgroundColor: item.bgColor,
            opacity: activeIndex === index ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Section Content ────────────────────────────────────── */}
      <div className="relative z-10 w-full py-section px-[68px] ">
        {/* Section Header */}
        {/* <div className="pt-section pb-8 lg:pb-12">
          <span
            className={`
              block text-sm font-semibold uppercase tracking-widest mb-3
              transition-colors duration-700
              ${isDark(activeIndex) ? "text-white/60" : "text-secondary"}
            `}
          >
            Partnership Model
          </span>
          <h2
            className={`
              text-3xl md:text-4xl lg:text-5xl font-bold leading-tight
              transition-colors duration-700
              ${isDark(activeIndex) ? "text-white" : "text-on-background"}
            `}
          >
            Dua Model Kolaborasi.
            <br />
            <span
              className={`transition-colors duration-700 ${isDark(activeIndex) ? "text-white/70" : "text-primary"
                }`}
            >
              Satu Standar Kualitas.
            </span>
          </h2>
        </div> */}

        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            PARTNERSHIP
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-background">
            Dua Model Kolaborasi
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row lg:gap-16 justify-between">

          {/* Right Column — Sticky Image Panel (desktop only) */}
          <div className="hidden lg:block lg:w-full ">
            <div className="sticky top-[15vh] h-[81vh]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {SHOWCASE_ITEMS.map((item, index) => (
                  <div
                    key={`img-${index}`}
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                    style={{ opacity: activeIndex === index ? 1 : 0 }}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw"
                      priority={index === 0}
                    />
                    {/* Subtle gradient overlay for depth */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, transparent 50%, rgba(0,0,0,0.12) 100%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left Column — Scrollable Content Items */}
          <div className="w-full lg:w-full">
            {SHOWCASE_ITEMS.map((item, index) => (
              <ScrollShowcaseItem
                key={index}
                data={item}
                index={index}
                isActive={activeIndex === index}
                isDark={isDark(index)}
                itemRef={setItemRef(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
