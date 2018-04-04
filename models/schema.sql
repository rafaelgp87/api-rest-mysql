DROP DATABASE IF EXISTS identation_war;

CREATE DATABASE IF NOT EXISTS identation_war;

USE identation_war;

CREATE TABLE team(
  id int unsigned auto_increment primary key,
  name varchar(50) not null,
  twitter varchar(50) not null,
  country varchar(20) not null,
  side varchar(10) not null
);

select * from team;