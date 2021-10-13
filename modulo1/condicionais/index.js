

// Exercícios de interpretação de código ---------------------------------------------------------------------------

//  1)  a) O codigo serve para saber se o numero é impar ou par.
     //Ele calcula a sobra do valor se a sobra for igual a 0 o valor passa no teste(Par)
     //Se o valo sobra 1 quer dizer que ele é impar dae nçao passa no teste
        
        
//      b) Para os numeros PARES


//      c) Para os numeros IMPARES




//  2)  a)Serve para que o cliente saiba o valor das frutas. 

       
//      b) O preço da fruta maçã é R$ 2,25.


//      c) O valor sera 5, porque o valor pula para o resultado da linha de baixo 




//  3)  a) Ela pede para o usuario para digitar um numero.


//      b) No caso do numero 10 ele apresenta a mensagem de "Esse número passou no teste". 
//      no caso do menos 10 não apresenta mensagem nehuma 


//      c) Primeiro esso é que a segunda mensagem não está associada ao "else".
//      e o segundo erro é que o console log esta fora da função, para fazer essa função haveria a necessidade de retornar a resposta para fora.




// Exercícios de escrita de código --------------------------------------------------------------------------------



// 1- 
    function calcularidade(){


    const nomeDoUsuario = prompt("Qual seu nome ???")
    const idadeDoUsuario = Number(prompt ("Qual a sua idade"))

    if (idadeDoUsuario > 17){
    console.log("Olá ",nomeDoUsuario,". Você pode dirigir")}
    
    else {console.log("Olá ",nomeDoUsuario,". Você NÂO pode dirigir")}
    }

// 2- 
    function saberTurno(){

    const nomeDoUsuario = prompt("Qual seu nome ???")

    const saibaQualTurno = prompt("Em qual turno você estuda ??? M/T/N ").toUpperCase().trim()

    if (saibaQualTurno === "M"){
        console.log("Bom Dia ",nomeDoUsuario)}

        else if (saibaQualTurno === "T"){
            console.log("Boa Tarde ",nomeDoUsuario)}

            else if (saibaQualTurno === "N"){
                console.log("Boa Noite ",nomeDoUsuario)}

                    else{console.log("Turno não encontrado, tente outra vez")}
        
    }  

// 3-
    function saberTurno2(){

const turno = prompt ("Em que turno do dia você estuda ??? (M/T/N) ")

switch (turno){
    case "M": 
    console.log("Bom Dia")
    break

        case "T":
        console.log("Boa Tarde")
        break

            case "N":
            console.log("Boa Noite")
            break

default: console.log("Turno não encontrado, tente outra vez !!! ")

}






    }

// 4-
    function irAoCinema(){

        const filme = prompt("Qual o genero do filme que você deseja assistir ???").toLowerCase()
        const valorDoIngresso = Number (prompt ("Qual o valor do ingressso ???"))
        
        if (filme === "fantasia" && valorDoIngresso <= 15)
            {console.log("Bom filme")}

            else{console.log("Escolha outro filme !!!")}
    
    }   




