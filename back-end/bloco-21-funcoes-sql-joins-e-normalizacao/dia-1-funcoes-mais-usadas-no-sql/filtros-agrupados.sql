SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(length)
FROM sakila.film
GROUP BY rating;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

SELECT first_name, COUNT(*) AS 'nomes_cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;