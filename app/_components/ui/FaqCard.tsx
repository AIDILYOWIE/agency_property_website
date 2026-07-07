"use client";

import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

interface FaqCardProps {
    question: string;
    answer: string;
}

export function FaqCard({ question, answer }: FaqCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-none bg-white/40 w-[50%] h-max flex flex-col p-4 rounded-lg">
            {/* Header row (Clickable) */}
            <div 
                className="w-full flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="w-full">
                    <h2 className="text-lg font-medium text-on-background tracking-[.5]">
                        {question}
                    </h2>
                </div>
                <div className={`w-max items-center transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    {isOpen ? (
                        <BiMinus size={26} className="text-on-background" />
                    ) : (
                        <BiPlus size={26} className="text-on-background" />
                    )}
                </div>
            </div>

            {/* Answer body with grid animation */}
            <div 
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="pt-4">
                        <p className="text-on-surface-variant text-base leading-relaxed">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
