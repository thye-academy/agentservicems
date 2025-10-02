import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AgentService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async ask(clientId: string, query: string) {
    const prompt = `
    Actúa como un asistente especializado para el cliente ${clientId}.
    Responde de manera breve y clara.
    Pregunta del usuario: ${query}
    `;

    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    return {
      clientId,
      query,
      answer: completion.choices[0].message.content,
    };
  }
}
