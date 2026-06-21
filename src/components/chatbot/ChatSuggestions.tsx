import { colors } from "@/theme";

interface Props {
  suggestions: string[];
  onSelect: (value: string) => void;
}

export default function ChatSuggestions({ suggestions, onSelect }: Props) {
  if (!suggestions.length) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {suggestions.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className="rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
          style={{
            borderColor: colors.primary.main,
            color: colors.primary.main,
            backgroundColor: "transparent",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
