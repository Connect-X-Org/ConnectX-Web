import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  type InferUITools,
  stepCountIs,
  streamText,
  type ToolSet,
  tool,
  type UIDataTypes,
  type UIMessage,
} from "ai";
import z from "zod";
import { mockRestaurants } from "@/config/ai-data";
import { houses, places } from "@/config/data";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: `You are an AI assistant that helps foreigners visiting Rwanda. 
- Provide clear, friendly, and practical guidance about services in Rwanda.  
- Help them discover hotels, restaurants, cultural attractions, tourist destinations, and transport options.  
- Recommend places for food, accommodation, and entertainment.  
- Explain how to access local services (government, banking, health, emergency, etc.).  
- Be polite, concise, and always make the information useful for someone who is new to Rwanda.
- When users ask for restaurants or places, use the showRestaurants or showPlaces tools to display them if not found show them other 3 similar suggestions.
- After showing tool results, ALWAYS provide a helpful follow-up message with additional context, tips, or suggestions.
- Your follow-up should include practical information like operating hours, price ranges, what makes each place special, or what to try.`,
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(5),

    tools,
  });

  return result.toUIMessageStreamResponse();
}

const tools = {
  showRestaurants: tool({
    description:
      "Display a list of restaurants in Rwanda. Use this when users ask for restaurant recommendations, places to eat, or dining options.",
    inputSchema: z.object({
      query: z
        .string()
        .optional()
        .describe("The search query or type of cuisine"),
      location: z
        .string()
        .optional()
        .describe("Specific location in Rwanda (e.g., Kigali, Musanze)"),
      limit: z
        .number()
        .int()
        .positive()
        .optional()
        .default(6)
        .describe("Number of restaurants to display"),
    }),

    execute: async ({ query, location, limit }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Filter by location if specified
      let filteredRestaurants = location
        ? mockRestaurants.filter((r) =>
            r.place.toLowerCase().includes(location.toLowerCase())
          )
        : mockRestaurants;

      // Apply limit
      filteredRestaurants = filteredRestaurants.slice(0, limit);
      const locationText = location ? ` in ${location}` : " in Rwanda";
      const message = `I found ${filteredRestaurants.length} restaurant${
        filteredRestaurants.length !== 1 ? "s" : ""
      }  ${locationText}. Here are the top recommendations:`;

      return {
        restaurants: filteredRestaurants,
        query,
        location,
        total: mockRestaurants.length,
        message,
      };
    },
  }),
  showRestaurant: tool({
    description:
      "Display a single restaurant's images, name, location, and menus in Rwanda. Use this when users ask for details about one restaurant, such as its location or offerings.",

    inputSchema: z.object({
      name: z.string().describe("The restaurant name or keyword to search for"),
    }),

    execute: async ({ name }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Example mock data import (ensure this matches your setup)
      // import { mockRestaurants } from "./mockRestaurants";

      const filteredRestaurant = mockRestaurants.find((r) =>
        r.title.toLowerCase().includes(name.toLowerCase())
      );

      if (!filteredRestaurant) {
        return {
          message: `Sorry, I couldn't find any restaurant matching "${name}". Please try another name.`,
        };
      }

      const message = `${filteredRestaurant.title} is located at ${filteredRestaurant.place}. Here are the details about it, including images, location, and menu highlights.`;

      return {
        restaurant: filteredRestaurant,
        message,
      };
    },
  }),
  showPlaces: tool({
    description:
      "Display a list of tourist attractions, parks, or lakes of interest in Rwanda.",
    inputSchema: z.object({
      type: z
        .enum(["park", "attraction", "museum", "lake"])
        .optional()
        .describe("Type of place to list"),
      query: z.string().optional().describe("Search query or description"),
      location: z.string().optional().describe("Specific location in Rwanda"),
      limit: z
        .number()
        .int()
        .positive()
        .optional()
        .default(6)
        .describe("Number of places to display"),
    }),
    execute: async ({ type, query, location, limit }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));

      let filteredPlaces = type
        ? places.filter((p) => p.type === type)
        : places;
      if (location) {
        filteredPlaces = filteredPlaces.filter((p) =>
          p.place.toLowerCase().includes(location.toLowerCase())
        );
      }

      const slicedPlaces = filteredPlaces.slice(0, limit);
      const locationText = location ? ` in ${location}` : " in Rwanda";
      const typeText = type ? `${type}s` : "place";
      const message = `I found ${slicedPlaces.length} ${typeText}${locationText}. Here are my recommendations:`;

      return {
        places: slicedPlaces,
        type,
        query,
        location,
        total: slicedPlaces.length,
        message,
      };
    },
  }),
  showHouses: tool({
    description:
      "Display a list of houses or places to stay in Rwanda. Use this when users ask for accommodation options or where to stay.",

    inputSchema: z.object({
      query: z
        .string()
        .optional()
        .describe(
          "Keyword or phrase to search for (e.g., 'luxury', 'villa', 'beach')"
        ),
      location: z
        .string()
        .optional()
        .describe("Specific location in Rwanda (e.g., 'Kigali', 'Musanze')"),
      limit: z
        .number()
        .int()
        .positive()
        .optional()
        .default(6)
        .describe("Number of houses to display"),
    }),

    execute: async ({ query, location, limit }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Assume houses is your mock or database array
      // const houses = [...];

      let filteredHouses = houses;

      // Filter by location
      if (location) {
        filteredHouses = filteredHouses.filter((h) =>
          h.place.some((p) => p.toLowerCase().includes(location.toLowerCase()))
        );
      }

      // Filter by query (title or description)
      if (query) {
        filteredHouses = filteredHouses.filter(
          (h) =>
            h.title.toLowerCase().includes(query.toLowerCase()) ||
            h.description.toLowerCase().includes(query.toLowerCase())
        );
      }

      // Limit results
      const slicedHouses = filteredHouses.slice(0, limit);

      // Message generation
      const locationText = location ? ` in ${location}` : " in Rwanda";
      const message = `I found ${slicedHouses.length} place${
        slicedHouses.length !== 1 ? "s" : ""
      }${locationText}. Here are my recommendations:`;

      return {
        houses: slicedHouses,
        query,
        location,
        total: slicedHouses.length,
        message,
      };
    },
  }),
} satisfies ToolSet;

export type ChatTools = InferUITools<typeof tools>;

export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;
