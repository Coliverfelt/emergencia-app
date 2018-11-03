import { Controller, Get, Post, Body } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from 'Entidades/paciente.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';
import { PacienteEClassificacaoRisco } from 'Entidades/paciente-e-classificacao-risco.entidade';

@Controller('paciente')
export class PacienteController {

    constructor(private readonly service: PacienteService) {}

    @Get()
    async achaTodosPacientes() {
        return await this.service.acharTodos();
    }

    @Post('inserirPaciente')
    async InserirPaciente(@Body() paciente: Paciente) {
        await this.service.inserir(paciente);
    }

    @Post('prepararEnvio')
    async prepararEnvio() {
        await this.service.prepararEnvio();
    }
}