import OpenAI from "openai";

const openAIKey = process.env.OPENAI_API_KEY;

if (!openAIKey) {
  throw new Error("Missing OPENAI_API_KEY");
}

export const openai = new OpenAI({
  apiKey: openAIKey,
});
