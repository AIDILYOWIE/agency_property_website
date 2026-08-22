"use client";

import React, { useState, useMemo, useCallback } from "react";
import { SearchField } from "@/app/_components/ui/SearchField";
import { Select } from "@/app/_components/ui/Select";
import { PropertyList } from "./PropertyList";
import type { Property } from "@/lib/data/properties";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { Button } from "@/app/_components/ui/Button";

interface FilterState {
    beds: string;
    baths: string;
    minArea: string;
    maxArea: string;
    minPrice: string;
    maxPrice: string;
    type: "Semua" | "For Sale" | "For Rent";
    category: string;
}

const DEFAULT_FILTERS: FilterState = {
    beds: "",
    baths: "",
    minArea: "",
    maxArea: "",
    minPrice: "",
    maxPrice: "",
    type: "Semua",
    category: "Semua",
};

const CATEGORIES = [
    "Semua",
    "Villa",
    "House",
    "Land",
    "Apartment",
    "Commercial",
];

interface PortfolioClientProps {
    properties: (Property & { href: string })[];
}

// Helper: parse numeric from area string e.g. "1.200 m²" → 1200
function parseArea(areaStr: string): number {
    if (!areaStr || areaStr === "-") return 0;
    return parseFloat(areaStr.replace(/[^0-9,]/g, "").replace(",", ".")) || 0;
}

