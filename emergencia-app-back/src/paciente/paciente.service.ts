import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {

    constructor(@InjectRepository(Paciente) 
                    private readonly pacienteRepositorio: Repository<Paciente>
                ){}

    async acharTodos(): Promise<Paciente[]> {
        return this.pacienteRepositorio.find();
    }

    async inserir(paciente: Paciente) {
        return await this.pacienteRepositorio.createQueryBuilder()
        .insert()
        .into(Paciente)
        .values([
            {   nome: paciente.nome, 
                data_nasc: paciente.data_nasc, 
                hospital: paciente.hospital, 
                documentacao: paciente.documentacao 
            }
         ])
        .execute();
    }

}
