import React from "react";
import { Button } from "../ui/Button";
import { FiInfo } from "react-icons/fi";
import { PricingCard } from "../ui/PricingCard";

const PKG_1_SLOT_MSG = `Halo Tim Chris Property Signature,

Saya tertarik untuk membeli paket *Open Slot (1 Slot - IDR 499.000)* untuk mempromosikan properti saya.

Berikut data singkat properti saya:
- Nama: [Isi nama Anda]
- Tipe Aset: [Villa / Tanah / Rumah]
- Lokasi: [Area di Bali]

Mohon panduan untuk proses pembayaran dan aktivasi slot ini.`;

const PKG_2_SLOT_MSG = `Halo Tim Chris Property Signature,

Saya tertarik untuk mengambil paket *Open Slot (2 Slot - IDR 799.000)* agar jangkauan promosi properti saya lebih luas.

Berikut data singkat properti saya:
- Nama: [Isi nama Anda]
- Tipe Aset: [Villa / Tanah / Rumah]
- Lokasi: [Area di Bali]

Mohon panduan untuk proses pembayaran dan aktivasi slot ini.`;

const PKG_3_SLOT_MSG = `Halo Tim Chris Property Signature,

Saya ingin mengambil paket *Open Slot (3 Slot - IDR 999.000)* yang sudah termasuk *FREE Property Visit & Content Creation*.

Berikut data singkat properti saya:
- Nama: [Isi nama Anda]
- Tipe Aset: [Villa / Tanah / Rumah]
- Lokasi: [Area di Bali]

Kapan tim bisa menjadwalkan kunjungan (visit) ke properti saya?`;

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
      buttonText: "Pilih",
      buttonHref: createWaLink(PKG_1_SLOT_MSG),
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
      buttonHref: createWaLink(PKG_2_SLOT_MSG),
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
      buttonHref: createWaLink(PKG_3_SLOT_MSG),
      buttonVariant: "primary" as const,
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-section bg-background">
      <div className="px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Paket Promosi
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-background">
            Harga Fleksible Sesuai Kebutuhan
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
