"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { Button } from "./Button";
import { Field, FieldLabel, FieldContent } from "@/components/ui/field";

export interface InquiryFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: React.ReactNode;
    defaultMessage?: string;
}

export function InquiryFormModal({
    isOpen,
    onClose,
    title,
    defaultMessage = ""
}: InquiryFormModalProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    // Make sure we only animate after mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Sync defaultMessage when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, message: "" }));
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, defaultMessage]);

    if (!isMounted || !isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app we might POST here. We can simulate sending via WhatsApp if we want, or just close.
        const textMsg = `*New Inquiry via Website*
    
*Details:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}

*Message:*
${formData.message}`;

        window.open(`https://wa.me/6285183117165?text=${encodeURIComponent(textMsg)}`, "_blank");
        onClose();
    };

    const modalContent = (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true">
            {/* Backdrop with elegant blur */}
            <div
                className="absolute inset-0 bg-on-background/60 backdrop-blur-sm animate-in fade-in duration-300 ease-out"
                onClick={onClose}
            />

            {/* Modal Panel container for vertical alignment & sticky footer */}
            <div className="relative w-full max-w-[520px] bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300 ease-out max-h-[90vh] flex flex-col border border-outline-variant/20 overflow-hidden">

                {/* Soft decorative glow background (fixed at top) */}
                <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0" />

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 text-outline hover:text-on-background transition-all duration-300 rounded-full cursor-pointer z-20"
                >
                    <FiX size={22} />
                </button>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden h-full">
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-10 z-10 relative custom-scrollbar">
                        <div className="relative mb-8 text-left">
                            <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-on-background flex-grow">
                                {title}
                            </h2>
                            <p className="text-on-surface-variant text-body-md mt-2">
                                Leave your contact details and a message. A member of our team will assist you shortly.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <Field>
                                <FieldLabel htmlFor="fullName" className="text-on-background font-semibold">Full Name *</FieldLabel>
                                <FieldContent>
                                    <input
                                        id="fullName"
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 bg-white border border-outline-variant/60 rounded-xl outline-none text-on-background placeholder:text-outline focus:none transition-all"
                                        placeholder="e.g. John Doe"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </FieldContent>
                            </Field>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Field>
                                    <FieldLabel htmlFor="phone" className="text-on-background font-semibold">Phone Number *</FieldLabel>
                                    <FieldContent>
                                        <input
                                            id="phone"
                                            required
                                            type="tel"
                                            className="w-full px-4 py-3 bg-white border border-outline-variant/60 rounded-xl outline-none text-on-background placeholder:text-outline focus:none transition-all"
                                            placeholder="+62 812 3456"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </FieldContent>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email" className="text-on-background font-semibold">Email</FieldLabel>
                                    <FieldContent>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full px-4 py-3 bg-white border border-outline-variant/60 rounded-xl outline-none text-on-background placeholder:text-outline focus:none transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </FieldContent>
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="message" className="text-on-background font-semibold">Message *</FieldLabel>
                                <FieldContent>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full h-[150px] px-4 py-3 bg-white border border-outline-variant/60 rounded-xl outline-none text-on-background placeholder:text-outline focus:none transition-all resize-none"
                                        placeholder="I am interested in..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </FieldContent>
                            </Field>
                        </div>
                    </div>

                    {/* Fixed Footer Area */}
                    <div className="p-6 md:px-10 md:py-6 border-t border-outline-variant/40 bg-white z-10 shrink-0">
                        <Button type="submit" variant="primary" className="w-full shadow-lg hover:shadow-xl py-3.5 text-base rounded-full">
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
