import React from "react";
import { Button } from "../ui/Button";
import { FiInfo } from "react-icons/fi";
import { PricingCard } from "../ui/PricingCard";

const PKG_1_SLOT_MSG = `Hello Chris Property Signature Team,

I am interested in purchasing the *Open Slot (1 Slot - IDR 499,000)* package to promote my property.

Here is a brief overview of my property:
- Name: [Your name]
- Asset Type: [Villa / Land / House]
- Location: [Area in Bali]

Please guide me through the payment and slot activation process.`;

const PKG_2_SLOT_MSG = `Hello Chris Property Signature Team,

I am interested in the *Open Slot (2 Slots - IDR 799,000)* package to extend the reach of my property promotion.

Here is a brief overview of my property:
- Name: [Your name]
- Asset Type: [Villa / Land / House]
- Location: [Area in Bali]

Please guide me through the payment and slot activation process.`;

const PKG_3_SLOT_MSG = `Hello Chris Property Signature Team,

I would like to take the *Open Slot (3 Slots - IDR 999,000)* package which includes *FREE Property Visit & Content Creation*.

Here is a brief overview of my property:
- Name: [Your name]
- Asset Type: [Villa / Land / House]
- Location: [Area in Bali]

When can the team schedule a visit to my property?`;

const createWaLink = (msg: string) =>
  `https://wa.me/6285183117165?text=${encodeURIComponent(msg)}`;

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
      buttonText: "Select",
      buttonHref: createWaLink(PKG_1_SLOT_MSG),
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "2 Slots",
      price: "IDR 799,000",
      features: [
        "OLX",
        "Rumah123",
        "Instagram",
        "Social",
      ],
      buttonText: "Select",
      buttonHref: createWaLink(PKG_2_SLOT_MSG),
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "3 Slots",
      price: "IDR 999,000",
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
      buttonText: "SELECT",
      buttonHref: createWaLink(PKG_3_SLOT_MSG),
      buttonVariant: "primary" as const,
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-section bg-background">
      <div className="">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Promotion Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-on-background">
            Flexible Pricing to Suit Your Needs
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonHref={plan.buttonHref}
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
