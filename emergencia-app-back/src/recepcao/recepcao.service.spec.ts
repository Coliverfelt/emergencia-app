import { Test, TestingModule } from '@nestjs/testing';
import { RecepcaoService } from './recepcao.service';

describe('RecepcaoService', () => {
  let service: RecepcaoService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecepcaoService],
    }).compile();
    service = module.get<RecepcaoService>(RecepcaoService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
