import { title } from "process";
import { Navbar } from "../_components/layout/Navbar";
import { Hero } from "../_components/sections/Hero";
import { MeetFounder } from "../_components/sections/MeetFounder";
import { WhyChooseUs } from "../_components/sections/WhyChooseUs";
import { BiCrown } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";
import { CategoryCard } from "../_components/ui/CategoryCard";
import { WhoWeServe } from "../_components/sections/WhoWeServe";
import { CallToAction } from "../_components/sections/CallToAction";

const items = [
  {
    icon: <BiCrown />,
    title: "Quality Over Quantity",
    description:
      "Kami tidak menerima sembarang properti. Listing yang masuk melalui proses kurasi ketat.",
  },
  {
    icon: <IoDiamondOutline />,
    title: "Professional Presentation",
    description:
      "Visual yang buruk menurunkan harga jual. Kami menangani presentasi estetis properti secara serius sebelum dipublikasikan.",
  },
  {
    icon: <LuHandshake />,
    title: "No Clutter, No Random Leads",
    description:
      "Jaringan promosi kami ditargetkan hanya untuk ekosistem pembeli serius (serious buyers) dan agen terpercaya.",
  },
];

export default function AboutPage() {
  const WHATSAPP_MSG_CONSULT = `Hello Chris Property Signature Team,

I would like to schedule an Exclusive Consultation regarding your property services.

Focus of discussion needed:

Name: [Insert your name]

Consultation Topic: [Property Marketing / Property Search / Investment]

Brief Details: [Briefly describe your specific needs]

When are you available for a discussion?`;

  const createWaLink = (msg: string) =>
    `https://wa.me/6285183117165?text=${encodeURIComponent(msg)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col px-page">
        <Hero
          headline={<>Good properties don't need to shout.</>}
          description="Kami tidak mengikuti cara lama. Kami hadir untuk mendefinisikan ulang bagaimana properti premium di Bali diposisikan, dikurasi, dan ditransaksikan ke pasar yang tepat."
          isCtaButton={false}
        />
        <MeetFounder />

        <WhyChooseUs
          label="Exclusive & Curated"
          title="The Signature Standards"
          items={items}
        />
        <WhoWeServe />
      </div>
        <CallToAction
        variant="default"
          title="Posisikan Properti Anda di Tempat yang Seharusnya"
          description="Tinggalkan strategi pemasaran acak yang menurunkan nilai aset. Mari diskusikan bagaimana kami mengkurasi properti Anda untuk jaringan pembeli eksklusif, atau temukan investasi premium terbaik untuk Anda di Bali"
          buttons={[
              {
                label: "Konsultasi Sekarang",
                href: createWaLink(WHATSAPP_MSG_CONSULT),
                variant: "primary",
              },
              {
                label: "Pilih Kemitraan",
                href: "/pricing#partnership-model",
                variant: "outlineWhite",
              },
              
          ]}
        />
    </div>
  );
}
