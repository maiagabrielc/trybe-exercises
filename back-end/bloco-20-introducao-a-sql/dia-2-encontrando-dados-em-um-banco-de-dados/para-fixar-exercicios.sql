SELECT * FROM sakila.film;

SELECT title, release_year, rating FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;

SELECT first_name, last_name FROM sakila.actor 
	ORDER BY first_name DESC, last_name;
    
SELECT DISTINCT name FROM sakila.language WHERE name != 'English' ORDER BY name;

SELECT * FROM sakila.film;
SELECT  title, release_year, rental_duration, rating, replacement_cost FROM sakila.film 
	ORDER BY rental_duration DESC, replacement_cost;