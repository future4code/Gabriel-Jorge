SELECT * FROM Actor;
SELECT * FROM Movies;

#   Ex1-a)
# ALTER TABLE Actor DROP COLUMN salary;
# Exclui a Coluna



#   Ex1-b)
# ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
# Altera Tabela de gender pra sex e só pode receber uma string de 6 caracteres.



#   Ex1-c)
# ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
# Altera a Coluna Gender pra receber uma string de ate 255 caracteres



#   Ex1-d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
#

#   Ex2-a)
UPDATE Actor SET name = "Fulana de Tal", birth_date = "1999-11-21" WHERE id = "002";

#   Ex2-b)
UPDATE Actor SET name ="JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name ="Juliana Paes" WHERE id = "005";

#   Ex2-c)
UPDATE Actor SET name ="JULIANA PAES", salary="100000000", birth_date= "2000/01/12"   WHERE id = "005";

#   Ex2-d)
UPDATE Actor SET name ="JULIANA PAES", salary="100000000", birth_date= "2000/01/12", cel="sam"  WHERE id = "005";
# Unknown column 'cel' in 'field list'	
# Coluna desconhecida 'cel' na 'lista de campos'

#   Ex3-a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
SET SQL_SAFE_UPDATES = 0; 
# comando sql para desbloquear função fazer M no estagiario -------------------------

#   Ex3-b)
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
SET SQL_SAFE_UPDATES = 0;
# comando sql para desbloquear função fazer M no estagiario -------------------------

#   Ex4-a)
SELECT MAX(salary) FROM Actor;

#   Ex4-b)
SELECT MIN(salary) FROM Actor where gender = "female";

#   Ex4-c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

#   Ex4-d)
SELECT AVG(salary) FROM Actor;

#   Ex5-a)
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
# Esse Comando numera quantos Atores tem em cada genero.

#   Ex5-b)
SELECT id FROM Actor ORDER BY name;

#   Ex5-c)
SELECT * FROM Actor ORDER BY salary;

#   Ex5-d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

#   Ex5-e)
SELECT  AVG(salary) FROM Actor GROUP BY gender;


#   Ex6-a)
	ALTER TABLE Actor ADD playing_limit_date VARCHAR(255) DEFAULT "NotRegister";


#   Ex6-b)
ALTER TABLE Movies CHANGE rating rating DOUBLE;


#   Ex6-c)
UPDATE Movies SET launch_date="2022-09-10" Where id = "004";
UPDATE Movies SET launch_date="2012-09-12" WHERE id = "002";
SELECT * FROM Movies;

#   Ex6-d)
DELETE FROM Movies WHERE id = "001";
UPDATE Movies SET sinopse = "nova sinopse" WHERE id = "001";
#não entendi, o dado é guardado mas não sei pra onde vai...