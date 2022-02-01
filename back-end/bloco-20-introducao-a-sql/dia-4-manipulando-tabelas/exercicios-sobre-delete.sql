SELECT * FROM sakila.Filme;

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

DELETE FROM sakila.film_actor
WHERE actor_id = 7;

TRUNCATE sakila.Filme;