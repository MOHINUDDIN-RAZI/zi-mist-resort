import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";

import { colors } from "@/theme";

interface Props {
  onClick: () => void;
}

export default function FloatingButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label="Open AI Assistant"
      className="
        fixed
        bottom-6
        right-6
        z-50
cursor-pointer
        group

        flex
        items-center
        justify-center

        h-16
        w-16

        rounded-full

        shadow-2xl

        transition-all
        duration-300

        hover:scale-110
        active:scale-95
      "
      style={{
        background: `linear-gradient(135deg, ${colors.primary.main}, #000000)`,
      }}
    >
      <SmartToyRoundedIcon
        sx={{
          color: "#ffffff",
          fontSize: 32,
        }}
      />

      <span
        className="
          absolute

          -top-1
          -right-1

          h-4
          w-4

          rounded-full

          animate-ping
        "
        style={{
          backgroundColor: "#22c55e",
        }}
      />

      <span
        className="
          absolute

          -top-1
          -right-1

          h-4
          w-4

          rounded-full
        "
        style={{
          backgroundColor: "#22c55e",
        }}
      />

      <div
        className="
          absolute

          right-20

          whitespace-nowrap

          rounded-full

          px-4
          py-2

          text-sm

          opacity-0

          transition-all

          duration-300

          group-hover:opacity-100
        "
        style={{
          backgroundColor: colors.background.secondary,
          color: colors.text.primary,
          border: `1px solid ${colors.border.primary}`,
        }}
      >
        Ask Zi Mist AI
      </div>
    </button>
  );
}
