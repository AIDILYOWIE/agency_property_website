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
    title: "Submit Property Details",
    description:
      "The client (Owner/Agent/Developer) contacts us and submits initial property details (location, specifications, and price expectations) for our review.",
    icon: <BiMailSend size={28} className="text-primary" />,
    hasLine: true,
  },
  {
    title: "Review & Property Curation",
    description:
      "Our team reviews your property to ensure it meets Chris Property Signature standards. We only process quality properties (typically >IDR 1 Billion) to maintain the integrity of our listings.",
    icon: <LuNotebookPen size={28} className="text-primary" />,
    hasLine: true,
  },
  {
    title: "Professional Content & Positioning",
    description:
      "If approved, our team (or a creator for the 3-Slot package) will capture high-quality visuals and craft a positioning narrative to ensure your property looks premium and reaches the right audience.",
    icon: <LuCamera size={28} className="text-primary" />,
    hasLine: true,
  },
  {
    title: "Live on Premium Platforms",
    description:
      "Your listing is officially published across our premium channels (OLX Premium, Rumah123 Premium, Instagram, & Internal Network). We monitor engagement and filter quality leads.",
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
  label = "Process",
  title = "How We Work",
  cardType = "timeline",
  items = defaultTimelineSteps,
}: HowWeWorkProps) {
  return (
    <section className="w-full py-section bg-background">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-label-md text-on-background uppercase tracking-wider">
                {label}
              </span>
              <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-on-background">
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
