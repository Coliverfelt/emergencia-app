import { Paciente } from 'Entidades/paciente.entidade';
import { Repository } from 'typeorm';
import { ListaPrioridadeAtendimento } from 'Entidades/lista-prioridade-atendimento.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';
export declare class PacienteService {
    private readonly pacienteRepositorio;
    private readonly listaPrioridadeAtendimentoRepositorio;
    constructor(pacienteRepositorio: Repository<Paciente>, listaPrioridadeAtendimentoRepositorio: Repository<ListaPrioridadeAtendimento>);
    acharTodos(): Promise<Paciente[]>;
    inserir(paciente: Paciente): Promise<void>;
    atualizarClassificacao(classificacaoRisco: ClassificacaoRisco[]): Promise<void>;
    atualizaPrioridade(idPrioridade: number, idPac: number): Promise<void>;
}
