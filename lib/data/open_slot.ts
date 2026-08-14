type NameSlot = "1 Slot" | "2 Slots" | "3 Slots";

export interface openslot {
  id: number;
  name: NameSlot;
  price: string;
  features: string[];
  badge?: string;
}

export const Openslot: openslot[] = [
  {
    id: 1,
    name: "1 Slot",
    price: "IDR 499.000",
    features: ["OLX", "Rumah123", "Instagram", "Social"],
  },
  {
    id: 2,
    name: "2 Slots",
    price: "IDR 799.000",
    features: ["OLX", "Rumah123", "Instagram", "Social"],
  },
  {
    id: 3,
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
  },
];
