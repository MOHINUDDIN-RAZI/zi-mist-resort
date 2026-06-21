import useChatBot from "@/hooks/useChatBot";

import FloatingButton from "./FloatingButton";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const { isOpen, isTyping, messages, toggleChat, sendMessage } = useChatBot();

  return (
    <>
      {!isOpen && <FloatingButton onClick={toggleChat} />}

      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={toggleChat}
          onSend={sendMessage}
        />
      )}
    </>
  );
}
