SELECT first_name, IF(active, 'Cliente ativo', 'Cliente inativo')
AS 'Situação'
FROM sakila.customer
LIMIT 20;

SELECT
	first_name,
    email,
    CASE
		WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
		ELSE 'Não classificado'
    END AS 'valor'
FROM sakila.customer
LIMIT 10;