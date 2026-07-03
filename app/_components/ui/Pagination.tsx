"use client";

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Maximum number of page buttons visible at once (excluding prev/next). Defaults to 5. */
  maxVisible?: number;
  className?: string;
}

/**
 * Generates the array of page numbers and ellipsis markers to render.
 * Example output: [1, '...', 4, 5, 6, '...', 10]
 */
function getPageRange(current: number, total: number, maxVisible: number): (number | "...")[] {
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [];
  const sideCount = Math.floor((maxVisible - 3) / 2); // pages on each side of current (excluding first, last, current)

  // Always show page 1
  pages.push(1);

  const leftBound = Math.max(2, current - sideCount);
  const rightBound = Math.min(total - 1, current + sideCount);

  // Left ellipsis
  if (leftBound > 2) {
    pages.push("...");
  }

  // Middle pages
  for (let i = leftBound; i <= rightBound; i++) {
    pages.push(i);
  }

  // Right ellipsis
  if (rightBound < total - 1) {
    pages.push("...");
  }

  // Always show last page
  if (total > 1) {
    pages.push(total);
  }

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages, maxVisible);

  const baseBtn =
    "inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer select-none";

  const activeBtn = "bg-primary text-on-primary shadow-sm";
  const inactiveBtn =
    "text-on-background hover:bg-outline-variant/20";
  const disabledBtn = "opacity-40 pointer-events-none";

  return (
    <nav aria-label="Pagination" className={`flex items-center justify-center gap-2 ${className}`}>
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseBtn} ${currentPage === 1 ? disabledBtn : inactiveBtn}`}
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="inline-flex items-center justify-center w-10 h-10 text-on-surface-variant text-sm select-none"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${baseBtn} ${page === currentPage ? activeBtn : inactiveBtn}`}
            aria-current={page === currentPage ? "page" : undefined}
            aria-label={`Halaman ${page}`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${baseBtn} ${currentPage === totalPages ? disabledBtn : inactiveBtn}`}
      >
        <FiChevronRight size={20} />
      </button>
    </nav>
  );
}
