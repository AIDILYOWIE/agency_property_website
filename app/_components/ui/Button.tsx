import React from "react";
import Link from "next/link";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outlineWhite" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLinkProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ease-in-out disabled:opacity-50 disabled:pointer-events-none gap-2";

  const variants = {
    primary: "bg-primary text-on-primary border-2 border-primary hover:border-transparent hover:bg-transparent hover:text-primary",
    secondary: " text-on-surface-variant bg-outline-variant/30 hover:bg-outline-variant/15",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-on-background",
    outline: "border-2 border-on-background text-on-background hover:bg-on-surface-variant/30 hover:text-white hover:border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={combinedClasses} {...rest}>
        {children}
      </Link>
    );
  }

  // Remove href from props before passing to button to prevent React DOM warnings
  // when href is an empty string or undefined but still exists in the props object.
  const { href, ...buttonProps } = props as any;

  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
}
