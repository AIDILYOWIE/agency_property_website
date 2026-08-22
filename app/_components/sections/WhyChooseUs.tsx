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

export interface WhyChooseUsFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultFeatures: WhyChooseUsFeature[] = [
  {
    icon: <FiKey />,
    title: "Access to premium marketplaces",
    description: "(OLX, Rumah123)",
  },
  {
    icon: <FiLayout />,
    title: "Clean & professional",
    description: "Listing presentation",
  },
  {
    icon: <FiTarget />,
    title: "Exposure to end-users",
    description: "& trusted agent network",
  },
  {
    icon: <FiSlash />,
    title: "No commission",
    description: "(for slot-based)",
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

interface WhyChooseUsProps {
  id?: string;
  label?: string;
  title?: string;
  items?: WhyChooseUsFeature[];
}

export function WhyChooseUs({
  id,
  label = "Our Advantages",
  title = "Why Chris Property Signature",
  items = defaultFeatures,
}: WhyChooseUsProps) {
  return (
    <section id={id} className="w-full py-section">
      <div className="">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-on-background">
            {title}
          </h2>
        </div>

        {/* Features Grid - 3 Columns, 2 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
