"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface DetailPropertyProps {
  images: string[];
  price: string;
  address: string;
  beds: string;
  area: string;
}

export function DetailProperty({ images, price, address, beds, area }: DetailPropertyProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // We need at least 5 images for this specific bento grid layout
  const mainImage = images[0] || "/placeholder-main.jpg";
  const smallImages = images.slice(1, 5); 
  
  // Unified array for the modal
  const displayImages = [mainImage, ...smallImages.map((src, i) => src || `/placeholder-${i}.jpg`)];

  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? displayImages.length - 1 : prev - 1) : null));
  };
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === displayImages.length - 1 ? 0 : prev + 1) : null));
  };

  // Handle keyboard navigation for better UX/Accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? displayImages.length - 1 : prev - 1) : null));
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null ? (prev === displayImages.length - 1 ? 0 : prev + 1) : null));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, displayImages.length]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndex]);

  return (
    <section className="w-full bg-background flex flex-col gap-8 relative">
      {/* GALLERY GRID (BENTO BOX LAYOUT) */}
      <div className="w-full flex flex-col lg:flex-row gap-4 h-auto lg:h-[550px]">
        {/* Kiri: Main Image (mengambil 60% lebar di desktop) */}
        <div 
          className="w-full lg:w-[60%] h-[350px] lg:h-full relative rounded-xl overflow-hidden group cursor-pointer"
          onClick={() => setSelectedIndex(0)}
        >
          <Image
            src={mainImage}
            alt="Main Property View"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Kanan: 4 Gambar Kecil (mengambil 40% lebar, dibagi jadi grid 2x2) */}
        <div className="w-full lg:w-[40%] h-[400px] lg:h-full grid grid-cols-2 grid-rows-2 gap-4">
          {smallImages.map((src, index) => (
            <div 
              key={index} 
              className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedIndex(index + 1)}
            >
              <Image
                src={src || `/placeholder-${index}.jpg`}
                alt={`Property View ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* INFO BANNER DI BAWAH GAMBAR */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-6">
        {/* Kiri: Harga dan Alamat */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-on-background tracking-tight">
            {price}
          </h1>
          <p className="text-on-surface-variant text-base">
            {address}
          </p>
        </div>

        {/* Kanan: Spesifikasi Utama (Beds, Area) */}
        <div className="flex items-center gap-8 md:gap-12 text-on-background">

          {/* Badrooms */}
          <div className="flex flex-col">
            <span className=" font-medium text-sm mb-1">Bedrooms</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium">{beds}</span>
            </div>
          </div>
          
          <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />

            {/* Bathrooms  */}
          <div className="flex flex-col">
            <span className=" font-medium text-sm mb-1">Bathrooms</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium">{beds}</span>
            </div>
          </div>
          
          <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />
          
          <div className="flex flex-col">
            <span className="font-medium text-sm mb-1">Sq.Ft.</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium">{area}</span>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX / IMAGE MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={closeModal}>
          
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-50"
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
          >
            <FiX size={24} />
          </button>

          {/* Prev Navigation */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all z-50"
            onClick={showPrev}
          >
            <FiChevronLeft size={32} />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={displayImages[selectedIndex]}
              alt={`Property detail ${selectedIndex}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Navigation */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all z-50"
            onClick={showNext}
          >
            <FiChevronRight size={32} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full font-medium tracking-wide">
            {selectedIndex + 1} / {displayImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
