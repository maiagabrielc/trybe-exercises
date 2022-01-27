-- OPERADOR - DESCRIÇÃO
-- =   IGUAL
-- >   MAIOR QUE
-- <   MENOR QUE
-- >=  MAIOR QUE OU IGUAL
-- <=  MENOR QUE OU IGUAL
-- <>  DIFERENTE DE
-- AND OPERADOR LÓGICO E
-- OR  OPERADOR LÓGICO OU
-- NOT NEGAÇÃO
-- IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)

-- Encontra qualquer resultado finalizando com "don"
SELECT * FROM sakila.film
WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31';

-- Encontra todos os dados com valores aproximados que iniciam de forma específica
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-07-31%';

-- Encontra um dado com valor específico, neste caso data yyyy-mm-dd hh:mm:ss
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-08-20 00:30:52';

-- Encontra dados entre um determinado intervalo
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- Comandos próprios do MySQL para trabalhar com datas:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo