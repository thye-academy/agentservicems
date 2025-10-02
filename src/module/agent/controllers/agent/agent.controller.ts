import { Body, Controller, Post } from '@nestjs/common';
import { AgentService } from '../../services/agent/agent.service';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('ask')
  async askAgent(@Body() body: { clientId: string; query: string }) {
    return this.agentService.ask(body.clientId, body.query);
  }
}
