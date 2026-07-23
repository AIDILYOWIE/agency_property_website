import React from "react";
import { CategoryCard } from "../ui/CategoryCard";

export function PropertyCategories() {
  const categories = [
    {
      title: "Villas",
      description: "Properties with stunning views and world-class amenities for a premium lifestyle",
      imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
      title: "Premium Houses",
      description: "Comfortable residences with modern design and strategic locations for your family's needs",
      imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
      title: "Strategic Land",
      description: "Premium land in exclusive locations, specially curated for high-ROI investment opportunities",
      imageSrc: "/categories/strattegic_land.png",
    },
    {
      title: "Commercial Asset",
      description: "Strategic locations with high value appreciation potential for future development",
      imageSrc: "/categories/cat_commercial_1781867628891.png",
    },
  ];

  return (
    <section className="w-full py-section">
      <div className="">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Categories
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
