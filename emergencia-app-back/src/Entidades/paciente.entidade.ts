import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Recepcao } from './recepcao.entidade';
import { ListaPrioridadeAtendimento } from './lista-prioridade-atendimento.entidade';
import { PacienteEClassificacaoRisco } from './paciente-e-classificacao-risco.entidade';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  idPaciente: number;

  @Column({ length: 45, nullable: false })
  nome: string;

  @Column({ length: 45, nullable: false })
  data_nasc: string;

  @Column({ length: 2, nullable: true })
  tipo_sanguineo: string;

  @Column({ length: 1, nullable: false })
  sexo: string;

  @Column({ type: "blob", nullable: false })
  documentacao: string;

  @Column({ length: 45, nullable: false })
  hospital: string;

  @OneToOne(type => ListaPrioridadeAtendimento)
  @JoinColumn()
  prioridadeAtendimento: ListaPrioridadeAtendimento;

  @OneToMany(type => Recepcao, recepcao => recepcao.paciente)
  recepcoes: Recepcao[];

  @OneToMany(type => PacienteEClassificacaoRisco, pacienteEClassificacaoRisco => pacienteEClassificacaoRisco.paciente)
  pacienteEClassificacaoRisco: PacienteEClassificacaoRisco[];
}