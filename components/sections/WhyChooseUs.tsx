import React from "react";
import { FeatureCard } from "../ui/FeatureCard";
import {
  FiKey,
  FiLayout,
  FiTarget,
  FiSlash,
  FiBarChart2,
  FiStar
} from "react-icons/fi";

export function WhyChooseUs() {
  const features = [
    {
      icon: <FiKey />,
      title: "Akses ke premium marketplace",
      description: "(OLX, Rumah123)",
    },
    {
      icon: <FiLayout />,
      title: "Clean & professional",
      description: "Listing presentation",
    },
    {
      icon: <FiTarget />,
      title: "Exposure ke end-users",
      description: "& trusted agent network",
    },
    {
      icon: <FiSlash />,
      title: "No commission",
      description: "(untuk slot-based)",
    },
    {
      icon: <FiBarChart2 />,
      title: "Clear process",
      description: "Transparent pricing",
    },
    {
      icon: <FiStar />,
      title: "Curated listings",
      description: "No mass posting",
    },
  ];

  return (
    <section className="w-full py-section">
      <div className="">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-on-background">
            Why Chris Property Signature
          </h2>
        </div>

        {/* Features Grid - 3 Columns, 2 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
