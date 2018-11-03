import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Paciente } from './paciente.entidade';
import { Medico } from './medico.entidade';

@Entity()
export class Recepcao {
  @PrimaryGeneratedColumn()
  idRecepcao: number;

  @Column({ nullable: false, default: 1 })
  aceita_paciente: number;

  @ManyToOne(type => Paciente, paciente => paciente.idPaciente)
  paciente: Paciente;

  @ManyToOne(type => Medico, medico => medico.idMedico)
  medico: Medico;
}