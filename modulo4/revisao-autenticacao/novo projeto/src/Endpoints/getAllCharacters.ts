import { Request, Response } from "express";
import { UserDataBase } from "../DataBase/UserDataBase";
import { Autenticator } from "../Services/Autenticator";

export const getAllCharacters = async (req: Request, res: Response) => {
    try{

        const token = req.headers.authorization

        if(!token){res.status(422).send("Esse endpoint Exige uma autorização a ser passada nos headers.")}

        const autenticator = new Autenticator()
        const tokenData = autenticator.getTokenData(token)

        if(tokenData.role !== 'ADMIN'){res.status(401).send("Usuario NÃO AUTORIZADO")}

        const userDataBase = new UserDataBase()
        const users = await userDataBase.getAllUsers()

        res.status(200).send(users)
        
    }catch(error){
        res.status(400).send(error.message)
    }


}