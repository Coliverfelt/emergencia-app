import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { Medico } from 'Entidades/medico.entidade';

@Injectable()
export class RecepcaoService {
    
    constructor(@InjectRepository(Paciente) 
                    private readonly pacienteRepositorio: Repository<Paciente>,
                @InjectRepository(Medico) 
                    private readonly medicoRepositorio: Repository<Medico>,
                @InjectRepository(Recepcao) 
                    private readonly recepcaoRepositorio: Repository<Recepcao>
                ){}

    async acharTodos(): Promise<Paciente[]> {
        const estaNaLista: Paciente[] = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .leftJoinAndSelect('paciente.recepcoes', 'recepcao')
            .where('recepcao.aceita_paciente = :id', {id: 1})
            .getMany();
        
        let idsPacientesListas: number[] = new Array();

        estaNaLista.forEach(element => {
            idsPacientesListas.push(element.idPaciente);
        });
        
        return await this.pacienteRepositorio.findByIds(idsPacientesListas);
    }

    /*async acharTodosMedicos(): Promise<Medico[]> {
        return await this.medicoRepositorio.find();
    }*/
}
