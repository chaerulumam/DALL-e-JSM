import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const radomPropmpt = surpriseMePrompts[randomIndex];

  if (radomPropmpt === prompt) return getRandomPrompt(prompt);

  return radomPropmpt;
}
