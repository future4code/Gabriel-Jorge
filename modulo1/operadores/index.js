// Exercicio de interpretação de codigo.

// Exercicio 1

// a. false
// b. false
// c. true
// d. boolean


// Exercicio 2 (não achei o erro sem rodar o codigo)
// o erro é que o javascript entende que os valores são strings e não numerais

/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/



// Exercicio 3
// sugiro que meu colega utilize da expressão "number" dentro das aspas no algoritmo como a a baixo:
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = (Number(primeiroNumero)) + (Number(segundoNumero))

console.log(soma)
*/


//Exercicios de escrita de codigo

//Exercicio 1

/*
const idadeUsuario = prompt("Quantos anos você tem ???")
const idadeAmigo = prompt("Quantos anos seu(a) melhor amigo(a) tem ???")

let resultado = (Number(idadeUsuario)) > (Number(idadeAmigo)) 
console.log ("Sua idade é maior do que a do seu melhor amigo?",resultado)

let resultado2 = (Number(idadeUsuario)) - (Number(idadeAmigo))
console.log ("Vocês tem",resultado2,"anos de diferença")
*/

//Exercicio 2

/*
const numeroPar = prompt("Diga um numero par :")
console.log (Number(numeroPar) % 2) 
*/

// obs: Entendi que sempre que o numero é impar o valor dele sobra 1 e quando é par sobra 0 


//Exercicio 3 

/*
const idadeUsuario = prompt("Quantos anos você tem ???")
let resultado = (Number(idadeUsuario) * 12 )
console.log ("Você tem ",resultado," meses de vida")

let resultado2 = (Number(idadeUsuario) * 365 )
console.log ("Você tem ",resultado2," dias de vida")

let resultado3 = (Number(idadeUsuario) * 8760 )
console.log ("Você tem ",resultado3," horas de vida")
*/

//Exercicio 4

const numero1 = prompt("Diga um numero :")
const numero2 = prompt("Diga outro numero :")

console.log(Number(numero1)) > (Number(numero2))
console.log(Number(numero1)) === (Number(numero2))