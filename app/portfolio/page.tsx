import { Navbar } from "@/app/_components/layout/Navbar";
import { Hero } from "@/app/_components/sections/Hero";
import { getAllProperties } from "@/lib/data/properties";
import { PortfolioClient } from "@/app/portfolio/_components/PortfolioClient";

// Server Component: fetch data once, pass to interactive client container
const properties = getAllProperties().map((prop) => ({
    ...prop,
    href: `/portfolio/${prop.slug}`,
}));

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col px-page">
                <Hero
                    headline={<>Not Every Property Makes Our List</>}
                    description="We select hundreds of properties in Bali, but only those meeting premium standards are featured here. Explore our exclusive collection of curated assets for your luxury residential or investment needs."
                    isCtaButton={false}
                />

                <section className="w-full py-section">
                    <PortfolioClient properties={properties} />
                </section>
            </div>
        </div>
    );
}


