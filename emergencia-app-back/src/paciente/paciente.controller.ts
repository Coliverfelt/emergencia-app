import { Controller, Get, Post, Body } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from 'Entidades/paciente.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';

@Controller('paciente')
export class PacienteController {

    constructor(private readonly service: PacienteService) {}

    @Get()
    async achaTodosPacientes() {
        return await this.service.acharTodos();
    }

    @Post('inserirPaciente')
    async InserirPaciente(@Body() paciente) {
        return await this.service.inserir(paciente);
    }

    @Post('preparaSintomas')
    async preparaSintomas(@Body() classificacaoRisco: ClassificacaoRisco[]) {
        await this.service.atualizarClassificacao(classificacaoRisco);
    }
}