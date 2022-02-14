-- Para fixar 1 JOIN ou INNER JOIN
SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
JOIN film_actor AS f
ON a.actor_id = f.film_id;

-- Para fixar 2 JOIN ou INNER JOIN
SELECT s.first_name, s.last_name, addr.address
FROM sakila.staff AS s
JOIN address AS addr
ON s.address_id = addr.address_id;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

-- Para fixar 3 JOIN ou INNER JOIN
SELECT c.customer_id, c.first_name, c.email, 
	   addr.address_id, addr.address
FROM sakila.customer AS c
JOIN sakila.address AS addr
ON c.address_id = addr.address_id
ORDER BY first_name DESC
LIMIT 100;

-- Para fixar 4 JOIN ou INNER JOIN
SELECT c.first_name, c.email, addr.address_id,
	   addr.address, addr.district
FROM sakila.customer AS c
JOIN sakila.address AS addr
ON c.address_id = addr.address_id
WHERE district = 'California' AND first_name LIKE ('%RENE%');

-- Para fixar 5 JOIN ou INNER JOIN
SELECT c.first_name, COUNT(addr.address) AS 'qtd de enderecos'
FROM sakila.customer AS c
JOIN sakila.address AS addr
ON c.address_id = addr.address_id
WHERE active = 1
GROUP BY c.first_name;

-- Para fixar 6 JOIN ou INNER JOIN
SELECT s.first_name, s.last_name, AVG(pay.amount)
FROM sakila.staff AS s
JOIN sakila.payment AS pay
ON s.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

-- Para fixar 7 JOIN ou INNER JOIN
SELECT a.actor_id, a.first_name, film_a.film_id, fil.title
FROM sakila.actor AS a
JOIN sakila.film_actor AS film_a
ON a.actor_id = film_a.actor_id
JOIN sakila.film AS fil
ON film_a.film_id = fil.film_id;