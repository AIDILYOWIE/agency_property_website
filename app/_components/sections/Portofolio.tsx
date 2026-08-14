import React from "react";
import { Button } from "../ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { PortoCard } from "../ui/PortoCard";
import { getFeaturedProperties } from "@/lib/data/properties";

export function Portofolio() {
  const properties = getFeaturedProperties();

  return (
    <section className="w-full py-section bg-background">
      <div className="">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-on-background">
            Curated Exclusive & Premium Properties
          </h2>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {properties.map((property, index) => (
            <PortoCard
              href={`/portfolio/${property.slug}`}
              key={index}
              title={property.title}
              location={property.location}
              status={property.status}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
              price={property.price}
              imageSrc={property.imageSrc}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portfolio" variant="primary" className="flex items-center gap-2 px-8 py-3 font-bold text-sm tracking-wide">
            Explore More <FiArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
