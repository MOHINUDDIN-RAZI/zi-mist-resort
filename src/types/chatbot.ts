export type Sender = "user" | "bot";

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: string;
  suggestions?: string[];
}

export interface ChatIntent {
  id: string;

  title: string;

  keywords: string[];

  response: string;

  suggestions?: string[];
}

export interface QuickAction {
  id: string;

  label: string;

  value: string;

  icon?: string;
}

export interface ChatBotState {
  isOpen: boolean;

  isTyping: boolean;

  messages: ChatMessage[];
}