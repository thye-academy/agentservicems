import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class SentimentAgentService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // usa la variable de entorno
    });
  }

  async analyze(text: string) {
    const prompt = `
    Analiza el siguiente texto y responde SOLO con una palabra:
    Positivo, Negativo o Neutral.
    Texto: "${text}"
    `;

    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    return {
      text,
      sentiment: completion.choices[0].message.content,
    };
  }
}
