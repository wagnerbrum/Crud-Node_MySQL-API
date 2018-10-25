create database sua_bd;
use sua_bd;

create table usuarios(
	id int auto_increment,
	nome varchar(100),
	login varchar(100),
	senha varchar(100),
	constraint ChPriUsu primary key(id)	
)Engine = InnoDB;

insert into usuarios values(null, 'user 1', 'admin', '123123');