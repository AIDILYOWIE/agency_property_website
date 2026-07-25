import React from "react";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center animate-out fade-out duration-500 fill-mode-forwards delay-1000">
            <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
                <div className="relative w-48 h-24 mb-6">
                    <Image
                        src="/logo.png"
                        alt="Agency Logo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h2 className="text-2xl font-cinzel font-bold text-on-background flex items-center tracking-wider">
                    Loading
                    <span className="inline-flex w-[24px] overflow-hidden">
                        <span className="dot-animate inline-block animation-delay-200">.</span>
                        <span className="dot-animate inline-block animation-delay-200">.</span>
                        <span className="dot-animate inline-block animation-delay-200">.</span>
                    </span>
                </h2>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .dot-animate {
          animation: dotBounce 1.4s infinite ease-in-out both;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
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
