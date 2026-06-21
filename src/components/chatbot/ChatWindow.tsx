import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

import type { ChatMessage } from "@/types/chatbot";

import { colors } from "@/theme";

interface Props {
  messages: ChatMessage[];

  isTyping: boolean;

  onClose: () => void;

  onSend: (message: string) => void;
}

export default function ChatWindow({
  messages,
  isTyping,
  onClose,
  onSend,
}: Props) {
  return (
    <div
      className="
    fixed
    right-6
    top-6
    bottom-6
    z-50
    flex
    w-95
    flex-col
    overflow-hidden
    rounded-3xl
    shadow-2xl

    max-md:right-0
    max-md:top-0
    max-md:bottom-0
    max-md:w-screen
    max-md:rounded-none
  "
      style={{
        backgroundColor: colors.background.primary,
        border: `1px solid ${colors.border.primary}`,
      }}
    >
      <ChatHeader onClose={onClose} />

      <ChatBody
        messages={messages}
        isTyping={isTyping}
        onSuggestionClick={onSend}
      />

      <ChatInput disabled={isTyping} onSend={onSend} />
    </div>
  );
}
