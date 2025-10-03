import { Test, TestingModule } from '@nestjs/testing';
import { SentimentAgentService } from './sentiment-agent.service';

describe('SentimentAgentService', () => {
  let service: SentimentAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SentimentAgentService],
    }).compile();

    service = module.get<SentimentAgentService>(SentimentAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
