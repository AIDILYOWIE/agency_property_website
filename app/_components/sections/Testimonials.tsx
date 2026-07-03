import React from "react";
import { TestimoniCard } from "../ui/TestimoniCard";

export function Testimonials() {
  // Mock data for testimonials
  const testimonials = [
    {
      name: "Aidil Yowie",
      jobTitle: "CEO Of Faucon",
    },
    {
      name: "Sarah Jenkins",
      jobTitle: "Property Investor",
    },
    {
      name: "Michael Chen",
      jobTitle: "Real Estate Broker",
    },
    {
      name: "Budi Santoso",
      jobTitle: "Home Owner",
    },
  ];

  return (
    <section className="w-full py-section overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-background">
            What Our Clients Says
          </h2>
        </div>

        {/* Testimonial Cards - Horizontal Scroll */}
        <div 
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testi, index) => (
              <TestimoniCard key={index} name={testi.name} jobTitle={testi.jobTitle} />
          ))}
        </div>
      </div>
    </section>
  );
}
