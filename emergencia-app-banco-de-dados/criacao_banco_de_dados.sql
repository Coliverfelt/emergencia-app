create database emergencia_app;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Paciente` (
  `idPaciente` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `data_nasc` VARCHAR(45) NOT NULL,
  `tipo_sanguineo` VARCHAR(1) NULL,
  `sintomas` VARCHAR(3000) NULL,
  `documentacao` BLOB NOT NULL,
  `hospital` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPaciente`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Medico` (
  `idMedico` INT NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `CRM` INT NOT NULL,
  PRIMARY KEY (`idMedico`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Lista-prioridade-atendimento` (
  `idLista-prioridade-atendimento` INT NOT NULL,
  `prioridade` VARCHAR(20) NOT NULL,
  `Paciente_idPaciente` INT NOT NULL,
  `Medico_idMedico` INT NOT NULL,
  PRIMARY KEY (`idLista-prioridade-atendimento`),
  INDEX `fk_Lista-prioridade-atendimento_Paciente_idx` (`Paciente_idPaciente` ASC) VISIBLE,
  INDEX `fk_Lista-prioridade-atendimento_Medico1_idx` (`Medico_idMedico` ASC) VISIBLE,
  CONSTRAINT `fk_Lista-prioridade-atendimento_Paciente`
    FOREIGN KEY (`Paciente_idPaciente`)
    REFERENCES `emergencia_app`.`Paciente` (`idPaciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Lista-prioridade-atendimento_Medico1`
    FOREIGN KEY (`Medico_idMedico`)
    REFERENCES `emergencia_app`.`Medico` (`idMedico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `emergencia_app`.`Recepcao` (
  `idRecepcao` INT NOT NULL,
  `aceita_paciente` TINYINT NOT NULL,
  `Paciente_idPaciente` INT NOT NULL,
  `Medico_idMedico` INT NOT NULL,
  PRIMARY KEY (`idRecepcao`),
  INDEX `fk_Recepcao_Paciente1_idx` (`Paciente_idPaciente` ASC) VISIBLE,
  INDEX `fk_Recepcao_Medico1_idx` (`Medico_idMedico` ASC) VISIBLE,
  CONSTRAINT `fk_Recepcao_Paciente1`
    FOREIGN KEY (`Paciente_idPaciente`)
    REFERENCES `emergencia_app`.`Paciente` (`idPaciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recepcao_Medico1`
    FOREIGN KEY (`Medico_idMedico`)
    REFERENCES `emergencia_app`.`Medico` (`idMedico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



