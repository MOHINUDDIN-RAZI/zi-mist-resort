import { useEffect, useRef } from "react";

import type { ChatMessage as ChatMessageType } from "@/types/chatbot";

import ChatMessage from "./ChatMessage";
import ChatSuggestions from "./ChatSuggestions";
import TypingIndicator from "./TypingIndicator";

import { colors } from "@/theme";

interface Props {
  messages: ChatMessageType[];
  isTyping: boolean;
  onSuggestionClick: (value: string) => void;
}

export default function ChatBody({
  messages,
  isTyping,
  onSuggestionClick,
}: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div
      className="flex-1 overflow-y-auto p-4"
      style={{
        backgroundColor: colors.background.primary,
      }}
    >
      {messages.map((message) => (
        <div key={message.id}>
          <ChatMessage message={message} />

          {message.sender === "bot" &&
            message.suggestions &&
            message.suggestions.length > 0 && (
              <div className="mb-4 ml-2">
                <ChatSuggestions
                  suggestions={message.suggestions}
                  onSelect={onSuggestionClick}
                />
              </div>
            )}
        </div>
      ))}

      {isTyping && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}
