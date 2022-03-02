import { Request, Response } from "express";
import connection from "../connection";
import { generationToken } from "../services/autenticator";
import { idGenerator } from "../services/idGenerator";


export const singUp =  async (req: Request, res: Response): Promise<void> => {   
   const id = idGenerator()
   const email = req.body.email
   const password = req.body.password   

   if(!email){res.status(300).send("Por favor preencha o campo EMAIL...")}
   if(email.indexOf("@") === -1){res.status(300).send("Adicione um email valido...")}
   if(!password){res.status(300).send("Por favor preencha o campo SENHA...")}
   if(password.length < 6){res.status(300).send("Adicione uma SENHA com no minimo 6 caracteres")}

    try{
       
       await connection.raw(`INSERT INTO User_21_02  (id, email, password)
       VALUES
       ('${id}',
       '${email}',
       '${password}');`)
 
       const token = generationToken(id)

       res.status(201).send({message: "Usuario adicionado com sucesso", token})
    }catch{
       res.status(300).send("Algo de errado não está certo")      
    }
 }
