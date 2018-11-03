import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  idMedico: number;

  @Column({ length: 45, nullable: false })
  nome: string;

  @Column({ nullable: false })
  CRM: number;
  
}