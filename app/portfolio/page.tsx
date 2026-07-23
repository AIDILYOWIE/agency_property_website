import { Navbar } from "@/app/_components/layout/Navbar";
import { Hero } from "@/app/_components/sections/Hero";
import { SearchField } from "@/app/_components/ui/SearchField";
import { Select } from "@/app/_components/ui/Select";
import { PropertyFilterPopover } from "@/app/_components/ui/PropertyFilterPopover";
import { PropertyList } from "@/app/portfolio/_components/PropertyList";

const propertiesData = [
    {
        title: "Luxury Private Villa",
        location: "Uluwatu, Bali",
        category: "Villas",
        beds: "5 Bedrooms",
        baths: "4 Bathrooms",
        area: "1200 m2",
        price: "Rp 15,000,000,000",
        imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
        title: "Modern Family House",
        location: "South Jakarta",
        category: "Premium Houses",
        beds: "4 Bedrooms",
        baths: "3 Bathrooms",
        area: "450 m2",
        price: "Rp 8,500,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Premium Commercial Land",
        location: "PIK 2, Tangerang",
        category: "Strategic Land",
        beds: "-",
        baths: "-",
        area: "2500 m2",
        price: "Rp 25,000,000,000",
        imageSrc: "/categories/cat_apartment_1781867600595.png",
    },
    {
        title: "Office Space Tower",
        location: "SCBD, Jakarta",
        category: "Commercial Asset",
        beds: "-",
        baths: "2 Bathrooms",
        area: "800 m2",
        price: "Rp 12,000,000,000",
        imageSrc: "/categories/cat_commercial_1781867628891.png",
    },
    {
        title: "Ocean View Villa",
        location: "Seminyak, Bali",
        category: "Villas",
        beds: "3 Bedrooms",
        baths: "3 Bathrooms",
        area: "850 m2",
        price: "Rp 9,000,000,000",
        imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Bedrooms",
        baths: "2 Bathrooms",
        area: "200 m2",
        price: "Rp 3,200,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse 2",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Bedrooms",
        baths: "2 Bathrooms",
        area: "200 m2",
        price: "Rp 3,200,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse 3",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Bedrooms",
        baths: "2 Bathrooms",
        area: "200 m2",
        price: "Rp 3,200,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse 4",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Bedrooms",
        baths: "2 Bathrooms",
        area: "200 m2",
        price: "Rp 3,200,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse 5",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Bedrooms",
        baths: "2 Bathrooms",
        area: "200 m2",
        price: "Rp 3,200,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse 6",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Bedrooms",
        baths: "2 Bathrooms",
        area: "200 m2",
        price: "Rp 3,200,000,000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
];

// Dynamically generate hrefs using a slugified title
const properties = propertiesData.map((prop) => ({
    ...prop,
    href: `/portfolio/${prop.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
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

