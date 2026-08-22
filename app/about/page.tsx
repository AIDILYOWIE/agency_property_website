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
      "We do not accept just any property. Every listing goes through a strict curation process.",
  },
  {
    icon: <IoDiamondOutline />,
    title: "Professional Presentation",
    description:
      "Poor visuals reduce sale value. We take the aesthetic presentation of properties seriously before publication.",
  },
  {
    icon: <LuHandshake />,
    title: "No Clutter, No Random Leads",
    description:
      "Our promotional network is targeted exclusively to an ecosystem of serious buyers and trusted agents.",
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
          description="We don't follow the old ways. We are here to redefine how premium properties in Bali are positioned, curated, and transacted to the right market."
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
          title="Position Your Property Where It Belongs"
          description="Leave behind random marketing strategies that devalue your assets. Let's discuss how we curate your property for an exclusive buyer network, or find the best premium investment for you in Bali"
          buttons={[
              {
                label: "Consult Now",
                href: createWaLink(WHATSAPP_MSG_CONSULT),
                variant: "primary",
              },
              {
                label: "Choose Partnership",
                href: "/pricing#partnership-model",
                variant: "outlineWhite",
              },
              
          ]}
        />
    </div>
  );
}