export function PortfolioClient({ properties }: PortfolioClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
    const [pendingFilters, setPendingFilters] =
        useState<FilterState>(DEFAULT_FILTERS);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const inputStyles =
        "w-full bg-outline-variant/20 rounded-xl px-4 py-3 outline-none focus:ring-0 transition-all text-on-background placeholder:text-on-surface-variant/70";

    // Counts active (non-default) filters to show indicator
    const activeFilterCount = useMemo(() => {
        const f = filters;
        let count = 0;
        if (f.beds) count++;
        if (f.baths) count++;
        if (f.minArea || f.maxArea) count++;
        if (f.minPrice || f.maxPrice) count++;
        if (f.type !== "Semua") count++;
        if (f.category !== "Semua") count++;
        return count;
    }, [filters]);

    const filteredProperties = useMemo(() => {
        return properties.filter((p) => {
            // 1. Text search: title or location
            const q = searchQuery.toLowerCase().trim();
            if (q) {
                const matchText =
                    p.title.toLowerCase().includes(q) ||
                    p.location.toLowerCase().includes(q);
                if (!matchText) return false;
            }

            // 2. Category (from desktop Select)
            const activeCat =
                selectedCategory !== "Semua" ? selectedCategory : filters.category;
            if (activeCat && activeCat !== "Semua") {
                if (p.category !== activeCat) return false;
            }

            // 3. Beds
            if (filters.beds && p.beds && p.beds !== "-") {
                if (parseInt(p.beds) < parseInt(filters.beds)) return false;
            }

            // 4. Baths
            if (filters.baths && p.baths && p.baths !== "-") {
                if (parseInt(p.baths) < parseInt(filters.baths)) return false;
            }

            // 5. Area range
            const area = parseArea(p.area);
            if (filters.minArea && area < parseFloat(filters.minArea)) return false;
            if (filters.maxArea && area > parseFloat(filters.maxArea)) return false;

            // 6. Price range (in millions IDR)
            const priceInMillions = p.priceNumeric / 1_000_000;
            if (
                filters.minPrice &&
                priceInMillions < parseFloat(filters.minPrice)
            )
                return false;
            if (
                filters.maxPrice &&
                priceInMillions > parseFloat(filters.maxPrice)
            )
                return false;

            // 7. Property type (For Sale / For Rent)
            if (filters.type !== "Semua") {
                if (p.property_type !== filters.type) return false;
            }

            return true;
        });
    }, [properties, searchQuery, selectedCategory, filters]);

    const handleApplyFilters = useCallback(() => {
        setFilters(pendingFilters);
        setIsFilterOpen(false);
    }, [pendingFilters]);

    const handleResetFilters = useCallback(() => {
        setPendingFilters(DEFAULT_FILTERS);
        setFilters(DEFAULT_FILTERS);
        setSelectedCategory("Semua");
    }, []);

    return (
        <div className="flex flex-col gap-0">
            {/* ─── Search + Filter Bar ─── */}
            <div className="flex gap-2 w-full md:w-[70%] relative">
                {/* Advanced Filter Popover Trigger */}
                <div className="relative inline-flex items-center h-full">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`cursor-pointer flex-shrink-0 flex items-center justify-center h-full aspect-square rounded-full transition-all duration-300 min-h-[50px] min-w-[50px] ${isFilterOpen
                                ? "bg-primary text-on-primary"
                                : "bg-outline-variant/20 text-on-background"
                            }`}
                        aria-label="More filters"
                    >
                        <FiMoreVertical size={22} />
                        {activeFilterCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-background">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>

                    {/* Popover Panel */}
                    {isFilterOpen && (
                        <div className="absolute left-0 top-[calc(100%+0.75rem)] w-[360px] bg-surface-container-lowest border border-outline-variant/30 rounded-[1.5rem] shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-left">
                            <div className="px-6 py-5 border-b border-outline-variant/20 bg-surface-container-low/30 backdrop-blur-md flex items-start justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-on-background tracking-tight">
                                        Filter Lanjutan
                                    </h3>
                                    <p className="text-sm text-on-surface-variant mt-0.5">
                                        Sesuaikan pencarian properti Anda
                                    </p>
                                </div>
                                {activeFilterCount > 0 && (
                                    <button
                                        onClick={handleResetFilters}
                                        className="text-xs text-primary font-semibold hover:underline mt-1 flex items-center gap-1"
                                    >
                                        <FiX size={12} /> Reset
                                    </button>
                                )}
                            </div>

                            <div className="p-6 flex flex-col gap-6 max-h-[55vh] overflow-y-auto custom-scrollbar">
                                {/* 0. Kategori — Mobile only */}
                                <div className="space-y-2.5 md:hidden">
                                    <label className="text-sm font-semibold text-on-background">
                                        Kategori Properti
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {CATEGORIES.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() =>
                                                    setPendingFilters((prev) => ({
                                                        ...prev,
                                                        category: cat,
                                                    }))
                                                }
                                                className={`cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${pendingFilters.category === cat
                                                        ? "bg-primary text-on-primary border-primary"
                                                        : "bg-transparent text-on-surface-variant border-outline-variant/40 hover:border-primary/50 hover:text-on-background"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* 1. Jumlah Kamar */}
                                <div className="space-y-2.5">
                                    <label className="text-sm font-semibold text-on-background">
                                        Min. Kamar Tidur
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Contoh: 3"
                                        className={inputStyles}
                                        value={pendingFilters.beds}
                                        onChange={(e) =>
                                            setPendingFilters((prev) => ({
                                                ...prev,
                                                beds: e.target.value,
                                            }))
                                        }
                                    />
                                </div>

                                {/* 2. Jumlah Kamar Mandi */}
                                <div className="space-y-2.5">
                                    <label className="text-sm font-semibold text-on-background">
                                        Min. Kamar Mandi
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Contoh: 2"
                                        className={inputStyles}
                                        value={pendingFilters.baths}
                                        onChange={(e) =>
                                            setPendingFilters((prev) => ({
                                                ...prev,
                                                baths: e.target.value,
                                            }))
                                        }
                                    />
                                </div>

                                {/* 3. Luas */}
                                <div className="space-y-2.5">
                                    <label className="text-sm font-semibold text-on-background">
                                        Luas Bangunan (m²)
                                    </label>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3">
                                            <span className="text-sm text-on-surface-variant font-medium">
                                                Min
                                            </span>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="0"
                                                className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                                value={pendingFilters.minArea}
                                                onChange={(e) =>
                                                    setPendingFilters((prev) => ({
                                                        ...prev,
                                                        minArea: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                        <span className="text-on-surface-variant/50 font-bold">
                                            —
                                        </span>
                                        <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3">
                                            <span className="text-sm text-on-surface-variant font-medium">
                                                Max
                                            </span>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="∞"
                                                className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                                value={pendingFilters.maxArea}
                                                onChange={(e) =>
                                                    setPendingFilters((prev) => ({
                                                        ...prev,
                                                        maxArea: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Harga (juta Rp) */}
                                <div className="space-y-2.5">
                                    <label className="text-sm font-semibold text-on-background">
                                        Harga (Juta Rp)
                                    </label>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3">
                                            <span className="text-sm text-on-surface-variant font-medium">
                                                Min
                                            </span>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="0"
                                                className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                                value={pendingFilters.minPrice}
                                                onChange={(e) =>
                                                    setPendingFilters((prev) => ({
                                                        ...prev,
                                                        minPrice: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                        <span className="text-on-surface-variant/50 font-bold">
                                            —
                                        </span>
                                        <div className="flex flex-1 items-center gap-2 bg-outline-variant/20 rounded-xl px-4 py-3">
                                            <span className="text-sm text-on-surface-variant font-medium">
                                                Max
                                            </span>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="∞"
                                                className="w-full bg-transparent outline-none text-on-background placeholder:text-on-surface-variant/70 text-sm"
                                                value={pendingFilters.maxPrice}
                                                onChange={(e) =>
                                                    setPendingFilters((prev) => ({
                                                        ...prev,
                                                        maxPrice: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Tipe Properti */}
                                <div className="space-y-2.5">
                                    <label className="text-sm font-semibold text-on-background">
                                        Tipe Properti
                                    </label>
                                    <div className="flex gap-2 p-1.5 bg-outline-variant/15 rounded-xl border border-outline-variant/10">
                                        {(["Semua", "For Sale", "For Rent"] as const).map((t) => (
                                            <button
                                                key={t}
                                                onClick={() =>
                                                    setPendingFilters((prev) => ({ ...prev, type: t }))
                                                }
                                                className={`cursor-pointer flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${pendingFilters.type === t
                                                        ? "bg-surface-container-lowest text-on-background ring-1 ring-black/5"
                                                        : "text-on-surface-variant hover:text-on-background hover:bg-outline-variant/10"
                                                    }`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer CTA */}
                            <div className="p-6 border-t border-outline-variant/20 bg-surface-container-lowest">
                                <div className="flex gap-3">
                                    <Button variant="secondary" onClick={handleResetFilters}>
                                        Reset
                                    </Button>
                                    <Button className="flex-[2]" onClick={handleApplyFilters}>
                                        Terapkan Filter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search input */}
                <SearchField
                    placeholder="Cari properti, lokasi..."
                    className="flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Category — Desktop only */}
                <div className="hidden md:flex w-auto shrink-0">
                    <Select
                        placeholder="Kategori..."
                        value={selectedCategory}
                        onValueChange={(val) => setSelectedCategory(String(val))}
                        options={[
                            { value: "Semua", label: "Semua" },
                            { value: "Villa", label: "Villas" },
                            { value: "House", label: "Premium Houses" },
                            { value: "Land", label: "Strategic Land" },
                            { value: "Commercial", label: "Commercial Asset" },
                            { value: "Apartment", label: "Apartment" },
                        ]}
                    />
                </div>
            </div>

            {/* ─── Results Count ─── */}
            <p className="mt-4 text-sm text-on-surface-variant">
                Menampilkan{" "}
                <span className="font-semibold text-on-background">
                    {filteredProperties.length}
                </span>{" "}
                properti
                {(searchQuery || activeFilterCount > 0) && (
                    <button
                        onClick={handleResetFilters}
                        className="ml-2 text-primary font-medium hover:underline"
                    >
                        Hapus semua filter
                    </button>
                )}
            </p>

            {/* ─── Property Grid with Pagination ─── */}
            {filteredProperties.length > 0 ? (
                <PropertyList properties={filteredProperties} itemsPerPage={9} />
            ) : (
                <div className="mt-20 flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-outline-variant/20 flex items-center justify-center">
                        <FiMoreVertical size={28} className="text-on-surface-variant" />
                    </div>
                    <p className="text-on-surface-variant text-base">
                        Tidak ada properti yang cocok dengan filter Anda.
                    </p>
                    <Button variant="secondary" onClick={handleResetFilters}>
                        Reset Filter
                    </Button>
                </div>
            )}
        </div>
    );
}
