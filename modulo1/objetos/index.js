// Exercícios de interpretação de código ----------------------------------------------------------
// EXERCICIO 1


//a) O que vai ser impresso no console?
    // RESPOSTA: 
    // Matheus Nachtergaele
    // 4
    // "Globo", horario: "14h"



    // const filme = {
    //     nome: "Auto da Compadecida", 
    //     ano: 2000, 
    //     elenco: [
    //         "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    //         "Virginia Cavendish"
    //         ], 
    //     transmissoesHoje: [
    //         {canal: "Telecine", horario: "21h"}, 
    //         {canal: "Canal Brasil", horario: "19h"}, 
    //         {canal: "Globo", horario: "14h"}
    //         ]
    // }
    
    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length -1])
    // console.log(filme.transmissoesHoje[2])

//  EXERCICIO 2 ----------------------------------------------------------------------

// a) O que vai ser impresso no console?

// nome:Juca
// idade: 3
// raça: SRD

// nome:Juba
// idade: 3
// raça: SRD

// nome:Jubo
// idade: 3
// raça: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// RESPOSTA : Faz o objeto complementar usando as caracteristicas de um 
// outro objeto, substitundo os novos dados depois dos (...)




// EXERCICIO 3 ------------------------------------------------------------------
// a) O que vai ser impresso no console?
// false
// undefined


// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// RESPOSTA : 

// Exercícios de escrita de código -----------------------------------------------------------
// 1- 

function Exercicio1 (){

const pessoa1 = {
    nome: "Mario",
    apelidos: ["Zé do cano","Marinho","Matador de Bowser"]
}
const pessoa2 = {...pessoa1,    
    apelidos: ["Marinho","Mamal","Bigodudo"]    
}
function fraseTop(pessoa){
   const frase = `Meu nome é ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},
 ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`
return (frase)
}
console.log(fraseTop(pessoa1))
console.log(fraseTop(pessoa2))
}

// 2-

function Exercicio2(){

const pessoa1 = {
    nome: "Mario",
    idade: 39,
    proficao: "Encanador"
}
const pessoa2 = {
    nome: "Luigi",
    idade: 37,
    proficao: "Ajudante de Encanador"
}  
function fazerExercicio(pessoa){
const frase = [`${pessoa.nome} , ${pessoa.nome.length} , ${pessoa.idade} , ${pessoa.proficao} , ${pessoa.proficao.length}`]
return (frase)
}
console.log(fazerExercicio(pessoa1))
console.log(fazerExercicio(pessoa2))
}

// 3- 

function Exercicio3(){

carrinho = []

    const fruta1 = 
        { nome: "banana", disponivel: true }

    const fruta2 = 
        { nome: "pessego",disponivel: true }  

    const fruta3 = 
        { nome: "morango",disponivel: true }


function adicionarAoCarrinho (fruta){
carrinho.push(fruta)
return carrinho
}
adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)
console.log(carrinho)
}

//RESPOSTAS : 
Exercicio1()
Exercicio2()
Exercicio3()

// FINALMENTE APRENDI FUNÇÕES #TôNojento :)