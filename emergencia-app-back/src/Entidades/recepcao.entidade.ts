import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Paciente } from './paciente.entidade';

@Entity()
export class Recepcao {
  @PrimaryGeneratedColumn()
  idRecepcao: number;

  @Column({ nullable: false, default: 0 })
  aceita_paciente: number;

  @ManyToOne(type => Paciente, paciente => paciente.idPaciente)
  paciente: Paciente;
}