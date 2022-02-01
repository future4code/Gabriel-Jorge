#   Ex-1-A

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender 	VARCHAR(10) NOT NULL
);
#CREATE TABLE => Cria tabela.
#PRIMARY KEY => Utilizado como chave.
#VARCHAR => Espera uma string e dentro dos parenteses é o numero maximo de caracteres.
#FLOAT => declara numeros fracionados.
#NOT NULL => precisa ser obrigatoriamente preenchido.
#DATE => referente ao formato de data.


#   Ex-1-B
SHOW DATABASES;
SHOW TABLES;
#SHOW DATABASES => apresenta informações do database
#SHOW TABLES => apresenta informações das tabelas


#   Ex-1-C
DESCRIBE Actor;
#DESCRIBE Actor; => apresenta a estrutura de uma tabel


#   Ex-2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);


#   Ex-2-A
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES
	("002",
    "Gloria Pires",
    12000000,
    "1948-08-23",
    "male");


#   Ex-2-B
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES
	("002",
    "Fulana",
    1200,
    "1948-08-23",
    "male");
# Duplicate entry '002' for key 'PRIMARY'
# Entrada duplicada '002' para a chave 'PRIMARY'
# O Item não pode ser incluido a lista por ter o msm id da anterios...


#   Ex-2c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# Column count doesnt match valus count at row 1 
# A contagem de colunas não corresponde à contagem de valores na linha 1


#   Ex-2d) 
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
# Field 'name' doesn't have a default value.
# O campo 'nome' não tem um valor padrão.
# Não foi posto o nome que era obrigatorio com o NOT NULL


#   Ex-2e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
# Incorrect date value: '1950' for column 'birth_date' at row 1	
# Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
# Faltaram as aspas na data de nascimento


#   Ex-2c)(AJUSTADA)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);


#   Ex-2d)(AJUSTADA)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fulaninho",
  400000,
  "1949-04-18", 
  "male"
);


#   Ex-2e)(AJUSTADA)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


#   Ex-2f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Angelina Jolie",
  300000000,
  "1975-06-04", 
  "female"
);

#   Ex-3)
SELECT * FROM Actor;
SELECT id , salary FROM Actor;
SELECT * FROM  Actor WHERE gender = "male";

#   Ex-3-a)
SELECT * FROM  Actor WHERE gender = "female";

#   Ex-3-b) 
SELECT salary FROM Actor WHERE name = "Tony Ramos";

#   Ex-3-c) 
SELECT * FROM Actor WHERE gender = "invalid";
# É Apresentada uma lista vazia já que não existe ninguem com esse atributo


#   Ex-3-d) 
SELECT * FROM Actor WHERE salary < 500000;


#   Ex-3-d)
SELECT id, nome from Actor WHERE id = "002";
# Unknown column 'nome' in 'field list'.
# Coluna desconhecida 'nome' na 'lista de campos'.
# Não existe "nome", o correto é "name"


#   Ex-3-d)(AJUSTADA)
SELECT id, name FROM Actor WHERE id = "002";

#   Ex-4)
SELECT * FROM Actor WHERE 
(name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#   Ex-4-a)
# A query assima faz o papel de achar nomes que começam com A ou R e com salario assima dos 300k.alter

#   Ex-4-b)
SELECT * FROM Actor WHERE
name NOT LIKE "A%" AND  salary > 350000;

#   Ex-4-c)
SELECT * FROM Actor WHERE
name LIKE "%G%" OR "%g%";

#   Ex-4-d)
SELECT * FROM Actor WHERE
(name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND ( salary BETWEEN 350000 AND 900000);

#   Ex-5-a)
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    sinopse TEXT,
    launch_date DATE NOT NULL,
    rating INT NOT NULL 
);


#   Ex-5-b)
INSERT INTO Movies(id, name, sinopse, launch_date, rating)VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7
);

#   Ex-5-c)
INSERT INTO Movies(id, name, sinopse, launch_date, rating)VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);


#   Ex-5-d)
INSERT INTO Movies(id, name, sinopse, launch_date, rating)VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);

#   Ex-5-e)
INSERT INTO Movies(id, name, sinopse, launch_date, rating)VALUES(
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000/09/10",
8
);

#   Ex-6-a)
SELECT * FROM Movies WHERE id = 004;

#   Ex-6-b)
SELECT * FROM Movies WHERE name = "O Auto da Compadecida";

#   Ex-6-c)
SELECT id, name, sinopse FROM Movies WHERE rating >= 7;

#   Ex-7-a)
SELECT * From Movies WHERE (name LIKE "%vida%");

#   Ex-7-b)
SELECT * From Movies WHERE (name LIKE "%vida%" or sinopse LIKE "%vida%");

#   Ex-7-c)
SELECT * FROM Movies WHERE 
launch_date < "2022-01-31";

#   Ex-7-d)
SELECT * FROM Movies WHERE 
(launch_date < "2022-01-31") AND (name LIKE "%vida%" or sinopse LIKE "%vida%") AND rating >= 7;
