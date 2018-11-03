import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';
import { PacienteEClassificacaoRisco } from 'Entidades/paciente-e-classificacao-risco.entidade';

@Module({
        imports: [TypeOrmModule.forFeature([
            Paciente, 
            Recepcao, 
            ListaPrioridadeAtendimento, 
            ClassificacaoRisco, 
            PacienteEClassificacaoRisco])],
        providers: [PacienteService],
        controllers: [PacienteController],
        exports: [PacienteService]
    })
export class PacienteModule {
}