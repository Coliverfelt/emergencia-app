create database emergencia_app; /*AUTO_INCREMENT*/

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Lista_prioridade_atendimento` (
  `idLista-prioridade-atendimento` INT NOT NULL AUTO_INCREMENT,
  `prioridade` VARCHAR(20) NOT NULL,
  `mensagem` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idLista-prioridade-atendimento`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Paciente` (
  `idPaciente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `data_nasc` VARCHAR(45) NOT NULL,
  `tipo_sanguineo` VARCHAR(2) NULL,
  `documentacao` BLOB NOT NULL,
  `hospital` VARCHAR(45) NOT NULL,
  `sexo` VARCHAR(1) NOT NULL,
  `prioridade` VARCHAR(20) NULL,
  `mensagem` VARCHAR(45) NULL,
  PRIMARY KEY (`idPaciente`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`classificacao_risco` (
  `idclassificacao_risco` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `peso` INT NOT NULL,
  `marcado` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idclassificacao_risco`))
ENGINE = InnoDB;

use emergencia_app;

/*Cores Prioridade*/
insert into `Lista_prioridade_atendimento`(prioridade, mensagem) 
values('Azul', 'Tempo de espera estimado de 2 horas, favor encaminhar-se ao hospital.');

insert into `Lista_prioridade_atendimento`(prioridade, mensagem) 
values('Verde', 'Tempo de espera estimado de 1 hora, favor encaminhar-se ao hospital.');

insert into `Lista_prioridade_atendimento`(prioridade, mensagem) 
values('Amarelo', 'Tempo de espera estimado de 30 minutos, favor encaminhar-se ao hospital com urgência.');

insert into `Lista_prioridade_atendimento`(prioridade, mensagem) 
values('Vermelho', 'Intervenção médica imediata!');

/*Classificacao Risco*/
insert into `classificacao_risco`(nome, peso) 
values('Dor de cabeça', 1);

insert into `classificacao_risco`(nome, peso) 
values('Tonteira', 2);

insert into `classificacao_risco`(nome, peso) 
values('Vomito', 3);

insert into `classificacao_risco`(nome, peso) 
values('Taquicardia', 4);
