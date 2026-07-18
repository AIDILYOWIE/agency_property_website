import React from "react";
import { Button } from "../ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { PortoCard } from "../ui/PortoCard";

export function Portofolio() {
  const properties = [
    {
      title: "Luxury Private Villa",
      location: "Uluwatu, Bali",
      category: "Villas",
      beds: "5 Kamar",
      baths: "4 Kamar Mandi",
      area: "1200 m2",
      price: "Rp 15.000.000.000",
      imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
      title: "Modern Family House",
      location: "Jakarta Selatan",
      category: "Premium Houses",
      beds: "4 Kamar",
      baths: "3 Kamar Mandi",
      area: "450 m2",
      price: "Rp 8.500.000.000",
      imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
      title: "Premium Commercial Land",
      location: "PIK 2, Tangerang",
      category: "Strategic Land",
      beds: "-",
      baths: "-",
      area: "2500 m2",
      price: "Rp 25.000.000.000",
      imageSrc: "/categories/cat_apartment_1781867600595.png",
    },
    {
      title: "Office Space Tower",
      location: "SCBD, Jakarta",
      category: "Commercial Asset",
      beds: "-",
      baths: "2 Kamar Mandi",
      area: "800 m2",
      price: "Rp 12.000.000.000",
      imageSrc: "/categories/cat_commercial_1781867628891.png",
    },
    {
      title: "Ocean View Villa",
      location: "Seminyak, Bali",
      category: "Villas",
      beds: "3 Kamar",
      baths: "3 Kamar Mandi",
      area: "850 m2",
      price: "Rp 9.000.000.000",
      imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
      title: "Minimalist Townhouse",
      location: "BSD City, Tangerang",
      category: "Premium Houses",
      beds: "3 Kamar",
      baths: "2 Kamar Mandi",
      area: "200 m2",
      price: "Rp 3.200.000.000",
      imageSrc: "/categories/cat_house_1781867614978.png",
    },
  ];

  return (
    <section className="w-full py-section bg-background">
      <div className=" px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-background">
            Kurasi Properti Eksklusif & Premium
          </h2>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {properties.map((property, index) => {
            const slug = property.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <PortoCard
                href={`/portfolio/${slug}`}
                key={index}
              title={property.title}
              location={property.location}
              category={property.category}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
              price={property.price}
              imageSrc={property.imageSrc}
            />
            );
          })}
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
