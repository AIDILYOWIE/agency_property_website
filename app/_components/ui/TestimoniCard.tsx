import Image from "next/image";
import React from "react";

interface FeatureCardProps {
    name: string;
    jobTitle: string;
}

export function TestimoniCard({ name, jobTitle }: FeatureCardProps) {
    return (
        <div className="flex flex-col p-4 sm:p-6 rounded-xl bg-white duration-300 w-[82vw] sm:w-[350px] md:w-[500px] shrink-0 snap-center">
            <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-xl font-medium text-on-background leading-relaxed" >
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempora. "
                </h3>
            </div>
            <div className="flex w-full items-center gap-3" >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-black shrink-0" >

                </div>
                <div className="flex flex-col min-w-0" >
                    <h3 className="text-sm sm:text-base font-semibold text-on-background truncate">
                        {name}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed truncate">
                        {jobTitle}
                    </p>
                </div>
            </div>
        </div>
    );
}
