"use client";

import React, { useState, useRef, useEffect, forwardRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'options' | 'value' | 'onChange'> {
  options: SelectOption[];
  variant?: "primary" | "outline";
  placeholder?: string;
  value?: string | number;
  onValueChange?: (value: string | number) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, variant = "primary", placeholder = "Pilih opsi...", value, onValueChange, className = "", ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(value || props.defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Sync external value changes
    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleSelect = (val: string | number) => {
      setSelectedValue(val);
      setIsOpen(false);
      if (onValueChange) {
        onValueChange(val);
      }
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    const baseStyles =
      "cursor-pointer inline-flex items-center justify-between rounded-full outline-none pr-12 pl-6 py-3 w-full";

    const variants = {
      primary: "bg-outline-variant/20 text-on-background",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary bg-transparent",
    };
1
    return (
      <div className={`relative inline-block w-full ${className}`} ref={containerRef}>
        {/* Hidden native select for form submissions and ref support */}
        <select 
          ref={ref} 
          value={selectedValue || ""} 
          className="hidden" 
          onChange={(e) => handleSelect(e.target.value)} 
          {...props}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        {/* Custom Trigger */}
        <div
          className={`${baseStyles} ${variants[variant]}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="truncate font-normal">
            {selectedOption ? (
              selectedOption.label
            ) : (
              <span className="text-on-surface-variant">{placeholder}</span>
            )}
          </span>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
            <FiChevronDown 
              className={`!text-on-background transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
              size={22} 
            />
          </div>
        </div>

        {/* Custom Dropdown List */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-surface-container-lowest border border-outline-variant/30 rounded-xl z-50 overflow-hidden">
            <ul className="max-h-60 overflow-y-auto">
              {options.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(option.value)}
                  className={`px-6 py-3 cursor-pointer text-on-background transition-colors ${
                    selectedValue === option.value 
                      ? 'bg-outline-variant/30 font-semibold' 
                      : 'hover:bg-outline-variant/20 font-normal'
                  }`}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
