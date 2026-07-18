import React from "react";
import Link from "next/link";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube 
} from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Harga", href: "#harga" },
    { name: "Tentang", href: "#tentang" },
    { name: "Hubungi", href: "#hubungi" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "WhatsApp", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const legalLinks = [
    { name: "Syarat ketentuan", href: "#" },
    { name: "Kebijakan privasi", href: "#" },
    { name: "Pengaturan cookie", href: "#" },
    { name: "Lisensi", href: "#" },
    { name: "Aksesibilitas", href: "#" },
  ];

  return (
    <footer className="w-full bg-background text-on-surface pt-16 pb-8 mt-auto">
      <div className="px-page mx-auto">
        {/* Top Section: 4 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              {/* Replace with actual image logo if available */}
              <span className="font-bold text-2xl tracking-tight text-on-background">
                Chris<span className="text-primary">Property</span>
              </span>
            </Link>
            <p className="text-on-surface-variant text-base leading-relaxed pr-4">
              Menghubungkan Anda dengan properti eksklusif yang layak mendapatkan perhatian yang tepat dan strategi yang presisi.
            </p>
          </div>

          {/* Column 2: Tautan Cepat */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-on-background">
              Tautan cepat
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Media Sosial */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-on-background">
              Media sosial
            </h3>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hukum */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-on-background">
              Hukum
            </h3>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Social Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-outline-variant/30">
          
          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-on-surface-variant text-center md:text-left">
            <p>© {currentYear} Chris Property Signature. Semua hak dilindungi.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <Link href="#" className="hover:text-primary transition-colors duration-200 underline decoration-transparent hover:decoration-primary underline-offset-4">Kebijakan privasi</Link>
              <Link href="#" className="hover:text-primary transition-colors duration-200 underline decoration-transparent hover:decoration-primary underline-offset-4">Syarat dan ketentuan</Link>
              <Link href="#" className="hover:text-primary transition-colors duration-200 underline decoration-transparent hover:decoration-primary underline-offset-4">Pengaturan cookie</Link>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-on-surface-variant">
            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-200" aria-label="Facebook">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-200" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-200" aria-label="Twitter">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-200" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-200" aria-label="YouTube">
              <FaYoutube size={22} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
