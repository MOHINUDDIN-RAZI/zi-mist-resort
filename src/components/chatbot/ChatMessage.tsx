import type { ChatMessage as ChatMessageType } from "@/types/chatbot";

import { colors } from "@/theme";

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.sender === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className="max-w-[80%] min-w-[50%] rounded-3xl px-4 py-3 shadow-sm"
        style={{
          backgroundColor: isUser
            ? colors.primary.main
            : colors.background.secondary,

          color: isUser ? "#ffffff" : colors.text.primary,

          border: isUser ? "none" : `1px solid ${colors.border.primary}`,
        }}
      >
        <p className="whitespace-pre-line text-sm leading-7">{message.text}</p>

        <div
          className="text-right text-[11px] opacity-60"
          style={{
            marginTop: isUser ? "2px" : "8px",
          }}
        >
          {message.timestamp}
        </div>
      </div>
    </div>
  );
}
