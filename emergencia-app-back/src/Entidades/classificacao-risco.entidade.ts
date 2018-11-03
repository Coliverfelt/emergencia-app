import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Paciente } from './paciente.entidade';
import { PacienteEClassificacaoRisco } from './paciente-e-classificacao-risco.entidade';

@Entity()
export class ClassificacaoRisco{
  @PrimaryGeneratedColumn()
  idClassificacaoRisco: number;

  @Column({ length: 45, nullable: false})
  nome: string;

  @Column({ nullable: false})
  peso: number;

  @Column({default: 0, nullable: false})
  marcado: number

  @OneToMany(type => PacienteEClassificacaoRisco, pacienteEClassificacaoRisco => pacienteEClassificacaoRisco.classificacaoRisco)
  pacienteEClassificacaoRisco: PacienteEClassificacaoRisco[];
}