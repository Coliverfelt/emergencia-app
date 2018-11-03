import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { ListaPrioridadeAtendimentoService } from './lista-prioridade-atendimento.service';
import { ListaPrioridadeAtendimentoController } from './lista-prioridade-atendimento.controller';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';

@Module({
        imports: [TypeOrmModule.forFeature([Paciente, Recepcao, ListaPrioridadeAtendimento, ClassificacaoRisco])],
        providers: [ListaPrioridadeAtendimentoService],
        controllers: [ListaPrioridadeAtendimentoController],
        exports: [ListaPrioridadeAtendimentoService]
    })
export class ListaPrioridadeAtendimentoModule {
}