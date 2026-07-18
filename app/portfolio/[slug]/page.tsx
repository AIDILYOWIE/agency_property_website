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

const PROPERTY_DESCRIPTION = `Properti eksklusif ini menawarkan gaya hidup premium dengan desain arsitektur modern dan fasilitas lengkap. Terletak di kawasan strategis yang tenang namun tetap dekat dengan pusat aktivitas. Properti ini sangat cocok untuk Anda yang mencari hunian nyaman atau instrumen investasi bernilai tinggi di masa depan.

Villa ini dibangun di atas lahan seluas 1.200 m² dengan konsep tropical modern yang memadukan material kayu jati pilihan, batu alam Bali, dan kaca tempered untuk menciptakan keselarasan antara ruang dalam dan alam sekitar. Setiap ruangan dirancang dengan ventilasi silang alami dan pencahayaan matahari yang optimal, sehingga meminimalkan penggunaan energi listrik di siang hari.

Fasilitas utama mencakup 3 kamar tidur en-suite dengan walk-in closet, ruang tamu terbuka berhadapan langsung dengan infinity pool berukuran 12x5 meter, dapur modern dengan peralatan premium, serta gazebo rooftop yang menghadap panorama sawah dan laut. Area parkir mampu menampung hingga 4 kendaraan roda empat.

Lokasi properti ini hanya berjarak 15 menit dari Pantai Nusa Dua, 20 menit dari Bandara Internasional Ngurah Rai, dan dikelilingi oleh restoran, cafe, dan pusat perbelanjaan kelas atas. Kawasan ini juga dilengkapi dengan keamanan 24 jam dan akses jalan yang lebar serta terawat.`;

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
            Deskripsi
          </h2>
          <ExpandableText text={PROPERTY_DESCRIPTION} maxLines={4} />
        </div>

        {/* Content Section (Spesifikasi / Basic Information) */}
        <div className="mt-16 w-full max-w-4xl flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-wide text-on-background">
            Spesifikasi
          </h2>

          <div className="flex flex-col">
            {[
              { label: "Status Properti", value: "Di Sewa" },
              { label: "Kapasitas", value: "6 orang" },
              { label: "Luas Tanah", value: "1.200 m²" },
              { label: "Luas Bangunan", value: "800 m²" },
              { label: "Tipe Properti", value: "Residensial / Villa" },
              { label: "Sertifikat", value: "SHM (Hak Milik)" },
              { label: "Tahun Dibangun", value: "2023" },
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
            Fasilitas
          </h2>

          <div className="flex w-full flex-col gap-4 mt-4 pl-2">
            <h3 className="text-xl font-medium text-on-surface-variant">
              Fasilitas Kamar
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
              Fasilitas Villa
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
                  label: "Kolam Renang",
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
          <div className="w-full h-[600px] rounded-lg overflow-hidden">
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
      <div className="fixed bottom-8 right-8 z-50">
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
