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
import { places } from "@/config/data";

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
- When users ask for restaurants or places, use the listRestaurants or listPlaces tools to display them.
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
      // return {
      //   places: mockPlaces,
      //   total: mockPlaces.length,
      // };
    },
  }),
} satisfies ToolSet;

export type ChatTools = InferUITools<typeof tools>;

export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;
