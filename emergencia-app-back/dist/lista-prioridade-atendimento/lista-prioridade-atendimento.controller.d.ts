import { ListaPrioridadeAtendimentoService } from './lista-prioridade-atendimento.service';
export declare class ListaPrioridadeAtendimentoController {
    private readonly service;
    constructor(service: ListaPrioridadeAtendimentoService);
    achaTodosPacientesParaCredenciamento(): Promise<import("../Entidades/paciente.entidade").Paciente[]>;
}
