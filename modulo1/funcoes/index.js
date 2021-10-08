// EXERCÍCIOS DE INTERPRETAÇÃO DE CODIGIO----------------------------------------------------------------------------

// Exercicio 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// minhaFuncao(2)
// minhaFuncao(10)

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))




// a) O que vai ser impresso no console?
//     RESPOSTA: Vai ser impresso o valores multiplicados por 5, no caso 5x2=10  5x10=50 

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente
//  invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//     RESPOSTA: Não aparece nada no console, ate porque a função console.log é que faz o resultado aparecer na tela.

// Exercicio 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
//     RESPOSTA: A função toLowerCase transforma todas as letras em letras minusculas, enquanto 
//     todas a função includes determina se um conjunto de caracteres pode ser encontrado dentro da string 



// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   Eu gosto de cenoura
//         RESPOSTA:true
//      ii.  CENOURA é bom pra vista
//         RESPOSTA:true
//      iii. Cenouras crescem na terra
//         RESPOSTA:true


// EXERCICIOS DE ESCRITA DE CODIGO--------------------------------------------------------------------------------

// 1. 


function minhaFrase (nome, idade,cidade,profissao) {
    const fraseFinal = `Eu sou ${nome}  tenho ${idade} moro em ${cidade}, e sou ${profissao}`
    return fraseFinal
}
const fraseInicial = minhaFrase("Gabriel",28,"Rio de Janeiro","Estudante")
console.log(fraseInicial)


