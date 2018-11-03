import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { RecepcaoController } from './recepcao.controller';
import { RecepcaoService } from './recepcao.service';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { PacienteEClassificacaoRisco } from 'Entidades/paciente-e-classificacao-risco.entidade';

@Module({
        imports: [TypeOrmModule.forFeature([
            Paciente])],
        providers: [RecepcaoService],
        controllers: [RecepcaoController],
        exports: [RecepcaoService]
    })
export class RecepcaoModule {
}