import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Recepcao } from './recepcao.entidade';

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

  @Column({ length: 3000, nullable: true })
  sintomas: string;

  @Column({ type: "blob", nullable: false })
  documentacao: string;

  @Column({ length: 45, nullable: false })
  hospital: string;

  @OneToMany(type => Recepcao, recepcao => recepcao.paciente)
  recepcoes: Recepcao[];
}