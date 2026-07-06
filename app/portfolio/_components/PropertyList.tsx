"use client";

import React, { useState, useMemo } from "react";
import { PortoCard } from "@/app/_components/ui/PortoCard";
import { Pagination } from "@/app/_components/ui/Pagination";

export interface PropertyItem {
    title: string;
    location: string;
    category: string;
    beds: string;
    baths: string;
    area: string;
    price: string;
    imageSrc: string;
    href?: string;
}

interface PropertyListProps {
    properties: PropertyItem[];
    itemsPerPage?: number;
}

export function PropertyList({ properties, itemsPerPage = 6 }: PropertyListProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(properties.length / itemsPerPage);

    const paginatedProperties = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return properties.slice(start, start + itemsPerPage);
    }, [properties, currentPage, itemsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of the property list smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* List card property */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-10">
                {paginatedProperties.map((property, index) => (
                    <PortoCard
                        key={`${property.title}-${index}`}
                        title={property.title}
                        location={property.location}
                        category={property.category}
                        beds={property.beds}
                        baths={property.baths}
                        area={property.area}
                        price={property.price}
                        imageSrc={property.imageSrc}
                        href={property.href}
                    />
                ))}
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                className="mt-12"
            />
        </>
    );
}
