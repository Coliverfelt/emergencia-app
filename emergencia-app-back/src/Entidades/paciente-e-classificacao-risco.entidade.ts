import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Paciente } from './paciente.entidade';
import { ClassificacaoRisco } from './classificacao-risco.entidade';

@Entity()
export class PacienteEClassificacaoRisco{

  @PrimaryGeneratedColumn()
  idPacienteEClassificacaoRisco: number;

  @ManyToOne(type => Paciente, paciente => paciente.idPaciente)
  paciente: Paciente;

  @ManyToOne(type => ClassificacaoRisco, classificacaoRisco => classificacaoRisco.idClassificacaoRisco)
  classificacaoRisco: ClassificacaoRisco;
}