import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { Repository } from 'typeorm';

@Injectable()
export class ListaPrioridadeAtendimentoService {

    constructor(@InjectRepository(Paciente) 
                    private readonly pacienteRepositorio: Repository<Paciente>,
                @InjectRepository(Recepcao) 
                    private readonly recepcaoRepositorio: Repository<Recepcao>
                ){}

    async acharTodos(): Promise<Paciente[]> {
        const estaNaLista: Paciente[] = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .leftJoinAndSelect('paciente.recepcoes', 'recepcao')
            .where('recepcao.aceita_paciente = :id', {id: 0})
            .getMany();
        
        let idsPacientesListas: number[] = new Array();

        estaNaLista.forEach(element => {
            idsPacientesListas.push(element.idPaciente);
        });
        
        return await this.pacienteRepositorio.findByIds(idsPacientesListas);
    }
    
}
