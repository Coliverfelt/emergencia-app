import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'Entidades/paciente.entidade';
import { Repository } from 'typeorm';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';

@Injectable()
export class PacienteService {

    constructor(@InjectRepository(Paciente) 
                    private readonly pacienteRepositorio: Repository<Paciente>,
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

    async atualizarClassificacao(classificacaoRisco: ClassificacaoRisco[]) {
        let prioridade: number = 0;
        const ultimoId = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .getCount();

        const pacienteForeign: Paciente = await this.pacienteRepositorio.createQueryBuilder('paciente')
            .where('paciente.idPaciente = :id', {id: ultimoId})
            .getOne();

        classificacaoRisco.forEach(element => {
            if (element.marcado === 1) {
                prioridade += element.peso;
            }
        });

        if (prioridade <= 1) {
            this.atualizaPrioridade(1, pacienteForeign.idPaciente);
        } else if (prioridade == 2) {
            this.atualizaPrioridade(2, pacienteForeign.idPaciente);
        } else if (prioridade == 3) {
            this.atualizaPrioridade(3, pacienteForeign.idPaciente);
        } else if (prioridade >= 4) {
            this.atualizaPrioridade(4, pacienteForeign.idPaciente);
        }
    }

    async atualizaPrioridade(idPrioridade: number, idPac: number) {

        const prioridade: ListaPrioridadeAtendimento[] = 
            await this.listaPrioridadeAtendimentoRepositorio.findByIds([idPrioridade]);

        await this.pacienteRepositorio.createQueryBuilder()
            .update(Paciente)
            .set({prioridade: prioridade[0].prioridade, mensagem: prioridade[0].mensagem})
            .where("idPaciente = :id", {id: idPac})
            .execute();
    }

}
