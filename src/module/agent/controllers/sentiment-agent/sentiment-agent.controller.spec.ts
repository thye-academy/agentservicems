import { Test, TestingModule } from '@nestjs/testing';
import { SentimentAgentController } from './sentiment-agent.controller';

describe('SentimentAgentController', () => {
  let controller: SentimentAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SentimentAgentController],
    }).compile();

    controller = module.get<SentimentAgentController>(SentimentAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
