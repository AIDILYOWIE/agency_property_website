"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export function LoadingScreen() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true); // Intentionally true on initial mount
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Whenever pathname or searchParams change, explicitly re-trigger the loading overlay
        setIsLoading(true);
        setIsFadingOut(false);

        // Keep the loading screen visible for 800ms to allow the animation to play
        // and provide that premium branded feel, then fade it out.
        const displayTimeout = setTimeout(() => {
            setIsFadingOut(true);

            // Physically unmount it after the fade-out animation completes
            const unmountTimeout = setTimeout(() => {
                setIsLoading(false);
            }, 500); // Wait 500ms for opacity transition to finish

            return () => clearTimeout(unmountTimeout);
        }, 2000); // Show loading for exactly 1 second

        return () => clearTimeout(displayTimeout);
    }, [pathname, searchParams]);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFadingOut ? "opacity-0" : "opacity-100"}`}
        >
            <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in-90 duration-500">
                {/* Logo */}
                <div className="relative w-[300px] h-[150px]">
                    <Image
                        src="/logo.png"
                        alt="Property Agency Logo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Animated Loading Text */}
                <h2 className="text-xl font-cinzel font-bold text-on-background flex items-center tracking-widest">
                    LOADING
                    <span className="inline-flex w-[24px] pl-1 overflow-hidden">
                        <span className="dot-animate inline-block" style={{ animationDelay: "0.2s" }}>.</span>
                        <span className="dot-animate inline-block" style={{ animationDelay: "0.4s" }}>.</span>
                        <span className="dot-animate inline-block" style={{ animationDelay: "0.6s" }}>.</span>
                    </span>
                </h2>
            </div>

            {/* Embedded CSS for dot animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .dot-animate {
          animation: dotBounce 1.4s infinite ease-in-out both;
        }
        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          40% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}} />
        </div>
    );
}
