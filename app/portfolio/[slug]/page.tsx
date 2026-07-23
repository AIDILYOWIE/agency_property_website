import React from "react";
import { Navbar } from "@/app/_components/layout/Navbar";
import { DetailProperty } from "@/app/_components/layout/DetailProperty";
import { ExpandableText } from "@/app/_components/ui/ExpandableText";
import { BackButton } from "@/app/_components/ui/BackButton";
import { Button } from "@/app/_components/ui/Button";
import { BiFridge, BiWifi, BiTv } from "react-icons/bi";
import { FiAirplay } from "react-icons/fi";
import { FaSwimmingPool, FaWhatsapp } from "react-icons/fa";
import { WiDayWindy } from "react-icons/wi";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PROPERTY_DESCRIPTION = `This exclusive property offers a premium lifestyle with modern architectural design and complete facilities. Located in a strategic yet serene area, while remaining close to the center of activity. This property is ideal for those seeking a comfortable residence or a high-value investment instrument for the future.

This villa is built on a 1,200 m² plot with a tropical modern concept that blends selected teak wood, Balinese natural stone, and tempered glass to create harmony between the interior and the surrounding nature. Each room is designed with natural cross-ventilation and optimal sunlight, minimizing electricity consumption during the day.

Main facilities include 3 en-suite bedrooms with walk-in closets, an open living room facing a 12x5 meter infinity pool, a modern kitchen with premium appliances, and a rooftop gazebo overlooking panoramic rice fields and ocean views. The parking area can accommodate up to 4 four-wheeled vehicles.

The property is just 15 minutes from Nusa Dua Beach, 20 minutes from Ngurah Rai International Airport, and surrounded by high-end restaurants, cafes, and shopping centers. The area is also equipped with 24-hour security and wide, well-maintained road access.`;

export default async function PropertyDetailPage({ params }: PageProps) {
  // In Next.js 15+, params is a Promise and needs to be awaited
  const { slug } = await params;

  // Decode URI in case of spaces and format back into a title
  const decodedSlug = decodeURIComponent(slug);
  const title = decodedSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const WHATSAPP_MSG = `Hello Chris Property Signature Team,

I am interested in a property listed on your website.

Property Details:
- Property Name/ID: ${title}
- My Name: [Your name]
- Request: [Schedule a Viewing / Request Full Dossier / Pricing Inquiry]

Please provide me with more information regarding this property.`;

  const createWaLink = (msg: string) =>
    `https://wa.me/6285183117165?text=${encodeURIComponent(msg)}`;

  const mockPropertyData = {
    title: title,
    address: "Nusa Dua, Bandung",
    price: "Rp 250.000.000 / thn",
    beds: "3",
    baths: "3",
    area: "1200",
    // Providing 5 images to fill the bento grid perfectly
    images: [
      "/categories/cat_villa_1781867581851.png", // Main image
      "/categories/cat_house_1781867614978.png",
      "/categories/cat_apartment_1781867600595.png",
      "/categories/cat_commercial_1781867628891.png",
      "/categories/cat_villa_1781867581851.png",
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-section px-page">
        {/* Back Navigation */}
        <BackButton className="mb-6" />

        {/* Detail Property Component (Gallery & Specs) */}
        <DetailProperty
          images={mockPropertyData.images}
          price={mockPropertyData.price}
          address={mockPropertyData.address}
          beds={mockPropertyData.beds}
          area={mockPropertyData.area}
        />

        {/* Content Section — Deskripsi with Read More */}
        <div className="mt-16 w-full max-w-4xl flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-on-background">
            Description
          </h2>
          <ExpandableText text={PROPERTY_DESCRIPTION} maxLines={4} />
        </div>

        {/* Content Section (Spesifikasi / Basic Information) */}
        <div className="mt-16 w-full max-w-4xl flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-wide text-on-background">
            Specifications
          </h2>

          <div className="flex flex-col">
            {[
              { label: "Property Status", value: "For Rent" },
              { label: "Capacity", value: "6 persons" },
              { label: "Land Area", value: "1,200 m²" },
              { label: "Building Area", value: "800 m²" },
              { label: "Property Type", value: "Residential / Villa" },
              { label: "Certificate", value: "SHM (Freehold)" },
              { label: "Year Built", value: "2023" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row justify-between items-center py-5 border-b border-outline-variant/30 last:border-b-0"
              >
                <span className="text-on-surface-variant font-light text-base md:text-lg w-1/2">
                  {item.label}
                </span>
                <span className="text-on-background font-medium text-base md:text-lg w-1/2 text-left">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section Fasilitas */}
        <div className="mt-16 w-full max-w-4xl flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-wide text-on-background ">
            Facilities
          </h2>

          <div className="flex w-full flex-col gap-4 mt-4 pl-2">
            <h3 className="text-xl font-medium text-on-surface-variant">
              Room Facilities
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <BiFridge size={28} className="!text-on-surface-variant " />
                  ),
                  label: "Refrigerator",
                },
                {
                  icon: (
                    <WiDayWindy
                      size={28}
                      className="!text-on-surface-variant "
                    />
                  ),
                  label: "AC",
                },
                {
                  icon: (
                    <BiWifi size={28} className="text-on-surface-variant! " />
                  ),
                  label: "WiFi",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex h-max w-max gap-3">
                  {item.icon}
                  <span className="text-on-surface-variant font-medium text-base md:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 mt-4 pl-2">
            <h3 className="text-xl font-medium text-on-surface-variant">
              Villa Facilities
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <BiFridge size={28} className="!text-on-surface-variant " />
                  ),
                  label: "Kulkas",
                },
                {
                  icon: (
                    <FiAirplay
                      size={28}
                      className="!text-on-surface-variant "
                    />
                  ),
                  label: "AC",
                },
                {
                  icon: (
                    <BiWifi size={28} className="!text-on-surface-variant " />
                  ),
                  label: "WiFi",
                },
                {
                  icon: (
                    <FaSwimmingPool
                      size={28}
                      className="!text-on-surface-variant "
                    />
                  ),
                  label: "Swimming Pool",
                },
                {
                  icon: (
                    <BiTv size={28} className="!text-on-surface-variant " />
                  ),
                  label: "TV",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex h-max w-max gap-3">
                  {item.icon}
                  <span className="text-on-surface-variant font-medium text-base md:text-lg">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section Map */}
        <div className="mt-16 w-full flex flex-col gap-6">
          <div className="w-full h-[300px] md:h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047620.6838544263!2d108.76835952270487!3d-7.815783170287758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd243bc777a7293%3A0xb131fd0c3a6af25!2sVilla%20Nusa%20Dua%20by%20Opus%20Hospitality!5e0!3m2!1sid!2sid!4v1783153812112!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <Button
          href={createWaLink(WHATSAPP_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <FaWhatsapp size={22} />
          Inquire Property
        </Button>
      </div>
    </div>
  );
}
