import { Navbar } from "@/app/_components/layout/Navbar";
import { Hero } from "@/app/_components/sections/Hero";
import { SearchField } from "@/app/_components/ui/SearchField";
import { Select } from "@/app/_components/ui/Select";
import { PropertyList } from "@/app/portfolio/_components/PropertyList";

const properties = [
    {
        title: "Luxury Private Villa",
        location: "Uluwatu, Bali",
        category: "Villas",
        beds: "5 Kamar",
        baths: "4 Kamar Mandi",
        area: "1200 m2",
        price: "Rp 15.000.000.000",
        imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
        title: "Modern Family House",
        location: "Jakarta Selatan",
        category: "Premium Houses",
        beds: "4 Kamar",
        baths: "3 Kamar Mandi",
        area: "450 m2",
        price: "Rp 8.500.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Premium Commercial Land",
        location: "PIK 2, Tangerang",
        category: "Strategic Land",
        beds: "-",
        baths: "-",
        area: "2500 m2",
        price: "Rp 25.000.000.000",
        imageSrc: "/categories/cat_apartment_1781867600595.png",
    },
    {
        title: "Office Space Tower",
        location: "SCBD, Jakarta",
        category: "Commercial Asset",
        beds: "-",
        baths: "2 Kamar Mandi",
        area: "800 m2",
        price: "Rp 12.000.000.000",
        imageSrc: "/categories/cat_commercial_1781867628891.png",
    },
    {
        title: "Ocean View Villa",
        location: "Seminyak, Bali",
        category: "Villas",
        beds: "3 Kamar",
        baths: "3 Kamar Mandi",
        area: "850 m2",
        price: "Rp 9.000.000.000",
        imageSrc: "/categories/cat_villa_1781867581851.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Kamar",
        baths: "2 Kamar Mandi",
        area: "200 m2",
        price: "Rp 3.200.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Kamar",
        baths: "2 Kamar Mandi",
        area: "200 m2",
        price: "Rp 3.200.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Kamar",
        baths: "2 Kamar Mandi",
        area: "200 m2",
        price: "Rp 3.200.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Kamar",
        baths: "2 Kamar Mandi",
        area: "200 m2",
        price: "Rp 3.200.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Kamar",
        baths: "2 Kamar Mandi",
        area: "200 m2",
        price: "Rp 3.200.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
    {
        title: "Minimalist Townhouse",
        location: "BSD City, Tangerang",
        category: "Premium Houses",
        beds: "3 Kamar",
        baths: "2 Kamar Mandi",
        area: "200 m2",
        price: "Rp 3.200.000.000",
        imageSrc: "/categories/cat_house_1781867614978.png",
    },
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen" >
            <Navbar />
            <div className="flex flex-col px-[68px]">
                <Hero headline={
                    <>
                        Not Every Property Makes <span className="text-primary">Our List</span>
                    </>
                } description="Kami menyeleksi ratusan properti di Bali, namun hanya yang memenuhi standar premium yang kami hadirkan di sini. Jelajahi koleksi aset eksklusif yang dikurasi khusus untuk hunian dan investasi kelas atas Anda."
                    isCtaButton={false}
                />

                <section className="w-full py-section" >
                    {/* Search and filter property */}
                    <div className="w-[60%] flex gap-2">
                        <SearchField placeholder="Cari property..." />

                        {/* filter properti*/}
                        <div className="w-[80%] flex gap-2" >
                            <Select options={[{ value: "", label: "Kategori" }]} />
                            <Select options={[{ value: "", label: "Harga" }]} />
                        </div>
                    </div>

                    {/* Property cards with pagination */}
                    <PropertyList properties={properties} itemsPerPage={10} />
                </section>
            </div>
        </div>
    )
}

