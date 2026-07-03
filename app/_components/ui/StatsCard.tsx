import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

interface CategoryCardProps {
    title: string;
    description: string;
    imageSrc: string;
    href?: string;
    className?: string;
    titleStyle?: string;
    descStyle?: string;
    contentStyle?: string;
    icon?: React.ReactNode;
}

export function StatsCard({ title, description, imageSrc, href = "#", className, titleStyle, descStyle, contentStyle }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden "
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
            <div className={`py-3 flex flex-col text-center u gap-1 flex-grow ${contentStyle}`}>
                <div className="flex w-full gap-0 h-max items-center justify-center">
                    <h3 className={`text-6xl font-medium text-on-background `}>
                        {title}
                    </h3>
                    <BiPlus size={52} color="!text-on-background" />
                </div>
                <p className={`text-body-md text-on-surface-variant ${descStyle} `}>
                    {description}
                </p>
            </div>
        </Link>
    );
}
