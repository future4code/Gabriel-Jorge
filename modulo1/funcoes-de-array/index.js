//Exercícios de interpretação de código --------------------

//1- O que vai ser impresso no console ???
//  RESPOSTA: O console vai exibir os itens completos, o index que é a lista 
//  de 3 elementos e vai exibir a lista de array dos elementos

//2- O que vai ser impresso no console ???
//  RESPOSTA: Uma lista com os nomes dos usuarios.

//3- a) O que vai ser impresso no console ???
//  RESPOSTA: Mostra uma lista em que tudo que é diferente de Chijo é impresso,
//  como tem 3 itens ele só vai apresentar na lista os 2 primeiros nomes.

//Exercícios de escrita de código ------------------------------------------------

//1-     Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
//     realize as operações pedidas nos itens abaixo utilizando as funções de array
//      map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
 //]

 // a) Crie um novo array que contenha apenas o nome dos doguinhos: 

//  const nomeDosDoguinhos = pets.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(nomeDosDoguinhos)

// b) Crie um novo array apenas com os cachorros salsicha:

// const soSalcinha = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
//  })
 
//  console.log(soSalcinha)

// c)   Crie um novo array que possuirá mensagens para enviar para todos os clientes
//      que são poodles. A mensagem deve ser:
//       "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

//  const nomeDosDoguinhos = pets.map((item, index, array) => {
//     return item.nome
//  })

//  console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",nomeDosDoguinhos[0])

//  console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",nomeDosDoguinhos[1])

//  console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",nomeDosDoguinhos[2])

//  console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",nomeDosDoguinhos[3])

//  console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",nomeDosDoguinhos[4])

//  console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",nomeDosDoguinhos[5])



// 2- Dado o seguinte array de produtos, realize as operações 
//pedidas nos itens abaixo utilizando as funções de array map e filter:



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


//  a) Crie um novo array que contenha apenas o nome de cada item : 



// const listaItens = produtos.map((item, index, array) => {
//         return item.nome
//      })
     
//      console.log(listaItens)


//  b)rie um novo array que contenha um objeto com o nome e o preço de cada item,
//   aplicando 5% de desconto em todos eles.

const listaItens = produtos.map((item, index, array) => {
            return item.nome
         })
         
         const listaPreco = produtos.map((item, index, array) => {
            listaPrecoAlterado = listaPreco.length()/100*95 
            return listaPrecoAlterado
         })

         console.log(listaPrecoAlterado)
         console.log(listaItens,listaPreco)