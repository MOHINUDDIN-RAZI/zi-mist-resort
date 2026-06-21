export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "") 
    .replace(/\s+/g, " "); 
}


export function generateId(): string {
  return crypto.randomUUID();
}

export function formatTime(date: Date = new Date()): string {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function removeExtraSpaces(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}


export function capitalizeFirstLetter(text: string): string {
  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}