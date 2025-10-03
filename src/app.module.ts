import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentController } from './module/agent/controllers/agent/agent.controller';
import { AgentService } from './module/agent/services/agent/agent.service';
import { ConfigModule } from '@nestjs/config';
import { SentimentAgentController } from './module/agent/controllers/sentiment-agent/sentiment-agent.controller';
import { SentimentAgentService } from './module/agent/services/sentiment-agent/sentiment-agent.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AgentController, SentimentAgentController],
  providers: [AppService, AgentService, SentimentAgentService],
})
export class AppModule {}
