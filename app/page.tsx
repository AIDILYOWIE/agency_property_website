import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-16 pb-20">
        <Hero />
        {/* Future sections will go here */}
      </div>
    </>
  );
}
