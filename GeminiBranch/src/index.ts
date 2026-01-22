import dotenv from 'dotenv'
dotenv.config()
const apikey :string = process.env.GeminiAPI ?? "";

import { GeminiBranch } from 'gemini-branch';
import type { GeminiBranchResult } from 'gemini-branch';

let globalBranchResult: GeminiBranchResult | null = null;

globalBranchResult = await GeminiBranch({
    condition: "Which is the morning greeting?",
    choices: ["good morning", "hello", "good evening"],
    apiKey: apikey,
    model: "gemma-3-27b-it",
});

console.log(globalBranchResult)
// { response: true, result: 'good morning', message: 'Success' }