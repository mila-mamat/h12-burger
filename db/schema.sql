### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers`
(
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`is_ready` BOOLEAN DEFAULT false,
	`is_served` BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
