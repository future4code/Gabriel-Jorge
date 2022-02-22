import { Request, Response } from "express";
import connection from "../connection";
import { idGenerator } from "../services/idGenerator";


export const createNewUser =  async (req: Request, res: Response): Promise<void> => {   
   const id = idGenerator()
   const email = req.body.email
   const password = req.body.password   

    try{
       
       await connection.raw(`INSERT INTO User_21_02  (id, email, password)
       VALUES
       (${id},
       ${email},
       ${password});`)
 
       res.status(201).send("Usuario adicionado com sucesso")
    }catch{
       res.status(300).send("Algo de errado não está certo")      
    }
 }
