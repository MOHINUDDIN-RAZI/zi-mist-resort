import type { ChatIntent } from "@/types/chatbot";

export const chatbotData: ChatIntent[] = [

  {
  id: "identity",

  title: "Identity",

  keywords: [
    "who are you",
    "who r u",
    "who r you",
    "your name",
    "ur name",
    "what is your name",
    "what's your name",
    "whats your name",
    "tell me about yourself",
    "introduce yourself",
    "are you ai",
    "ai",
    "assistant",
    "bot",
    "chatbot",
    "who made you",
    "razi"
  ],

  response: `👋 I'm Zi Mist AI, your virtual resort concierge made by Razi.

I'm here to help you with:

🏨 Room information
💰 Pricing
📅 Bookings
🌿 Amenities
📍 Location
📞 Contact details

Feel free to ask me anything about Zi Mist Resort!`,

  suggestions: [
    "Show Rooms",
    "Room Prices",
    "Amenities",
    "Book Now",
  ],
},
{
  id: "capabilities",

  title: "Capabilities",

  keywords: [
    "what can you do",
    "help",
    "can you help",
    "what do you do",
    "features",
    "commands",
  ],

  response: `🤖 I can help you with:

🏨 Available rooms
💰 Room prices
🌿 Resort amenities
📅 Booking information
📍 Resort location
📞 Contact details

Just ask in natural language!`,

  suggestions: [
    "Show Rooms",
    "Room Prices",
    "Location",
    "Contact",
  ],
},
{
  id: "smalltalk",

  title: "Small Talk",

  keywords: [
    "how are you",
    "how r u",
    "how are u",
    "how do you do",
    "are you okay",
    "how's it going",
    "how is it going",
  ],

  response: `😊 I'm doing great and ready to help you plan your stay at Zi Mist Resort!

What would you like to know?`,

  suggestions: [
    "Show Rooms",
    "Amenities",
    "Book Now",
  ],
},
  {
    id: "greeting",

    title: "Greeting",

    keywords: [
      "hi",
      "hello",
      "hey",
      "hii",
      "hiii",
      "helo",
      "hlo",
      "hy",
      "good morning",
      "good afternoon",
      "good evening",
      "greetings",
      "welcome",
    ],

    response: `👋 Welcome to Zi Mist Resort!

I'm your AI Concierge.

I can help you with:

🏨 Rooms
💰 Pricing
🌿 Amenities
📅 Booking
📍 Location
📞 Contact

How can I assist you today?`,

    suggestions: [
      "Show Rooms",
      "Room Prices",
      "Amenities",
      "Book Now",
    ],
  },

  {
    id: "rooms",

    title: "Rooms",

    keywords: [
      "room",
      "rooms",
      "stay",
      "accommodation",
      "villa",
      "suite",
      "cottage",
      "family suite",
      "forest villa",
      "deluxe cottage",
      "available room",
      "room types",
      "luxury room",
      "show rooms"
    ],

    response: `🏨 Our Rooms

🌿 Deluxe Cottage
₹12,000 / night

👨‍👩‍👧 Family Suite
₹16,000 / night

🌄 Forest Villa
₹18,000 / night

Every stay includes beautiful views and premium hospitality.`,

    suggestions: [
      "Room Prices",
      "Book Now",
      "Amenities",
    ],
  },

  {
    id: "pricing",

    title: "Pricing",

    keywords: [
      "price",
      "prices",
      "pricing",
      "cost",
      "charges",
      "rate",
      "tariff",
      "room price",
      "how much",
      "amount",
    ],

    response: `💰 Room Pricing

🌿 Deluxe Cottage
₹12,000 / night

👨‍👩‍👧 Family Suite
₹16,000 / night

🌄 Forest Villa
₹18,000 / night

For seasonal offers and group bookings, please contact us.`,

    suggestions: [
      "Rooms",
      "Book Now",
    ],
  },

  {
    id: "amenities",

    title: "Amenities",

    keywords: [
      "amenities",
      "facility",
      "facilities",
      "wifi",
      "pool",
      "restaurant",
      "food",
      "breakfast",
      "parking",
      "garden",
      "view",
      "gym",
      "services",
    ],

    response: `🌿 Resort Amenities

✔ Free WiFi

✔ Swimming Pool

✔ Restaurant

✔ Private Parking

✔ Garden Area

✔ Scenic Mountain Views

✔ Family Friendly Environment`,

    suggestions: [
      "Rooms",
      "Book Now",
    ],
  },

  {
  id: "booking",

  title: "Booking",

  keywords: [
    "book",
    "booking",
    "reserve",
    "reservation",
    "checkin",
    "checkout",
    "stay booking",
    "book room",
    "book a room",
    "book for me",
    "can you book for me",
    "can u book for me",
    "i want to book",
    "i want a room",
    "i need a room",
    "reserve a room",
    "make a reservation",
    "room booking",
    "stay",
    "stay at resort",
  ],

  response: `🏨 I'd be happy to help!

You can submit a booking request using our Booking page or contact us directly via WhatsApp.

Please select a room and your preferred check-in/check-out dates to get started.`,

  suggestions: [
    "Book Now",
    "Show Rooms",
    "Room Prices",
  ],
},

  {
    id: "location",

    title: "Location",

    keywords: [
      "location",
      "address",
      "where",
      "where are you",
      "map",
      "route",
      "direction",
      "araku",
      "india",
      "area",
      "place",
      "point"
    ],

    response: `📍 Zi Mist Resort

Araku Valley,
Andhra Pradesh,
India

Need directions?
You can also contact us on WhatsApp.`,

    suggestions: [
      "WhatsApp",
      "Contact",
    ],
  },

  {
    id: "contact",

    title: "Contact",

    keywords: [
      "contact",
      "phone",
      "call",
      "mobile",
      "email",
      "number",
      "reach",
    ],

    response: `📞 Contact Us

Phone:
+91 XXXXX XXXXX

Email:
zimistresort@gmail.com

We're happy to assist you.`,

    suggestions: [
      "WhatsApp",
      "Book Now",
    ],
  },

  {
    id: "thanks",

    title: "Thanks",

    keywords: [
      "thanks",
      "thank you",
      "thankyou",
      "thx",
      "tnx",
      "great",
      "awesome",
    ],

    response: `😊 You're welcome!

I'm always here to help you plan your perfect stay at Zi Mist Resort.`,

    suggestions: [
      "Rooms",
      "Book Now",
    ],
  },

  {
    id: "goodbye",

    title: "Goodbye",

    keywords: [
      "bye",
      "goodbye",
      "see you",
      "see ya",
      "take care",
      "later",
    ],

    response: `👋 Thank you for visiting Zi Mist Resort.

We hope to welcome you soon.

Have a wonderful day!`,

    suggestions: [
      "Book Now",
    ],
  },
  {
  id: "pets",

  title: "Pet Policy",

  keywords: [
    "pet",
    "pets",
    "dog",
    "cat",
    "animals"
  ],

  response: `🐾 Pets are currently not allowed inside the resort.`,

  suggestions: [
    "Rooms",
    "Contact"
  ]
}
];