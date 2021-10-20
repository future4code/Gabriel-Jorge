
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a}===${b} é ${a === b}`
// }
// console.log(checarIgualdade(2,2))
// const verificaSeEMaior = (num1,num2) =>{
//     if(num1 > num2){
//         return `O valor ${num1} é maior que ${num2}`
//     }else if(num1 < num2 ){
//         return `O valor ", ${num1} ," é menor que ", ${num2}`
//     }else{ return `Os dois são iguais...`}
// }

// console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= false
// // b-) 1=='1'= true
// // c-) 'a'==='b'= false
// // d-) 'b'>'a'= true
// // e-) 0!==null= false


// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuarios = []

    const nomeUsuario = prompt("Digite seu nome: ")
    const anoDeNascimento = prompt("Digite seu ano de nascimento: ")
    const senhaDoUsuario = prompt("Digite uma senha com mais de 6 digitos: ")
    const nacionalidade = prompt("Qual a sua nacionalidade ???")
    const idade = 2021 - anoDeNascimento
    if(idade >= 18 && senhaDoUsuario.length >= 6 && nacionalidade === "brasileira"){
        
        alert(`Parabens, o usuario ${nomeUsuario} foi adicionado com sucesso !!!`)
        usuarios.push({nomeUsuario,anoDeNascimento,senhaDoUsuario,nacionalidade})
        console.log("Parabens, seu cadastro foi realizado com sucesso !!!")
        console.log(usuarios)}
    
    else{
    alert (`Seu cadastro não foi aceito`)}
}
cadastro()

// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());