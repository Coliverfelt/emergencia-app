import { Paciente } from 'Entidades/paciente.entidade';
import { Repository } from 'typeorm';
export declare class ListaPrioridadeAtendimentoService {
    private readonly pacienteRepositorio;
    constructor(pacienteRepositorio: Repository<Paciente>);
    acharTodos(): Promise<Paciente[]>;
}
