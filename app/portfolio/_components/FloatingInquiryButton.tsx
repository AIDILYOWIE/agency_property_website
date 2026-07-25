"use client";

import React, { useState } from "react";
import { Button } from "@/app/_components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";
import { InquiryFormModal } from "@/app/_components/ui/InquiryFormModal";

export function FloatingInquiryButton({ title }: { title: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-8 right-8 z-30">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="primary"
                    className="shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    Let's Connect
                </Button>
            </div>

            <InquiryFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Inquire Property"
                defaultMessage={`Hello, I am interested in ${title}. Please provide me with more information regarding this property.`}
            />
        </>
    );
}
