import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

export function CategoryCard({ title, description, imageSrc, href = "#" }: CategoryCardProps) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
      
      {/* Content Section */}
      <div className="py-3 flex flex-col gap-1 flex-grow">
        <h3 className="text-2xl font-bold text-on-background">
          {title}
        </h3>
        <p className="text-body-md text-on-surface-variant">
          {description}
        </p>
      </div>
    </Link>
  );
}
