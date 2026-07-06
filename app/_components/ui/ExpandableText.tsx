"use client";

import React, { useState, useRef, useEffect } from "react";

interface ExpandableTextProps {
  /** The full text content to display */
  text: string;
  /** Maximum number of visible lines before truncation (default: 4) */
  maxLines?: number;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * ExpandableText — A reusable component that truncates long text with a
 * "Read More" / "Read Less" toggle. Uses CSS `line-clamp` for a clean,
 * CSS-based truncation that respects any font size or line height.
 *
 * The "Read More" button only appears when the text actually overflows
 * the specified `maxLines` limit, avoiding an unnecessary toggle on short content.
 */
export function ExpandableText({ text, maxLines = 4, className = "" }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Check if the text content actually exceeds the clamped height
  useEffect(() => {
    const el = textRef.current;
    if (el) {
      // scrollHeight > clientHeight means text is being truncated
      setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
    }
  }, [text, maxLines]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <p
        ref={textRef}
        className={`text-on-surface-variant leading-relaxed text-lg transition-all duration-300 ease-in-out ${
          !isExpanded ? "overflow-hidden" : ""
        }`}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isExpanded ? "unset" : maxLines,
        }}
      >
        {text}
      </p>

      {/* Only show the toggle button when text actually overflows */}
      {(isOverflowing || isExpanded) && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="self-start text-primary font-medium text-base hover:underline underline-offset-4 transition-colors cursor-pointer focus:outline-none"
        >
          {isExpanded ? "Sembunyikan" : "Baca Selengkapnya"}
        </button>
      )}
    </div>
  );
}
