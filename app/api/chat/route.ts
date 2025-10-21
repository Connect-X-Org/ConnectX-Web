import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

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
- Be polite, concise, and always make the information useful for someone who is new to Rwanda.`,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
