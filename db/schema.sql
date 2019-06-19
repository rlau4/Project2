DROP DATABASE IF EXISTS dog_dateDB;
CREATE DATABASE dog_dateDB;

USE dog_datedb;

#Create Owners table
CREATE TABLE owners (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
pic VARCHAR(500) NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
)

#Create Dogs table
CREATE TABLE dogs (
id INT NOT NULL AUTO_INCREMENT,
dogName VARCHAR(26) NOT NULL,
breed VARCHAR(26) NOT NULL,
size INT(1) NOT NULL,
pic TEXT NOT NULL,
personality INT(1) NOT NULL,
age INT(1) NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
OwnerId INT,
PRIMARY KEY (id)
);
