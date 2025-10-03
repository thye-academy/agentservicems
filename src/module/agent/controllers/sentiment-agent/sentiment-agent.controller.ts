import { Body, Controller, Post } from '@nestjs/common';
import { SentimentAgentService } from '../../services/sentiment-agent/sentiment-agent.service';

@Controller('sentiment-agent')
export class SentimentAgentController {
  constructor(private readonly sentimentAgent: SentimentAgentService) {}

  @Post('analyze')
  async analyze(@Body() body: { text: string }) {
    return this.sentimentAgent.analyze(body.text);
  }
}
