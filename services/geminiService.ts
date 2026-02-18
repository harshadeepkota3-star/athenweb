
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askAurelia(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are Athen AI, the intelligent neural node for AthenWeb. 
        Your tone is analytical, visionary, confident, and precise. 
        AthenWeb specializes in high-concurrency systems, digital evolution, enterprise AI, and high-performance infrastructure.
        You refer to the company as "AthenWeb" and the user as a "Collaborator".
        Keep answers sharp and focused on engineering excellence.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The AthenWeb uplink is currently under heavy load. Shall we attempt a manual connection?";
  }
}
