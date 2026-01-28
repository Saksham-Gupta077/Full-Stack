import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // Intentionally allowing safe failure if key is missing, to not break UI
    if (!process.env.API_KEY) {
      console.warn("API_KEY not found in environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamGeminiResponse = async (
  prompt: string, 
  history: { role: 'user' | 'model', text: string }[]
): Promise<AsyncGenerator<string, void, unknown> | null> => {
  const client = getClient();
  if (!client) return null;

  try {
    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are a helpful, encouraging, and knowledgeable educational tutor assistant for EduVantage. Your goal is to help students find courses, explain concepts simply, and encourage learning. Keep responses concise and engaging.",
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessageStream({ message: prompt });
    
    // Generator function to yield chunks
    async function* generator() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return generator();

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
