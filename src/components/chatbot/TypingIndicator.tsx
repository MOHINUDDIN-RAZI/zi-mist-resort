import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

import { colors } from "@/theme";

export default function TypingIndicator() {
  return (
    <div className="mb-4 flex justify-start">
      <div className="flex items-end gap-2">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{
            backgroundColor: colors.primary.main,
            color: "#ffffff",
          }}
        >
          <SmartToyOutlinedIcon fontSize="small" />
        </div>

        <div
          className="flex items-center gap-1 rounded-3xl px-4 py-3"
          style={{
            backgroundColor: colors.background.secondary,
            border: `1px solid ${colors.border.primary}`,
          }}
        >
          <span className="typing-dot" />

          <span className="typing-dot" />

          <span className="typing-dot" />
        </div>
      </div>
    </div>
  );
}
