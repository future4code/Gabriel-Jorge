import connection from "../connection";
import { Request, Response } from "express";


export const AddUser = async (req:Request, res:Response):Promise<void> =>{
        
    try{
        const id = Date.now()
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        await connection.raw(`INSERT INTO LBC_Users VALUES (
            '${id}',
            '${name}',
            '${email}',
            '${password}')`
        )

        res.status(200).send("Usuario Criado com sucesso...")


    }catch (error){

        res.status(500).send("Algo de errado não está certo !!!")

    }          
}