import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";

import { colors } from "@/theme";

interface Props {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: Props) {
  return (
    <div
      className="flex items-center justify-between px-5 py-4"
      style={{
        background: `linear-gradient(135deg, ${colors.primary.main}, #000000)`,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur">
          <SmartToyOutlinedIcon
            sx={{
              color: "#ffffff",
            }}
          />
        </div>

        <div>
          <h3
            className="font-semibold"
            style={{
              color: "#ffffff",
            }}
          >
            Zi Mist AI
          </h3>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span
              className="text-xs"
              style={{
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Always online
            </span>
          </div>
        </div>
      </div>

      <IconButton
        onClick={onClose}
        sx={{
          color: "#ffffff",
        }}
      >
        <CloseRoundedIcon />
      </IconButton>
    </div>
  );
}
