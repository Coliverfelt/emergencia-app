import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Repository } from 'typeorm';
import { Recepcao } from 'Entidades/recepcao.entidade';

@Injectable()
export class PacienteService {

    constructor(@InjectRepository(Paciente) 
                    private readonly pacienteRepositorio: Repository<Paciente>,
                @InjectRepository(Recepcao) 
                    private readonly recepcaoRepositorio: Repository<Recepcao>
                ){}

    async acharTodos(): Promise<Paciente[]> {
        return this.pacienteRepositorio.find();
    }

    async inserir(paciente: Paciente) {
        await this.pacienteRepositorio.createQueryBuilder()
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

        const ultimoId = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .getCount()

        const pacienteForeign: Paciente = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .where('paciente.idPaciente = :id', {id: ultimoId})
            .getOne();

        await this.recepcaoRepositorio.createQueryBuilder()
        .insert()
        .into(Recepcao)
        .values([
            {   
                paciente: pacienteForeign, 
            }
         ])
        .execute();
    }

}
