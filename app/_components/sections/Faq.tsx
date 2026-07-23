import React from "react";
import { TestimoniCard } from "../ui/TestimoniCard";
import { FaqCard } from "../ui/FaqCard";

interface FaqProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function Faq({ faqs }: FaqProps) {
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
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
            FAQ 
          </span>
          <h2 className="text-3xl font-cinzel md:text-4xl font-semibold text-on-background">
            Clear Answers To Common Questions
          </h2>
        </div>

        {/* FAQ Cards */}
        <div 
          className="flex flex-col gap-4 w-full"
        >
          {faqs.map((faq, index) => (
            <FaqCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
