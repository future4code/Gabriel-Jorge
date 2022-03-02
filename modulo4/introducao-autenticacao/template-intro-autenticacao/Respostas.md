Exercício 1

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
## R: Acho que pelos metodos de uso o que mais faz sentido é o uso de strings, ate pq alguns metodos alem de numeros uilizam outros caracteres e simbolos.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
## R: Função criada dentro da pasta services ... idGenerator  

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 2

a) Explique o código acima com as suas palavras.
## R: A função createUser é uma função assincrona que recebe um ID, um email e um password, pega esses dados e adiciona ao banco de dados...

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
## R:

## CREATE TABLE User_21_02 (
##	  id VARCHAR(255) PRIMARY KEY,
##    email VARCHAR(255) UNIQUE NOT NULL,
##    password VARCHAR(255) NOT NULL
## );

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.
## R: 
const createUser =  async ( id : string, email : string, password : string) =>{

    await connection.raw(`INSERT ${id}, ${email}, ${password} INTO User_21_02 `)
}

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 3

a) O que a linha `as string` faz? Por que precisamos usar ela ali?
## R: Ela serve para tipar o valor da variavel como uma string.

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
## R:

## export const generationToken = (payload:autenticatorData):string => {
##    return jwt.sign(
##        payload,
##        "chaveSuperSecreta",
##        {
##            expiresIn: "1h"
##        }
##    )
## }

## export interface autenticatorData{
##   id: string
## }

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 4

a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente
## R: Feito


b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`
## R: Feito

c) Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais.

## R: Feito

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 5

## R:
## export const findUser = async (email:string):Promise<any> => {
##     try{
##        const result = await connection.raw(`SELECT * FROM User_21_02 WHERE '${email}'`)
##        return result[0]
##     }catch(error){
##         console.log("deu ruim", error)
##     }
## }

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 6

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 7

a) O que a linha `as any` faz? Por que precisamos usá-la ali?
## R: Significa que ali pode haver o retorno de qualquer coisa.

b) Crie uma função que realize a mesma funcionalidade da função acima

## R:

## import * as jwt from "jsonwebtoken";
## import { autenticatorData } from "../types";

## const getData = (token: string): autenticatorData => {
##   const payload = jwt.verify(token, "senhaSuperSecreta" as string) as any;
##   const result = {
##     id: payload.id,
##   };
##   return result;
## };

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Exercício 8

a) Comece criando uma função no data que retorne o usuário a partir do id.
## R: 

## export const getUserById = async (id: string): Promise<any> => {
##     const result = await connection
##       .select("*")
##       .from("User_21_02")
##       .where({ id });
## 
##     return result[0];
## }

b) Crie o endpoint com as especificações passadas.

## R: