import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { Medico } from 'Entidades/medico.entidade';

@Module({
        imports: [TypeOrmModule.forFeature([Paciente, Recepcao, Medico])],
        providers: [PacienteService],
        controllers: [PacienteController],
        exports: [PacienteService]
    })
export class PacienteModule {
}