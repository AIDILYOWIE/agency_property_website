import React from "react";
import { BiMailSend } from "react-icons/bi";
import { LuNotebookPen, LuCamera } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";
import { FeatureCard } from "../ui/FeatureCard";

export type HowWeWorkCardType = "timeline" | "secondary";

export interface HowWeWorkItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  // Props specific for timeline type
  hasLine?: boolean;
}

const defaultTimelineSteps: HowWeWorkItem[] = [
  {
    title: "Kirim Detail Property",
    description:
      "Klien (Owner/Agent/Developer) menghubungi kami dan mengirimkan detail awal properti (lokasi, spesifikasi, dan ekspektasi harga) untuk kami pelajari.",
    icon: <BiMailSend size={28} className="text-primary" />,
    hasLine: true,
  },
  {
    title: "Review & Kurasi Property",
    description:
      "Tim kami meninjau properti Anda untuk memastikan kesesuaian dengan standar Chris Property Signature. Kami hanya memproses properti berkualitas (biasanya >IDR 1 Miliar) agar reputasi listing tetap terjaga.",
    icon: <LuNotebookPen size={28} className="text-primary" />,
    hasLine: true,
  },
  {
    title: "Content & Positioning Profesional",
    description:
      "Jika disetujui, tim kami (atau creator jika mengambil paket 3 Slot) akan mengambil visual berkualitas tinggi dan merancang narasi positioning agar properti Anda terlihat premium dan tepat sasaran.",
    icon: <LuCamera size={28} className="text-primary" />,
    hasLine: true,
  },
  {
    title: "Live di Platform Premium",
    description:
      "Listing Anda secara resmi ditayangkan di saluran premium kami (OLX Premium, Rumah123 Premium, Instagram, & Jaringan Internal). Kami memantau engagement dan menyaring leads yang berkualitas.",
    icon: <FiGlobe size={28} className="text-primary" />,
    hasLine: false,
  },
];

interface HowWeWorkProps {
  label?: string;
  title?: React.ReactNode;
  cardType?: HowWeWorkCardType;
  items?: HowWeWorkItem[];
}

export function HowWeWork({
  label = "Proses",
  title = "Bagaimana Kami Bekerja",
  cardType = "timeline",
  items = defaultTimelineSteps,
}: HowWeWorkProps) {
  return (
    <section className="w-full py-section bg-background">
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-label-md text-on-background uppercase tracking-wider">
                {label}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-on-background">
                {title}
              </h2>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={
              cardType === "secondary"
                ? "grid grid-cols-1 gap-8"
                : "flex flex-col"
            }
          >
            {items.map((step, index) => {
              if (cardType === "secondary") {
                return (
                  <FeatureCard
                    key={index}
                    icon={step.icon || <div />}
                    title={step.title}
                    description={step.description}
                  />
                );
              }

              // Timeline Type (Default)
              return (
                <div key={index} className="flex gap-4">
                  {/* Icon + Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {step.icon}
                    </div>
                    {step.hasLine && (
                      <div className="w-0.5 flex-1 min-h-[80px] bg-on-background my-2 " />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-2 ${step.hasLine ? "pb-10" : ""}`}>
                    <h3 className="text-xl font-bold text-on-background">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
