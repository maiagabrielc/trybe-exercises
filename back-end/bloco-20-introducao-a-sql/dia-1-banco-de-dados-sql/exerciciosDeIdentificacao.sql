USE sakila;

CREATE TABLE Filme (
	`FilmeId` INT PRIMARY KEY AUTO_INCREMENT,
    `Descrição` VARCHAR(100) NOT NULL,
    `AnoLançamento` INT NOT NULL,
    `Nota` INT
);

SELECT * FROM sakila.city;
-- A tabela city faz referência a Foreign key que é country_id.
-- country_id em city tem relação de N:1.
-- store_id em customer possui relação de N:1.
-- staff_id em rental possui relação de 1:N.

SELECT DISTINCT count(city_id) FROM sakila.address;

SELECT * FROM sakila.country;
-- A tabela country não possui relacionamento com a tabela city.