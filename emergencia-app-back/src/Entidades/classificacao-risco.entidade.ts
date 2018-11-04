import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

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
}