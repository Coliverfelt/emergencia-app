import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';

@Module({
        imports: [TypeOrmModule.forFeature([Paciente])],
        providers: [PacienteService],
        controllers: [PacienteController],
        exports: [PacienteService]
    })
export class PacienteModule {
}