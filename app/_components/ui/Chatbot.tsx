"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "@/components/ui/message-scroller";
import { properties } from "@/lib/data/properties";
import { Openslot } from "@/lib/data/open_slot";
import { PortoCard } from "./PortoCard";
import { TypingIndicator } from "./TypingIndicator";
import MessageBubble from "./MessageBubble";
import { PricingCard } from "./PricingCard";
import { InquiryFormModal } from "./InquiryFormModal";
import { Button } from "./Button";
import {
  Message as ChatMessage,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

const WELCOME_MESSAGE: Message = {
  role: "model",
  parts: [
    {
      text: "Halo! Saya asisten virtual Chris Property Signature. 👋\n\nSaya siap membantu Anda menemukan properti impian, menjawab pertanyaan seputar layanan kami, atau memandu Anda melalui proses properti. Apa yang bisa saya bantu hari ini?",
    },
  ],
};


export function renderPropertyCard(text: string, onOpenInquiry?: () => void) {
  // Regex mencari tag [PROPERTY_CARD: id], [OPEN_SLOT_CARD: id/ALL] dan [ACTION: ACTION_CODE]
  const tagRegex = /\[(PROPERTY_CARD|OPEN_SLOT_CARD|ACTION):\s*([a-zA-Z0-9_]+)\]/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = tagRegex.exec(text)) !== null) {
    // Tambahkan teks sebelum tag
    if (match.index > lastIndex) {
      parts.push(<span key={`text-${key++}`}>{text.substring(lastIndex, match.index)}</span>);
    }

    const tagType = match[1];
    const id = match[2];

    if (tagType === "PROPERTY_CARD") {
      const foundProperty = properties.find((p) => p.id === id);
      if (foundProperty) {
        parts.push(
          <div key={`prop-card-${id}-${key++}`} className="my-3 w-full sm:w-[280px]">
            <PortoCard
              contentClassName="!gap-1"
              href={`/portfolio/${foundProperty.slug}`}
              title={foundProperty.title}
              location={foundProperty.location}
              price={foundProperty.price}
              imageSrc={foundProperty.imageSrc}
              status={foundProperty.status}
            />
          </div>
        );
      } else {
        parts.push(<span key={`err-${key++}`}>[Properti tidak ditemukan]</span>);
      }
    } else if (tagType === "OPEN_SLOT_CARD") {
      if (id.toUpperCase() === "ALL") {
        parts.push(
          <div key={`slot-container-${key++}`} className="my-3 flex flex-col gap-3 w-full sm:w-[260px]">
            {Openslot.map((slot) => (
              <PricingCard key={`slot-card-all-${slot.id}`} name={slot.name} price={slot.price} features={slot.features} badge={slot.badge} />
            ))}
          </div>
        );
      } else {
        const foundSlot = Openslot.find((s) => s.id === Number(id));
        if (foundSlot) {
          parts.push(
            <div key={`slot-card-${id}-${key++}`} className="my-3 w-full sm:w-[260px]">
              <PricingCard name={foundSlot.name} price={foundSlot.price} features={foundSlot.features} badge={foundSlot.badge} />
            </div>
          );
        } else {
          parts.push(<span key={`err-${key++}`}>[Paket tidak ditemukan]</span>);
        }
      }
    } else if (tagType === "ACTION" && id === "INQUIRY_FORM" && onOpenInquiry) {
      parts.push(
        <div key={`action-${key++}`} className="mt-4 mb-2 cursor-pointer w-full">
          <Button
            onClick={onOpenInquiry}
            variant="primary"
            className="w-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Isi Form Kontak
          </Button>
        </div>
      );
    }

    lastIndex = tagRegex.lastIndex;
  }

  // Ambil sisa teks setelah tag terakhir
  if (lastIndex < text.length) {
    parts.push(<span key={`text-${key++}`}>{text.substring(lastIndex)}</span>);
  }

  return parts;
}


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when chat opens UI and handle greeting visibility
  useEffect(() => {
    if (isOpen) {
      setShowGreeting(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", parts: [{ text: trimmed }] };
    // Only send real messages (exclude the welcome) to API
    const historyToSend = messages.filter((m) => !(m.role === "model" && m === WELCOME_MESSAGE));
    const updatedHistory = [...historyToSend, userMsg];

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      const data = await res.json();

      if (data.text) {
        setMessages((prev) => [
          ...prev,
          { role: "model", parts: [{ text: data.text }] },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Maaf, terjadi gangguan koneksi. Silakan coba lagi dalam beberapa saat." }],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* === Floating Greeting === */}
      {!isOpen && showGreeting && (
        <div
          className="fixed bottom-[70px] right-[70px] md:bottom-[80px] md:right-[90px] z-50 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out cursor-pointer"
          onClick={() => {
            setShowGreeting(false);
            setIsOpen(true);
          }}
        >
          <ChatMessage align="end" className="items-end gap-3 drop-shadow-xl">

            <MessageContent className="w-auto flex-none max-w-[280px]">
              <div className="relative px-4 py-2 md:px-5 md:py-3.5 bg-white text-on-background border border-outline-variant/30 rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-sm leading-relaxed font-semibold">
                Hallo kak selamat datang, ada yang bisa dibantu? 👋
              </div>
            </MessageContent>
          </ChatMessage>
        </div>
      )}

      {/* === FAB Trigger Button === */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Tutup chat" : "Buka chat asisten"}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 cursor-pointer flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 ease-out ${isOpen
          ? "bg-on-background text-white rotate-0"
          : "bg-primary text-white"
          }`}
      >
        <div
          className={`transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90 absolute"}`}
        >
          <X size={22} />
        </div>
        <div
          className={`transition-all duration-300 ${isOpen ? "opacity-0 -rotate-90 absolute" : "opacity-100 rotate-0"}`}
        >
          <Sparkles size={28} />
        </div>
      </button>

      {/* === Chat Panel === */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[90%] lg:w-[30%] flex flex-col rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-out origin-bottom-right ${isOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        style={{ height: "520px" }}
        role="dialog"
        aria-label="Chat Asisten Properti"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-outline-variant/20 bg-primary rounded-t-2xl shrink-0">
          <div className="relative w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Bot size={18} className="text-white" />
            {/* Online indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white font-cinzel leading-tight">Chris Assistant</p>
            <p className="text-[11px] text-white/70 leading-tight mt-0.5 flex items-center gap-1">
              <Sparkles size={10} />
              Property Virtual Consultant
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Tutup chat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages area using MessageScroller */}
        <div className="flex-1 overflow-hidden relative">
          <MessageScrollerProvider>
            <MessageScroller className="h-full">
              <MessageScrollerViewport className="px-4 py-4">
                <MessageScrollerContent className="gap-4">
                  {messages.map((msg, i) => (
                    <MessageScrollerItem key={i} scrollAnchor={i === messages.length - 1 && !loading}>
                      <MessageBubble message={msg} onOpenInquiry={() => setIsInquiryOpen(true)} />
                    </MessageScrollerItem>
                  ))}
                  {loading && (
                    <MessageScrollerItem scrollAnchor>
                      <TypingIndicator />
                    </MessageScrollerItem>
                  )}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton direction="end" />
            </MessageScroller>
          </MessageScrollerProvider>
        </div>

        {/* Quick Suggestions (only on first load) */}
        {messages.length === 1 && !loading && (
          <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
            {["Lihat Slot Promotion", "Konsultasi gratis", "Lihat Semua Properti"].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setInput(s);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/20 hover:bg-primary/15 transition-colors font-medium"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input Footer */}
        <div className="px-3 py-3 border-t border-outline-variant/20 bg-surface shrink-0 rounded-b-2xl">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              disabled={loading}
              className="flex-1 bg-white text-on-background text-sm placeholder:text-outline rounded-full px-4 py-2.5 border border-outline-variant/40 outline-none focus:ring-0 focus:ring-none transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Kirim pesan"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Dot typing animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .dot-typing {
          animation: dotPulse 1.4s infinite ease-in-out both;
        }
        @keyframes dotPulse {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}} />

      <InquiryFormModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Hubungi Tim Chris"
        defaultMessage="Halo Tim Chris, saya tertarik..."
      />
    </>
  );
}
