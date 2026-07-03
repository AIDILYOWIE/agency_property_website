import React from "react";
import { Button } from "./Button";
import { FiCheck } from "react-icons/fi";

export interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  highlight?: boolean;
  badge?: string;
}

export function PricingCard({
  name,
  price,
  features,
  buttonText,
  buttonVariant = "outline",
  highlight = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col relative rounded-xl p-8 transition-all duration-300 ${
        highlight
          ? "bg-white/40 border-1 border-on-background md:scale-[1.02] z-10"
          : "bg-white/40"
      }`}
    >
      {/* Highlight Badge */}
      {highlight && badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-on-background text-on-primary text-xs font-bold tracking-widest px-4 py-1 rounded-full shadow-sm">
          {badge}
        </div>
      )}

      {/* Card Header */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-on-background mb-4">{name}</h3>
        <div className="flex items-center justify-center">
          <span className="text-3xl lg:text-4xl font-extrabold text-primary">
            {price}
          </span>
        </div>
      </div>

      {/* Features List */}
      <div className="flex-grow mb-8">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-on-background/10 text-on-background">
                <FiCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-body-md text-on-background font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card CTA */}
      <div className="mt-auto">
        <Button
          variant="primary"
          className="w-full justify-center font-bold tracking-wider py-3"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
