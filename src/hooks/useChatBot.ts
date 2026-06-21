import { useEffect, useState } from "react";

import type { ChatMessage } from "@/types/chatbot";

import { getBotResponse } from "@/services/chatbotService";

import {
  formatTime,
  generateId,
} from "@/utils/chatbotUtils";

const welcomeMessage: ChatMessage = {
  id: generateId(),

  sender: "bot",

  timestamp: formatTime(),

  text: `👋 Welcome to Zi Mist Resort!

I'm your AI Concierge.

Ask me anything about:

🏨 Rooms

💰 Pricing

🌿 Amenities

📅 Booking

📍 Location`,

  suggestions: [
    "Show Rooms",
    "Room Prices",
    "Amenities",
    "Book Now",
  ],
};

export default function useChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    setMessages([welcomeMessage]);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) {
      return;
    }

    const userMessage: ChatMessage = {
      id: generateId(),

      sender: "user",

      timestamp: formatTime(),

      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    const response = getBotResponse(text);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: generateId(),

        sender: "bot",

        timestamp: formatTime(),

        text: response.text,

        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, botMessage]);

      setIsTyping(false);
    }, 800);
  };

  return {
    isOpen,

    isTyping,

    messages,

    toggleChat,

    sendMessage,
  };
}