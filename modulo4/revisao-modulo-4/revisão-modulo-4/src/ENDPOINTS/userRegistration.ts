import connection from "../connection";
import { Request, Response } from "express";
// import { user } from "../TYPES/types";

    export const userRegistration = async (req:Request, res:Response):Promise<void> =>{
        
        try{

            const id = Date.now()
            const name = req.body.name
            const nickname = req.body.nickname
            const email = req.body.email
    
            await connection.raw(`INSERT INTO TDL_users VALUES (
                '${id}',
                '${name}',
                '${nickname}',
                '${email}')`
            )

            res.status(200).send("Usuario Criado com sucesso...")


        }catch (error){

            res.status(500).send("Algo de errado não está certo !!!")

        }          
    }