#Ex-1-a) Explique o que é uma chave estrangeira.
Ela integra uma tabela a outra.


#Ex-1-b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movies_id VARCHAR(255),
    FOREIGN KEY (movies_id) REFERENCES Movies(id)
);

INSERT INTO Rating VALUES 
('dgd','um dos melhores','4.5','004'),
('sdf','nunca ouvi falar','4.5','002');

#Ex-1-c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Dá erro pq o sistema não acha o filme no qual associar.

#Ex-1-d)
d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movies DROP COLUMN rating;

#Ex-1-e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

DELETE FROM Movies WHERE id = 002;

Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

#Ex-2-a) Explique, com as suas palavras, essa tabela
É uma tabela que integra o elenco do filme com os filmes.

#Ex-2-b) Crie, ao menos, 6 relações nessa tabela 

INSERT INTO Movies VALUES 
('001','Homem de Ferro','Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora.','2008-04-30'),
('005','Batman Begins','O jovem Bruce Wayne viaja para o Extremo Oriente, onde recebe treinamento em artes marciais do mestre Henri Ducard, um membro da misteriosa Liga das Sombras.','2005-06-17'),
('006','Eu sou a lenda','Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue.','2008-01-18'),
('007','007 Cassino Roiale','Após receber licença para matar, James Bond embarca em sua primeira missão. O agente secreto participa de um jogo de pôquer de alto escalão para prejudicar os negócios de Le Chiffre, homem que financia grupos terroristas','2006-11-16'),
('008','Capitao America','Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.','2011-07-29'),
('009','Os Vingadores Ultimato','Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.','2019-04-25');

INSERT INTO Actor VALUES 
('001','Robert Downey Jr.','150000000','1965-04-04','male'),
('002','Will Smith','210000000','1968-09-25','male'),
('003','Chris Evans','10000000','1981-06-13','male'),
('007','Daniel Craig','10000000','1968-03-02','male'),
('008','Christian Bale','50000000','1974-01-30','male'),
('009','Selton Mello','500000','1972-02-28','male');

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES 
('001','001'),
('005','008'),
('006','002'),
('007','007'),
('008','003'),
('009','001'),
('009','003');

#Ex-2-c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
Não é possivel achara chave estrangeira, dae o mySQL dá erro.

#Ex-2-d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query.
Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

