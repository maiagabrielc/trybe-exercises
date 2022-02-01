USE sakila;

SELECT * FROM sakila.staff;

-- Insira um novo funcionário na tabela sakila.staff em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username)
VALUES ('Jones', 'Mikotic', 1, 'jones@nte.com', 1, 1,'Jones'),
       ('Janie', 'Summer', 3, 'summerj@nto.com', 1, 1,'Janie');
SELECT * FROM sakila.staff;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer 
-- e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;
SELECT * FROM sakila.actor;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name) 
VALUES ('Novel'), ('Opera'), ('Gore') ;
SELECT * FROM sakila.category;

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id) 
VALUES (3, 5);
SELECT * FROM sakila.store;
