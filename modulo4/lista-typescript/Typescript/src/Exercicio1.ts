const FormaFrase = (string1:string,  string2:string ) => {


    const resposta = string2.split("/")
    
    console.log(`
        Olá, me chamo ${string1},
        nasci no dia ${resposta[0]}
        do mes ${resposta[1]}
        do ano de ${resposta[2]}.
    `)

}

const string1 = "Gabriel"
const string2 = "24/09/1993"

FormaFrase(string1, string2)
