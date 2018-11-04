import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListaPrioridadeAtendimento {
  @PrimaryGeneratedColumn()
  idListaPrioridadeAtendimento: number;

  @Column({ length: 20, nullable: false})
  prioridade: string;

  @Column({ length: 255, nullable: false})
  mensagem: string;

}