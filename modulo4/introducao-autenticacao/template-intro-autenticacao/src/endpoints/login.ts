import { Request, Response } from "express";
import { generationToken } from "../services/autenticator";
import { findUser, getUserByEmail } from "../services/findUser";
import { idGenerator } from "../services/idGenerator";

export const login = async (req:Request, res:Response):Promise<any> => {
    
    try{
        const userData ={ email: req.body.email, password: req.body.password,}

        const user = await getUserByEmail(userData.email);

        console.log("userData:",userData.password)
        console.log("user:",user.password)

        if(userData.password !== user.password) {res.status(300).send("Senha invalida...")}
        // if(user.password !== userData.password) {throw new Error("Invalid password");}

        const token = generationToken(user.id)

        res.status(200).send({message: "Usuario Logado", token})
        
    }catch(error){
        res.status(300).send({message: "Algo de Errado não está certo...", error})
    }
} 