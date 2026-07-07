import { Tenor_Sans } from "next/font/google";
import { Navbar } from "../_components/layout/Navbar";
import { Hero } from "../_components/sections/Hero";
import { Pricing } from "../_components/sections/Pricing";
import {Testimonials} from "../_components/sections/Testimonials";
import { Faq } from "../_components/sections/Faq";
import { CallToAction } from "../_components/sections/CallToAction";

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col px-[68px]">
                <Hero 
                    headline={
                        <>
                            Positioning matters more than <span className="text-primary">noice</span>
                        </>
                    } 
                    description="Dapatkan eksposur maksimal ke serious buyers dengan visual premium. Pilih jalur kemitraan yang paling sesuai dengan target dan nilai aset Anda di Bali."
                    isCtaButton={false}
                />
                <Pricing />
                <Testimonials/>
                <Faq faqs={[
                    { question: "Apakah ada jaminan properti pasti laku?", answer: "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you." },
                    { question: "Bagaimana proses Free Property Visit untuk paket 3 Slot? ", answer: "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you." },
                    { question: "Apakah saya masih bisa menjual sendiri jika pakai Open Slot? ", answer: "You can easily schedule a property viewing by contacting our agent or clicking the 'Schedule Visit' button on the property details page. We will arrange a convenient time for you." },
                ]}

              />
            </div>
                <CallToAction variant="center"  title="Still unsure which path is right for your property?" description="Diskusikan aset Anda dengan tim kami, dan kami akan merekomendasikan strategi penempatan terbaik." buttons={[
                     { label: 'Konsultasi Sekarang', variant: "primary", href: "/contact" },
                ]} />
        </div>
    )
}