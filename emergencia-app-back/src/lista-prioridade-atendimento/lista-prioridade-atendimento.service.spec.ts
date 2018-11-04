import { Test, TestingModule } from '@nestjs/testing';
import { ListaPrioridadeAtendimentoService } from './lista-prioridade-atendimento.service';

describe('ListaPrioridadeAtendimentoService', () => {
  let service: ListaPrioridadeAtendimentoService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaPrioridadeAtendimentoService],
    }).compile();
    service = module.get<ListaPrioridadeAtendimentoService>(ListaPrioridadeAtendimentoService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
