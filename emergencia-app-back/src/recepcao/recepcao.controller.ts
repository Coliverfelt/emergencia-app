import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecepcaoService } from './recepcao.service';

@Controller('recepcao')
export class RecepcaoController {

    constructor(private readonly service: RecepcaoService) {}

    @Get()
    async achaTodosPacientesParaCredenciamento() {
        return await this.service.acharTodos();
    }

}