"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Button } from "./Button";

export const PropertyFilterPopover = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter states
    const [beds, setBeds] = useState<string>("");
    const [baths, setBaths] = useState<string>("");
    const [minArea, setMinArea] = useState<string>("");
    const [maxArea, setMaxArea] = useState<string>("");
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");
    const [type, setType] = useState<"Semua" | "Sewa" | "Jual">("Semua");

    const inputStyles = " w-full bg-outline-variant/20 rounded-xl px-4 py-3 outline-none focus:ring-0 transition-all text-on-background placeholder:text-on-surface-variant/70";
     
    return (
        <div className="relative inline-flex items-center h-full" ref={containerRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer flex-shrink-0 flex items-center justify-center h-full aspect-square rounded-full transition-all duration-300 min-h-[50px] min-w-[50px]
                ${isOpen 
                    ? 'bg-primary text-on-primary' 
                    : 'bg-outline-variant/20 text-on-background'}`}
                aria-label="More filters"
                title="Filter Lanjutan"
            >
                <FiMoreVertical size={22} />
            </button>

            {/* Popover */}
            {isOpen && (
                <div className="absolute left-0 top-[calc(100%+0.75rem)] w-[360px] bg-surface-container-lowest border border-outline-variant/30 rounded-[1.5rem] shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    
                    <div className="px-6 py-5 border-b border-outline-variant/20 bg-surface-container-low/30 backdrop-blur-md">
                        <h3 className="font-bold text-lg text-on-background tracking-tight">Filter Lanjutan</h3>
                        <p className="text-sm text-on-surface-variant mt-0.5">Sesuaikan pencarian properti Anda</p>
                    </div>
                    
                    <div className="p-6 flex flex-col gap-6 max-h-[55vh] overflow-y-auto custom-scrollbar">
                        
                        {/* 1. Jumlah Kamar */}
                        <div className="space-y-2.5">
                            <label className="text-sm font-semibold text-on-background ">Jumlah Kamar</label>
                            <input 
                            
                                type="number" 
                                min="0" 
                                placeholder="Contoh: 3"
                                className={inputStyles}
                                value={beds}
                                onChange={(e) => setBeds(e.target.value)}
                            />
                        </div>

                        {/* 2. Jumlah Kamar Mandi */}
                        <div className="space-y-2.5">
                            <label className="text-sm font-semibold text-on-background">Jumlah Kamar Mandi</label>
                            <input 
                                type="number" 
                                min="0" 
                                placeholder="Contoh: 2"
                                className={inputStyles}
                                value={baths}
                                onChange={(e) => setBaths(e.target.value)}
                            />
                        </div>

                        {/* 3. Luas Bangunan */}
                        <div className="space-y-2.5">
                            <label className="text-sm font-semibold text-on-background ">Luas Bangunan (m²)</label>
                            <div className="flex gap-3 items-center">
                                <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3 transition-all">
                                    <span className="text-sm text-on-surface-variant font-medium">Min</span>
                                    <input 
                                        type="number" 
                                        min="0"
                                        placeholder="0"
                                        className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                        value={minArea}
                                        onChange={(e) => setMinArea(e.target.value)}
                                    />
                                </div>
                                <span className="text-on-surface-variant/50 font-bold">-</span>
                                <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3 transition-all">
                                    <span className="text-sm text-on-surface-variant font-medium">Max</span>
                                    <input 
                                        type="number" 
                                        min="0"
                                        placeholder="Tak terhingga"
                                        className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                        value={maxArea}
                                        onChange={(e) => setMaxArea(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 4. Harga */}
                        <div className="space-y-2.5">
                            <label className="text-sm font-semibold text-on-background">Harga (Rp)</label>
                            <div className="flex gap-3 items-center">
                                <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3 transition-all">
                                    <span className="text-sm text-on-surface-variant font-medium">Min</span>
                                    <input 
                                        type="number" 
                                        min="0"
                                        placeholder="0 (Juta)"
                                        className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                </div>
                                <span className="text-on-surface-variant/50 font-bold">-</span>
                                <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3 transition-all">
                                    <span className="text-sm text-on-surface-variant font-medium">Max</span>
                                    <input 
                                        type="number" 
                                        min="0"
                                        placeholder="Tak terhingga"
                                        className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 5. Sewa / Jual */}
                        <div className="space-y-2.5">
                            <label className="text-sm font-semibold text-on-background">Tipe Properti</label>
                            <div className="flex gap-2 p-1.5 bg-outline-variant/15 rounded-xl border border-outline-variant/10">
                                {["Semua", "Sewa", "Jual"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setType(t as any)}
                                        className={` cursor-pointer flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${type === t ? 'bg-surface-container-lowest text-on-background ring-1 ring-black/5' : 'text-on-surface-variant hover:text-on-background hover:bg-outline-variant/10'}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="p-6 border-t border-outline-variant/20 bg-surface-container-lowest">
                        <div className="flex gap-3">
                            <Button 
                                variant="secondary"
                                onClick={() => {
                                    setBeds("");
                                    setBaths("");
                                    setMinArea("");
                                    setMaxArea("");
                                    setMinPrice("");
                                    setMaxPrice("");
                                    setType("Semua");
                                }}
                            >
                                Reset
                            </Button>
                            <Button 
                                className="flex-[2] "
                                onClick={() => setIsOpen(false)}
                            >
                                Terapkan Filter
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
