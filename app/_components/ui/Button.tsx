import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ease-in-out hover:-translate-y-[2px] active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container",
    secondary: "bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
