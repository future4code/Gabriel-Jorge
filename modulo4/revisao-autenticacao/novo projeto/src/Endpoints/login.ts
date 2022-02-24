import { Request, Response } from "express"
import { UserDataBase } from "../DataBase/UserDataBase"
import { User } from "../Entidades/User"
import { Autenticator } from "../Services/Autenticator"
import { HasManager } from "../Services/HashManager"
import { IdGenerator } from "../Services/idGenerator"


export const Login = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body

        if(!email && !password){res.status(300).send("Preencha os dados de NOME, EMAIL, PASSWORD, e ROLE...")}
        if(!email){res.status(300).send("Preencha o campo EMAIL...")}
        if(!password){res.status(300).send("Preencha o campo PASSWORD...")}

        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email);

        if(!user){res.status(409).send("Esse email NÂO está cadastrado....")}


        const hasManager = new HasManager()
        const passwordISCorrect = await hasManager.compare(password, user.getPassword())

        if(!passwordISCorrect){res.status(401).send("Email ou Senha Incorreta")}
       


        const autenticator = new Autenticator()
        const token = autenticator.generate({id: user.getId(), role: user.getRole()})

        res.status(200).send({message: "DEU BOM!!!!! Usuario Logado com sucesso !!!!", token})
    }catch(error){
        res.status(300).send(error.message )
    }
}

