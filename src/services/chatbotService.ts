import Fuse from "fuse.js";

import { chatbotData } from "@/constants/chatbotData";

import { normalizeText } from "@/utils/chatbotUtils";

const fuse = new Fuse(chatbotData, {
  keys: ["keywords"],

  includeScore: true,

  threshold: 0.35,

  ignoreLocation: true,

  minMatchCharLength: 2,
});

export function getBotResponse(message: string) {
  const normalizedMessage = normalizeText(message);

  const result = fuse.search(normalizedMessage);

  if (result.length > 0) {
    const bestMatch = result[0].item;

    return {
      text: bestMatch.response,

      suggestions: bestMatch.suggestions ?? [],
    };
  }

  return {
    text: `😄 Sorry, I couldn't understand that.

You can ask me about:

🏨 Rooms

💰 Pricing

🌿 Amenities

📅 Booking

📍 Location

📞 Contact`,

    suggestions: [
      "Show Rooms",
      "Room Prices",
      "Amenities",
      "Book Now",
    ],
  };
}