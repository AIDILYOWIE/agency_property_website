import {
  Message as ChatMessage,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";
import { renderPropertyCard } from "./Chatbot";
import { Bot } from "lucide-react";

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const text = message.parts.map((p) => p.text).join("");

  return (
    <ChatMessage align={isUser ? "end" : "start"} className="items-end gap-2.5">
      {!isUser && (
        <MessageAvatar className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md !min-w-8 overflow-hidden">
          <Bot size={16} className="text-white" />
        </MessageAvatar>
      )}

      <MessageContent className="w-auto flex-none max-w-[80%]">
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm w-fit ${isUser
            ? "bg-primary text-white rounded-br-sm self-end"
            : "bg-surface-container-low text-on-background border border-outline-variant/30 rounded-bl-sm self-start"
            }`}
        >
          {renderPropertyCard(text)}
        </div>
      </MessageContent>
    </ChatMessage>
  );
}