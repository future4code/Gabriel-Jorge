Exercício 1

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
## R: Acho que pelos metodos de uso o que mais faz sentido é o uso de strings, ate pq alguns metodos alem de numeros uilizam outros caracteres e simbolos.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
## R: Função criada dentro da pasta services ... idGenerator  

Exercício 2

a) Explique o código acima com as suas palavras.
## R: A função createUser é uma função assincrona que recebe um ID, um email e um password, pega esses dados e adiciona ao banco de dados...

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
## R:

## CREATE TABLE User_21_02 (
##	id VARCHAR(255) PRIMARY KEY,
##    email VARCHAR(255) UNIQUE NOT NULL,
##    password VARCHAR(255) NOT NULL
## );

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.
## R: 
const createUser =  async ( id : string, email : string, password : string) =>{

    await connection.raw(`INSERT ${id}, ${email}, ${password} INTO User_21_02 `)
}




