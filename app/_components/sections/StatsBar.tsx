import { CategoryCard } from "../ui/CategoryCard";
import { StatsCard } from "../ui/StatsCard";

export function StatsBar() {
    return (
        <section className="w-full py-section bg-background">
            <div className="">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 mb-18 h-max">
                    <div className="flex w-full justify-start lg:flex-1">
                        <span className="text-label-md text-on-background uppercase tracking-wider mb-0 lg:mb-3">
                            Pencapaian
                        </span>
                    </div>
                    <div className="flex w-full justify-start lg:flex-[2]">
                        <h2 className="text-2xl md:text-3xl font-cinzel lg:text-4xl font-semibold text-on-background lg:leading-[40px]">
                            Rekam jejak kami dalam memposisikan properti premium. Angka-angka ini mencerminkan komitmen kami terhadap kualitas presentasi dan keberhasilan kolaborasi di pasar properti Bali.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
                    <StatsCard contentStyle="!text-center" imageSrc="/categories/cat_house_1781867614978.png" title="50" description="Properti Dipromosikan" titleStyle="!text-6xl !font-medium"/>
                    <StatsCard contentStyle="!text-center" imageSrc="/stats/client_terlayani.png" title="30" description="Klien Terlayani" titleStyle="!text-6xl !font-medium" />
                    <StatsCard contentStyle="!text-center" imageSrc="/stats/transaksi.png" title="20" description="Transaksi Berhasil" titleStyle="!text-6xl !font-medium" />
                    <StatsCard contentStyle="!text-center" imageSrc="/stats/promotion_channels.png" title="5" description="Channel Promosi" titleStyle="!text-6xl !font-medium" />
                </div>

            </div>
        </section>
    )
}