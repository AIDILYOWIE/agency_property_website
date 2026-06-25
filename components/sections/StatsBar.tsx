import { CategoryCard } from "../ui/CategoryCard";
import { StatsCard } from "../ui/StatsCard";

export function StatsBar() {
    return (
        <section className="w-full py-section bg-background">
            <div className="px-6">
                <div className="flex mb-18 h-max">
                    <div className="flex w-full justify-start flex-1">
                        <span className="text-label-md text-on-background uppercase tracking-wider mb-3">
                            Pencapaian
                        </span>
                    </div>
                    <div className="flex w-full justify-start flex-2">
                        <h2 className="text-3xl md:text-4xl font-semibold text-on-background leading-[50px]">
                            Rekam jejak kami dalam memposisikan properti premium. Angka-angka ini mencerminkan komitmen kami terhadap kualitas presentasi dan keberhasilan kolaborasi di pasar properti Bali.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
                    <StatsCard contentStyle="!text-center" imageSrc="/categories/cat_apartment_1781867600595.png" title="50" description="Properti Dipromosikan" titleStyle="!text-6xl !font-medium"/>
                    <StatsCard contentStyle="!text-center" imageSrc="/categories/cat_apartment_1781867600595.png" title="30" description="Klien Terlayani" titleStyle="!text-6xl !font-medium" />
                    <StatsCard contentStyle="!text-center" imageSrc="/categories/cat_apartment_1781867600595.png" title="20" description="Transaksi Berhasil" titleStyle="!text-6xl !font-medium" />
                    <StatsCard contentStyle="!text-center" imageSrc="/categories/cat_apartment_1781867600595.png" title="5" description="Channel Promosi" titleStyle="!text-6xl !font-medium" />
                </div>

            </div>
        </section>
    )
}