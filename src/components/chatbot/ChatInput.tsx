import { useRef, useState } from "react";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import IconButton from "@mui/material/IconButton";

import { colors } from "@/theme";

interface Props {
  disabled?: boolean;
  onSend: (message: string) => void;
}

const MAX_LENGTH = 500;

export default function ChatInput({ disabled = false, onSend }: Props) {
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const resetHeight = () => {
    if (!textareaRef.current) {
      return;
    }

    textareaRef.current.style.height = "auto";

    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      120,
    )}px`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value.slice(0, MAX_LENGTH);

    setMessage(value);

    resetHeight();
  };

  const send = () => {
    const value = message.trim();

    if (!value || disabled) {
      return;
    }

    onSend(value);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      send();
    }
  };

  return (
    <div
      className="border-t p-4"
      style={{
        borderColor: colors.border.primary,
        backgroundColor: colors.background.secondary,
      }}
    >
      <div
        className="flex items-end gap-2 rounded-3xl border px-3 py-2 transition-all duration-300 focus-within:shadow-md"
        style={{
          borderColor: colors.border.primary,
        }}
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          disabled={disabled}
          placeholder="Ask Zi Mist AI anything..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="max-h-30 flex-1 resize-none overflow-y-auto bg-transparent text-sm outline-none"
          style={{
            color: colors.text.primary,
          }}
        />

        <IconButton
          onClick={send}
          disabled={!message.trim() || disabled}
          sx={{
            backgroundColor: colors.primary.main,
            color: "#ffffff",

            "&:hover": {
              backgroundColor: colors.primary.dark,
            },

            "&.Mui-disabled": {
              opacity: 0.5,
              color: "#ffffff",
            },
          }}
        >
          <SendRoundedIcon fontSize="small" />
        </IconButton>
      </div>

      <div
        className="mt-2 flex justify-between px-2 text-xs"
        style={{
          color: colors.text.secondary,
        }}
      >
        <span>Enter to send</span>

        <span>
          {message.length}/{MAX_LENGTH}
        </span>
      </div>
    </div>
  );
}
