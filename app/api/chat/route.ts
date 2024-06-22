// import { createOpenAI } from '@ai-sdk/openai';
// import { streamText } from 'ai';

// const openai = createOpenAI({
//   // custom settings, e.g.
//   compatibility: 'strict', // strict mode, enable when using the OpenAI API
//   apiKey: process.env.OPENAI_API_KEY || '',
// });

// export async function POST(req: Request) {
//     const { messages } = await req.json();
  
//     const result = await streamText({
//       model: openai('gpt-3.5-turbo'),
//       messages: [
//         {
//             role: "system",
//             content: "You are a helping assistant, who takes every problem very seriously. You are a problem solver. You give realistic and practically solutions which can be implemented. You go straight to the point."
//         },
//         ...messages
//       ],
//     });

//     // console.log(result);

//     return result.toTextStreamResponse();
// }


import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages: [
      {
        role: "system",
        content: "You are an expert assistant who know about all worldly affairs, is knowledgeable about all the field and is dedicated to providing practical and actionable solutions to users' problems like education, health, career, technology, personal finance, legal, housing, transportation, environment, social issues, government services, consumer rights, relationships and personal development. You prioritize clarity and effectiveness in your responses, offering concise and realistic advice that directly addresses the user's issues. Your goal is to help users find the best possible resolution efficiently and empathetically. Give solution under 500 characters and reply in the language the user has inputted the problem."
      }
    ],
  });

  return result.toAIStreamResponse();
}