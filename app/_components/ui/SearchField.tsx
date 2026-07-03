import React, { forwardRef } from "react";
import { FiSearch } from "react-icons/fi";

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Interface extends native input attributes so it supports placeholder, value, onChange, etc.
  placeholder?: string
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ className = "", placeholder = "", ...props }, ref) => {
    return (
      <div className={`relative flex items-center w-full ${className}`}>
        {/* Hardcoded Search Icon (Not externally settable, as requested) */}
        <div className="absolute left-[18px] flex items-center justify-center text-on-surface-variant pointer-events-none">
          <FiSearch size={20} />
        </div>
        
        {/* Input Field without border */}
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-3.5 bg-outline-variant/20 text-on-background rounded-full outline-none placeholder:text-on-surface-variant transition-all duration-200 border-none"
          {...props}
        />
      </div>
    );
  }
);

SearchField.displayName = "SearchField";