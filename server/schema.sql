DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  room_id int NOT NULL,
  message varchar(255),
  -- createdAt varchar(255),
  -- updatedAt varchar(255),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
