import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Repository } from 'typeorm';
import { Recepcao } from 'Entidades/recepcao.entidade';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';
import { PacienteEClassificacaoRisco } from 'Entidades/paciente-e-classificacao-risco.entidade';

@Injectable()
export class PacienteService {

    constructor(@InjectRepository(Paciente) 
                    private readonly pacienteRepositorio: Repository<Paciente>,
                @InjectRepository(Recepcao) 
                    private readonly recepcaoRepositorio: Repository<Recepcao>,
                @InjectRepository(ClassificacaoRisco) 
                    private readonly classificacaoRiscoRepositorio: Repository<ClassificacaoRisco>,
                @InjectRepository(PacienteEClassificacaoRisco) 
                    private readonly pacienteEClassificacaoRiscoRepositorio: Repository<PacienteEClassificacaoRisco>,
                @InjectRepository(ListaPrioridadeAtendimento) 
                    private readonly listaPrioridadeAtendimentoRepositorio: Repository<ListaPrioridadeAtendimento>
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
                documentacao: paciente.documentacao,
                sexo: paciente.sexo,
            }
         ])
        .execute();
    }

    async prepararEnvio() {
        const ultimoId = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .getCount();
        
        const todasClassificacos: ClassificacaoRisco[] = await this.classificacaoRiscoRepositorio.find();

        const pacienteForeign: Paciente = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .where('paciente.idPaciente = :id', {id: ultimoId})
            .getOne();

        await todasClassificacos.forEach(element => {
            this.pacienteEClassificacaoRiscoRepositorio.createQueryBuilder()
                .insert()
                .into(PacienteEClassificacaoRisco)
                .values([
                    {
                        paciente: pacienteForeign,
                        classificacaoRisco: element
                    }
                ])
                .execute();
        });

        /*await this.recepcaoRepositorio.createQueryBuilder()
        .insert()
        .into(Recepcao)
        .values([
            {   
                paciente: pacienteForeign, 
            }
         ])
        .execute();*/
    }

    /*async inserePacienteComTamanhoRisco(paciente: Paciente) {

        const prioridadeAtendimento: ListaPrioridadeAtendimento = 
            await this.listaPrioridadeAtendimentoRepositorio
            .createQueryBuilder('listaPrioridadeAtendimentoRepositorio')
            .where('listaPrioridadeAtendimentoRepositorio.prioridadeAtendimento.idListaPrioridadeAtendimento = :id', 
                {id: paciente.prioridadeAtendimento.idListaPrioridadeAtendimento})
            .getOne();
            

        await this.pacienteRepositorio.createQueryBuilder()
        .insert()
        .into(Paciente)
        .values([
            {   nome: paciente.nome, 
                data_nasc: paciente.data_nasc, 
                hospital: paciente.hospital, 
                documentacao: paciente.documentacao,
                sexo: paciente.sexo,
                prioridadeAtendimento: prioridadeAtendimento
            }
         ])
        .execute();
    }*/

}
