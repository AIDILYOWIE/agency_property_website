"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portfolio" },
  { label: "Harga", href: "/pricing" },
  { label: "Tentang", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const Logo = () => (
    <Link href="/" className=" relative h-12 md:h-16 w-[100px] md:w-[180px]">
      <Image
        src="/logo.png"
        alt="Chris Property Logo"
        fill
        className="object-cover"
        priority
      />
    </Link>
      );

  return (
    <>
      <nav className="w-full bg-background sticky top-0 z-50 border-b border-outline-variant/30 px-page">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${pathname === link.href
                  ? "text-primary"
                  : "text-on-background hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/pricing#partnership-model" variant="primary">
              Kolaborasi Sekarang
            </Button>
          </div>

          {/* Hamburger Button — visible on tablet & mobile (< lg) */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-on-background hover:bg-surface-container transition-colors"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Backdrop ───────────────────────────────────────────────── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-on-background/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      />

      {/* ── Slide-in Drawer ─────────────────────────────────────────── */}
      <aside
        className={`fixed top-20 bottom-0 right-0 z-40 w-[80%] max-w-sm bg-background border-l border-outline-variant/30 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-label="Mobile navigation menu"
      >
        {/* Drawer Nav Links */}
        <nav className="flex flex-col gap-2 p-6 flex-grow overflow-y-auto justify-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 50 + 100}ms` : "0ms" }}
              className={`px-4 py-3 font-medium text-lg text-center transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                } ${pathname === link.href
                  ? "text-primary"
                  : "text-on-background hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div
          className={`p-6 transition-all duration-300 shrink-0 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{
            transitionDelay: isOpen ? "350ms" : "0ms",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))"
          }}
        >
          <Button
            href="/pricing#partnership-model"
            variant="primary"
            className="w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            Kolaborasi Sekarang
          </Button>
        </div>
      </aside>
    </>
  );
}
