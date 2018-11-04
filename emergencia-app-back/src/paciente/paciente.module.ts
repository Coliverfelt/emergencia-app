import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';

@Module({
        imports: [TypeOrmModule.forFeature([
            Paciente,
            ListaPrioridadeAtendimento, 
            ClassificacaoRisco])],
        providers: [PacienteService],
        controllers: [PacienteController],
        exports: [PacienteService]
    })
export class PacienteModule {
}