'use server';
/**
 * @fileOverview This file implements a Genkit flow for the Echoes Narrator, generating short narrative descriptions or fun facts about DoubleU's artistry and history.
 *
 * - echoesNarratorFacts - A function that generates narrative descriptions or fun facts.
 * - EchoesNarratorFactsInput - The input type for the echoesNarratorFacts function.
 * - EchoesNarratorFactsOutput - The return type for the echoesNarratorFacts function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EchoesNarratorFactsInputSchema = z.object({
  context: z.string().describe('The context for the narrative or fun fact, e.g., a Memory Lane entry description or song details.'),
  artistLore: z.string().describe('Relevant artist lore, background, or historical information to base the generation on.'),
  type: z.enum(['narrative', 'fun-fact']).describe('The desired output type: a short narrative description or a fun fact.'),
});
export type EchoesNarratorFactsInput = z.infer<typeof EchoesNarratorFactsInputSchema>;

const EchoesNarratorFactsOutputSchema = z.string().describe('The AI-generated narrative description or fun fact.');
export type EchoesNarratorFactsOutput = z.infer<typeof EchoesNarratorFactsOutputSchema>;

export async function echoesNarratorFacts(input: EchoesNarratorFactsInput): Promise<EchoesNarratorFactsOutput> {
  return echoesNarratorFactsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'echoesNarratorFactsPrompt',
  input: { schema: EchoesNarratorFactsInputSchema },
  output: { schema: EchoesNarratorFactsOutputSchema },
  prompt: `You are an AI assistant specializing in generating engaging content about the artist DoubleU.

Your task is to generate either a short, evocative narrative description or a fun fact based on the provided context and artist lore.

--- Instructions ---
If the requested type is 'narrative', provide a short (2-3 sentences) evocative narrative description that connects the context with the artist's journey or artistic intent.
If the requested type is 'fun-fact', provide a single, concise and interesting fun fact related to the context and artist lore.

Ensure the tone is respectful, insightful, and enhances the fan's connection to DoubleU's artistry.

--- Context ---
{{context}}

--- Artist Lore ---
{{artistLore}}

--- Desired Output Type ---
{{type}}

---
`,
});

const echoesNarratorFactsFlow = ai.defineFlow(
  {
    name: 'echoesNarratorFactsFlow',
    inputSchema: EchoesNarratorFactsInputSchema,
    outputSchema: EchoesNarratorFactsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
