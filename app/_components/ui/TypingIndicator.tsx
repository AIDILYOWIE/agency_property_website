import { Bot } from "lucide-react";
import {
  Message as ChatMessage,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";

export function TypingIndicator() {
  return (
    <ChatMessage align="start" className="items-end gap-2.5">
      <MessageAvatar className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md !min-w-8 overflow-hidden">
        <Bot size={16} className="text-white" />
      </MessageAvatar>
      <MessageContent className="w-auto flex-none max-w-[80%]">
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 w-fit self-start">
          <span className="dot-typing w-2 h-2 rounded-full bg-outline" style={{ animationDelay: "0s" }} />
          <span className="dot-typing w-2 h-2 rounded-full bg-outline" style={{ animationDelay: "0.2s" }} />
          <span className="dot-typing w-2 h-2 rounded-full bg-outline" style={{ animationDelay: "0.4s" }} />
        </div>
      </MessageContent>
    </ChatMessage>
  );
}