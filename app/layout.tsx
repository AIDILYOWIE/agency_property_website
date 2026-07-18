import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/app/_components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Property Agency | Your Perfect Place",
  description: "Navigate the property market with ease. Expert guidance and outstanding service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", plusJakartaSans.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col font-sans bg-background text-on-background">
        {/* Navbar will be added here */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
