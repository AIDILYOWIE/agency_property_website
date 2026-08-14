import { Navbar } from "@/app/_components/layout/Navbar";
import { Hero } from "@/app/_components/sections/Hero";
import { SearchField } from "@/app/_components/ui/SearchField";
import { Select } from "@/app/_components/ui/Select";
import { PropertyFilterPopover } from "@/app/_components/ui/PropertyFilterPopover";
import { PropertyList } from "@/app/portfolio/_components/PropertyList";
import { getAllProperties } from "@/lib/data/properties";

// Source of truth: single import from the central data layer
const properties = getAllProperties().map((prop) => ({
    ...prop,
    href: `/portfolio/${prop.slug}`,
}));

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen" >
            <Navbar />
            <div className="flex flex-col px-page">
                <Hero headline={
                    <>
                        Not Every Property Makes Our List
                    </>
                } description="We select hundreds of properties in Bali, but only those meeting premium standards are featured here. Explore our exclusive collection of curated assets for your luxury residential or investment needs."
                    isCtaButton={false}
                />

                <section className="w-full py-section" >
                    {/* Search and filter property */}
                    <div className="flex gap-2 w-full md:w-[70%]">
                        <PropertyFilterPopover />
                        <SearchField placeholder="Search properties..." className="flex-1" />

                        {/* category filter — visible on tablet and above */}
                        <div className="hidden md:flex w-auto shrink-0">
                            <Select placeholder="Category..." options={[
                                { value: "", label: "Category" },
                                { value: "villas", label: "Villas" },
                                { value: "premium-houses", label: "Premium Houses" },
                                { value: "strategic-land", label: "Strategic Land" },
                                { value: "commercial-asset", label: "Commercial Asset" },
                            ]} />
                        </div>
                    </div>

                    {/* Property cards with pagination */}
                    <PropertyList properties={properties} itemsPerPage={10} />
                </section>
            </div>
        </div>
    )
}

