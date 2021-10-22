
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

// const cadastro = () => {
//     const usuarios = []

//     const nomeUsuario = prompt("Digite seu nome: ")
//     const anoDeNascimento = prompt("Digite seu ano de nascimento: ")
//     const senhaDoUsuario = prompt("Digite uma senha com mais de 6 digitos: ")
//     const nacionalidade = prompt("Qual a sua nacionalidade ???")
//     const idade = 2021 - anoDeNascimento
//     if(idade >= 18 && senhaDoUsuario.length >= 6 && nacionalidade === "brasileira"){
        
//         alert(`Parabens, o usuario ${nomeUsuario} foi adicionado com sucesso !!!`)
//         usuarios.push({nomeUsuario,anoDeNascimento,senhaDoUsuario,nacionalidade})
//         console.log("Parabens, seu cadastro foi realizado com sucesso !!!")
//         console.log(usuarios)}
    
//     else{
//     alert (`Seu cadastro não foi aceito`)}
// }
// cadastro()

// // Exercício 4-----------------------------------------------------------------------------------------------

// Escreva uma função que peça uma senha para o usuário e
//  verifique se está é a mesma senha cadastrada por ele. 
//   Dentro da função defina uma senha válida  Ex: const senha=”labenu”

// - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
// - Caso a senha seja inválida imprima no console (Senha Inválida)


// const login = () => {
//     const login = "labenu"
//     const nomeUser = "Gabriel J"
//     const nomeN = prompt("Qual seu nome : ")
//     const senhaN = prompt("Digite sua senha : ")
     
//     if(nomeUser === nomeN && login === senhaN ){
//         alert(`Usuario Logado`)
//         return `Usuario Logado`
//     }else{alert(`Senha Inválida`)
//         return`Senha Inválida`}

// }

// console.log(login())




// // Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    let tempo = 0
    let data = new Date()

    

    const nomeUsr = prompt ("Digite seu nome: ")
    const vacinaTomada = prompt ("Qual vacina você tomou ???").toLowerCase()
    
    
    if(vacinaTomada === "coronavac"){
        tempo = 28
    
    }else if(vacinaTomada === "astrazenica"){
        tempo = 90
    
    }else if(vacinaTomada === "pfizer"){
        tempo = 90
    }
    else {alert(`Vacina não Encontrada`)}
    
    
    const milissegundos1dia = 86400000

    const hoje = data.getTime()

    const dataAtualizada = new Date(hoje + (tempo * milissegundos1dia))
    
    
    const dataFormatada = dataAtualizada.toLocaleDateString("pt-br")
    
    
    
        if(vacinaTomada === "coronavac"){
            alert(`Olá ${nomeUsr}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`)
        
        }else if(vacinaTomada === "astrazenica"){
            alert(`Olá ${nomeUsr}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`)
    
        }else if(vacinaTomada === "pfizer"){
            alert(`Olá ${nomeUsr}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`)
    
        }else{alert(`USUARIO NÃO ENCONTRADO`)}
    
    

}
console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]



    const listaFiltrada = usuarios.filter((usuario) => {
        if (usuario.nome === nomeDoUsuario) {
             usuario.imunizacao = "Vacinada"
        }

        return usuario
    })

    return listaFiltrada
}

    console.log(segundaDose("Barbara"))
// // Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const listaFiltrada = usuarios.filter((usuario) => {
        if (usuario.imunizacao === "incompleta") {
            console.log(`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }

       
    })

    return listaFiltrada



}
console.log(avisoAosAtrasados());



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