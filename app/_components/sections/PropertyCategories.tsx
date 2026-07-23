import React from "react";
import { CategoryCard } from "../ui/CategoryCard";

export function PropertyCategories() {
  const categories = [
    {
      title: "Villas",
      description: "Properti dengan pemandangan menawan dan fasilitas kelas dunia untuk gaya hidup premium",
      imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
      title: "Premium Houses",
      description: "Hunian nyaman dengan desain modern dan lokasi strategis untuk kebutuhan keluarga Anda",
      imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
      title: "Strategic Land",
      description: "Lahan premium di lokasi eksklusif, dikurasi khusus untuk peluang investasi dengan ROI tinggi",
      imageSrc: "/categories/strattegic_land.png",
    },
    {
      title: "Commercial Asset",
      description: "Lokasi strategis dengan potensi apresiasi nilai tinggi untuk pengembangan masa depan",
      imageSrc: "/categories/cat_commercial_1781867628891.png",
    },
  ];

  return (
    <section className="w-full py-section">
      <div className="">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Kategori
          </span>
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-on-background">
            Property Categories
          </h2>
        </div>

        {/* Categories Grid - 4 Columns Horizontal */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageSrc={category.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
