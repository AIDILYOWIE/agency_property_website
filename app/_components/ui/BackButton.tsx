"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack, BiLeftArrow } from "react-icons/bi";

interface BackButtonProps {
  /** Custom label text (default: "Kembali") */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * BackButton — A client component that navigates back using the browser history.
 * Uses Next.js `useRouter().back()` for client-side navigation,
 * preserving scroll position and avoiding a full page reload.
 */
export function BackButton({ label = "Kembali", className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`group inline-flex items-center gap-2 text-on-surface-variant hover:text-on-background transition-colors cursor-pointer ${className}`}
    >
      <BiArrowBack
        size={20}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      <span className="font-medium text-base">{label}</span>
    </button>
  );
}
