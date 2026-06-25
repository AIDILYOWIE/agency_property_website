import Image from "next/image";
import React from "react";

interface FeatureCardProps {
    name: string;
    jobTitle: string;
}

export function TestimoniCard({ name, jobTitle }: FeatureCardProps) {
    return (
        <div className="flex flex-col p-6 rounded-xl bg-white duration-300 w-[90vw] sm:w-[350px] md:w-[500px] shrink-0 snap-center">
            <div className="mb-6">
                <h3 className="text-xl font-medium text-on-background text-wrap" >
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempora. "
                </h3>
            </div>
            <div className="flex w-full items-center gap-3" >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black" >

                </div>
                <div className="flex flex-col" >
                    <h3 className="text-md font-semibold text-on-background">
                        {name}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        {jobTitle}
                    </p>
                </div>
            </div>
        </div>
    );
}
