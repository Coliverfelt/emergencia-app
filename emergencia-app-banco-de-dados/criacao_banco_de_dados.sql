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
  `Lista-prioridade-atendimento_idLista-prioridade-atendimento` INT NOT NULL,
  PRIMARY KEY (`idPaciente`),
  INDEX `fk_Paciente_Lista-prioridade-atendimento1_idx` (`Lista-prioridade-atendimento_idLista-prioridade-atendimento` ASC) VISIBLE,
  CONSTRAINT `fk_Paciente_Lista-prioridade-atendimento1`
    FOREIGN KEY (`Lista-prioridade-atendimento_idLista-prioridade-atendimento`)
    REFERENCES `emergencia_app`.`Lista_prioridade_atendimento` (`idLista-prioridade-atendimento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Recepcao` (
  `idRecepcao` INT NOT NULL AUTO_INCREMENT,
  `aceita_paciente` TINYINT NOT NULL DEFAULT 0,
  `Paciente_idPaciente` INT NOT NULL,
  PRIMARY KEY (`idRecepcao`),
  INDEX `fk_Recepcao_Paciente1_idx` (`Paciente_idPaciente` ASC) VISIBLE,
  CONSTRAINT `fk_Recepcao_Paciente1`
    FOREIGN KEY (`Paciente_idPaciente`)
    REFERENCES `emergencia_app`.`Paciente` (`idPaciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`classificacao_risco` (
  `idclassificacao_risco` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `peso` INT NOT NULL,
  `marcado` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idclassificacao_risco`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`paciente_e_classificacao_risco` (
  `idpaciente_e_classificacao_risco` INT NOT NULL AUTO_INCREMENT,
  `Paciente_idPaciente` INT NOT NULL,
  `classificacao_risco_idclassificacao_risco` INT NOT NULL,
  INDEX `fk_paciente_e_classificacao_risco_Paciente1_idx` (`Paciente_idPaciente` ASC) VISIBLE,
  INDEX `fk_paciente_e_classificacao_risco_classificacao_risco1_idx` (`classificacao_risco_idclassificacao_risco` ASC) VISIBLE,
  PRIMARY KEY (`idpaciente_e_classificacao_risco`),
  CONSTRAINT `fk_paciente_e_classificacao_risco_Paciente1`
    FOREIGN KEY (`Paciente_idPaciente`)
    REFERENCES `emergencia_app`.`Paciente` (`idPaciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_paciente_e_classificacao_risco_classificacao_risco1`
    FOREIGN KEY (`classificacao_risco_idclassificacao_risco`)
    REFERENCES `emergencia_app`.`classificacao_risco` (`idclassificacao_risco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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