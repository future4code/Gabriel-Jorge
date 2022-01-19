if (process.argv[2] === "add"){
   const soma = Number(process.argv[3]) + Number(process.argv[4])
   console.log(soma)
}else if(process.argv[2] === "sub"){
    const subtracao = Number(process.argv[3]) - Number(process.argv[4])
    console.log(subtracao)
}else if(process.argv[2] === "mult"){
    const multiplicacao = Number(process.argv[3]) * Number(process.argv[4])
    console.log(multiplicacao)
}else if(process.argv[2] === "div"){
    const divisao = Number(process.argv[3]) / Number(process.argv[4])
    console.log(divisao)
}else{
    console.log(`Algo de Errado não está certo !!!`)
}



// const nome = process.argv[2]
const numero1 = process.argv[3]
const numero2 = process.argv[4]
