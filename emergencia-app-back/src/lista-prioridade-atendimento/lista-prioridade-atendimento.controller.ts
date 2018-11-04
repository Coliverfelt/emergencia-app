import { Controller, Get, Post, Body } from '@nestjs/common';
import { ListaPrioridadeAtendimentoService } from './lista-prioridade-atendimento.service';

@Controller('listaPrioridadeAtendimento')
export class ListaPrioridadeAtendimentoController {

    constructor(private readonly service: ListaPrioridadeAtendimentoService) {}

    @Get()
    async achaTodosPacientesParaCredenciamento() {
        return await this.service.acharTodos();
    }

}