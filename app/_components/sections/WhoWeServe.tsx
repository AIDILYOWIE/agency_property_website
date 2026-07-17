import React from "react";
import { CategoryCard } from "../ui/CategoryCard";

export function WhoWeServe() {
  const cards = [
    {
      title: "Property Owners & Agents",
      description: "Kami menaikkan nilai jual aset Anda melalui visual berkelas dan mendistribusikannya secara eksklusif hanya kepada jaringan pembeli serius. Lupakan prospek acak, serahkan kerumitan promosi kepada kami.",
      imageSrc: "/categories/cat_commercial_1781867628891.png",
    },
    {
      title: "Premium Buyers & Investors",
      description: "Berhentilah membuang waktu memilah iklan yang menyesatkan. Sebagai kurator Anda, kami menghadirkan portofolio aset dan lahan strategis terbaik di Bali, dipresentasikan secara transparan tanpa trik pemasaran.",
      imageSrc: "/categories/cat_villa_1781867581851.png",
    },
  ];

  return (
    <section className="w-full py-section bg-background">
      <div className="px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-background max-w-2xl">
            Partner Terpercaya untuk Pemilik Aset dan Investor Premium
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <CategoryCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
