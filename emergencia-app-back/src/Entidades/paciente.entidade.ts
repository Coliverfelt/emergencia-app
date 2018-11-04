import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

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

  @Column({ length: 20, nullable: true})
  prioridade: string;

  @Column({ length: 255, nullable: true})
  mensagem: string;
}