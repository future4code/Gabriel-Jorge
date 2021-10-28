let numeroRepeticao = 0
    
    for(let i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] === numeroEscolhido){
            numeroDeVezes++ 
        }
    }

        if(numeroDeVezes >= 1){
    return `O número ${numeroEscolhido} aparece ${numeroRepeticao}x`
    }else{return `Número não encontrado`}
    