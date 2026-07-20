import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiBath, BiBed, BiLocationPlus, BiArea } from "react-icons/bi";

interface PortoCardProps {
    title: string;
    location: string;
    beds: string;
    baths: string;
    area: string;
    price: string;
    imageSrc: string;
    category: string;
    href?: string;
}

export function PortoCard({ title, location, beds, baths, area, price, imageSrc, category, href = "#" }: PortoCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden"
        >
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl ">
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 rounded-full items-center flex justify-center">
                    <span className="text-on-background text-sm font-semibold tracking-wide">{category}</span>
                </div>
                <Image
                    src={imageSrc || ""}
                    alt={title || ""}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="py-3 flex flex-col gap-2 flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-on-background line-clamp-2">
                    {title}
                </h3>
                <div className="flex flex-col w-full gap-2" >
                    <div className="flex h-max gap-1.5 w-full items-center" >
                        <BiLocationPlus size={18} className="!text-on-background shrink-0" />
                        <p className="text-on-background text-sm md:text-base font-medium truncate" >{location}</p>
                    </div>
                    <div className="flex flex-wrap w-full gap-x-3 gap-y-2 mt-1" >
                        <div className="flex h-max gap-1.5 items-center" >
                            <BiBed size={18} className="!text-on-background shrink-0" />
                            <p className="text-on-background text-sm font-medium whitespace-nowrap" >{beds}</p>
                        </div>
                        <div className="flex h-max gap-1.5 items-center" >
                            <BiBath size={18} className="!text-on-background shrink-0" />
                            <p className="text-on-background text-sm font-medium whitespace-nowrap" >{baths}</p>
                        </div>
                        <div className="flex h-max gap-1.5 items-center" >
                            <BiArea size={18} className="!text-on-background shrink-0" />
                            <p className="text-on-background text-sm font-medium whitespace-nowrap" >{area}</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-on-background mt-2">
                    {price}
                </h3>
            </div>
        </Link>
    );
}
