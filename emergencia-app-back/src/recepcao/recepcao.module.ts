import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { Medico } from 'Entidades/medico.entidade';
import { RecepcaoController } from './recepcao.controller';
import { RecepcaoService } from './recepcao.service';

@Module({
        imports: [TypeOrmModule.forFeature([Paciente, Recepcao, Medico])],
        providers: [RecepcaoService],
        controllers: [RecepcaoController],
        exports: [RecepcaoService]
    })
export class RecepcaoModule {
}