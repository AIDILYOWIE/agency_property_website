// ============================================================
//  lib/data/properties.ts
//  Single Source of Truth — Property Data Layer
//  Gunakan file ini sebagai sumber data tunggal di seluruh project.
//  Jangan duplikasi data di komponen lain (Portofolio.tsx, portfolio/page.tsx, dll).
// ============================================================

export type PropertyType = "For Sale" | "For Rent";
export type PropertyStatus = "available" | "sold" | "rented";
export type PropertyCategory =
  | "Villa"
  | "House"
  | "Apartment"
  | "Commercial"
  | "Land";

export interface Property {
  /** Unique ID for AI indexing and easy references */
  id: string;
  /** Unique slug used as URL identifier: /portfolio/[slug] */
  slug: string;
  title: string;
  category: PropertyCategory;
  location: string;
  fullAddress: string;
  status: PropertyStatus;
  property_type: PropertyType;
  beds: string;
  baths: string;
  area: string;
  buildingArea?: string;
  price: string;
  priceNumeric: number; // for sorting/filtering
  imageSrc: string;
  gallery?: string[];
  description: string;
  highlights: string[];
  yearBuilt?: number;
  certificate: string;
  featured?: boolean;
}

// ============================================================
//  DATA: 10 Curated Exclusive Properties
// ============================================================
export const properties: Property[] = [
  {
    id: "1",
    slug: "luxury-private-villa-uluwatu",
    title: "Luxury Private Villa",
    category: "Villa",
    location: "Uluwatu, Bali",
    fullAddress:
      "Jl. Pantai Suluban, Pecatu, Kec. Kuta Selatan, Kabupaten Badung, Bali",
    property_type: "For Sale",
    status: "available",
    beds: "5",
    baths: "4",
    area: "1,200 m²",
    buildingArea: "780 m²",
    price: "Rp 15.000.000.000",
    priceNumeric: 15_000_000_000,
    imageSrc: "/categories/cat_villa_1781867581851.png",
    gallery: [
      "/categories/cat_villa_1781867581851.png",
      "/categories/cat_house_1781867614978.png",
    ],
    description:
      "Villa mewah bergaya Bali kontemporer dengan pemandangan tebing Uluwatu yang dramatis. Dirancang oleh arsitek ternama dengan material premium — batu alam Palimanan, kayu ulin, dan kaca besar yang membingkai panorama Samudra Hindia tanpa batas.",
    highlights: [
      "Infinity pool menghadap laut",
      "Privat rooftop bar & lounge",
      "Smart home system",
      "Akses jalan privat & keamanan 24 jam",
      "Fully furnished — siap huni",
    ],
    yearBuilt: 2022,
    certificate: "SHM (Sertifikat Hak Milik)",
    featured: true,
  },
  {
    id: "2",
    slug: "modern-family-house-south-jakarta",
    title: "Modern Family House",
    category: "House",
    location: "Jakarta Selatan",
    fullAddress:
      "Komplek Elite Brawijaya, Jl. Wijaya I, Kebayoran Baru, Jakarta Selatan",
    property_type: "For Sale",
    status: "available",
    beds: "4",
    baths: "3",
    area: "450 m²",
    buildingArea: "320 m²",
    price: "Rp 8.500.000.000",
    priceNumeric: 8_500_000_000,
    imageSrc: "/categories/cat_house_1781867614978.png",
    gallery: ["/categories/cat_house_1781867614978.png"],
    description:
      "Rumah keluarga modern di kawasan elite Kebayoran Baru — salah satu lokasi residensial paling diminati di Jakarta Selatan. Desain terbuka dengan plafon tinggi, taman dalam (inner garden), dan sistem ventilasi silang alami yang menjaga kenyamanan sepanjang tahun.",
    highlights: [
      "Private carport 3 kendaraan",
      "In-house gym & study room",
      "Taman privat & kolam renang",
      "Lingkungan one-gate system",
      "Posisi pojok dengan akses 2 jalan",
    ],
    yearBuilt: 2020,
    certificate: "SHM (Sertifikat Hak Milik)",
    featured: true,
  },
  {
    id: "3",
    slug: "premium-commercial-land-pik2",
    title: "Premium Commercial Land",
    category: "Land",
    location: "PIK 2, Tangerang",
    fullAddress:
      "Jl. Marina Indah, Pantai Indah Kapuk 2 (PIK 2), Kabupaten Tangerang, Banten",
    property_type: "For Sale",
    status: "sold",
    beds: "-",
    baths: "-",
    area: "2.500 m²",
    price: "Rp 25.000.000.000",
    priceNumeric: 25_000_000_000,
    imageSrc: "/categories/strattegic_land.png",
    gallery: ["/categories/strattegic_land.png"],
    description:
      "Kavling komersial premium di jantung kawasan pengembangan terbesar se-Asia Tenggara, PIK 2. Lokasi strategis berada di koridor jalan utama dengan visibilitas tinggi — ideal untuk mixed-use development, ritel, maupun kantor korporat.",
    highlights: [
      "Legalitas bersih & siap bangun",
      "Akses langsung jalan utama PIK 2",
      "Dekat marina & beach club",
      "KDB & KLB komersial penuh",
      "Nilai investasi tumbuh konsisten",
    ],
    certificate: "SHGB (Sertifikat Hak Guna Bangunan)",
    featured: true,
  },
  {
    id: "4",
    slug: "office-space-tower-scbd",
    title: "Office Space Tower",
    category: "Commercial",
    location: "SCBD, Jakarta",
    fullAddress:
      "Sudirman Central Business District (SCBD), Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan",
    property_type: "For Rent",
    status: "rented",
    beds: "-",
    baths: "4",
    area: "800 m²",
    price: "Rp 350.000.000",
    priceNumeric: 280_000_000,
    imageSrc: "/categories/cat_commercial_1781867628891.png",
    gallery: ["/categories/cat_commercial_1781867628891.png"],
    description:
      "Ruang kantor Grade-A di gedung ikonik kawasan SCBD — pusat bisnis tersibuk dan paling prestisius di Indonesia. Fasilitas bangunan setara internasional dengan sistem M&E modern, keamanan biometrik, dan parkir rasio 1:50.",
    highlights: [
      "Grade-A office building",
      "Fit-out & furnishing included",
      "Dedicated fiber internet 1 Gbps",
      "Akses 24 jam dengan keamanan ketat",
      "Dekat MRT & LRT Sudirman",
    ],
    yearBuilt: 2019,
    certificate: "Strata Title",
    featured: false,
  },
  {
    id: "5",
    slug: "ocean-view-villa-seminyak",
    title: "Ocean View Villa",
    category: "Villa",
    location: "Seminyak, Bali",
    fullAddress: "Jl. Drupadi, Seminyak, Kec. Kuta, Kabupaten Badung, Bali",
    property_type: "For Sale",
    status: "available",
    beds: "3",
    baths: "3",
    area: "850 m²",
    buildingArea: "480 m²",
    price: "Rp 9.000.000.000",
    priceNumeric: 9_000_000_000,
    imageSrc: "/categories/cat_villa_1781867581851.png",
    gallery: ["/categories/cat_villa_1781867581851.png"],
    description:
      "Villa boutique bergaya tropis-modern di jantung Seminyak, berjarak 5 menit berjalan kaki ke Pantai Seminyak. Investasi properti dengan ROI tinggi dari penyewaan jangka pendek (Airbnb) — saat ini telah masuk dalam portofolio short-term rental premium.",
    highlights: [
      "Walking distance ke pantai & beach clubs",
      "ROI rental 8-12% per tahun",
      "Private saltwater pool",
      "Staff management tim profesional",
      "Fully booked track record 3 tahun",
    ],
    yearBuilt: 2021,
    certificate: "Leasehold 50 tahun + opsi perpanjangan",
    featured: true,
  },
  {
    id: "6",
    slug: "minimalist-townhouse-bsd",
    title: "Minimalist Townhouse",
    category: "House",
    location: "BSD City, Tangerang",
    fullAddress:
      "Cluster Greenwich Park, BSD City, Kota Tangerang Selatan, Banten",
    property_type: "For Sale",
    status: "available",
    beds: "3",
    baths: "2",
    area: "200 m²",
    buildingArea: "160 m²",
    price: "Rp 3.200.000.000",
    priceNumeric: 3_200_000_000,
    imageSrc: "/categories/cat_house_1781867614978.png",
    gallery: ["/categories/cat_house_1781867614978.png"],
    description:
      "Townhouse minimalis modern di BSD City — kota mandiri terbaik di Tangerang Selatan. Konsep desain Scandinavian dengan palet warna netral, material premium, dan akses mudah ke Aeon Mall BSD, BINUS University, dan tol Jakarta-Merak.",
    highlights: [
      "One-gate cluster keamanan 24 jam",
      "Taman cluster playground",
      "Carport 2 kendaraan",
      "Dekat sekolah internasional",
      "Bebas banjir — kontur tanah tinggi",
    ],
    yearBuilt: 2023,
    certificate: "SHM (Sertifikat Hak Milik)",
    featured: false,
  },
  {
    id: "7",
    slug: "sky-apartment-sudirman",
    title: "Sky Apartment Sudirman",
    category: "Apartment",
    location: "Sudirman, Jakarta",
    fullAddress:
      "Apartemen Sudirman Suites, Jl. K.H. Mas Mansyur, Tanah Abang, Jakarta Pusat",
    property_type: "For Rent",
    status: "rented",
    beds: "2",
    baths: "2",
    area: "120 m²",
    price: "Rp 45.000.000",
    priceNumeric: 45_000_000,
    imageSrc: "/categories/cat_apartment_1781867600595.png",
    gallery: ["/categories/cat_apartment_1781867600595.png"],
    description:
      "Unit high-floor di menara premium kawasan Sudirman dengan panorama skyline Jakarta yang memukau. Interior didesain oleh desainer kelas dunia — fully furnished, siap huni, cocok untuk ekspatriat atau profesional korporat.",
    highlights: [
      "High-floor unit (lantai 38)",
      "Panoramic city view",
      "Fully furnished — premium brand",
      "Concierge service & kolam renang infinity",
      "Akses langsung ke MRT Sudirman",
    ],
    yearBuilt: 2021,
    certificate: "Strata Title",
    featured: false,
  },
  {
    id: "8",
    slug: "cliffside-boutique-villa-nusa-dua",
    title: "Cliffside Boutique Villa",
    category: "Villa",
    location: "Nusa Dua, Bali",
    fullAddress:
      "Jl. Pantai Mengiat, Benoa, Kec. Kuta Selatan, Kabupaten Badung, Bali",
    property_type: "For Sale",
    status: "available",
    beds: "4",
    baths: "4",
    area: "1.000 m²",
    buildingArea: "650 m²",
    price: "Rp 18.500.000.000",
    priceNumeric: 18_500_000_000,
    imageSrc: "/categories/cat_villa_1781867581851.png",
    gallery: ["/categories/cat_villa_1781867581851.png"],
    description:
      "Villa eksklusif di atas tebing karang Nusa Dua dengan pemandangan laut 270 derajat. Salah satu properti paling langka di Bali — lokasi tidak bisa direplikasi. Termasuk dalam listing aset premium off-market kami yang hanya tersedia untuk klien terseleksi.",
    highlights: [
      "Pemandangan laut 270 derajat",
      "Private beach club access",
      "Helipad & yacht dock",
      "Chef's kitchen & wine cellar",
      "Off-market listing — eksklusif",
    ],
    yearBuilt: 2020,
    certificate: "Leasehold 80 tahun",
    featured: true,
  },
  {
    id: "9",
    slug: "strategic-shophouse-tanah-abang",
    title: "Strategic Shophouse",
    category: "Commercial",
    location: "Tanah Abang, Jakarta",
    fullAddress: "Jl. K.H. Wahid Hasyim No. 45, Tanah Abang, Jakarta Pusat",
    property_type: "For Sale",
    status: "sold",
    beds: "-",
    baths: "4",
    area: "320 m²",
    buildingArea: "640 m²",
    price: "Rp 22.000.000.000",
    priceNumeric: 22_000_000_000,
    imageSrc: "/categories/cat_commercial_1781867628891.png",
    gallery: ["/categories/cat_commercial_1781867628891.png"],
    description:
      "Ruko 4 lantai di lokasi emas Tanah Abang — pusat perdagangan grosir terbesar se-Asia Tenggara. Properti ini menghadap jalan raya utama dengan traffic pejalan kaki ratusan ribu orang per hari. Ideal untuk ritel, showroom, atau kantor mixed-use.",
    highlights: [
      "Hadap jalan raya utama",
      "Traffic pejalan kaki 200.000+/hari",
      "Dekat Stasiun Tanah Abang",
      "4 lantai + basement parkir",
      "Sudah ada penyewa aktif — passive income",
    ],
    yearBuilt: 2015,
    certificate: "SHGB (Sertifikat Hak Guna Bangunan)",
    featured: false,
  },
  {
    id: "10",
    slug: "tropical-residence-ubud",
    title: "Tropical Residence Ubud",
    category: "Villa",
    location: "Ubud, Bali",
    fullAddress:
      "Jl. Raya Sayan, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali",
    property_type: "For Sale",
    status: "available",
    beds: "3",
    baths: "3",
    area: "700 m²",
    buildingArea: "380 m²",
    price: "Rp 7.800.000.000",
    priceNumeric: 7_800_000_000,
    imageSrc: "/categories/cat_villa_1781867581851.png",
    gallery: ["/categories/cat_villa_1781867581851.png"],
    description:
      "Hunian tropis premium di lereng lembah sungai Ayung, Ubud — ikon spiritual dan budaya Bali. Arsitektur harmonis dengan alam: dikelilingi terasering sawah, bambu, dan pepohonan tropis rindang. Jiwa villa ini dirancang sebagai sanctuary — tempat untuk benar-benar pulih dari kebisingan urban.",
    highlights: [
      "Views: lembah & terasering sawah",
      "Private pool menghadap hutan bambu",
      "Dekat Yoga Barn & spa internasional",
      "Joglo & bale bengong otentik",
      "Listrik tenaga surya (solar panel)",
    ],
    yearBuilt: 2022,
    certificate: "Leasehold 30 tahun + opsi perpanjangan",
    featured: true,
  },
];

// ============================================================
//  HELPERS — Derived Data & Utilities
// ============================================================

/** Return all properties */
export function getAllProperties(): Property[] {
  return properties;
}

/** Return a single property by slug, or undefined if not found */
export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

/** Return only featured properties */
export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

/** Return properties by category */
export function getPropertiesByCategory(
  category: PropertyCategory,
): Property[] {
  return properties.filter((p) => p.category === category);
}

/** Return properties by status */
export function getPropertiesByStatus(status: PropertyStatus): Property[] {
  return properties.filter((p) => p.status === status);
}

/** Generate a URL-safe slug from title (for backward compat with old inline slugs) */
export function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
