import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <nav className="w-full bg-background sticky top-0 z-50 border-b border-outline-variant/30">
      <div className=" h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary group-hover:bg-primary-container group-hover:text-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-on-background">
            Listings
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-on-background font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/properties"
            className="text-on-background font-medium hover:text-primary transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/agents"
            className="text-on-background font-medium hover:text-primary transition-colors"
          >
            Agents
          </Link>
          <Link
            href="/blog"
            className="text-on-background font-medium hover:text-primary transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary">Contact Us</Button>
        </div>

        {/* Mobile Menu Toggle (Placeholder for visual) */}
        <div className="md:hidden">
          <button className="text-on-background p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
