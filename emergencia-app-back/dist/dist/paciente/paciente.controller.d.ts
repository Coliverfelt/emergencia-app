import { PacienteService } from './paciente.service';
import { Paciente } from 'Entidades/paciente.entidade';
import { ClassificacaoRisco } from 'Entidades/classificacao-risco.entidade';
export declare class PacienteController {
    private readonly service;
    constructor(service: PacienteService);
    achaTodosPacientes(): Promise<Paciente[]>;
    InserirPaciente(paciente: Paciente): Promise<void>;
    preparaSintomas(classificacaoRisco: ClassificacaoRisco[]): Promise<void>;
}
