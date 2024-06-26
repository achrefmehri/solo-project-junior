-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gocoffee
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gocoffee
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gocoffee` DEFAULT CHARACTER SET utf8 ;
USE `gocoffee` ;

-- -----------------------------------------------------
-- Table `gocoffee`.`tables`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gocoffee`.`tables` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tableNum` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gocoffee`.`drinks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gocoffee`.`drinks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gocoffee`.`drinksAndTabs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gocoffee`.`drinksAndTabs` (
  `drinks_id` INT NOT NULL,
  `tables_id` INT NOT NULL,
  PRIMARY KEY (`drinks_id`, `tables_id`),
  INDEX `fk_drinks_has_tables_tables1_idx` (`tables_id` ASC) VISIBLE,
  INDEX `fk_drinks_has_tables_drinks_idx` (`drinks_id` ASC) VISIBLE,
  CONSTRAINT `fk_drinks_has_tables_drinks`
    FOREIGN KEY (`drinks_id`)
    REFERENCES `gocoffee`.`drinks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_drinks_has_tables_tables1`
    FOREIGN KEY (`tables_id`)
    REFERENCES `gocoffee`.`tables` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
