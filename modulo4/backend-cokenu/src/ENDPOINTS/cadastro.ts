import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { HasManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/idGenerator";

export const cadastro = async ( req: Request, res: Response ) => {


    try{
        const { nome, email, senha } = req.body
        
        if(!nome && !senha && !email){res.status(300).send("Por Favor Preencha os dados...")}
        if(!nome){res.status(300).send("Por Favor Preencha seu NOME...")}
        if(!email){res.status(300).send("Por Favor Preencha seu EMAIL...")}
        if(!senha){res.status(300).send("Por Favor Preencha sua SENHA...")}
        
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail (email)
        
        if(user){res.status(409).send("Esse email já está cadastrado")} 

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HasManager()
        const hashSenha = hashManager.hash(senha)

    }catch(error:any){ 

        res.status(300).send({message: "Algo de Errado não está certo...", error}) 
    }
}