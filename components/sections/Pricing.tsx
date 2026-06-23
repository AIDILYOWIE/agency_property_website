import React from "react";
import { Button } from "../ui/Button";
import { FiInfo } from "react-icons/fi";
import { PricingCard } from "../ui/PricingCard";

export function Pricing() {
  const plans = [
    {
      name: "1 Slot",
      price: "IDR 499.000",
      features: [
        "OLX",
        "Rumah123",
        "Instagram",
        "Social",
      ],
      buttonText: "Pilih",
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "2 Slots",
      price: "IDR 799.000",
      features: [
        "OLX",
        "Rumah123",
        "Instagram",
        "Social",
      ],
      buttonText: "Pilih",
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "3 Slots",
      price: "IDR 999.000",
      badge: "BEST VALUE",
      features: [
        "OLX",
        "Rumah123",
        "Instagram",
        "Social",
        "FREE Visit",
        "FREE Cont.",
        "Creator",
      ],
      buttonText: "PILIH",
      buttonVariant: "primary" as const,
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-section bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-on-background">
            Property Categories
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              highlight={plan.highlight}
              badge={plan.badge}
            />
          ))}
        </div>

        {/* Add-on Banner
        <div className="mt-12 bg-white border border-outline-variant/30 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/20 text-primary">
              <FiInfo className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-on-background">
                Add-on: Property Visit
              </h4>
              <p className="text-body-md text-on-surface-variant mt-0.5">
                IDR 1.000.000/properti <span className="text-sm text-outline">(jika tidak menggunakan paket Open Slot)</span>
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full md:w-auto font-bold py-2.5 px-6">
            Tambah Add-on
          </Button>
        </div> */}
      </div>
    </section>
  );
}
